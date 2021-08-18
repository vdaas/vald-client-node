// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Copyright (C) 2019-2021 vdaas.org vald team <vald@vdaas.org>
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

function serialize_payload_v1_Remove_MultiRequest(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Remove.MultiRequest)) {
    throw new Error('Expected argument of type payload.v1.Remove.MultiRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Remove_MultiRequest(buffer_arg) {
  return vald_v1_payload_payload_pb.Remove.MultiRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Remove_Request(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Remove.Request)) {
    throw new Error('Expected argument of type payload.v1.Remove.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Remove_Request(buffer_arg) {
  return vald_v1_payload_payload_pb.Remove.Request.deserializeBinary(new Uint8Array(buffer_arg));
}


var RemoveService = exports.RemoveService = {
  remove: {
    path: '/vald.v1.Remove/Remove',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Remove.Request,
    responseType: vald_v1_payload_payload_pb.Object.Location,
    requestSerialize: serialize_payload_v1_Remove_Request,
    requestDeserialize: deserialize_payload_v1_Remove_Request,
    responseSerialize: serialize_payload_v1_Object_Location,
    responseDeserialize: deserialize_payload_v1_Object_Location,
  },
  streamRemove: {
    path: '/vald.v1.Remove/StreamRemove',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Remove.Request,
    responseType: vald_v1_payload_payload_pb.Object.StreamLocation,
    requestSerialize: serialize_payload_v1_Remove_Request,
    requestDeserialize: deserialize_payload_v1_Remove_Request,
    responseSerialize: serialize_payload_v1_Object_StreamLocation,
    responseDeserialize: deserialize_payload_v1_Object_StreamLocation,
  },
  multiRemove: {
    path: '/vald.v1.Remove/MultiRemove',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Remove.MultiRequest,
    responseType: vald_v1_payload_payload_pb.Object.Locations,
    requestSerialize: serialize_payload_v1_Remove_MultiRequest,
    requestDeserialize: deserialize_payload_v1_Remove_MultiRequest,
    responseSerialize: serialize_payload_v1_Object_Locations,
    responseDeserialize: deserialize_payload_v1_Object_Locations,
  },
};

exports.RemoveClient = grpc.makeGenericClientConstructor(RemoveService);
