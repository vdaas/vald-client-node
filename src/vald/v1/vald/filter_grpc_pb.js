// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Copyright (C) 2019-2022 vdaas.org vald team <vald@vdaas.org>
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
var grpc = require('@grpc/grpc-js');
var vald_v1_payload_payload_pb = require('../../../vald/v1/payload/payload_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');

function serialize_payload_v1_Insert_MultiObjectRequest(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Insert.MultiObjectRequest)) {
    throw new Error('Expected argument of type payload.v1.Insert.MultiObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Insert_MultiObjectRequest(buffer_arg) {
  return vald_v1_payload_payload_pb.Insert.MultiObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Insert_ObjectRequest(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Insert.ObjectRequest)) {
    throw new Error('Expected argument of type payload.v1.Insert.ObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Insert_ObjectRequest(buffer_arg) {
  return vald_v1_payload_payload_pb.Insert.ObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_payload_v1_Object_StreamLocation(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Object.StreamLocation)) {
    throw new Error('Expected argument of type payload.v1.Object.StreamLocation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Object_StreamLocation(buffer_arg) {
  return vald_v1_payload_payload_pb.Object.StreamLocation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Search_MultiObjectRequest(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Search.MultiObjectRequest)) {
    throw new Error('Expected argument of type payload.v1.Search.MultiObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Search_MultiObjectRequest(buffer_arg) {
  return vald_v1_payload_payload_pb.Search.MultiObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_payload_v1_Search_Responses(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Search.Responses)) {
    throw new Error('Expected argument of type payload.v1.Search.Responses');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Search_Responses(buffer_arg) {
  return vald_v1_payload_payload_pb.Search.Responses.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Search_StreamResponse(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Search.StreamResponse)) {
    throw new Error('Expected argument of type payload.v1.Search.StreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Search_StreamResponse(buffer_arg) {
  return vald_v1_payload_payload_pb.Search.StreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Update_MultiObjectRequest(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Update.MultiObjectRequest)) {
    throw new Error('Expected argument of type payload.v1.Update.MultiObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Update_MultiObjectRequest(buffer_arg) {
  return vald_v1_payload_payload_pb.Update.MultiObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Update_ObjectRequest(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Update.ObjectRequest)) {
    throw new Error('Expected argument of type payload.v1.Update.ObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Update_ObjectRequest(buffer_arg) {
  return vald_v1_payload_payload_pb.Update.ObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Upsert_MultiObjectRequest(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Upsert.MultiObjectRequest)) {
    throw new Error('Expected argument of type payload.v1.Upsert.MultiObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Upsert_MultiObjectRequest(buffer_arg) {
  return vald_v1_payload_payload_pb.Upsert.MultiObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Upsert_ObjectRequest(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Upsert.ObjectRequest)) {
    throw new Error('Expected argument of type payload.v1.Upsert.ObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Upsert_ObjectRequest(buffer_arg) {
  return vald_v1_payload_payload_pb.Upsert.ObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Filter service provides ways to connect to Vald through filter.
var FilterService = exports.FilterService = {
  // A method to search object.
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
  // A method to search multiple objects.
multiSearchObject: {
    path: '/vald.v1.Filter/MultiSearchObject',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Search.MultiObjectRequest,
    responseType: vald_v1_payload_payload_pb.Search.Responses,
    requestSerialize: serialize_payload_v1_Search_MultiObjectRequest,
    requestDeserialize: deserialize_payload_v1_Search_MultiObjectRequest,
    responseSerialize: serialize_payload_v1_Search_Responses,
    responseDeserialize: deserialize_payload_v1_Search_Responses,
  },
  // A method to search object by bidirectional streaming.
streamSearchObject: {
    path: '/vald.v1.Filter/StreamSearchObject',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Search.ObjectRequest,
    responseType: vald_v1_payload_payload_pb.Search.StreamResponse,
    requestSerialize: serialize_payload_v1_Search_ObjectRequest,
    requestDeserialize: deserialize_payload_v1_Search_ObjectRequest,
    responseSerialize: serialize_payload_v1_Search_StreamResponse,
    responseDeserialize: deserialize_payload_v1_Search_StreamResponse,
  },
  // A method insert object.
insertObject: {
    path: '/vald.v1.Filter/InsertObject',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Insert.ObjectRequest,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Insert_ObjectRequest,
    requestDeserialize: deserialize_payload_v1_Insert_ObjectRequest,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  // Represent the streaming RPC to insert object by bidirectional streaming.
streamInsertObject: {
    path: '/vald.v1.Filter/StreamInsertObject',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Insert.ObjectRequest,
    responseType: vald_v1_payload_payload_pb.Object.StreamLocation,
    requestSerialize: serialize_payload_v1_Insert_ObjectRequest,
    requestDeserialize: deserialize_payload_v1_Insert_ObjectRequest,
    responseSerialize: serialize_payload_v1_Object_StreamLocation,
    responseDeserialize: deserialize_payload_v1_Object_StreamLocation,
  },
  // A method to insert multiple objects.
multiInsertObject: {
    path: '/vald.v1.Filter/MultiInsertObject',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Insert.MultiObjectRequest,
    responseType: vald_v1_payload_payload_pb.Object.Locations,
    requestSerialize: serialize_payload_v1_Insert_MultiObjectRequest,
    requestDeserialize: deserialize_payload_v1_Insert_MultiObjectRequest,
    responseSerialize: serialize_payload_v1_Object_Locations,
    responseDeserialize: deserialize_payload_v1_Object_Locations,
  },
  // A method to update object.
updateObject: {
    path: '/vald.v1.Filter/UpdateObject',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Update.ObjectRequest,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Update_ObjectRequest,
    requestDeserialize: deserialize_payload_v1_Update_ObjectRequest,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  // A method to update object by bidirectional streaming.
streamUpdateObject: {
    path: '/vald.v1.Filter/StreamUpdateObject',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Update.ObjectRequest,
    responseType: vald_v1_payload_payload_pb.Object.StreamLocation,
    requestSerialize: serialize_payload_v1_Update_ObjectRequest,
    requestDeserialize: deserialize_payload_v1_Update_ObjectRequest,
    responseSerialize: serialize_payload_v1_Object_StreamLocation,
    responseDeserialize: deserialize_payload_v1_Object_StreamLocation,
  },
  // A method to update multiple objects.
multiUpdateObject: {
    path: '/vald.v1.Filter/MultiUpdateObject',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Update.MultiObjectRequest,
    responseType: vald_v1_payload_payload_pb.Object.Locations,
    requestSerialize: serialize_payload_v1_Update_MultiObjectRequest,
    requestDeserialize: deserialize_payload_v1_Update_MultiObjectRequest,
    responseSerialize: serialize_payload_v1_Object_Locations,
    responseDeserialize: deserialize_payload_v1_Object_Locations,
  },
  // A method to upsert object.
upsertObject: {
    path: '/vald.v1.Filter/UpsertObject',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Upsert.ObjectRequest,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Upsert_ObjectRequest,
    requestDeserialize: deserialize_payload_v1_Upsert_ObjectRequest,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  // A method to upsert object by bidirectional streaming.
streamUpsertObject: {
    path: '/vald.v1.Filter/StreamUpsertObject',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Upsert.ObjectRequest,
    responseType: vald_v1_payload_payload_pb.Object.StreamLocation,
    requestSerialize: serialize_payload_v1_Upsert_ObjectRequest,
    requestDeserialize: deserialize_payload_v1_Upsert_ObjectRequest,
    responseSerialize: serialize_payload_v1_Object_StreamLocation,
    responseDeserialize: deserialize_payload_v1_Object_StreamLocation,
  },
  // A method to upsert multiple objects.
multiUpsertObject: {
    path: '/vald.v1.Filter/MultiUpsertObject',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Upsert.MultiObjectRequest,
    responseType: vald_v1_payload_payload_pb.Object.Locations,
    requestSerialize: serialize_payload_v1_Upsert_MultiObjectRequest,
    requestDeserialize: deserialize_payload_v1_Upsert_MultiObjectRequest,
    responseSerialize: serialize_payload_v1_Object_Locations,
    responseDeserialize: deserialize_payload_v1_Object_Locations,
  },
};

exports.FilterClient = grpc.makeGenericClientConstructor(FilterService);
