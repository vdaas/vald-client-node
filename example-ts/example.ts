import * as grpc from "@grpc/grpc-js";
import { v1_vald, v1_payload } from "vald-client-node";
import type { Insert_Request, Search_Request, Remove_Request } from "vald-client-node/src/vald/v1/payload/payload_pb";

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
  const vec: Array<number> = [];
  for (let i = 0; i < Number(DIM); i++) {
    vec.push(0.1 * (i + 1));
  }

  // insert
  const ivec = v1_payload.payload.Object_Vector.create({
    id: ID,
    vector: vec,
  });

  const icfg = v1_payload.payload.Insert_Config.create({
    skip_strict_exist_check: false
  })

  const ireq = v1_payload.payload.Insert_Request.create({
    vector: ivec,
    config: icfg,
  })

  const iclient = new v1_vald.insert_grpc.InsertClient(
    addr,
    grpc.credentials.createInsecure()
  );

  const insertFunc = async (req: Insert_Request) => {
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
  await insertFunc(ireq)
    .then((res) => {
      console.log("insert resp: ", res);
    })
    .catch((e) => {
      console.log("err: ", e);
      process.exit(1);
    });

  const second = 100;
  await sleep(second);

  // search
  const scfg = v1_payload.payload.Search_Config.create({
    num: 10,
    min_num: 1,
    radius: -1.0,
    epsilon: 0.01,
    timeout: BigInt(3000000000),
  })

  const sreq = v1_payload.payload.Search_Request.create({
    vector: vec,
    config: scfg,
  })
  const sclient = new v1_vald.search_grpc.SearchClient(
    addr,
    grpc.credentials.createInsecure()
  );

  const searchFunc = async (req: Search_Request) => {
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
  await searchFunc(sreq)
    .then((res) => {
      console.log("search res: ", res, "\n");
    })
    .catch((e) => {
      console.log("err: ", e);
      process.exit(1);
    });

  // remove
  const rcfg = v1_payload.payload.Remove_Config.create({
    skip_strict_exist_check: false
  });

  const robjId = v1_payload.payload.Object_ID.create({
    id: ID,
  });
  const rreq = v1_payload.payload.Remove_Request.create({
    id: robjId,
    config: rcfg,
  });

  const rclient = new v1_vald.remove_grpc.RemoveClient(
    addr,
    grpc.credentials.createInsecure()
  );

  const removeFunc = async (req: Remove_Request) => {
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
  await removeFunc(rreq)
    .then((res) => {
      console.log("remove res: ", res, "\n");
    })
    .catch((e) => {
      console.log("err: ", e);
      process.exit(1);
    });
  process.exit(0);
};

main();
