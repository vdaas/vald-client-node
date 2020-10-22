var grpc = require('grpc');
var vald = require('vald-client-node');

var insert = vald.v1_vald.insert;
var payload = vald.v1_payload.payload;

var client = new insert.grpc.InsertClient('localhost:8081', grpc.credentials.createInsecure());

var vec = new payload.Object.Vector();
vec.setId("id_1");
vec.setVectorList([0.1, 0.2, 0.3, 0.4]);

var icfg = new payload.Insert.Config();
icfg.setSkipStrictExistCheck(false);

var ireq = new payload.Insert.Request();
ireq.setVector(vec);
ireq.setConfig(icfg);

client.insert(ireq, function (err, resp) {
    if (err != null) {
        console.log('error: ', err);
        return
    }

    // resp is Object.Location
    console.log('resp: ', resp);
});
