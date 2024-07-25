/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/agent/core/agent.proto" (package "core.v1", syntax proto3)
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
exports.Agent = void 0;
/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/agent/core/agent.proto" (package "core.v1", syntax proto3)
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
const payload_pb_1 = require("../../payload/payload_pb");
const payload_pb_2 = require("../../payload/payload_pb");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * @generated ServiceType for protobuf service core.v1.Agent
 */
exports.Agent = new runtime_rpc_1.ServiceType("core.v1.Agent", [
    { name: "CreateIndex", options: { "google.api.http": { get: "/index/create/{pool_size}" } }, I: payload_pb_2.Control_CreateIndexRequest, O: payload_pb_1.Empty },
    { name: "SaveIndex", options: { "google.api.http": { get: "/index/save" } }, I: payload_pb_1.Empty, O: payload_pb_1.Empty },
    { name: "CreateAndSaveIndex", options: { "google.api.http": { get: "/index/createandsave/{pool_size}" } }, I: payload_pb_2.Control_CreateIndexRequest, O: payload_pb_1.Empty }
]);
