var grpc = require('grpc');
var vald = require('vald-client-node');

var insert = vald.v1_vald.insert_grpc;
var search = vald.v1_vald.search_grpc;
var update = vald.v1_vald.update_grpc;
var remove = vald.v1_vald.remove_grpc;

var payload = vald.v1_payload.payload;

// create clients
var iclient = new insert.InsertClient('localhost:8081', grpc.credentials.createInsecure());
var sclient = new search.SearchClient('localhost:8081', grpc.credentials.createInsecure());


// insert

var ivec = new payload.Object.Vector();
ivec.setId("id_1");
ivec.setVectorList([0.1, 0.2, 0.3, 0.4]);

var icfg = new payload.Insert.Config();
icfg.setSkipStrictExistCheck(false);

var ireq = new payload.Insert.Request();
ireq.setVector(ivec);
ireq.setConfig(icfg);

iclient.insert(ireq, function (err, resp) {
    if (err != null) {
        console.log('error: ', err);
    } else {
        // resp is Object.Location
        console.log('resp: ', resp);
    }
});


// search

var scfg = new payload.Search.Config();
scfg.setNum(10);
scfg.setRadius(-1.0);
scfg.setEpsilon(0.01);
scfg.setTimeout(3000000000);

var sreq = new payload.Search.Request();
sreq.setVectorList([0.1, 0.2, 0.3, 0.4]);
sreq.setConfig(scfg);

sclient.search(sreq, function (err, resp) {
    if (err != null) {
        console.log('error: ', err);
    } else {
        // resp is Search.Response
        console.log('resp: ', resp);
    }
});
