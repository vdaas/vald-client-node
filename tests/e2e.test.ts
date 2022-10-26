import grpc = require('@grpc/grpc-js');
import {
    insert_grpc,
    search_grpc,
    update_grpc,
    upsert_grpc,
    remove_grpc,
    object_grpc,
} from '../src/vald/v1/vald';
import { agent_grpc } from '../src/vald/v1/agent/core';
import { payload } from '../src/vald/v1/payload';
import { InsertClient } from '../src/vald/v1/vald/insert_grpc_pb';
import { RemoveClient } from '../src/vald/v1/vald/remove_grpc_pb';
import { SearchClient } from '../src/vald/v1/vald/search_grpc_pb';
import { UpdateClient } from '../src/vald/v1/vald/update_grpc_pb';
import { UpsertClient } from '../src/vald/v1/vald/upsert_grpc_pb';
import { ObjectClient } from '../src/vald/v1/vald/object_grpc_pb';
import { AgentClient } from '../src/vald/v1/agent/core/agent_grpc_pb';
import data = require('./wordvecs1000.json');

const address = 'localhost:8081';
const connectDeadlineMs = 10000;

jest.setTimeout(120000);

describe('Tests for node client', () => {
    describe('Tests for insert operations', () => {
        let client: InsertClient;

        beforeAll(done => {
            client = new insert_grpc.InsertClient(
                address,
                grpc.credentials.createInsecure(),
            );
            client.waitForReady(Date.now() + connectDeadlineMs, (e) => {
                if (e) {
                    done(e);
                } else {
                    done();
                }
            });
        });

        afterAll(() => {
            client.close();
        });

        test('Insert', done => {
            const vec = new payload.Object.Vector();
            vec.setId(data[0].id);
            vec.setVectorList(data[0].vector);

            const cfg = new payload.Insert.Config();
            cfg.setSkipStrictExistCheck(true);

            const req = new payload.Insert.Request();
            req.setVector(vec);
            req.setConfig(cfg);

            client.insert(req, (err, resp) => {
                try {
                    expect(err).toBeFalsy();
                    expect(resp).toBeInstanceOf(payload.Object.Location);
                    done();
                } catch (e) {
                    done(e);
                }
            });
        });

        test('MultiInsert', done => {
            const requests = [];
            const cfg = new payload.Insert.Config();
            cfg.setSkipStrictExistCheck(true);

            for (let i = 1; i < 11; i++) {
                const vec = new payload.Object.Vector();
                vec.setId(data[i].id);
                vec.setVectorList(data[i].vector);

                const r = new payload.Insert.Request();
                r.setVector(vec);
                r.setConfig(cfg);

                requests.push(r);
            }

            const req = new payload.Insert.MultiRequest();
            req.setRequestsList(requests);

            client.multiInsert(req, (err, resp) => {
                try {
                    expect(err).toBeFalsy();
                    expect(resp).toBeInstanceOf(payload.Object.Locations);
                    done();
                } catch (e) {
                    done(e);
                }
            });
        });

        test('StreamInsert', done => {
            const cfg = new payload.Insert.Config();
            cfg.setSkipStrictExistCheck(true);

            const channel = client.streamInsert();
            channel.on('data', (message) => {
                try {
                    expect(message).toBeInstanceOf(payload.Object.StreamLocation);
                    if (message.hasStatus()) {
                        const status = message.getStatus();
                        if (status) {
                            expect(status.getCode()).toEqual(0);
                        }
                    }
                } catch (e) {
                    done(e);
                }
            });
            channel.on('end', () => {
                done();
            });
            channel.on('error', (e) => {
                done(e);
            })

            for (let i = 11; i < 101; i++) {
                const vec = new payload.Object.Vector();
                vec.setId(data[i].id);
                vec.setVectorList(data[i].vector);

                const r = new payload.Insert.Request();
                r.setVector(vec);
                r.setConfig(cfg);

                channel.write(r);
            }

            channel.end();
        });
    });

    describe('Tests for creating indices operations', () => {
        let client: AgentClient;

        beforeAll(done => {
            client = new agent_grpc.AgentClient(
                address,
                grpc.credentials.createInsecure(),
            );
            client.waitForReady(Date.now() + connectDeadlineMs, (e) => {
                if (e) {
                    done(e);
                } else {
                    done();
                }
            });
        });

        afterAll(() => {
            client.close();
        });

        test('CreateIndex', done => {
            const req = new payload.Control.CreateIndexRequest();
            req.setPoolSize(10000);

            client.createIndex(req, (err, resp) => {
                try {
                    expect(err).toBeFalsy();
                    expect(resp).toBeInstanceOf(payload.Empty);
                    done();
                } catch (e) {
                    done(e);
                }
            });
        });

        test('SaveIndex', done => {
            const req = new payload.Empty();

            client.saveIndex(req, (err, resp) => {
                try {
                    expect(err).toBeFalsy();
                    expect(resp).toBeInstanceOf(payload.Empty);
                    done();
                } catch (e) {
                    done(e);
                }
            });
        });

        test('IndexInfo', done => {
            const req = new payload.Empty();

            client.indexInfo(req, (err, resp) => {
                try {
                    expect(err).toBeFalsy();
                    expect(resp).toBeInstanceOf(payload.Info.Index.Count);
                    expect(resp.getStored()).toEqual(101);
                    expect(resp.getUncommitted()).toEqual(0);
                    done();
                } catch (e) {
                    done(e);
                }
            });
        });
    });

    describe('Test for object operations', () => {
        let client: ObjectClient;

        beforeAll(done => {
            client = new object_grpc.ObjectClient(
                address,
                grpc.credentials.createInsecure(),
            );
            client.waitForReady(Date.now() + connectDeadlineMs, (e) => {
                if (e) {
                    done(e);
                } else {
                    done();
                }
            });
        });

        afterAll(() => {
            client.close();
        });

        test('Exists', done => {
            const req = new payload.Object.ID();
            req.setId(data[0].id);

            client.exists(req, (err, resp) => {
                try {
                    expect(err).toBeFalsy();
                    expect(resp).toBeInstanceOf(payload.Object.ID);
                    done();
                } catch (e) {
                    done(e);
                }
            })
        });

        test('GetObject', done => {
            const id = new payload.Object.ID();
            id.setId(data[0].id);

            const req = new payload.Object.VectorRequest();
            req.setId(id);

            client.getObject(req, (err, resp) => {
                try {
                    expect(err).toBeFalsy();
                    expect(resp).toBeInstanceOf(payload.Object.Vector);
                    done();
                } catch (e) {
                    done(e);
                }
            });
        });

        test('StreamGetObject', done => {
            const channel = client.streamGetObject();
            channel.on('data', (message) => {
                try {
                    expect(message).toBeInstanceOf(payload.Object.StreamVector);
                    if (message.hasStatus()) {
                        const status = message.getStatus();
                        if (status) {
                            expect(status.getCode()).toEqual(0);
                        }
                    }
                } catch (e) {
                    done(e);
                }
            });
            channel.on('end', () => {
                done();
            });
            channel.on('error', (e) => {
                done(e);
            });

            for (let i = 0; i < 11; i++) {
                const id = new payload.Object.ID();
                id.setId(data[i].id);

                const req = new payload.Object.VectorRequest();
                req.setId(id);

                channel.write(req);
            }

            channel.end();
        });
    })

    describe('Tests for search operations', () => {
        let client: SearchClient;

        beforeAll(done => {
            client = new search_grpc.SearchClient(
                address,
                grpc.credentials.createInsecure(),
            );
            client.waitForReady(Date.now() + connectDeadlineMs, (e) => {
                if (e) {
                    done(e);
                } else {
                    done();
                }
            });
        });

        afterAll(() => {
            client.close();
        });

        test('Search', done => {
            const cfg = new payload.Search.Config();
            cfg.setNum(3);
            cfg.setRadius(-1.0);
            cfg.setEpsilon(0.1);
            cfg.setTimeout(3000000000);

            const req = new payload.Search.Request();
            req.setVectorList(data[0].vector);
            req.setConfig(cfg);

            client.search(req, (err, resp) => {
                try {
                    expect(err).toBeFalsy();
                    expect(resp).toBeInstanceOf(payload.Search.Response);
                    expect(resp.getResultsList().length).toEqual(3);
                    done();
                } catch (e) {
                    done(e);
                }
            });
        });

        test('MultiSearch', done => {
            const requests = [];
            const cfg = new payload.Search.Config();
            cfg.setNum(3);
            cfg.setRadius(-1.0);
            cfg.setEpsilon(0.1);
            cfg.setTimeout(3000000000);

            for (let i = 1; i < 11; i++) {
                const r = new payload.Search.Request();
                r.setVectorList(data[i].vector);
                r.setConfig(cfg);

                requests.push(r);
            }

            const req = new payload.Search.MultiRequest();
            req.setRequestsList(requests);

            client.multiSearch(req, (err, resp) => {
                try {
                    expect(err).toBeFalsy();
                    expect(resp).toBeInstanceOf(payload.Search.Responses);
                    for (var response of resp.getResponsesList()) {
                        expect(response).toBeInstanceOf(payload.Search.Response);
                        expect(response.getResultsList().length).toEqual(3);
                    }
                    done();
                } catch (e) {
                    done(e);
                }
            });
        });

        test('StreamSearch', done => {
            const cfg = new payload.Search.Config();
            cfg.setNum(3);
            cfg.setRadius(-1.0);
            cfg.setEpsilon(0.1);
            cfg.setTimeout(3000000000);

            const channel = client.streamSearch();
            channel.on('data', (message) => {
                try {
                    expect(message).toBeInstanceOf(payload.Search.StreamResponse);
                    if (message.hasStatus()) {
                        const status = message.getStatus();
                        if (status) {
                            expect(status.getCode()).toEqual(0);
                        }
                    }
                } catch (e) {
                    done(e);
                }
            });
            channel.on('end', () => {
                done();
            });
            channel.on('error', (e) => {
                done(e);
            });

            for (let i = 11; i < 21; i++) {
                const r = new payload.Search.Request();
                r.setVectorList(data[i].vector);
                r.setConfig(cfg);

                channel.write(r);
            }

            channel.end();
        });

        test('SearchByID', done => {
            const cfg = new payload.Search.Config();
            cfg.setNum(3);
            cfg.setRadius(-1.0);
            cfg.setEpsilon(0.1);
            cfg.setTimeout(3000000000);

            const req = new payload.Search.IDRequest();
            req.setId(data[0].id);
            req.setConfig(cfg);

            client.searchByID(req, (err, resp) => {
                try {
                    expect(err).toBeFalsy();
                    expect(resp).toBeInstanceOf(payload.Search.Response);
                    expect(resp.getResultsList().length).toEqual(3);
                    done();
                } catch (e) {
                    done(e);
                }
            });
        });

        test('MultiSearchByID', done => {
            const requests = [];
            const cfg = new payload.Search.Config();
            cfg.setNum(3);
            cfg.setRadius(-1.0);
            cfg.setEpsilon(0.1);
            cfg.setTimeout(3000000000);

            for (let i = 1; i < 11; i++) {
                const r = new payload.Search.IDRequest();
                r.setId(data[i].id);
                r.setConfig(cfg);

                requests.push(r);
            }

            const req = new payload.Search.MultiIDRequest();
            req.setRequestsList(requests);

            client.multiSearchByID(req, (err, resp) => {
                try {
                    expect(err).toBeFalsy();
                    expect(resp).toBeInstanceOf(payload.Search.Responses);
                    for (var response of resp.getResponsesList()) {
                        expect(response).toBeInstanceOf(payload.Search.Response);
                        expect(response.getResultsList().length).toEqual(3);
                    }
                    done();
                } catch (e) {
                    done(e);
                }
            });
        });

        test('StreamSearchByID', done => {
            const cfg = new payload.Search.Config();
            cfg.setNum(3);
            cfg.setRadius(-1.0);
            cfg.setEpsilon(0.1);
            cfg.setTimeout(3000000000);

            const channel = client.streamSearchByID();
            channel.on('data', (message) => {
                try {
                    expect(message).toBeInstanceOf(payload.Search.StreamResponse);
                    if (message.hasStatus()) {
                        const status = message.getStatus();
                        if (status) {
                            expect(status.getCode()).toEqual(0);
                        }
                    }
                } catch (e) {
                    done(e);
                }
            });
            channel.on('end', () => {
                done();
            });
            channel.on('error', (e) => {
                done(e);
            });

            for (let i = 11; i < 21; i++) {
                const r = new payload.Search.IDRequest();
                r.setId(data[i].id);
                r.setConfig(cfg);

                channel.write(r);
            }

            channel.end();

        });
    });

    describe('Tests for update operations', () => {
        let client: UpdateClient;

        beforeAll(done => {
            client = new update_grpc.UpdateClient(
                address,
                grpc.credentials.createInsecure(),
            );
            client.waitForReady(Date.now() + connectDeadlineMs, (e) => {
                if (e) {
                    done(e);
                } else {
                    done();
                    }
            });
        });

        afterAll(() => {
            client.close();
        });

        test('Update', done => {
            const vec = new payload.Object.Vector();
            vec.setId(data[0].id);
            vec.setVectorList(data[1].vector);

            const cfg = new payload.Update.Config();
            cfg.setSkipStrictExistCheck(true);

            const req = new payload.Update.Request();
            req.setVector(vec);
            req.setConfig(cfg);

            client.update(req, (err, resp) => {
                try {
                    expect(err).toBeFalsy();
                    expect(resp).toBeInstanceOf(payload.Object.Location);
                    done();
                } catch (e) {
                    done(e);
                }
            });
        });

        test('MultiUpdate', done => {
            const requests = [];
            const cfg = new payload.Update.Config();
            cfg.setSkipStrictExistCheck(true);

            for (let i = 1; i < 11; i++) {
                const vec = new payload.Object.Vector();
                vec.setId(data[i].id);
                vec.setVectorList(data[i+1].vector);

                const r = new payload.Update.Request();
                r.setVector(vec);
                r.setConfig(cfg);

                requests.push(r);
            }

            const req = new payload.Update.MultiRequest();
            req.setRequestsList(requests);

            client.multiUpdate(req, (err, resp) => {
                try {
                    expect(err).toBeFalsy();
                    expect(resp).toBeInstanceOf(payload.Object.Locations);
                    done();
                } catch (e) {
                    done(e);
                }
            });
        });

        test('StreamUpdate', done => {
            const cfg = new payload.Update.Config();
            cfg.setSkipStrictExistCheck(true);

            const channel = client.streamUpdate();
            channel.on('data', (message) => {
                try {
                    expect(message).toBeInstanceOf(payload.Object.StreamLocation);
                    if (message.hasStatus()) {
                        const status = message.getStatus();
                        if (status) {
                            expect(status.getCode()).toEqual(0);
                        }
                    }
                } catch (e) {
                    done(e);
                }
            });
            channel.on('end', () => {
                done();
            });
            channel.on('error', (e) => {
                done(e);
            })

            for (let i = 11; i < 21; i++) {
                const vec = new payload.Object.Vector();
                vec.setId(data[i].id);
                vec.setVectorList(data[i+1].vector);

                const r = new payload.Update.Request();
                r.setVector(vec);
                r.setConfig(cfg);

                channel.write(r);
            }

            channel.end();
        });
    });

    describe('Tests for upsert operations', () => {
        let client: UpsertClient;

        beforeAll(done => {
            client = new upsert_grpc.UpsertClient(
                address,
                grpc.credentials.createInsecure(),
            );
            client.waitForReady(Date.now() + connectDeadlineMs, (e) => {
                if (e) {
                    done(e);
                } else {
                    done();
                }
            });
        });

        afterAll(() => {
            client.close();
        });

        test('Upsert', done => {
            const vec = new payload.Object.Vector();
            vec.setId(data[0].id);
            vec.setVectorList(data[0].vector);

            const cfg = new payload.Upsert.Config();
            cfg.setSkipStrictExistCheck(true);

            const req = new payload.Upsert.Request();
            req.setVector(vec);
            req.setConfig(cfg);

            client.upsert(req, (err, resp) => {
                try {
                    expect(err).toBeFalsy();
                    expect(resp).toBeInstanceOf(payload.Object.Location);
                    done();
                } catch (e) {
                    done(e);
                }
            });
        });

        test('MultiUpsert', done => {
            const requests = [];
            const cfg = new payload.Upsert.Config();
            cfg.setSkipStrictExistCheck(true);

            for (let i = 1; i < 11; i++) {
                const vec = new payload.Object.Vector();
                vec.setId(data[i].id);
                vec.setVectorList(data[i].vector);

                const r = new payload.Upsert.Request();
                r.setVector(vec);
                r.setConfig(cfg);

                requests.push(r);
            }

            const req = new payload.Upsert.MultiRequest();
            req.setRequestsList(requests);

            client.multiUpsert(req, (err, resp) => {
                try {
                    expect(err).toBeFalsy();
                    expect(resp).toBeInstanceOf(payload.Object.Locations);
                    done();
                } catch (e) {
                    done(e);
                }
            });
        });

        test('StreamUpsert', done => {
            const cfg = new payload.Upsert.Config();
            cfg.setSkipStrictExistCheck(true);

            const channel = client.streamUpsert();
            channel.on('data', (message) => {
                try {
                    expect(message).toBeInstanceOf(payload.Object.StreamLocation);
                    if (message.hasStatus()) {
                        const status = message.getStatus();
                        if (status) {
                            expect(status.getCode()).toEqual(0);
                        }
                    }
                } catch (e) {
                    done(e);
                }
            });
            channel.on('end', () => {
                done();
            });
            channel.on('error', (e) => {
                done(e);
            })

            for (let i = 11; i < 21; i++) {
                const vec = new payload.Object.Vector();
                vec.setId(data[i].id);
                vec.setVectorList(data[i].vector);

                const r = new payload.Upsert.Request();
                r.setVector(vec);
                r.setConfig(cfg);

                channel.write(r);
            }

            channel.end();
        });
    });

    describe('Tests for remove operations', () => {
        let client: RemoveClient;

        beforeAll(done => {
            client = new remove_grpc.RemoveClient(
                address,
                grpc.credentials.createInsecure(),
            );
            client.waitForReady(Date.now() + connectDeadlineMs, (e) => {
                if (e) {
                    done(e);
                } else {
                    done();
                }
            });
        });

        afterAll(() => {
            client.close();
        });

        test('Remove', done => {
            const id = new payload.Object.ID();
            id.setId(data[0].id);

            const cfg = new payload.Remove.Config();
            cfg.setSkipStrictExistCheck(true);

            const req = new payload.Remove.Request();
            req.setId(id);
            req.setConfig(cfg);

            client.remove(req, (err, resp) => {
                try {
                    expect(err).toBeFalsy();
                    expect(resp).toBeInstanceOf(payload.Object.Location);
                    done();
                } catch (e) {
                    done(e);
                }
            });
        });

        test('MultiRemove', done => {
            const requests = [];
            const cfg = new payload.Insert.Config();
            cfg.setSkipStrictExistCheck(true);

            for (let i = 1; i < 11; i++) {
                const id = new payload.Object.ID();
                id.setId(data[i].id);

                const r = new payload.Remove.Request();
                r.setId(id);
                r.setConfig(cfg);

                requests.push(r);
            }

            const req = new payload.Remove.MultiRequest();
            req.setRequestsList(requests);

            client.multiRemove(req, (err, resp) => {
                try {
                    expect(err).toBeFalsy();
                    expect(resp).toBeInstanceOf(payload.Object.Locations);
                    done();
                } catch (e) {
                    done(e);
                }
            });
        });

        test('StreamRemove', done => {
            const cfg = new payload.Remove.Config();
            cfg.setSkipStrictExistCheck(true);

            const channel = client.streamRemove();
            channel.on('data', (message) => {
                try {
                    expect(message).toBeInstanceOf(payload.Object.StreamLocation);
                    if (message.hasStatus()) {
                        const status = message.getStatus();
                        if (status) {
                            expect(status.getCode()).toEqual(0);
                        }
                    }
                } catch (e) {
                    done(e);
                }
            });
            channel.on('end', () => {
                done();
            });
            channel.on('error', (e) => {
                done(e);
            })

            for (let i = 11; i < 21; i++) {
                const id = new payload.Object.ID();
                id.setId(data[i].id);

                const r = new payload.Remove.Request();
                r.setId(id);
                r.setConfig(cfg);

                channel.write(r);
            }

            channel.end();
        });
    });
});
