import grpc = require('grpc');
import { v1_vald, v1_payload } from 'vald-client-node';

// create clients

let iclient = new v1_vald.insert_grpc.InsertClient('localhost:8081', grpc.credentials.createInsecure());
let sclient = new v1_vald.search_grpc.SearchClient('localhost:8081', grpc.credentials.createInsecure());

// insert

var ivec = new v1_payload.payload.Object.Vector();
ivec.setId("id_1");
ivec.setVectorList([0.1, 0.2, 0.3, 0.4]);

var icfg = new v1_payload.payload.Insert.Config();
icfg.setSkipStrictExistCheck(false);

var ireq = new v1_payload.payload.Insert.Request();
ireq.setVector(ivec);
ireq.setConfig(icfg);

iclient.insert(ireq, function (err, resp) {
    if (err != null) {
        console.log('error: ', err);
    } else {
        console.log('resp: ', resp);
    }
});

// search

var scfg = new v1_payload.payload.Search.Config();
scfg.setNum(10);
scfg.setRadius(-1.0);
scfg.setEpsilon(0.01);
scfg.setTimeout(3000000000);

var sreq = new v1_payload.payload.Search.Request();
sreq.setVectorList([0.1, 0.2, 0.3, 0.4]);
sreq.setConfig(scfg);

sclient.search(sreq, function (err, resp) {
    if (err != null) {
        console.log('error: ', err);
    } else {
        console.log('resp: ', resp);
    }
});
