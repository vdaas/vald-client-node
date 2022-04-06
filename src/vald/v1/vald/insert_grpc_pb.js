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

function serialize_payload_v1_Insert_MultiRequest(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Insert.MultiRequest)) {
    throw new Error('Expected argument of type payload.v1.Insert.MultiRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Insert_MultiRequest(buffer_arg) {
  return vald_v1_payload_payload_pb.Insert.MultiRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Insert_Request(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Insert.Request)) {
    throw new Error('Expected argument of type payload.v1.Insert.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Insert_Request(buffer_arg) {
  return vald_v1_payload_payload_pb.Insert.Request.deserializeBinary(new Uint8Array(buffer_arg));
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


// Insert service provides ways to add new vectors.
var InsertService = exports.InsertService = {
  // A method to add a new single vector.
insert: {
    path: '/vald.v1.Insert/Insert',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Insert.Request,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Insert_Request,
    requestDeserialize: deserialize_payload_v1_Insert_Request,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  // A method to add new multiple vectors by bidirectional streaming.
streamInsert: {
    path: '/vald.v1.Insert/StreamInsert',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Insert.Request,
    responseType: vald_v1_payload_payload_pb.Object.StreamLocation,
    requestSerialize: serialize_payload_v1_Insert_Request,
    requestDeserialize: deserialize_payload_v1_Insert_Request,
    responseSerialize: serialize_payload_v1_Object_StreamLocation,
    responseDeserialize: deserialize_payload_v1_Object_StreamLocation,
  },
  // A method to add new multiple vectors in a single request.
multiInsert: {
    path: '/vald.v1.Insert/MultiInsert',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Insert.MultiRequest,
    responseType: vald_v1_payload_payload_pb.Object.Locations,
    requestSerialize: serialize_payload_v1_Insert_MultiRequest,
    requestDeserialize: deserialize_payload_v1_Insert_MultiRequest,
    responseSerialize: serialize_payload_v1_Object_Locations,
    responseDeserialize: deserialize_payload_v1_Object_Locations,
  },
};

exports.InsertClient = grpc.makeGenericClientConstructor(InsertService);
