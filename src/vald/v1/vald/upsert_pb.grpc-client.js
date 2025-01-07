/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/vald/upsert.proto" (package "vald.v1", syntax proto3)
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
exports.UpsertClient = void 0;
/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/vald/upsert.proto" (package "vald.v1", syntax proto3)
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
const upsert_pb_1 = require("./upsert_pb");
const grpc = require("@grpc/grpc-js");
/**
 * Overview
 * Upsert Service is responsible for updating existing vectors in the `vald-agent` or inserting new vectors into the `vald-agent` if the vector does not exist.
 *
 * @generated from protobuf service vald.v1.Upsert
 */
class UpsertClient extends grpc.Client {
    constructor(address, credentials, options = {}, binaryOptions = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * Overview
     * Upsert RPC is the method to update the inserted vector to a new single vector or add a new single vector if not inserted before.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  5   | NOT_FOUND         |
     * |  6   | ALREADY_EXISTS    |
     * |  10  | ABORTED           |
     * |  13  | INTERNAL          |
     * ---
     * Troubleshooting
     * The request process may not be completed when the response code is NOT `0 (OK)`.
     *
     * Here are some common reasons and how to resolve each error.
     *
     * | name              | common reason                                                                                                                                       | how to resolve                                                                           |
     * | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
     * | CANCELLED         | Executed cancel() of rpc from client/server-side or network problems between client and server.                                                     | Check the code, especially around timeout and connection management, and fix if needed.  |
     * | INVALID_ARGUMENT  | The Dimension of the request vector is NOT the same as Vald Agent's config, the requested vector's ID is empty, or some request payload is invalid. | Check Agent config, request payload, and fix request payload or Agent config.            |
     * | DEADLINE_EXCEEDED | The RPC timeout setting is too short on the client/server side.                                                                                     | Check the gRPC timeout setting on both the client and server sides and fix it if needed. |
     * | ALREADY_EXISTS    | Requested pair of ID and vector is already inserted                                                                                                 | Change request payload or nothing to do if update is unnecessary.                        |
     * | INTERNAL          | Target Vald cluster or network route has some critical error.                                                                                       | Check target Vald cluster first and check network route including ingress as second.     |
     *
     * @generated from protobuf rpc: Upsert(payload.v1.Upsert.Request) returns (payload.v1.Object.Location);
     */
    upsert(input, metadata, options, callback) {
        const method = upsert_pb_1.Upsert.methods[0];
        return this.makeUnaryRequest(`/${upsert_pb_1.Upsert.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
    /**
     * Overview
     * StreamUpsert RPC is the method to update multiple existing vectors or add new multiple vectors using the [bidirectional streaming RPC](https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc).<br>
     * Using the bidirectional streaming RPC, the upsert request can be communicated in any order between the client and server.
     * Each Upsert request and response are independent.
     * It’s the recommended method to upsert a large number of vectors.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  5   | NOT_FOUND         |
     * |  6   | ALREADY_EXISTS    |
     * |  10  | ABORTED           |
     * |  13  | INTERNAL          |
     * ---
     * Troubleshooting
     * The request process may not be completed when the response code is NOT `0 (OK)`.
     *
     * Here are some common reasons and how to resolve each error.
     *
     * | name              | common reason                                                                                                                                       | how to resolve                                                                           |
     * | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
     * | CANCELLED         | Executed cancel() of rpc from client/server-side or network problems between client and server.                                                     | Check the code, especially around timeout and connection management, and fix if needed.  |
     * | INVALID_ARGUMENT  | The Dimension of the request vector is NOT the same as Vald Agent's config, the requested vector's ID is empty, or some request payload is invalid. | Check Agent config, request payload, and fix request payload or Agent config.            |
     * | DEADLINE_EXCEEDED | The RPC timeout setting is too short on the client/server side.                                                                                     | Check the gRPC timeout setting on both the client and server sides and fix it if needed. |
     * | ALREADY_EXISTS    | Requested pair of ID and vector is already inserted                                                                                                 | Change request payload or nothing to do if update is unnecessary.                        |
     * | INTERNAL          | Target Vald cluster or network route has some critical error.                                                                                       | Check target Vald cluster first and check network route including ingress as second.     |
     *
     * @generated from protobuf rpc: StreamUpsert(stream payload.v1.Upsert.Request) returns (stream payload.v1.Object.StreamLocation);
     */
    streamUpsert(metadata, options) {
        const method = upsert_pb_1.Upsert.methods[1];
        return this.makeBidiStreamRequest(`/${upsert_pb_1.Upsert.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), metadata, options);
    }
    /**
     * Overview
     * MultiUpsert is the method to update existing multiple vectors and add new multiple vectors in **1** request.
     *
     * <div class="notice">
     * gRPC has a message size limitation.<br>
     * Please be careful that the size of the request exceeds the limit.
     * </div>
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  5   | NOT_FOUND         |
     * |  6   | ALREADY_EXISTS    |
     * |  10  | ABORTED           |
     * |  13  | INTERNAL          |
     * ---
     * Troubleshooting
     * The request process may not be completed when the response code is NOT `0 (OK)`.
     *
     * Here are some common reasons and how to resolve each error.
     *
     * | name              | common reason                                                                                                                                       | how to resolve                                                                           |
     * | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
     * | CANCELLED         | Executed cancel() of rpc from client/server-side or network problems between client and server.                                                     | Check the code, especially around timeout and connection management, and fix if needed.  |
     * | INVALID_ARGUMENT  | The Dimension of the request vector is NOT the same as Vald Agent's config, the requested vector's ID is empty, or some request payload is invalid. | Check Agent config, request payload, and fix request payload or Agent config.            |
     * | DEADLINE_EXCEEDED | The RPC timeout setting is too short on the client/server side.                                                                                     | Check the gRPC timeout setting on both the client and server sides and fix it if needed. |
     * | ALREADY_EXISTS    | Requested pair of ID and vector is already inserted                                                                                                 | Change request payload or nothing to do if update is unnecessary.                        |
     * | INTERNAL          | Target Vald cluster or network route has some critical error.                                                                                       | Check target Vald cluster first and check network route including ingress as second.     |
     *
     * @generated from protobuf rpc: MultiUpsert(payload.v1.Upsert.MultiRequest) returns (payload.v1.Object.Locations);
     */
    multiUpsert(input, metadata, options, callback) {
        const method = upsert_pb_1.Upsert.methods[2];
        return this.makeUnaryRequest(`/${upsert_pb_1.Upsert.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
}
exports.UpsertClient = UpsertClient;
