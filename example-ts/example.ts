import * as grpc from "@grpc/grpc-js";
import { v1_vald, v1_payload } from "vald-client-node";

const addr = "localhost:8081";
const DIM = process.env.DIM || 4;
const ID = "id_1";

// sleep

const sleep = async (second: number) =>
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

  const ivec = new v1_payload.payload.Object.Vector();
  ivec.setId(ID);
  ivec.setVectorList(vec);

  const icfg = new v1_payload.payload.Insert.Config();
  icfg.setSkipStrictExistCheck(false);

  const ireq = new v1_payload.payload.Insert.Request();
  ireq.setVector(ivec);
  ireq.setConfig(icfg);

  const iclient = new v1_vald.insert_grpc.InsertClient(
    addr,
    grpc.credentials.createInsecure()
  );

  const insertFunc = (req: any) => {
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
  insertFunc(ireq)
    .then(async (res) => {
      console.log("resp: ", res);
    })
    .catch((e) => {
      console.log("err: ", e);
      return -1;
    });

  const second = 100;
  await sleep(second);

  // search
  const scfg = new v1_payload.payload.Search.Config();
  scfg.setNum(10);
  scfg.setMinNum(1);
  scfg.setRadius(-1.0);
  scfg.setEpsilon(0.01);
  scfg.setTimeout(3000000000);

  const sreq = new v1_payload.payload.Search.Request();
  sreq.setVectorList(vec);
  sreq.setConfig(scfg);

  const sclient = new v1_vald.search_grpc.SearchClient(
    addr,
    grpc.credentials.createInsecure()
  );

  const searchFunc = (req: any) => {
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
  searchFunc(sreq)
    .then((res: any) => {
      console.log("res: ", res, "\n");
    })
    .catch((e) => {
      console.log("err: ", e);
      return -1;
    });

  // remove
  const rcfg = new v1_payload.payload.Remove.Config();
  rcfg.setSkipStrictExistCheck(false);

  const rreq = new v1_payload.payload.Remove.Request();
  const robjId = new v1_payload.payload.Object.ID();
  robjId.setId(ID);
  rreq.setId(robjId);
  rreq.setConfig(rcfg);

  const rclient = new v1_vald.remove_grpc.RemoveClient(
    addr,
    grpc.credentials.createInsecure()
  );

  const removeFunc = (req: any) => {
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
  removeFunc(rreq)
    .then((res: any) => {
      console.log("res: ", res, "\n");
    })
    .catch((e) => {
      console.log("err: ", e);
      return -1;
    });
};

main();
