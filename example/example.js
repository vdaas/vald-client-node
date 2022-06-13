const grpc = require('@grpc/grpc-js');
const vald = require('vald-client-node');

const insert = vald.v1_vald.insert_grpc;
const search = vald.v1_vald.search_grpc;

const payload = vald.v1_payload.payload;

// create clients
const iclient = new insert.InsertClient('localhost:8081', grpc.credentials.createInsecure());
const sclient = new search.SearchClient('localhost:8081', grpc.credentials.createInsecure());


// insert
const ivec = new payload.Object.Vector();
ivec.setId("id_1");
ivec.setVectorList([0.1, 0.2, 0.3, 0.4]);

const icfg = new payload.Insert.Config();
icfg.setSkipStrictExistCheck(false);

const ireq = new payload.Insert.Request();
ireq.setVector(ivec);
ireq.setConfig(icfg);

iclient.insert(ireq, (err, resp) => {
    if (err != null) {
        console.log('error: ', err);
    } else {
        // resp is Object.Location
        console.log('resp: ', resp);
    }
});

// Wait for createIndex completed
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
const waitMs = 60000
console.log('wait for createIndex: ', waitMs, 'ms')
delay(waitMs)

// search
const scfg = new payload.Search.Config();
scfg.setNum(10);
scfg.setRadius(-1.0);
scfg.setEpsilon(0.01);
scfg.setTimeout(3000000000);

const sreq = new payload.Search.Request();
sreq.setVectorList([0.1, 0.2, 0.3, 0.4]);
sreq.setConfig(scfg);

sclient.search(sreq, (err, resp) => {
    if (err != null) {
        console.log('error: ', err);
    } else {
        // resp is Search.Response
        console.log('resp: ', resp);
    }
});
