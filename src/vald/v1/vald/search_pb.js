/* eslint-disable */
// @generated by protobuf-ts 2.9.3 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/vald/search.proto" (package "vald.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
//
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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
/* eslint-disable */
// @generated by protobuf-ts 2.9.3 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/vald/search.proto" (package "vald.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
//
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
const payload_pb_1 = require("../payload/payload_pb");
const payload_pb_2 = require("../payload/payload_pb");
const payload_pb_3 = require("../payload/payload_pb");
const payload_pb_4 = require("../payload/payload_pb");
const payload_pb_5 = require("../payload/payload_pb");
const payload_pb_6 = require("../payload/payload_pb");
const payload_pb_7 = require("../payload/payload_pb");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * @generated ServiceType for protobuf service vald.v1.Search
 */
exports.Search = new runtime_rpc_1.ServiceType("vald.v1.Search", [
    { name: "Search", options: { "google.api.http": { post: "/search", body: "*" } }, I: payload_pb_7.Search_Request, O: payload_pb_6.Search_Response },
    { name: "SearchByID", options: { "google.api.http": { post: "/search/id", body: "*" } }, I: payload_pb_5.Search_IDRequest, O: payload_pb_6.Search_Response },
    { name: "StreamSearch", serverStreaming: true, clientStreaming: true, options: {}, I: payload_pb_7.Search_Request, O: payload_pb_4.Search_StreamResponse },
    { name: "StreamSearchByID", serverStreaming: true, clientStreaming: true, options: {}, I: payload_pb_5.Search_IDRequest, O: payload_pb_4.Search_StreamResponse },
    { name: "MultiSearch", options: { "google.api.http": { post: "/search/multiple", body: "*" } }, I: payload_pb_3.Search_MultiRequest, O: payload_pb_2.Search_Responses },
    { name: "MultiSearchByID", options: { "google.api.http": { post: "/search/id/multiple", body: "*" } }, I: payload_pb_1.Search_MultiIDRequest, O: payload_pb_2.Search_Responses },
    { name: "LinearSearch", options: { "google.api.http": { post: "/linearsearch", body: "*" } }, I: payload_pb_7.Search_Request, O: payload_pb_6.Search_Response },
    { name: "LinearSearchByID", options: { "google.api.http": { post: "/linearsearch/id", body: "*" } }, I: payload_pb_5.Search_IDRequest, O: payload_pb_6.Search_Response },
    { name: "StreamLinearSearch", serverStreaming: true, clientStreaming: true, options: {}, I: payload_pb_7.Search_Request, O: payload_pb_4.Search_StreamResponse },
    { name: "StreamLinearSearchByID", serverStreaming: true, clientStreaming: true, options: {}, I: payload_pb_5.Search_IDRequest, O: payload_pb_4.Search_StreamResponse },
    { name: "MultiLinearSearch", options: { "google.api.http": { post: "/linearsearch/multiple", body: "*" } }, I: payload_pb_3.Search_MultiRequest, O: payload_pb_2.Search_Responses },
    { name: "MultiLinearSearchByID", options: { "google.api.http": { post: "/linearsearch/id/multiple", body: "*" } }, I: payload_pb_1.Search_MultiIDRequest, O: payload_pb_2.Search_Responses }
]);
