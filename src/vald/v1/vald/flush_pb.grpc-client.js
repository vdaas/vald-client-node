/* eslint-disable */
// @generated by protobuf-ts 2.9.6 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/vald/flush.proto" (package "vald.v1", syntax proto3)
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
exports.FlushClient = void 0;
/* eslint-disable */
// @generated by protobuf-ts 2.9.6 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/vald/flush.proto" (package "vald.v1", syntax proto3)
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
const flush_pb_1 = require("./flush_pb");
const grpc = require("@grpc/grpc-js");
/**
 * Overview
 * Flush Service is responsible for removing all vectors that are indexed and uncommitted in the `vald-agent`.
 *
 * @generated from protobuf service vald.v1.Flush
 */
class FlushClient extends grpc.Client {
    constructor(address, credentials, options = {}, binaryOptions = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * Overview
     * Flush RPC is the method to remove all vectors.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  5   | NOT_FOUND         |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: Flush(payload.v1.Flush.Request) returns (payload.v1.Info.Index.Count);
     */
    flush(input, metadata, options, callback) {
        const method = flush_pb_1.Flush.methods[0];
        return this.makeUnaryRequest(`/${flush_pb_1.Flush.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
}
exports.FlushClient = FlushClient;
