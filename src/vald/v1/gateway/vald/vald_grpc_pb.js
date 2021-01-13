// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Copyright (C) 2019-2020 Vdaas.org Vald team ( kpango, rinx, kmrmt )
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
'use strict';
var grpc = require('grpc');
var vald_v1_payload_payload_pb = require('../../../../vald/v1/payload/payload_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');

function serialize_payload_v1_Object_ID(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Object.ID)) {
    throw new Error('Expected argument of type payload.v1.Object.ID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Object_ID(buffer_arg) {
  return vald_v1_payload_payload_pb.Object.ID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Object_IDs(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Object.IDs)) {
    throw new Error('Expected argument of type payload.v1.Object.IDs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Object_IDs(buffer_arg) {
  return vald_v1_payload_payload_pb.Object.IDs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Object_Location(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Object.Location)) {
    throw new Error('Expected argument of type payload.v1.Object.Location');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Object_Location(buffer_arg) {
  return vald_v1_payload_payload_pb.Object.Location.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Object_Locations(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Object.Locations)) {
    throw new Error('Expected argument of type payload.v1.Object.Locations');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Object_Locations(buffer_arg) {
  return vald_v1_payload_payload_pb.Object.Locations.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Object_Vector(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Object.Vector)) {
    throw new Error('Expected argument of type payload.v1.Object.Vector');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Object_Vector(buffer_arg) {
  return vald_v1_payload_payload_pb.Object.Vector.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Object_Vectors(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Object.Vectors)) {
    throw new Error('Expected argument of type payload.v1.Object.Vectors');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Object_Vectors(buffer_arg) {
  return vald_v1_payload_payload_pb.Object.Vectors.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Search_IDRequest(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Search.IDRequest)) {
    throw new Error('Expected argument of type payload.v1.Search.IDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Search_IDRequest(buffer_arg) {
  return vald_v1_payload_payload_pb.Search.IDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Search_Request(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Search.Request)) {
    throw new Error('Expected argument of type payload.v1.Search.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Search_Request(buffer_arg) {
  return vald_v1_payload_payload_pb.Search.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Search_Response(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Search.Response)) {
    throw new Error('Expected argument of type payload.v1.Search.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Search_Response(buffer_arg) {
  return vald_v1_payload_payload_pb.Search.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var ValdService = exports.ValdService = {
  exists: {
    path: '/vald.v1.Vald/Exists',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.ID,
    responseType: vald_v1_payload_payload_pb.Object.ID,
    requestSerialize: serialize_payload_v1_Object_ID,
    requestDeserialize: deserialize_payload_v1_Object_ID,
    responseSerialize: serialize_payload_v1_Object_ID,
    responseDeserialize: deserialize_payload_v1_Object_ID,
  },
  search: {
    path: '/vald.v1.Vald/Search',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Search.Request,
    responseType: vald_v1_payload_payload_pb.Search.Response,
    requestSerialize: serialize_payload_v1_Search_Request,
    requestDeserialize: deserialize_payload_v1_Search_Request,
    responseSerialize: serialize_payload_v1_Search_Response,
    responseDeserialize: deserialize_payload_v1_Search_Response,
  },
  searchByID: {
    path: '/vald.v1.Vald/SearchByID',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Search.IDRequest,
    responseType: vald_v1_payload_payload_pb.Search.Response,
    requestSerialize: serialize_payload_v1_Search_IDRequest,
    requestDeserialize: deserialize_payload_v1_Search_IDRequest,
    responseSerialize: serialize_payload_v1_Search_Response,
    responseDeserialize: deserialize_payload_v1_Search_Response,
  },
  streamSearch: {
    path: '/vald.v1.Vald/StreamSearch',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Search.Request,
    responseType: vald_v1_payload_payload_pb.Search.Response,
    requestSerialize: serialize_payload_v1_Search_Request,
    requestDeserialize: deserialize_payload_v1_Search_Request,
    responseSerialize: serialize_payload_v1_Search_Response,
    responseDeserialize: deserialize_payload_v1_Search_Response,
  },
  streamSearchByID: {
    path: '/vald.v1.Vald/StreamSearchByID',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Search.IDRequest,
    responseType: vald_v1_payload_payload_pb.Search.Response,
    requestSerialize: serialize_payload_v1_Search_IDRequest,
    requestDeserialize: deserialize_payload_v1_Search_IDRequest,
    responseSerialize: serialize_payload_v1_Search_Response,
    responseDeserialize: deserialize_payload_v1_Search_Response,
  },
  insert: {
    path: '/vald.v1.Vald/Insert',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.Vector,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Object_Vector,
    requestDeserialize: deserialize_payload_v1_Object_Vector,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  streamInsert: {
    path: '/vald.v1.Vald/StreamInsert',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Object.Vector,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Object_Vector,
    requestDeserialize: deserialize_payload_v1_Object_Vector,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  multiInsert: {
    path: '/vald.v1.Vald/MultiInsert',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.Vectors,
    responseType: vald_v1_payload_payload_pb.Object.Locations,
    requestSerialize: serialize_payload_v1_Object_Vectors,
    requestDeserialize: deserialize_payload_v1_Object_Vectors,
    responseSerialize: serialize_payload_v1_Object_Locations,
    responseDeserialize: deserialize_payload_v1_Object_Locations,
  },
  update: {
    path: '/vald.v1.Vald/Update',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.Vector,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Object_Vector,
    requestDeserialize: deserialize_payload_v1_Object_Vector,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  streamUpdate: {
    path: '/vald.v1.Vald/StreamUpdate',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Object.Vector,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Object_Vector,
    requestDeserialize: deserialize_payload_v1_Object_Vector,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  multiUpdate: {
    path: '/vald.v1.Vald/MultiUpdate',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.Vectors,
    responseType: vald_v1_payload_payload_pb.Object.Locations,
    requestSerialize: serialize_payload_v1_Object_Vectors,
    requestDeserialize: deserialize_payload_v1_Object_Vectors,
    responseSerialize: serialize_payload_v1_Object_Locations,
    responseDeserialize: deserialize_payload_v1_Object_Locations,
  },
  upsert: {
    path: '/vald.v1.Vald/Upsert',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.Vector,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Object_Vector,
    requestDeserialize: deserialize_payload_v1_Object_Vector,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  streamUpsert: {
    path: '/vald.v1.Vald/StreamUpsert',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Object.Vector,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Object_Vector,
    requestDeserialize: deserialize_payload_v1_Object_Vector,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  multiUpsert: {
    path: '/vald.v1.Vald/MultiUpsert',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.Vectors,
    responseType: vald_v1_payload_payload_pb.Object.Locations,
    requestSerialize: serialize_payload_v1_Object_Vectors,
    requestDeserialize: deserialize_payload_v1_Object_Vectors,
    responseSerialize: serialize_payload_v1_Object_Locations,
    responseDeserialize: deserialize_payload_v1_Object_Locations,
  },
  remove: {
    path: '/vald.v1.Vald/Remove',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.ID,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Object_ID,
    requestDeserialize: deserialize_payload_v1_Object_ID,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  streamRemove: {
    path: '/vald.v1.Vald/StreamRemove',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Object.ID,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Object_ID,
    requestDeserialize: deserialize_payload_v1_Object_ID,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  multiRemove: {
    path: '/vald.v1.Vald/MultiRemove',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.IDs,
    responseType: vald_v1_payload_payload_pb.Object.Locations,
    requestSerialize: serialize_payload_v1_Object_IDs,
    requestDeserialize: deserialize_payload_v1_Object_IDs,
    responseSerialize: serialize_payload_v1_Object_Locations,
    responseDeserialize: deserialize_payload_v1_Object_Locations,
  },
  getObject: {
    path: '/vald.v1.Vald/GetObject',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.ID,
    responseType: vald_v1_payload_payload_pb.Object.Vector,
    requestSerialize: serialize_payload_v1_Object_ID,
    requestDeserialize: deserialize_payload_v1_Object_ID,
    responseSerialize: serialize_payload_v1_Object_Vector,
    responseDeserialize: deserialize_payload_v1_Object_Vector,
  },
  streamGetObject: {
    path: '/vald.v1.Vald/StreamGetObject',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Object.ID,
    responseType: vald_v1_payload_payload_pb.Object.Vector,
    requestSerialize: serialize_payload_v1_Object_ID,
    requestDeserialize: deserialize_payload_v1_Object_ID,
    responseSerialize: serialize_payload_v1_Object_Vector,
    responseDeserialize: deserialize_payload_v1_Object_Vector,
  },
};

exports.ValdClient = grpc.makeGenericClientConstructor(ValdService);
