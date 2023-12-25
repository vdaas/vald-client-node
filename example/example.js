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
  const ivec = payload.Object_Vector.create({
    id: ID,
    vector: vec,
  });

  const icfg = payload.Insert_Config.create({
    skip_strict_exist_check: false,
  });

  const ireq = payload.Insert_Request.create({
    vector: ivec,
    config: icfg,
  });

  const iclient = new insert.InsertClient(
    addr,
    grpc.credentials.createInsecure(),
  );

  async function insertFunc(req) {
    return new Promise((resolve, reject) => {
      iclient.insert(req, (err, resp) => {
        if (err) {
          reject(err);
        } else {
          resolve(resp);
        }
      });
    });
  }
  console.log("Insert start");
  await insertFunc(ireq)
    .then((res) => {
      console.log("insert res: ", res);
    })
    .catch((e) => {
      console.log("insert err: ", e);
      process.exit(1);
    });
  // Wait for createIndex completed
  const second = 90;
  await sleep(second);

  // search
  const scfg = payload.Search_Config.create({
    num: 10,
    min_num: 1,
    radius: -1,
    epsilon: 0.01,
    timeout: 3000000000,
  });

  const sreq = payload.Search_Request.create({
    vector: vec,
    config: scfg,
  });

  const sclient = new search.SearchClient(
    addr,
    grpc.credentials.createInsecure(),
  );

  async function searchFunc(req) {
    return new Promise((resolve, reject) => {
      sclient.search(req, (err, resp) => {
        if (err) {
          reject(err);
        } else {
          resolve(resp);
        }
      });
    });
  }
  console.log("Search start");
  await searchFunc(sreq)
    .then((res) => {
      console.log("search res: ", res);
    })
    .catch((e) => {
      console.log("err: ", e);
      process.exit(1);
    });

  const rcfg = payload.Remove_Config.create({
    skip_strict_exist_check: false,
  });
  const robjId = payload.Object_ID.create({
    id: ID,
  });
  const rreq = payload.Remove_Request.create({
    id: robjId,
    config: rcfg,
  });
  console.log(rreq);
  const rclient = new remove.RemoveClient(
    addr,
    grpc.credentials.createInsecure(),
  );
  async function removeFunc(req) {
    return new Promise((resolve, reject) => {
      rclient.remove(req, (err, resp) => {
        if (err) {
          reject(err);
        } else {
          resolve(resp);
        }
      });
    });
  }
  await removeFunc(rreq)
    .then((res) => {
      console.log("remove res: ", res);
    })
    .catch((e) => {
      console.log("err: ", e);
      process.exit(1);
    });
  process.exit(0);
};

main();
