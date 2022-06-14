const grpc = require('@grpc/grpc-js');
const vald = require('vald-client-node');

const insert = vald.v1_vald.insert_grpc;
const search = vald.v1_vald.search_grpc;

const payload = vald.v1_payload.payload;

// create clients
const iclient = new insert.InsertClient('localhost:8081', grpc.credentials.createInsecure());
const sclient = new search.SearchClient('localhost:8081', grpc.credentials.createInsecure());


const sleep = (second) => new Promise((resolve) => {
  console.log('Wait for ', second, 's');
  setTimeout(resolve, second * 1000);
});

const main = async () => {
  // insert
  const ivec = new payload.Object.Vector();
  ivec.setId("id_1");
  ivec.setVectorList([0.1, 0.2, 0.3, 0.4]);

  const icfg = new payload.Insert.Config();
  icfg.setSkipStrictExistCheck(false);

  const ireq = new payload.Insert.Request();
  ireq.setVector(ivec);
  ireq.setConfig(icfg);

  const insertFunc = (req) => {
    return new Promise((resolve, reject) => {
      iclient.insert(req, (err, resp) => {
        if (err) {
          reject(err);
        } else {
          resolve(resp);
        }
      });
    });
  };
  insertFunc(ireq).then((res) => {
    console.log('res: ', res);
  }).catch((e) => {
    console.log('err: ', e);
    return
  });

  // Wait for createIndex completed
  const second = 100;
  await sleep(second);

  // search
  const scfg = new payload.Search.Config();
  scfg.setNum(10);
  scfg.setRadius(-1.0);
  scfg.setEpsilon(0.01);
  scfg.setTimeout(3000000000);

  const sreq = new payload.Search.Request();
  sreq.setVectorList([0.1, 0.2, 0.3, 0.4]);
  sreq.setConfig(scfg);

  const searchFunc = (req) => {
    return new Promise((resolve, reject) => {
      sclient.search(req, (err, resp) => {
        if (err != null) {
          reject(err);
        } else {
          resolve(resp);
        }
      });
    });
  };
  searchFunc(sreq).then((res) => {
    console.log('res: ', res, '\n');
  }).catch((e) => {
    console.log('err: ', e);
    return
  });
}

main()
