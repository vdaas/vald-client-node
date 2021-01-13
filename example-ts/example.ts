import grpc = require('grpc');
import { v1_vald, v1_payload } from 'vald-client-node';

// create clients

const iclient = new v1_vald.insert_grpc.InsertClient('localhost:8081', grpc.credentials.createInsecure());
const sclient = new v1_vald.search_grpc.SearchClient('localhost:8081', grpc.credentials.createInsecure());

// insert

const ivec = new v1_payload.payload.Object.Vector();
ivec.setId("id_1");
ivec.setVectorList([0.1, 0.2, 0.3, 0.4]);

const icfg = new v1_payload.payload.Insert.Config();
icfg.setSkipStrictExistCheck(false);

const ireq = new v1_payload.payload.Insert.Request();
ireq.setVector(ivec);
ireq.setConfig(icfg);

iclient.insert(ireq, (err, resp) => {
    if (err) {
        console.log('error: ', err);
    } else {
        console.log('resp: ', resp);
    }
});

// search

const scfg = new v1_payload.payload.Search.Config();
scfg.setNum(10);
scfg.setRadius(-1.0);
scfg.setEpsilon(0.01);
scfg.setTimeout(3000000000);

const sreq = new v1_payload.payload.Search.Request();
sreq.setVectorList([0.1, 0.2, 0.3, 0.4]);
sreq.setConfig(scfg);

sclient.search(sreq, (err, resp) => {
    if (err) {
        console.log('error: ', err);
    } else {
        console.log('resp: ', resp);
    }
});
