import * as grpc from "@grpc/grpc-js";
import { v1_vald, v1_payload } from "vald-client-node";

// create clients

const iclient = new v1_vald.insert_grpc.InsertClient(
  "localhost:8081",
  grpc.credentials.createInsecure()
);
const sclient = new v1_vald.search_grpc.SearchClient(
  "localhost:8081",
  grpc.credentials.createInsecure()
);
const rclient = new v1_vald.remove_grpc.RemoveClient(
  "localhost:8081",
  grpc.credentials.createInsecure()
)

const sleep = async (second: number) => new Promise((resolve) => {
  console.log('Wait for ', second, 's');
  setTimeout(resolve, second * 1000);
});

const main = async () => {
  // insert

  const ivec = new v1_payload.payload.Object.Vector();
  ivec.setId("id_1");
  ivec.setVectorList([0.1, 0.2, 0.3, 0.4]);

  const icfg = new v1_payload.payload.Insert.Config();
  icfg.setSkipStrictExistCheck(false);

  const ireq = new v1_payload.payload.Insert.Request();
  ireq.setVector(ivec);
  ireq.setConfig(icfg);


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
  insertFunc(ireq).then(async (res) => {
    console.log("resp: ", res);
  }).catch((e) => {
    console.log("err: ", e);
    return
  });

  const second = 100
  await sleep(second);

  // search
  const scfg = new v1_payload.payload.Search.Config();
  scfg.setNum(10);
  scfg.setRadius(-1.0);
  scfg.setEpsilon(0.01);
  scfg.setTimeout(3000000000);

  const sreq = new v1_payload.payload.Search.Request();
  sreq.setVectorList([0.1, 0.2, 0.3, 0.4]);
  sreq.setConfig(scfg);

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
  searchFunc(sreq).then((res: any) => {
    console.log('res: ', res, '\n');
  }).catch((e) => {
    console.log('err: ', e);
    return
  });

  // remove
  const rcfg = new v1_payload.payload.Remove.Config();
  rcfg.setSkipStrictExistCheck(false)

  const rreq = new v1_payload.payload.Remove.Request();
  const obj = new v1_payload.payload.Object.ID();
  obj.setId("id_1");
  rreq.setId(obj);
  rreq.setConfig(rcfg);

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
  removeFunc(rreq).then((res: any) => {
    console.log('res: ', res, '\n');
  }).catch((e) => {
    console.log('err: ', e);
    return
  });
}

main();
