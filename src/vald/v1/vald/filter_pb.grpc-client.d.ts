/* eslint-disable */
// @generated by protobuf-ts 2.11.1 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "vald/v1/vald/filter.proto" (package "vald.v1", syntax proto3)
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
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { Upsert_MultiObjectRequest } from "../payload/payload_pb";
import type { Upsert_ObjectRequest } from "../payload/payload_pb";
import type { Update_MultiObjectRequest } from "../payload/payload_pb";
import type { Update_ObjectRequest } from "../payload/payload_pb";
import type { Object_Locations } from "../payload/payload_pb";
import type { Insert_MultiObjectRequest } from "../payload/payload_pb";
import type { Object_StreamLocation } from "../payload/payload_pb";
import type { Object_Location } from "../payload/payload_pb";
import type { Insert_ObjectRequest } from "../payload/payload_pb";
import type { Search_StreamResponse } from "../payload/payload_pb";
import type { Search_Responses } from "../payload/payload_pb";
import type { Search_MultiObjectRequest } from "../payload/payload_pb";
import type { Search_Response } from "../payload/payload_pb";
import type { Search_ObjectRequest } from "../payload/payload_pb";
import * as grpc from "@grpc/grpc-js";
/**
 * Overview
 * Filter Server is responsible for providing insert, update, upsert and search interface for `Vald Filter Gateway`.
 *
 * Vald Filter Gateway forward user request to user-defined ingress/egress filter components allowing user to run custom logic.
 *
 * @generated from protobuf service vald.v1.Filter
 */
