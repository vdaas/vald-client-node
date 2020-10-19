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
var vald_payload_payload_pb = require('../../../vald/payload/payload_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');

function serialize_payload_Control_CreateIndexRequest(arg) {
  if (!(arg instanceof vald_payload_payload_pb.Control.CreateIndexRequest)) {
    throw new Error('Expected argument of type payload.Control.CreateIndexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_Control_CreateIndexRequest(buffer_arg) {
  return vald_payload_payload_pb.Control.CreateIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_Empty(arg) {
  if (!(arg instanceof vald_payload_payload_pb.Empty)) {
    throw new Error('Expected argument of type payload.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_Empty(buffer_arg) {
  return vald_payload_payload_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_Info_Index_Count(arg) {
  if (!(arg instanceof vald_payload_payload_pb.Info.Index.Count)) {
    throw new Error('Expected argument of type payload.Info.Index.Count');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_Info_Index_Count(buffer_arg) {
  return vald_payload_payload_pb.Info.Index.Count.deserializeBinary(new Uint8Array(buffer_arg));
}


var AgentService = exports.AgentService = {
  createIndex: {
    path: '/core.Agent/CreateIndex',
    requestStream: false,
    responseStream: false,
    requestType: vald_payload_payload_pb.Control.CreateIndexRequest,
    responseType: vald_payload_payload_pb.Empty,
    requestSerialize: serialize_payload_Control_CreateIndexRequest,
    requestDeserialize: deserialize_payload_Control_CreateIndexRequest,
    responseSerialize: serialize_payload_Empty,
    responseDeserialize: deserialize_payload_Empty,
  },
  saveIndex: {
    path: '/core.Agent/SaveIndex',
    requestStream: false,
    responseStream: false,
    requestType: vald_payload_payload_pb.Empty,
    responseType: vald_payload_payload_pb.Empty,
    requestSerialize: serialize_payload_Empty,
    requestDeserialize: deserialize_payload_Empty,
    responseSerialize: serialize_payload_Empty,
    responseDeserialize: deserialize_payload_Empty,
  },
  createAndSaveIndex: {
    path: '/core.Agent/CreateAndSaveIndex',
    requestStream: false,
    responseStream: false,
    requestType: vald_payload_payload_pb.Control.CreateIndexRequest,
    responseType: vald_payload_payload_pb.Empty,
    requestSerialize: serialize_payload_Control_CreateIndexRequest,
    requestDeserialize: deserialize_payload_Control_CreateIndexRequest,
    responseSerialize: serialize_payload_Empty,
    responseDeserialize: deserialize_payload_Empty,
  },
  indexInfo: {
    path: '/core.Agent/IndexInfo',
    requestStream: false,
    responseStream: false,
    requestType: vald_payload_payload_pb.Empty,
    responseType: vald_payload_payload_pb.Info.Index.Count,
    requestSerialize: serialize_payload_Empty,
    requestDeserialize: deserialize_payload_Empty,
    responseSerialize: serialize_payload_Info_Index_Count,
    responseDeserialize: deserialize_payload_Info_Index_Count,
  },
};

exports.AgentClient = grpc.makeGenericClientConstructor(AgentService);
