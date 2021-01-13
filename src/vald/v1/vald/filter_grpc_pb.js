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
var vald_v1_payload_payload_pb = require('../../../vald/v1/payload/payload_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');

function serialize_payload_v1_Object_Blob(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Object.Blob)) {
    throw new Error('Expected argument of type payload.v1.Object.Blob');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Object_Blob(buffer_arg) {
  return vald_v1_payload_payload_pb.Object.Blob.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_payload_v1_Search_ObjectRequest(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Search.ObjectRequest)) {
    throw new Error('Expected argument of type payload.v1.Search.ObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Search_ObjectRequest(buffer_arg) {
  return vald_v1_payload_payload_pb.Search.ObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


var FilterService = exports.FilterService = {
  searchObject: {
    path: '/vald.v1.Filter/SearchObject',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Search.ObjectRequest,
    responseType: vald_v1_payload_payload_pb.Search.Response,
    requestSerialize: serialize_payload_v1_Search_ObjectRequest,
    requestDeserialize: deserialize_payload_v1_Search_ObjectRequest,
    responseSerialize: serialize_payload_v1_Search_Response,
    responseDeserialize: deserialize_payload_v1_Search_Response,
  },
  streamSearchObject: {
    path: '/vald.v1.Filter/StreamSearchObject',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Search.ObjectRequest,
    responseType: vald_v1_payload_payload_pb.Search.Response,
    requestSerialize: serialize_payload_v1_Search_ObjectRequest,
    requestDeserialize: deserialize_payload_v1_Search_ObjectRequest,
    responseSerialize: serialize_payload_v1_Search_Response,
    responseDeserialize: deserialize_payload_v1_Search_Response,
  },
  insertObject: {
    path: '/vald.v1.Filter/InsertObject',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.Blob,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Object_Blob,
    requestDeserialize: deserialize_payload_v1_Object_Blob,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  streamInsertObject: {
    path: '/vald.v1.Filter/StreamInsertObject',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Object.Blob,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Object_Blob,
    requestDeserialize: deserialize_payload_v1_Object_Blob,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  multiInsertObject: {
    path: '/vald.v1.Filter/MultiInsertObject',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.Blob,
    responseType: vald_v1_payload_payload_pb.Object.Locations,
    requestSerialize: serialize_payload_v1_Object_Blob,
    requestDeserialize: deserialize_payload_v1_Object_Blob,
    responseSerialize: serialize_payload_v1_Object_Locations,
    responseDeserialize: deserialize_payload_v1_Object_Locations,
  },
  updateObject: {
    path: '/vald.v1.Filter/UpdateObject',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.Blob,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Object_Blob,
    requestDeserialize: deserialize_payload_v1_Object_Blob,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  streamUpdateObject: {
    path: '/vald.v1.Filter/StreamUpdateObject',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Object.Blob,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Object_Blob,
    requestDeserialize: deserialize_payload_v1_Object_Blob,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  multiUpdateObject: {
    path: '/vald.v1.Filter/MultiUpdateObject',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.Blob,
    responseType: vald_v1_payload_payload_pb.Object.Locations,
    requestSerialize: serialize_payload_v1_Object_Blob,
    requestDeserialize: deserialize_payload_v1_Object_Blob,
    responseSerialize: serialize_payload_v1_Object_Locations,
    responseDeserialize: deserialize_payload_v1_Object_Locations,
  },
  upsertObject: {
    path: '/vald.v1.Filter/UpsertObject',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.Blob,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Object_Blob,
    requestDeserialize: deserialize_payload_v1_Object_Blob,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  streamUpsertObject: {
    path: '/vald.v1.Filter/StreamUpsertObject',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Object.Blob,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Object_Blob,
    requestDeserialize: deserialize_payload_v1_Object_Blob,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  multiUpsertObject: {
    path: '/vald.v1.Filter/MultiUpsertObject',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.Blob,
    responseType: vald_v1_payload_payload_pb.Object.Locations,
    requestSerialize: serialize_payload_v1_Object_Blob,
    requestDeserialize: deserialize_payload_v1_Object_Blob,
    responseSerialize: serialize_payload_v1_Object_Locations,
    responseDeserialize: deserialize_payload_v1_Object_Locations,
  },
};

exports.FilterClient = grpc.makeGenericClientConstructor(FilterService);
