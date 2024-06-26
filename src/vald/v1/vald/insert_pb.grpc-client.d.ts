/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/vald/insert.proto" (package "vald.v1", syntax proto3)
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
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { Object_Locations } from "../payload/payload_pb";
import type { Insert_MultiRequest } from "../payload/payload_pb";
import type { Object_StreamLocation } from "../payload/payload_pb";
import type { Object_Location } from "../payload/payload_pb";
import type { Insert_Request } from "../payload/payload_pb";
import * as grpc from "@grpc/grpc-js";
/**
 * Insert service provides ways to add new vectors.
 *
 * @generated from protobuf service vald.v1.Insert
 */
export interface IInsertClient {
    /**
     * A method to add a new single vector.
     *
     * @generated from protobuf rpc: Insert(payload.v1.Insert.Request) returns (payload.v1.Object.Location);
     */
    insert(input: Insert_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    insert(input: Insert_Request, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    insert(input: Insert_Request, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    insert(input: Insert_Request, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    /**
     * A method to add new multiple vectors by bidirectional streaming.
     *
     * @generated from protobuf rpc: StreamInsert(stream payload.v1.Insert.Request) returns (stream payload.v1.Object.StreamLocation);
     */
    streamInsert(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<Insert_Request, Object_StreamLocation>;
    streamInsert(options?: grpc.CallOptions): grpc.ClientDuplexStream<Insert_Request, Object_StreamLocation>;
    /**
     * A method to add new multiple vectors in a single request.
     *
     * @generated from protobuf rpc: MultiInsert(payload.v1.Insert.MultiRequest) returns (payload.v1.Object.Locations);
     */
    multiInsert(input: Insert_MultiRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
    multiInsert(input: Insert_MultiRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
    multiInsert(input: Insert_MultiRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
    multiInsert(input: Insert_MultiRequest, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
}
/**
 * Insert service provides ways to add new vectors.
 *
 * @generated from protobuf service vald.v1.Insert
 */
export declare class InsertClient extends grpc.Client implements IInsertClient {
    private readonly _binaryOptions;
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: grpc.ClientOptions, binaryOptions?: Partial<BinaryReadOptions & BinaryWriteOptions>);
    /**
     * A method to add a new single vector.
     *
     * @generated from protobuf rpc: Insert(payload.v1.Insert.Request) returns (payload.v1.Object.Location);
     */
    insert(input: Insert_Request, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Location) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Location) => void), callback?: ((err: grpc.ServiceError | null, value?: Object_Location) => void)): grpc.ClientUnaryCall;
    /**
     * A method to add new multiple vectors by bidirectional streaming.
     *
     * @generated from protobuf rpc: StreamInsert(stream payload.v1.Insert.Request) returns (stream payload.v1.Object.StreamLocation);
     */
    streamInsert(metadata?: grpc.Metadata | grpc.CallOptions, options?: grpc.CallOptions): grpc.ClientDuplexStream<Insert_Request, Object_StreamLocation>;
    /**
     * A method to add new multiple vectors in a single request.
     *
     * @generated from protobuf rpc: MultiInsert(payload.v1.Insert.MultiRequest) returns (payload.v1.Object.Locations);
     */
    multiInsert(input: Insert_MultiRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Locations) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Locations) => void), callback?: ((err: grpc.ServiceError | null, value?: Object_Locations) => void)): grpc.ClientUnaryCall;
}
