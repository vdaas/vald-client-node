/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/vald/update.proto" (package "vald.v1", syntax proto3)
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
import type { Update_TimestampRequest } from "../payload/payload_pb";
import type { Object_Locations } from "../payload/payload_pb";
import type { Update_MultiRequest } from "../payload/payload_pb";
import type { Object_StreamLocation } from "../payload/payload_pb";
import type { Object_Location } from "../payload/payload_pb";
import type { Update_Request } from "../payload/payload_pb";
import * as grpc from "@grpc/grpc-js";
/**
 * Update service provides ways to update indexed vectors.
 *
 * @generated from protobuf service vald.v1.Update
 */
export interface IUpdateClient {
    /**
     * A method to update an indexed vector.
     *
     * @generated from protobuf rpc: Update(payload.v1.Update.Request) returns (payload.v1.Object.Location);
     */
    update(input: Update_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    update(input: Update_Request, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    update(input: Update_Request, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    update(input: Update_Request, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    /**
     * A method to update multiple indexed vectors by bidirectional streaming.
     *
     * @generated from protobuf rpc: StreamUpdate(stream payload.v1.Update.Request) returns (stream payload.v1.Object.StreamLocation);
     */
    streamUpdate(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<Update_Request, Object_StreamLocation>;
    streamUpdate(options?: grpc.CallOptions): grpc.ClientDuplexStream<Update_Request, Object_StreamLocation>;
    /**
     * A method to update multiple indexed vectors in a single request.
     *
     * @generated from protobuf rpc: MultiUpdate(payload.v1.Update.MultiRequest) returns (payload.v1.Object.Locations);
     */
    multiUpdate(input: Update_MultiRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
    multiUpdate(input: Update_MultiRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
    multiUpdate(input: Update_MultiRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
    multiUpdate(input: Update_MultiRequest, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
    /**
     * A method to update timestamp an indexed vector.
     *
     * @generated from protobuf rpc: UpdateTimestamp(payload.v1.Update.TimestampRequest) returns (payload.v1.Object.Location);
     */
    updateTimestamp(input: Update_TimestampRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    updateTimestamp(input: Update_TimestampRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    updateTimestamp(input: Update_TimestampRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    updateTimestamp(input: Update_TimestampRequest, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
}
/**
 * Update service provides ways to update indexed vectors.
 *
 * @generated from protobuf service vald.v1.Update
 */
export declare class UpdateClient extends grpc.Client implements IUpdateClient {
    private readonly _binaryOptions;
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: grpc.ClientOptions, binaryOptions?: Partial<BinaryReadOptions & BinaryWriteOptions>);
    /**
     * A method to update an indexed vector.
     *
     * @generated from protobuf rpc: Update(payload.v1.Update.Request) returns (payload.v1.Object.Location);
     */
    update(input: Update_Request, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Location) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Location) => void), callback?: ((err: grpc.ServiceError | null, value?: Object_Location) => void)): grpc.ClientUnaryCall;
    /**
     * A method to update multiple indexed vectors by bidirectional streaming.
     *
     * @generated from protobuf rpc: StreamUpdate(stream payload.v1.Update.Request) returns (stream payload.v1.Object.StreamLocation);
     */
    streamUpdate(metadata?: grpc.Metadata | grpc.CallOptions, options?: grpc.CallOptions): grpc.ClientDuplexStream<Update_Request, Object_StreamLocation>;
    /**
     * A method to update multiple indexed vectors in a single request.
     *
     * @generated from protobuf rpc: MultiUpdate(payload.v1.Update.MultiRequest) returns (payload.v1.Object.Locations);
     */
    multiUpdate(input: Update_MultiRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Locations) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Locations) => void), callback?: ((err: grpc.ServiceError | null, value?: Object_Locations) => void)): grpc.ClientUnaryCall;
    /**
     * A method to update timestamp an indexed vector.
     *
     * @generated from protobuf rpc: UpdateTimestamp(payload.v1.Update.TimestampRequest) returns (payload.v1.Object.Location);
     */
    updateTimestamp(input: Update_TimestampRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Location) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Location) => void), callback?: ((err: grpc.ServiceError | null, value?: Object_Location) => void)): grpc.ClientUnaryCall;
}
