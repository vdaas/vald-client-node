// @generated by protobuf-ts 2.9.3 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name
// @generated from protobuf file "vald/v1/agent/core/agent.proto" (package "core.v1", syntax proto3)
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
import { Object_Timestamp } from "../../payload/payload_pb";
import { Object_GetTimestampRequest } from "../../payload/payload_pb";
import { Info_Index_Count } from "../../payload/payload_pb";
import { Empty } from "../../payload/payload_pb";
import { Control_CreateIndexRequest } from "../../payload/payload_pb";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
/**
 * @generated ServiceType for protobuf service core.v1.Agent
 */
export const Agent = new ServiceType("core.v1.Agent", [
    { name: "CreateIndex", options: { "google.api.http": { get: "/index/create" } }, I: Control_CreateIndexRequest, O: Empty },
    { name: "SaveIndex", options: { "google.api.http": { get: "/index/save" } }, I: Empty, O: Empty },
    { name: "CreateAndSaveIndex", options: { "google.api.http": { get: "/index/createandsave" } }, I: Control_CreateIndexRequest, O: Empty },
    { name: "IndexInfo", options: { "google.api.http": { get: "/index/info" } }, I: Empty, O: Info_Index_Count },
    { name: "GetTimestamp", options: { "google.api.http": { get: "/object/meta" } }, I: Object_GetTimestampRequest, O: Object_Timestamp }
]);