export interface IFilterClient {
    /**
     * Overview
     * SearchObject RPC is the method to search object(s) similar to request object.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: SearchObject
     */
    searchObject(input: Search_ObjectRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Search_Response) => void): grpc.ClientUnaryCall;
    searchObject(input: Search_ObjectRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: Search_Response) => void): grpc.ClientUnaryCall;
    searchObject(input: Search_ObjectRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Search_Response) => void): grpc.ClientUnaryCall;
    searchObject(input: Search_ObjectRequest, callback: (err: grpc.ServiceError | null, value?: Search_Response) => void): grpc.ClientUnaryCall;
    /**
     * Overview
     * StreamSearchObject RPC is the method to search vectors with multi queries(objects) using the [bidirectional streaming RPC](https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc).<br>
     * By using the bidirectional streaming RPC, the search request can be communicated in any order between client and server.
     * Each Search request and response are independent.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: MultiSearchObject
     */
    multiSearchObject(input: Search_MultiObjectRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Search_Responses) => void): grpc.ClientUnaryCall;
    multiSearchObject(input: Search_MultiObjectRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: Search_Responses) => void): grpc.ClientUnaryCall;
    multiSearchObject(input: Search_MultiObjectRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Search_Responses) => void): grpc.ClientUnaryCall;
    multiSearchObject(input: Search_MultiObjectRequest, callback: (err: grpc.ServiceError | null, value?: Search_Responses) => void): grpc.ClientUnaryCall;
    /**
     * Overview
     * MultiSearchObject RPC is the method to search objects with multiple objects in **1** request.
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
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: StreamSearchObject
     */
    streamSearchObject(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<Search_ObjectRequest, Search_StreamResponse>;
    streamSearchObject(options?: grpc.CallOptions): grpc.ClientDuplexStream<Search_ObjectRequest, Search_StreamResponse>;
    /**
     * Overview
     * InsertObject RPC is the method to insert object through Vald Filter Gateway.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: InsertObject
     */
    insertObject(input: Insert_ObjectRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    insertObject(input: Insert_ObjectRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    insertObject(input: Insert_ObjectRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    insertObject(input: Insert_ObjectRequest, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    /**
     * Overview
     * StreamInsertObject RPC is the method to add new multiple object using the [bidirectional streaming RPC](https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc).
     *
     * By using the bidirectional streaming RPC, the insert request can be communicated in any order between client and server.
     * Each Insert request and response are independent.
     * It's the recommended method to insert a large number of objects.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: StreamInsertObject
     */
    streamInsertObject(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<Insert_ObjectRequest, Object_StreamLocation>;
    streamInsertObject(options?: grpc.CallOptions): grpc.ClientDuplexStream<Insert_ObjectRequest, Object_StreamLocation>;
    /**
     * Overview
     * MultiInsertObject RPC is the method to add multiple new objects in **1** request.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: MultiInsertObject
     */
    multiInsertObject(input: Insert_MultiObjectRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
    multiInsertObject(input: Insert_MultiObjectRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
    multiInsertObject(input: Insert_MultiObjectRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
    multiInsertObject(input: Insert_MultiObjectRequest, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
    /**
     * Overview
     * UpdateObject RPC is the method to update a single vector.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: UpdateObject
     */
    updateObject(input: Update_ObjectRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    updateObject(input: Update_ObjectRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    updateObject(input: Update_ObjectRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    updateObject(input: Update_ObjectRequest, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    /**
     * Overview
     * StreamUpdateObject RPC is the method to update multiple objects using the [bidirectional streaming RPC](https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc).<br>
     * By using the bidirectional streaming RPC, the update request can be communicated in any order between client and server.
     * Each Update request and response are independent.
     * It's the recommended method to update the large amount of objects.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: StreamUpdateObject
     */
    streamUpdateObject(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<Update_ObjectRequest, Object_StreamLocation>;
    streamUpdateObject(options?: grpc.CallOptions): grpc.ClientDuplexStream<Update_ObjectRequest, Object_StreamLocation>;
    /**
     * Overview
     * MultiUpdateObject is the method to update multiple objects in **1** request.
     *
     * <div class="notice">
     * gRPC has the message size limitation.<br>
     * Please be careful that the size of the request exceed the limit.
     * </div>
     * ---
     * Status Code
     *
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: MultiUpdateObject
     */
    multiUpdateObject(input: Update_MultiObjectRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
    multiUpdateObject(input: Update_MultiObjectRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
    multiUpdateObject(input: Update_MultiObjectRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
    multiUpdateObject(input: Update_MultiObjectRequest, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
    /**
     * Overview
     * UpsertObject RPC is the method to update a single object and add a new single object.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: UpsertObject
     */
    upsertObject(input: Upsert_ObjectRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    upsertObject(input: Upsert_ObjectRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    upsertObject(input: Upsert_ObjectRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    upsertObject(input: Upsert_ObjectRequest, callback: (err: grpc.ServiceError | null, value?: Object_Location) => void): grpc.ClientUnaryCall;
    /**
     * Overview
     * UpsertObject RPC is the method to update a single object and add a new single object.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: StreamUpsertObject
     */
    streamUpsertObject(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<Upsert_ObjectRequest, Object_StreamLocation>;
    streamUpsertObject(options?: grpc.CallOptions): grpc.ClientDuplexStream<Upsert_ObjectRequest, Object_StreamLocation>;
    /**
     * Overview
     * MultiUpsertObject is the method to update existing multiple objects and add new multiple objects in **1** request.
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
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: MultiUpsertObject
     */
    multiUpsertObject(input: Upsert_MultiObjectRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
    multiUpsertObject(input: Upsert_MultiObjectRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
    multiUpsertObject(input: Upsert_MultiObjectRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
    multiUpsertObject(input: Upsert_MultiObjectRequest, callback: (err: grpc.ServiceError | null, value?: Object_Locations) => void): grpc.ClientUnaryCall;
}
/**
 * Overview
 * Filter Server is responsible for providing insert, update, upsert and search interface for `Vald Filter Gateway`.
 *
 * Vald Filter Gateway forward user request to user-defined ingress/egress filter components allowing user to run custom logic.
 *
 * @generated from protobuf service vald.v1.Filter
 */
export declare class FilterClient extends grpc.Client implements IFilterClient {
    private readonly _binaryOptions;
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: grpc.ClientOptions, binaryOptions?: Partial<BinaryReadOptions & BinaryWriteOptions>);
    /**
     * Overview
     * SearchObject RPC is the method to search object(s) similar to request object.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: SearchObject
     */
    searchObject(input: Search_ObjectRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Search_Response) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Search_Response) => void), callback?: ((err: grpc.ServiceError | null, value?: Search_Response) => void)): grpc.ClientUnaryCall;
    /**
     * Overview
     * StreamSearchObject RPC is the method to search vectors with multi queries(objects) using the [bidirectional streaming RPC](https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc).<br>
     * By using the bidirectional streaming RPC, the search request can be communicated in any order between client and server.
     * Each Search request and response are independent.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: MultiSearchObject
     */
    multiSearchObject(input: Search_MultiObjectRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Search_Responses) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Search_Responses) => void), callback?: ((err: grpc.ServiceError | null, value?: Search_Responses) => void)): grpc.ClientUnaryCall;
    /**
     * Overview
     * MultiSearchObject RPC is the method to search objects with multiple objects in **1** request.
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
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: StreamSearchObject
     */
    streamSearchObject(metadata?: grpc.Metadata | grpc.CallOptions, options?: grpc.CallOptions): grpc.ClientDuplexStream<Search_ObjectRequest, Search_StreamResponse>;
    /**
     * Overview
     * InsertObject RPC is the method to insert object through Vald Filter Gateway.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: InsertObject
     */
    insertObject(input: Insert_ObjectRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Location) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Location) => void), callback?: ((err: grpc.ServiceError | null, value?: Object_Location) => void)): grpc.ClientUnaryCall;
    /**
     * Overview
     * StreamInsertObject RPC is the method to add new multiple object using the [bidirectional streaming RPC](https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc).
     *
     * By using the bidirectional streaming RPC, the insert request can be communicated in any order between client and server.
     * Each Insert request and response are independent.
     * It's the recommended method to insert a large number of objects.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: StreamInsertObject
     */
    streamInsertObject(metadata?: grpc.Metadata | grpc.CallOptions, options?: grpc.CallOptions): grpc.ClientDuplexStream<Insert_ObjectRequest, Object_StreamLocation>;
    /**
     * Overview
     * MultiInsertObject RPC is the method to add multiple new objects in **1** request.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: MultiInsertObject
     */
    multiInsertObject(input: Insert_MultiObjectRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Locations) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Locations) => void), callback?: ((err: grpc.ServiceError | null, value?: Object_Locations) => void)): grpc.ClientUnaryCall;
    /**
     * Overview
     * UpdateObject RPC is the method to update a single vector.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: UpdateObject
     */
    updateObject(input: Update_ObjectRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Location) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Location) => void), callback?: ((err: grpc.ServiceError | null, value?: Object_Location) => void)): grpc.ClientUnaryCall;
    /**
     * Overview
     * StreamUpdateObject RPC is the method to update multiple objects using the [bidirectional streaming RPC](https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc).<br>
     * By using the bidirectional streaming RPC, the update request can be communicated in any order between client and server.
     * Each Update request and response are independent.
     * It's the recommended method to update the large amount of objects.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: StreamUpdateObject
     */
    streamUpdateObject(metadata?: grpc.Metadata | grpc.CallOptions, options?: grpc.CallOptions): grpc.ClientDuplexStream<Update_ObjectRequest, Object_StreamLocation>;
    /**
     * Overview
     * MultiUpdateObject is the method to update multiple objects in **1** request.
     *
     * <div class="notice">
     * gRPC has the message size limitation.<br>
     * Please be careful that the size of the request exceed the limit.
     * </div>
     * ---
     * Status Code
     *
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: MultiUpdateObject
     */
    multiUpdateObject(input: Update_MultiObjectRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Locations) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Locations) => void), callback?: ((err: grpc.ServiceError | null, value?: Object_Locations) => void)): grpc.ClientUnaryCall;
    /**
     * Overview
     * UpsertObject RPC is the method to update a single object and add a new single object.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: UpsertObject
     */
    upsertObject(input: Upsert_ObjectRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Location) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Location) => void), callback?: ((err: grpc.ServiceError | null, value?: Object_Location) => void)): grpc.ClientUnaryCall;
    /**
     * Overview
     * UpsertObject RPC is the method to update a single object and add a new single object.
     * ---
     * Status Code
     * |  0   | OK                |
     * |  1   | CANCELLED         |
     * |  3   | INVALID_ARGUMENT  |
     * |  4   | DEADLINE_EXCEEDED |
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: StreamUpsertObject
     */
    streamUpsertObject(metadata?: grpc.Metadata | grpc.CallOptions, options?: grpc.CallOptions): grpc.ClientDuplexStream<Upsert_ObjectRequest, Object_StreamLocation>;
    /**
     * Overview
     * MultiUpsertObject is the method to update existing multiple objects and add new multiple objects in **1** request.
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
     * |  6   | ALREADY_EXISTS    |
     * |  13  | INTERNAL          |
     *
     * @generated from protobuf rpc: MultiUpsertObject
     */
    multiUpsertObject(input: Upsert_MultiObjectRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Locations) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: Object_Locations) => void), callback?: ((err: grpc.ServiceError | null, value?: Object_Locations) => void)): grpc.ClientUnaryCall;
}
