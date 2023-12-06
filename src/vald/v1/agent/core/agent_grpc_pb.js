// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Copyright (C) 2019-2023 vdaas.org vald team <vald@vdaas.org>
//
// Licensed under the Apache License, Version 2.0 (the "License");
// You may not use this file except in compliance with the License.
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
var vald_v1_payload_payload_pb = require('../../../../vald/v1/payload/payload_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');

function serialize_payload_v1_Control_CreateIndexRequest(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Control.CreateIndexRequest)) {
    throw new Error('Expected argument of type payload.v1.Control.CreateIndexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Control_CreateIndexRequest(buffer_arg) {
  return vald_v1_payload_payload_pb.Control.CreateIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Empty(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Empty)) {
    throw new Error('Expected argument of type payload.v1.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Empty(buffer_arg) {
  return vald_v1_payload_payload_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Info_Index_Count(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Info.Index.Count)) {
    throw new Error('Expected argument of type payload.v1.Info.Index.Count');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Info_Index_Count(buffer_arg) {
  return vald_v1_payload_payload_pb.Info.Index.Count.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Object_GetTimestampRequest(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Object.GetTimestampRequest)) {
    throw new Error('Expected argument of type payload.v1.Object.GetTimestampRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Object_GetTimestampRequest(buffer_arg) {
  return vald_v1_payload_payload_pb.Object.GetTimestampRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Object_Timestamp(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Object.Timestamp)) {
    throw new Error('Expected argument of type payload.v1.Object.Timestamp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Object_Timestamp(buffer_arg) {
  return vald_v1_payload_payload_pb.Object.Timestamp.deserializeBinary(new Uint8Array(buffer_arg));
}


// Represent the agent service.
var AgentService = exports.AgentService = {
  // Represent the creating index RPC.
createIndex: {
    path: '/core.v1.Agent/CreateIndex',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Control.CreateIndexRequest,
    responseType: vald_v1_payload_payload_pb.Empty,
    requestSerialize: serialize_payload_v1_Control_CreateIndexRequest,
    requestDeserialize: deserialize_payload_v1_Control_CreateIndexRequest,
    responseSerialize: serialize_payload_v1_Empty,
    responseDeserialize: deserialize_payload_v1_Empty,
  },
  // Represent the saving index RPC.
saveIndex: {
    path: '/core.v1.Agent/SaveIndex',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Empty,
    responseType: vald_v1_payload_payload_pb.Empty,
    requestSerialize: serialize_payload_v1_Empty,
    requestDeserialize: deserialize_payload_v1_Empty,
    responseSerialize: serialize_payload_v1_Empty,
    responseDeserialize: deserialize_payload_v1_Empty,
  },
  // Represent the creating and saving index RPC.
createAndSaveIndex: {
    path: '/core.v1.Agent/CreateAndSaveIndex',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Control.CreateIndexRequest,
    responseType: vald_v1_payload_payload_pb.Empty,
    requestSerialize: serialize_payload_v1_Control_CreateIndexRequest,
    requestDeserialize: deserialize_payload_v1_Control_CreateIndexRequest,
    responseSerialize: serialize_payload_v1_Empty,
    responseDeserialize: deserialize_payload_v1_Empty,
  },
  // Represent the RPC to get the agent index information.
indexInfo: {
    path: '/core.v1.Agent/IndexInfo',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Empty,
    responseType: vald_v1_payload_payload_pb.Info.Index.Count,
    requestSerialize: serialize_payload_v1_Empty,
    requestDeserialize: deserialize_payload_v1_Empty,
    responseSerialize: serialize_payload_v1_Info_Index_Count,
    responseDeserialize: deserialize_payload_v1_Info_Index_Count,
  },
  // Represent the RPC to get the vector metadata. This RPC is mainly used for index correction process
getTimestamp: {
    path: '/core.v1.Agent/GetTimestamp',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Object.GetTimestampRequest,
    responseType: vald_v1_payload_payload_pb.Object.Timestamp,
    requestSerialize: serialize_payload_v1_Object_GetTimestampRequest,
    requestDeserialize: deserialize_payload_v1_Object_GetTimestampRequest,
    responseSerialize: serialize_payload_v1_Object_Timestamp,
    responseDeserialize: deserialize_payload_v1_Object_Timestamp,
  },
};

exports.AgentClient = grpc.makeGenericClientConstructor(AgentService);
