// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Copyright (C) 2019-2023 vdaas.org vald team <vald@vdaas.org>
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

function serialize_payload_v1_Update_MultiRequest(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Update.MultiRequest)) {
    throw new Error('Expected argument of type payload.v1.Update.MultiRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Update_MultiRequest(buffer_arg) {
  return vald_v1_payload_payload_pb.Update.MultiRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Update_Request(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Update.Request)) {
    throw new Error('Expected argument of type payload.v1.Update.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Update_Request(buffer_arg) {
  return vald_v1_payload_payload_pb.Update.Request.deserializeBinary(new Uint8Array(buffer_arg));
}


// Update service provides ways to update indexed vectors.
var UpdateService = exports.UpdateService = {
  // A method to update an indexed vector.
update: {
    path: '/vald.v1.Update/Update',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Update.Request,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Update_Request,
    requestDeserialize: deserialize_payload_v1_Update_Request,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  // A method to update multiple indexed vectors by bidirectional streaming.
streamUpdate: {
    path: '/vald.v1.Update/StreamUpdate',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Update.Request,
    responseType: vald_v1_payload_payload_pb.Object.StreamLocation,
    requestSerialize: serialize_payload_v1_Update_Request,
    requestDeserialize: deserialize_payload_v1_Update_Request,
    responseSerialize: serialize_payload_v1_Object_StreamLocation,
    responseDeserialize: deserialize_payload_v1_Object_StreamLocation,
  },
  // A method to update multiple indexed vectors in a single request.
multiUpdate: {
    path: '/vald.v1.Update/MultiUpdate',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Update.MultiRequest,
    responseType: vald_v1_payload_payload_pb.Object.Locations,
    requestSerialize: serialize_payload_v1_Update_MultiRequest,
    requestDeserialize: deserialize_payload_v1_Update_MultiRequest,
    responseSerialize: serialize_payload_v1_Object_Locations,
    responseDeserialize: deserialize_payload_v1_Object_Locations,
  },
};

exports.UpdateClient = grpc.makeGenericClientConstructor(UpdateService);
