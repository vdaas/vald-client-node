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

function serialize_payload_v1_Search_IDRequest(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Search.IDRequest)) {
    throw new Error('Expected argument of type payload.v1.Search.IDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Search_IDRequest(buffer_arg) {
  return vald_v1_payload_payload_pb.Search.IDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Search_MultiIDRequest(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Search.MultiIDRequest)) {
    throw new Error('Expected argument of type payload.v1.Search.MultiIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Search_MultiIDRequest(buffer_arg) {
  return vald_v1_payload_payload_pb.Search.MultiIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payload_v1_Search_MultiRequest(arg) {
  if (!(arg instanceof vald_v1_payload_payload_pb.Search.MultiRequest)) {
    throw new Error('Expected argument of type payload.v1.Search.MultiRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payload_v1_Search_MultiRequest(buffer_arg) {
  return vald_v1_payload_payload_pb.Search.MultiRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Search service provides ways to search indexed vectors.
var SearchService = exports.SearchService = {
  // A method to search indexed vectors by a raw vector.
search: {
    path: '/vald.v1.Search/Search',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Search.Request,
    responseType: vald_v1_payload_payload_pb.Search.Response,
    requestSerialize: serialize_payload_v1_Search_Request,
    requestDeserialize: deserialize_payload_v1_Search_Request,
    responseSerialize: serialize_payload_v1_Search_Response,
    responseDeserialize: deserialize_payload_v1_Search_Response,
  },
  // A method to search indexed vectors by ID.
searchByID: {
    path: '/vald.v1.Search/SearchByID',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Search.IDRequest,
    responseType: vald_v1_payload_payload_pb.Search.Response,
    requestSerialize: serialize_payload_v1_Search_IDRequest,
    requestDeserialize: deserialize_payload_v1_Search_IDRequest,
    responseSerialize: serialize_payload_v1_Search_Response,
    responseDeserialize: deserialize_payload_v1_Search_Response,
  },
  // A method to search indexed vectors by multiple vectors.
streamSearch: {
    path: '/vald.v1.Search/StreamSearch',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Search.Request,
    responseType: vald_v1_payload_payload_pb.Search.StreamResponse,
    requestSerialize: serialize_payload_v1_Search_Request,
    requestDeserialize: deserialize_payload_v1_Search_Request,
    responseSerialize: serialize_payload_v1_Search_StreamResponse,
    responseDeserialize: deserialize_payload_v1_Search_StreamResponse,
  },
  // A method to search indexed vectors by multiple IDs.
streamSearchByID: {
    path: '/vald.v1.Search/StreamSearchByID',
    requestStream: true,
    responseStream: true,
    requestType: vald_v1_payload_payload_pb.Search.IDRequest,
    responseType: vald_v1_payload_payload_pb.Search.StreamResponse,
    requestSerialize: serialize_payload_v1_Search_IDRequest,
    requestDeserialize: deserialize_payload_v1_Search_IDRequest,
    responseSerialize: serialize_payload_v1_Search_StreamResponse,
    responseDeserialize: deserialize_payload_v1_Search_StreamResponse,
  },
  // A method to search indexed vectors by multiple vectors in a single request.
multiSearch: {
    path: '/vald.v1.Search/MultiSearch',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Search.MultiRequest,
    responseType: vald_v1_payload_payload_pb.Search.Responses,
    requestSerialize: serialize_payload_v1_Search_MultiRequest,
    requestDeserialize: deserialize_payload_v1_Search_MultiRequest,
    responseSerialize: serialize_payload_v1_Search_Responses,
    responseDeserialize: deserialize_payload_v1_Search_Responses,
  },
  // A method to search indexed vectors by multiple IDs in a single request.
multiSearchByID: {
    path: '/vald.v1.Search/MultiSearchByID',
    requestStream: false,
    responseStream: false,
    requestType: vald_v1_payload_payload_pb.Search.MultiIDRequest,
    responseType: vald_v1_payload_payload_pb.Search.Responses,
    requestSerialize: serialize_payload_v1_Search_MultiIDRequest,
    requestDeserialize: deserialize_payload_v1_Search_MultiIDRequest,
    responseSerialize: serialize_payload_v1_Search_Responses,
    responseDeserialize: deserialize_payload_v1_Search_Responses,
  },
};

exports.SearchClient = grpc.makeGenericClientConstructor(SearchService);
