const grpc = require("@grpc/grpc-js");
const vald = require("vald-client-node");

const insert = vald.v1_vald.insert_grpc;
const search = vald.v1_vald.search_grpc;
const remove = vald.v1_vald.remove_grpc;
const payload = vald.v1_payload.payload;

const addr = "localhost:8081";
const DIM = process.env.DIM || 4;
const ID = "id_1";

// sleep
const sleep = (second) =>
  new Promise((resolve) => {
    console.log("Wait for ", second, "s");
    setTimeout(resolve, second * 1000);
  });

const main = async () => {
  const vec = [];
  for (let i = 0; i < DIM; i++) {
    vec.push(0.1 * (i + 1));
  }

  // insert
  const ivec = new payload.Object.Vector();
  ivec.setId(ID);
  ivec.setVectorList(vec);

  const icfg = new payload.Insert.Config();
  icfg.setSkipStrictExistCheck(false);

  const ireq = new payload.Insert.Request();
  ireq.setVector(ivec);
  ireq.setConfig(icfg);

  const iclient = new insert.InsertClient(
    addr,
    grpc.credentials.createInsecure()
  );

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
  console.log("Insert start");
  insertFunc(ireq)
    .then((res) => {
      console.log("res: ", res);
    })
    .catch((e) => {
      console.log("err: ", e);
      return -1;
    });

  // Wait for createIndex completed
  const second = 120;
  await sleep(second);

  // search
  const scfg = new payload.Search.Config();
  scfg.setNum(10);
  scfg.setMinNum(1);
  scfg.setRadius(-1.0);
  scfg.setEpsilon(0.01);
  scfg.setTimeout(3000000000);

  const sreq = new payload.Search.Request();
  sreq.setVectorList(vec);
  sreq.setConfig(scfg);

  const sclient = new search.SearchClient(
    addr,
    grpc.credentials.createInsecure()
  );

  const searchFunc = (req) => {
    return new Promise((resolve, reject) => {
      sclient.search(req, (err, resp) => {
        if (err) {
          reject(err);
        } else {
          resolve(resp);
        }
      });
    });
  };
  console.log("Search start");
  searchFunc(sreq)
    .then((res) => {
      console.log("res: ", res, "\n");
    })
    .catch((e) => {
      console.log("err: ", e);
      return -1;
    });

  const rcfg = new payload.Remove.Config();
  rcfg.setSkipStrictExistCheck(false);
  const robjId = new payload.Object.ID();
  robjId.setId(ID);
  const rreq = new payload.Remove.Request();
  rreq.setId(robjId);
  rreq.setConfig(rcfg);

  const rclient = new remove.RemoveClient(
    addr,
    grpc.credentials.createInsecure()
  );
  const removeFunc = (req) => {
    return new Promise((resolve, reject) => {
      rclient.remove(req, (err, resp) => {
        if (err) {
          reject(err);
        } else {
          resolve(resp);
        }
      });
    });
  };
  console.log("Remove start");
  removeFunc(rreq)
    .then((res) => {
      console.log("res: ", res, "\n");
    })
    .catch((e) => {
      console.log("err: ", e);
      return -1;
    });
};

main();
