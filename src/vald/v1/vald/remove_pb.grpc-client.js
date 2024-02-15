/* eslint-disable */
// @generated by protobuf-ts 2.9.3 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/vald/remove.proto" (package "vald.v1", syntax proto3)
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
exports.RemoveClient = void 0;
/* eslint-disable */
// @generated by protobuf-ts 2.9.3 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/vald/remove.proto" (package "vald.v1", syntax proto3)
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
const remove_pb_1 = require("./remove_pb");
const grpc = require("@grpc/grpc-js");
/**
 * Remove service provides ways to remove indexed vectors.
 *
 * @generated from protobuf service vald.v1.Remove
 */
class RemoveClient extends grpc.Client {
    constructor(address, credentials, options = {}, binaryOptions = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * A method to remove an indexed vector.
     *
     * @generated from protobuf rpc: Remove(payload.v1.Remove.Request) returns (payload.v1.Object.Location);
     */
    remove(input, metadata, options, callback) {
        const method = remove_pb_1.Remove.methods[0];
        return this.makeUnaryRequest(`/${remove_pb_1.Remove.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
    /**
     * A method to remove an indexed vector based on timestamp.
     *
     * @generated from protobuf rpc: RemoveByTimestamp(payload.v1.Remove.TimestampRequest) returns (payload.v1.Object.Locations);
     */
    removeByTimestamp(input, metadata, options, callback) {
        const method = remove_pb_1.Remove.methods[1];
        return this.makeUnaryRequest(`/${remove_pb_1.Remove.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
    /**
     * A method to remove multiple indexed vectors by bidirectional streaming.
     *
     * @generated from protobuf rpc: StreamRemove(stream payload.v1.Remove.Request) returns (stream payload.v1.Object.StreamLocation);
     */
    streamRemove(metadata, options) {
        const method = remove_pb_1.Remove.methods[2];
        return this.makeBidiStreamRequest(`/${remove_pb_1.Remove.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), metadata, options);
    }
    /**
     * A method to remove multiple indexed vectors in a single request.
     *
     * @generated from protobuf rpc: MultiRemove(payload.v1.Remove.MultiRequest) returns (payload.v1.Object.Locations);
     */
    multiRemove(input, metadata, options, callback) {
        const method = remove_pb_1.Remove.methods[3];
        return this.makeUnaryRequest(`/${remove_pb_1.Remove.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options, callback);
    }
}
exports.RemoveClient = RemoveClient;