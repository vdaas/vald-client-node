import filter = require("./filter_pb");
import filter_grpc = require("./filter_grpc_pb");
import insert = require("./insert_pb");
import insert_grpc = require("./insert_grpc_pb");
import object = require("./object_pb");
import object_grpc = require("./object_grpc_pb");
import remove = require("./remove_pb");
import remove_grpc = require("./remove_grpc_pb");
import search = require("./search_pb");
import search_grpc = require("./search_grpc_pb");
import update = require("./update_pb");
import update_grpc = require("./update_grpc_pb");
import upsert = require("./upsert_pb");
import upsert_grpc = require("./upsert_grpc_pb");
declare const _default: {
    filter: typeof filter,
    filter_grpc: typeof filter_grpc,
    insert: typeof insert,
    insert_grpc: typeof insert_grpc,
    object: typeof object,
    object_grpc: typeof object_grpc,
    remove: typeof remove,
    remove_grpc: typeof remove_grpc,
    search: typeof search,
    search_grpc: typeof search_grpc,
    update: typeof update,
    update_grpc: typeof update_grpc,
    upsert: typeof upsert,
    upsert_grpc: typeof upsert_grpc,
};
export = _default;
