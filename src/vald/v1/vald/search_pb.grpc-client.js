/* eslint-disable */
// @generated by protobuf-ts 2.9.3 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/vald/search.proto" (package "vald.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
//
//
// Copyright (C) 2019-2024 vdaas.org vald team <vald@vdaas.org>
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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchClient = void 0;
/* eslint-disable */
// @generated by protobuf-ts 2.9.3 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/vald/search.proto" (package "vald.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
//
//
// Copyright (C) 2019-2024 vdaas.org vald team <vald@vdaas.org>
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
const search_pb_1 = require("./search_pb");
const grpc = require("@grpc/grpc-js");
/**
 * Search service provides ways to search indexed vectors.
 *
 * @generated from protobuf service vald.v1.Search
 */
class SearchClient extends grpc.Client {
    constructor(address, credentials, options = {}, binaryOptions = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * A method to search indexed vectors by a raw vector.
     *
     * @generated from protobuf rpc: Search(payload.v1.Search.Request) returns (payload.v1.Search.Response);
     */
    search(input, metadata, options, callback) {
        const method = search_pb_1.Search.methods[0];
        return this.makeUnaryRequest(`/${search_pb_1.Search.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
    /**
     * A method to search indexed vectors by ID.
     *
     * @generated from protobuf rpc: SearchByID(payload.v1.Search.IDRequest) returns (payload.v1.Search.Response);
     */
    searchByID(input, metadata, options, callback) {
        const method = search_pb_1.Search.methods[1];
        return this.makeUnaryRequest(`/${search_pb_1.Search.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
    /**
     * A method to search indexed vectors by multiple vectors.
     *
     * @generated from protobuf rpc: StreamSearch(stream payload.v1.Search.Request) returns (stream payload.v1.Search.StreamResponse);
     */
    streamSearch(metadata, options) {
        const method = search_pb_1.Search.methods[2];
        return this.makeBidiStreamRequest(`/${search_pb_1.Search.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), metadata, options);
    }
    /**
     * A method to search indexed vectors by multiple IDs.
     *
     * @generated from protobuf rpc: StreamSearchByID(stream payload.v1.Search.IDRequest) returns (stream payload.v1.Search.StreamResponse);
     */
    streamSearchByID(metadata, options) {
        const method = search_pb_1.Search.methods[3];
        return this.makeBidiStreamRequest(`/${search_pb_1.Search.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), metadata, options);
    }
    /**
     * A method to search indexed vectors by multiple vectors in a single request.
     *
     * @generated from protobuf rpc: MultiSearch(payload.v1.Search.MultiRequest) returns (payload.v1.Search.Responses);
     */
    multiSearch(input, metadata, options, callback) {
        const method = search_pb_1.Search.methods[4];
        return this.makeUnaryRequest(`/${search_pb_1.Search.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
    /**
     * A method to search indexed vectors by multiple IDs in a single request.
     *
     * @generated from protobuf rpc: MultiSearchByID(payload.v1.Search.MultiIDRequest) returns (payload.v1.Search.Responses);
     */
    multiSearchByID(input, metadata, options, callback) {
        const method = search_pb_1.Search.methods[5];
        return this.makeUnaryRequest(`/${search_pb_1.Search.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
    /**
     * A method to linear search indexed vectors by a raw vector.
     *
     * @generated from protobuf rpc: LinearSearch(payload.v1.Search.Request) returns (payload.v1.Search.Response);
     */
    linearSearch(input, metadata, options, callback) {
        const method = search_pb_1.Search.methods[6];
        return this.makeUnaryRequest(`/${search_pb_1.Search.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
    /**
     * A method to linear search indexed vectors by ID.
     *
     * @generated from protobuf rpc: LinearSearchByID(payload.v1.Search.IDRequest) returns (payload.v1.Search.Response);
     */
    linearSearchByID(input, metadata, options, callback) {
        const method = search_pb_1.Search.methods[7];
        return this.makeUnaryRequest(`/${search_pb_1.Search.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
    /**
     * A method to linear search indexed vectors by multiple vectors.
     *
     * @generated from protobuf rpc: StreamLinearSearch(stream payload.v1.Search.Request) returns (stream payload.v1.Search.StreamResponse);
     */
    streamLinearSearch(metadata, options) {
        const method = search_pb_1.Search.methods[8];
        return this.makeBidiStreamRequest(`/${search_pb_1.Search.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), metadata, options);
    }
    /**
     * A method to linear search indexed vectors by multiple IDs.
     *
     * @generated from protobuf rpc: StreamLinearSearchByID(stream payload.v1.Search.IDRequest) returns (stream payload.v1.Search.StreamResponse);
     */
    streamLinearSearchByID(metadata, options) {
        const method = search_pb_1.Search.methods[9];
        return this.makeBidiStreamRequest(`/${search_pb_1.Search.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), metadata, options);
    }
    /**
     * A method to linear search indexed vectors by multiple vectors in a single
     * request.
     *
     * @generated from protobuf rpc: MultiLinearSearch(payload.v1.Search.MultiRequest) returns (payload.v1.Search.Responses);
     */
    multiLinearSearch(input, metadata, options, callback) {
        const method = search_pb_1.Search.methods[10];
        return this.makeUnaryRequest(`/${search_pb_1.Search.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
    /**
     * A method to linear search indexed vectors by multiple IDs in a single
     * request.
     *
     * @generated from protobuf rpc: MultiLinearSearchByID(payload.v1.Search.MultiIDRequest) returns (payload.v1.Search.Responses);
     */
    multiLinearSearchByID(input, metadata, options, callback) {
        const method = search_pb_1.Search.methods[11];
        return this.makeUnaryRequest(`/${search_pb_1.Search.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
}
exports.SearchClient = SearchClient;
