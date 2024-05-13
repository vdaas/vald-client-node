/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/vald/object.proto" (package "vald.v1", syntax proto3)
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
exports.ObjectClient = void 0;
/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/vald/object.proto" (package "vald.v1", syntax proto3)
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
const object_pb_1 = require("./object_pb");
const grpc = require("@grpc/grpc-js");
/**
 * Object service provides ways to fetch indexed vectors.
 *
 * @generated from protobuf service vald.v1.Object
 */
class ObjectClient extends grpc.Client {
    constructor(address, credentials, options = {}, binaryOptions = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * A method to check whether a specified ID is indexed or not.
     *
     * @generated from protobuf rpc: Exists(payload.v1.Object.ID) returns (payload.v1.Object.ID);
     */
    exists(input, metadata, options, callback) {
        const method = object_pb_1.Object.methods[0];
        return this.makeUnaryRequest(`/${object_pb_1.Object.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
    /**
     * A method to fetch a vector.
     *
     * @generated from protobuf rpc: GetObject(payload.v1.Object.VectorRequest) returns (payload.v1.Object.Vector);
     */
    getObject(input, metadata, options, callback) {
        const method = object_pb_1.Object.methods[1];
        return this.makeUnaryRequest(`/${object_pb_1.Object.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
    /**
     * A method to fetch vectors by bidirectional streaming.
     *
     * @generated from protobuf rpc: StreamGetObject(stream payload.v1.Object.VectorRequest) returns (stream payload.v1.Object.StreamVector);
     */
    streamGetObject(metadata, options) {
        const method = object_pb_1.Object.methods[2];
        return this.makeBidiStreamRequest(`/${object_pb_1.Object.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), metadata, options);
    }
    /**
     * A method to get all the vectors with server streaming
     *
     * @generated from protobuf rpc: StreamListObject(payload.v1.Object.List.Request) returns (stream payload.v1.Object.List.Response);
     */
    streamListObject(input, metadata, options) {
        const method = object_pb_1.Object.methods[3];
        return this.makeServerStreamRequest(`/${object_pb_1.Object.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options);
    }
}
exports.ObjectClient = ObjectClient;
