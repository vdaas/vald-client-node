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
exports.Upsert = void 0;
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
const payload_pb_1 = require("../payload/payload_pb");
const payload_pb_2 = require("../payload/payload_pb");
const payload_pb_3 = require("../payload/payload_pb");
const payload_pb_4 = require("../payload/payload_pb");
const payload_pb_5 = require("../payload/payload_pb");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * @generated ServiceType for protobuf service vald.v1.Upsert
 */
exports.Upsert = new runtime_rpc_1.ServiceType("vald.v1.Upsert", [
    { name: "Upsert", options: { "google.api.http": { post: "/upsert", body: "*" } }, I: payload_pb_5.Upsert_Request, O: payload_pb_4.Object_Location },
    { name: "StreamUpsert", serverStreaming: true, clientStreaming: true, options: {}, I: payload_pb_5.Upsert_Request, O: payload_pb_3.Object_StreamLocation },
    { name: "MultiUpsert", options: { "google.api.http": { post: "/upsert/multiple", body: "*" } }, I: payload_pb_2.Upsert_MultiRequest, O: payload_pb_1.Object_Locations }
]);
