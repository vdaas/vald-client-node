import grpc = require("@grpc/grpc-js");
import {
  insert_grpc,
  search_grpc,
  update_grpc,
  upsert_grpc,
  remove_grpc,
  object_grpc,
} from "../src/vald/v1/vald";
import { agent_grpc } from "../src/vald/v1/agent/core";
import { payload } from "../src/vald/v1/payload";
import { InsertClient } from "../src/vald/v1/vald/insert_pb.grpc-client";
import { RemoveClient } from "../src/vald/v1/vald/remove_pb.grpc-client";
import { SearchClient } from "../src/vald/v1/vald/search_pb.grpc-client";
import { UpdateClient } from "../src/vald/v1/vald/update_pb.grpc-client";
import { UpsertClient } from "../src/vald/v1/vald/upsert_pb.grpc-client";
import { ObjectClient } from "../src/vald/v1/vald/object_pb.grpc-client";
import { AgentClient } from "../src/vald/v1/agent/core/agent_pb.grpc-client";
import data = require("./wordvecs1000.json");

const address = "localhost:8081";
const connectDeadlineMs = 10000;

jest.setTimeout(120000);

describe("Tests for node client", () => {
  describe("Tests for insert operations", () => {
    let client: InsertClient;

    beforeAll((done) => {
      client = new insert_grpc.InsertClient(
        address,
        grpc.credentials?.createInsecure(),
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

    console.log(data);

    test("Insert", (done) => {
      const vec = payload.Object_Vector.create({
          id: data[0].id,
          vector: data[0].vector,
      });

      const cfg = payload.Insert_Config?.create({
        skip_strict_exist_check: true,
      });

      const req = payload.Insert_Request?.create({
        vector: vec,
        config: cfg,
      });

      client.insert(req, (err, resp) => {
        try {
          expect(err).toBeFalsy();
          expect(payload.Object_Location.is(resp)).toBe(true);

          done();
        } catch (e) {
          done(e);
        }
      });
    });

    test("MultiInsert", (done) => {
      const requests: Array<any> = [];
      const cfg = payload.Insert_Config?.create({
        skip_strict_exist_check: true,
      });

      for (let i = 1; i < 11; i++) {
        const vec = payload.Object_Vector?.create({
          id: data[i].id,
          vector: data[i].vector,
        });

        const r = payload.Insert_Request?.create({
          vector: vec,
          config: cfg,
        });

        requests.push(r);
      }

      const req = payload.Insert_MultiRequest?.create({
        requests: requests,
      });

      client.multiInsert(req, (err, resp) => {
        try {
          expect(err).toBeFalsy();
          expect(payload.Object_Locations.is(resp)).toBe(true);
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    test("StreamInsert", (done) => {
      const cfg = payload.Insert_Config?.create({
        skip_strict_exist_check: true,
      });

      const channel = client.streamInsert();
      channel.on("data", (message) => {
        try {
          expect(payload.Object_StreamLocation.is(message)).toBe(true);
          const cloneRes = payload.Object_StreamLocation.clone(message);
          if (cloneRes.payload.oneofKind === "status") {
            expect(cloneRes.payload.status.code).toEqual(0);
          }
        } catch (e) {
          done(e);
        }
      });
      channel.on("end", () => {
        done();
      });
      channel.on("error", (e) => {
        done(e);
      });

      for (let i = 11; i < 101; i++) {
        const vec = payload.Object_Vector?.create({
          id: data[i].id,
          vector: data[i].vector,
        });

        const r = payload.Insert_Request?.create({
          vector: vec,
          config: cfg,
        });
        channel.write(r);
      }

      channel.end();
    });
  });

  describe("Tests for creating indices operations", () => {
    let client: AgentClient;

    beforeAll((done) => {
      client = new agent_grpc.AgentClient(
        address,
        grpc.credentials?.createInsecure(),
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

    test("CreateIndex", (done) => {
      const req = payload.Control_CreateIndexRequest?.create({
        pool_size: 10000,
      });

      client?.createIndex(req, (err, resp) => {
        try {
          expect(err).toBeFalsy();
          expect(payload.Empty.is(resp)).toBe(true)
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    test("SaveIndex", (done) => {
      const req = payload.Empty?.create();

      client.saveIndex(req, (err, resp) => {
        try {
          expect(err).toBeFalsy();
          expect(payload.Empty.is(resp)).toBe(true);
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    test("IndexInfo", (done) => {
      const req = payload.Empty?.create();

      client.indexInfo(req, (err, resp) => {
        try {
          expect(err).toBeFalsy();
          expect(payload.Info_Index_Count.is(resp)).toBe(true);
          expect(resp?.stored).toEqual(101);
          expect(resp?.uncommitted).toEqual(0);
          done();
        } catch (e) {
          done(e);
        }
      });
    });
  });

  describe("Test for object operations", () => {
    let client: ObjectClient;

    beforeAll((done) => {
      client = new object_grpc.ObjectClient(
        address,
        grpc.credentials?.createInsecure(),
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

    test("Exists", (done) => {
      const req = payload.Object_ID?.create({
        id: data[0].id,
      });

      client.exists(req, (err, resp) => {
        try {
          expect(err).toBeFalsy();
          expect(payload.Object_ID.is(resp)).toBe(true);
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    test("GetObject", (done) => {
      const id = payload.Object_ID?.create({
        id: data[0].id,
      });

      const req = payload.Object_VectorRequest?.create({
        id: id,
      });

      client.getObject(req, (err, resp) => {
        try {
          expect(err).toBeFalsy();
          expect(payload.Object_Vector.is(resp)).toBe(true);
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    test("StreamGetObject", (done) => {
      const channel = client.streamGetObject();
      channel.on("data", (message) => {
        try {
          expect(payload.Object_StreamVector.is(message)).toBe(true);
          const cloneRes = payload.Object_StreamVector.clone(message);
          if (cloneRes.payload.oneofKind === "status") {
            expect(cloneRes.payload.status.code).toEqual(0);
          }
        } catch (e) {
          done(e);
        }
      });
      channel.on("end", () => {
        done();
      });
      channel.on("error", (e) => {
        done(e);
      });

      for (let i = 0; i < 11; i++) {
        const id = payload.Object_ID?.create({
          id: data[i].id,
        });

        const req = payload.Object_VectorRequest?.create({
          id: id,
        });

        channel.write(req);
      }

      channel.end();
    });
  });

  describe("Tests for search operations", () => {
    let client: SearchClient;

    beforeAll((done) => {
      client = new search_grpc.SearchClient(
        address,
        grpc.credentials?.createInsecure(),
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

    test("Search", (done) => {
      const cfg = payload.Search_Config?.create({
        num: 3,
        radius: -1.0,
        epsilon: 0.1,
        timeout: BigInt(3000000000),
      });

      const req = payload.Search_Request?.create({
        vector: data[0].vector,
        config: cfg,
      });

      client.search(req, (err, resp) => {
        try {
          expect(err).toBeFalsy();
          expect(payload.Search_Response.is(resp)).toBe(true);
          expect(resp?.results.length).toEqual(3);
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    test("MultiSearch", (done) => {
      const requests: Array<any> = [];
      const cfg = payload.Search_Config?.create({
        num: 3,
        radius: -1.0,
        epsilon: 0.1,
        timeout: BigInt(3000000000),
      });

      for (let i = 1; i < 11; i++) {
        const r = payload.Search_Request?.create({
          vector: data[i].vector,
          config: cfg,
        });
        requests.push(r);
      }

      const req = payload.Search_MultiRequest?.create({
        requests: requests,
      });

      client.multiSearch(req, (err, resp) => {
        try {
          expect(err).toBeFalsy();
          expect(payload.Search_Responses.is(resp)).toBe(true);
          for (const response of resp?.responses ?? []) {
            expect(payload.Search_Response.is(response)).toBe(true);
            expect(response.results.length).toEqual(3);
          }
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    test("StreamSearch", (done) => {
      const cfg = payload.Search_Config?.create({
        num: 3,
        radius: -1.0,
        epsilon: 0.1,
        timeout: BigInt(3000000000),
      });

      const channel = client.streamSearch();
      channel.on("data", (message) => {
        try {
          expect(payload.Search_StreamResponse.is(message)).toBe(true);
          const cloneRes = payload.Search_StreamResponse.clone(message);
          if (cloneRes.payload.oneofKind === "status") {
            expect(cloneRes.payload.status.code).toEqual(0);
          }
        } catch (e) {
          done(e);
        }
      });
      channel.on("end", () => {
        done();
      });
      channel.on("error", (e) => {
        done(e);
      });

      for (let i = 11; i < 21; i++) {
        const r = payload.Search_Request?.create({
          vector: data[i].vector,
          config: cfg,
        });

        channel.write(r);
      }

      channel.end();
    });

    test("SearchByID", (done) => {
      const cfg = payload.Search_Config?.create({
        num: 3,
        radius: -1.0,
        epsilon: 0.1,
        timeout: BigInt(3000000000),
      });

      const req = payload.Search_IDRequest?.create({
        id: data[0].id,
        config: cfg,
      });

      client.searchByID(req, (err, resp) => {
        try {
          expect(err).toBeFalsy();
          expect(payload.Search_Response.is(resp)).toBe(true);
          expect(resp?.results.length).toEqual(3);
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    test("MultiSearchByID", (done) => {
      const requests: Array<any> = [];
      const cfg = payload.Search_Config?.create({
        num: 3,
        radius: -1.0,
        epsilon: 0.1,
        timeout: BigInt(3000000000),
      });

      for (let i = 1; i < 11; i++) {
        const r = payload.Search_IDRequest?.create({
          id: data[i].id,
          config: cfg,
        });

        requests.push(r);
      }

      const req = payload.Search_MultiIDRequest?.create({
        requests: requests,
      });

      client.multiSearchByID(req, (err, resp) => {
        try {
          expect(err).toBeFalsy();
          expect(payload.Search_Responses.is(resp)).toBe(true);
          for (const response of resp?.responses ?? []) {
            expect(payload.Search_Response.is(response)).toBe(true);
            expect(response.results.length).toEqual(3);
          }
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    test("StreamSearchByID", (done) => {
      const cfg = payload.Search_Config?.create({
        num: 3,
        radius: -1.0,
        epsilon: 0.1,
        timeout: BigInt(3000000000),
      });

      const channel = client.streamSearchByID();
      channel.on("data", (message) => {
        try {
          expect(payload.Search_StreamResponse.is(message)).toBe(true);
          const cloneRes = payload.Search_StreamResponse.clone(message);
          if (cloneRes.payload.oneofKind === "status") {
            expect(cloneRes.payload.status.code).toEqual(0);
          }
        } catch (e) {
          done(e);
        }
      });
      channel.on("end", () => {
        done();
      });
      channel.on("error", (e) => {
        done(e);
      });

      for (let i = 11; i < 21; i++) {
        const r = payload.Search_IDRequest?.create({
          id: data[i].id,
          config: cfg,
        });
        channel.write(r);
      }

      channel.end();
    });
  });

  describe("Tests for update operations", () => {
    let client: UpdateClient;

    beforeAll((done) => {
      client = new update_grpc.UpdateClient(
        address,
        grpc.credentials?.createInsecure(),
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

    test("Update", (done) => {
      const vec = payload.Object_Vector?.create({
        id: data[0].id,
        vector: data[1].vector,
      });
      const cfg = payload.Update_Config?.create({
        skip_strict_exist_check: true,
      });

      const req = payload.Update_Request?.create({
        vector: vec,
        config: cfg,
      });

      client.update(req, (err, resp) => {
        try {
          expect(err).toBeFalsy();
          expect(payload.Object_Location.is(resp)).toBe(true);
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    test("MultiUpdate", (done) => {
      const requests: Array<any> = [];
      const cfg = payload.Update_Config?.create({
        skip_strict_exist_check: true,
      });

      for (let i = 1; i < 11; i++) {
        const vec = payload.Object_Vector?.create({
          id: data[i].id,
          vector: data[i + 1].vector,
        });

        const r = payload.Update_Request?.create({
          vector: vec,
          config: cfg,
        });

        requests.push(r);
      }

      const req = payload.Update_MultiRequest?.create({
        requests: requests,
      });

      client.multiUpdate(req, (err, resp) => {
        try {
          expect(err).toBeFalsy();
          expect(payload.Object_Locations.is(resp)).toBe(true);
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    test("StreamUpdate", (done) => {
      const cfg = payload.Update_Config?.create({
        skip_strict_exist_check: true,
      });

      const channel = client.streamUpdate();
      channel.on("data", (message) => {
        try {
          expect(payload.Object_StreamLocation.is(message)).toBe(true);
          const cloneRes = payload.Object_StreamLocation.clone(message);
          if (cloneRes.payload.oneofKind === "status") {
            expect(cloneRes.payload.status.code).toEqual(0);
          }
        } catch (e) {
          done(e);
        }
      });
      channel.on("end", () => {
        done();
      });
      channel.on("error", (e) => {
        done(e);
      });

      for (let i = 11; i < 21; i++) {
        const vec = payload.Object_Vector?.create({
          id: data[i].id,
          vector: data[i + 1].vector,
        });

        const r = payload.Update_Request?.create({
          vector: vec,
          config: cfg,
        });
        channel.write(r);
      }

      channel.end();
    });
  });

  describe("Tests for upsert operations", () => {
    let client: UpsertClient;

    beforeAll((done) => {
      client = new upsert_grpc.UpsertClient(
        address,
        grpc.credentials?.createInsecure(),
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

    test("Upsert", (done) => {
      const vec = payload.Object_Vector?.create({
        id: data[0].id,
        vector: data[0].vector,
      });

      const cfg = payload.Upsert_Config?.create({
        skip_strict_exist_check: true,
      });

      const req = payload.Upsert_Request?.create({
        vector: vec,
        config: cfg
      });

      client.upsert(req, (err, resp) => {
        try {
          expect(err).toBeFalsy();
          expect(payload.Object_Location.is(resp)).toBe(true);
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    test("MultiUpsert", (done) => {
      const requests: Array<any> = [];
      const cfg = payload.Upsert_Config?.create({
        skip_strict_exist_check: true,
      });

      for (let i = 1; i < 11; i++) {
        const vec = payload.Object_Vector?.create({
          id: data[i].id,
          vector: data[i].vector,
        });

        const r = payload.Upsert_Request?.create({
          vector: vec,
          config: cfg,
        });

        requests.push(r);
      }

      const req = payload.Upsert_MultiRequest?.create({
        requests: requests,
      });

      client.multiUpsert(req, (err, resp) => {
        try {
          expect(err).toBeFalsy();
          expect(payload.Object_Locations.is(resp)).toBe(true);
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    test("StreamUpsert", (done) => {
      const cfg = payload.Upsert_Config?.create({
        skip_strict_exist_check: true,
      });

      const channel = client.streamUpsert();
      channel.on("data", (message) => {
        try {
          expect(payload.Object_StreamLocation.is(message)).toBe(true);
          const cloneRes = payload.Object_StreamLocation.clone(message);
          if (cloneRes.payload.oneofKind === "status") {
            expect(cloneRes.payload.status.code).toEqual(0);
          }
        } catch (e) {
          done(e);
        }
      });
      channel.on("end", () => {
        done();
      });
      channel.on("error", (e) => {
        done(e);
      });

      for (let i = 11; i < 21; i++) {
        const vec = payload.Object_Vector?.create({
          id: data[i].id,
          vector: data[i].vector,
        });
        const r = payload.Upsert_Request?.create({
          vector: vec,
          config: cfg,
        });

        channel.write(r);
      }

      channel.end();
    });
  });

  describe("Tests for remove operations", () => {
    let client: RemoveClient;

    beforeAll((done) => {
      client = new remove_grpc.RemoveClient(
        address,
        grpc.credentials?.createInsecure(),
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

    test("Remove", (done) => {
      const id = payload.Object_ID?.create({
        id: data[0].id,
      });

      const cfg = payload.Remove_Config?.create({
        skip_strict_exist_check: true,
      });

      const req = payload.Remove_Request?.create({
        id: id,
        config: cfg,
      });

      client.remove(req, (err, resp) => {
        try {
          expect(err).toBeFalsy();
          expect(payload.Object_Location.is(resp)).toBe(true);
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    test("MultiRemove", (done) => {
      const requests: Array<any> = [];
      const cfg = payload.Insert_Config?.create({
        skip_strict_exist_check: true,
      });

      for (let i = 1; i < 11; i++) {
        const id = payload.Object_ID?.create({
          id: data[i].id,
        });

        const r = payload.Remove_Request?.create({
          id: id,
          config: cfg,
        });

        requests.push(r);
      }

      const req = payload.Remove_MultiRequest?.create({
        requests: requests,
      });

      client.multiRemove(req, (err, resp) => {
        try {
          expect(err).toBeFalsy();
          expect(payload.Object_Locations.is(resp)).toBe(true);
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    test("StreamRemove", (done) => {
      const cfg = payload.Remove_Config?.create({
        skip_strict_exist_check: true,
      });

      const channel = client.streamRemove();
      channel.on("data", (message) => {
        try {
          expect(payload.Object_StreamLocation.is(message)).toBe(true);
          const cloneRes = payload.Object_StreamLocation.clone(message);
          if (cloneRes.payload.oneofKind === "status") {
            expect(cloneRes.payload.status.code).toEqual(0);
          }
        } catch (e) {
          done(e);
        }
      });
      channel.on("end", () => {
        done();
      });
      channel.on("error", (e) => {
        done(e);
      });

      for (let i = 11; i < 21; i++) {
        const id = payload.Object_ID?.create({
          id: data[i].id,
        });

        const r = payload.Remove_Request?.create({
          id: id,
          config: cfg,
        });

        channel.write(r);
      }

      channel.end();
    });
  });
});
