/* eslint-disable */
// @generated by protobuf-ts 2.9.6 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/vald/index.proto" (package "vald.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
//
//
// Copyright (C) 2019-2025 vdaas.org vald team <vald@vdaas.org>
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
exports.IndexClient = void 0;
/* eslint-disable */
// @generated by protobuf-ts 2.9.6 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/vald/index.proto" (package "vald.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
//
//
// Copyright (C) 2019-2025 vdaas.org vald team <vald@vdaas.org>
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
const index_pb_1 = require("./index_pb");
const grpc = require("@grpc/grpc-js");
/**
 * Overview
 * Represent the index manager service.
 *
 * @generated from protobuf service vald.v1.Index
 */
class IndexClient extends grpc.Client {
    constructor(address, credentials, options = {}, binaryOptions = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * Overview
     * Represent the RPC to get the index information.
     *
     * @generated from protobuf rpc: IndexInfo(payload.v1.Empty) returns (payload.v1.Info.Index.Count);
     */
    indexInfo(input, metadata, options, callback) {
        const method = index_pb_1.Index.methods[0];
        return this.makeUnaryRequest(`/${index_pb_1.Index.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
    /**
     * Overview
     * Represent the RPC to get the index information for each agents.
     *
     * @generated from protobuf rpc: IndexDetail(payload.v1.Empty) returns (payload.v1.Info.Index.Detail);
     */
    indexDetail(input, metadata, options, callback) {
        const method = index_pb_1.Index.methods[1];
        return this.makeUnaryRequest(`/${index_pb_1.Index.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
    /**
     * Overview
     * Represent the RPC to get the index statistics.
     *
     * @generated from protobuf rpc: IndexStatistics(payload.v1.Empty) returns (payload.v1.Info.Index.Statistics);
     */
    indexStatistics(input, metadata, options, callback) {
        const method = index_pb_1.Index.methods[2];
        return this.makeUnaryRequest(`/${index_pb_1.Index.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
    /**
     * Overview
     * Represent the RPC to get the index statistics for each agents.
     *
     * @generated from protobuf rpc: IndexStatisticsDetail(payload.v1.Empty) returns (payload.v1.Info.Index.StatisticsDetail);
     */
    indexStatisticsDetail(input, metadata, options, callback) {
        const method = index_pb_1.Index.methods[3];
        return this.makeUnaryRequest(`/${index_pb_1.Index.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
    /**
     * Overview
     * Represent the RPC to get the index property.
     *
     * @generated from protobuf rpc: IndexProperty(payload.v1.Empty) returns (payload.v1.Info.Index.PropertyDetail);
     */
    indexProperty(input, metadata, options, callback) {
        const method = index_pb_1.Index.methods[4];
        return this.makeUnaryRequest(`/${index_pb_1.Index.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
}
exports.IndexClient = IndexClient;
