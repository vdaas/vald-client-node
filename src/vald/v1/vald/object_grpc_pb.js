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

function serialize_payload_v1_Object_ID(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Object.ID)) {
    throw new Error('Expected argument of type payload.v1.Object.ID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Object_ID(buffer_arg) {
  return vald_v1_payload_payload_pb.Object.ID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Object_StreamVector(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Object.StreamVector)) {
    throw new Error('Expected argument of type payload.v1.Object.StreamVector');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Object_StreamVector(buffer_arg) {
  return vald_v1_payload_payload_pb.Object.StreamVector.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_payload_v1_Object_VectorRequest(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Object.VectorRequest)) {
    throw new Error('Expected argument of type payload.v1.Object.VectorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Object_VectorRequest(buffer_arg) {
  return vald_v1_payload_payload_pb.Object.VectorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ObjectService = exports.ObjectService = {
  exists: {
    path: '/vald.v1.Object/Exists',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.ID,
    responseType: vald_v1_payload_payload_pb.Object.ID,
    requestSerialize: serialize_payload_v1_Object_ID,
    requestDeserialize: deserialize_payload_v1_Object_ID,
    responseSerialize: serialize_payload_v1_Object_ID,
    responseDeserialize: deserialize_payload_v1_Object_ID,
  },
  getObject: {
    path: '/vald.v1.Object/GetObject',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.VectorRequest,
    responseType: vald_v1_payload_payload_pb.Object.Vector,
    requestSerialize: serialize_payload_v1_Object_VectorRequest,
    requestDeserialize: deserialize_payload_v1_Object_VectorRequest,
    responseSerialize: serialize_payload_v1_Object_Vector,
    responseDeserialize: deserialize_payload_v1_Object_Vector,
  },
  streamGetObject: {
    path: '/vald.v1.Object/StreamGetObject',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Object.VectorRequest,
    responseType: vald_v1_payload_payload_pb.Object.StreamVector,
    requestSerialize: serialize_payload_v1_Object_VectorRequest,
    requestDeserialize: deserialize_payload_v1_Object_VectorRequest,
    responseSerialize: serialize_payload_v1_Object_StreamVector,
    responseDeserialize: deserialize_payload_v1_Object_StreamVector,
  },
};

exports.ObjectClient = grpc.makeGenericClientConstructor(ObjectService);
