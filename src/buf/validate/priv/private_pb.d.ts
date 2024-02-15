/* eslint-disable */
// @generated by protobuf-ts 2.9.3 with parameter add_pb_suffix,client_grpc1,generate_dependencies,keep_enum_prefix,ts_nocheck,use_proto_field_name,output_javascript,output_legacy_commonjs,eslint_disable
// @generated from protobuf file "buf/validate/priv/private.proto" (package "buf.validate.priv", syntax proto3)
// tslint:disable
// @ts-nocheck
//
// Copyright 2023 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * Do not use. Internal to protovalidate library
 *
 * @generated from protobuf message buf.validate.priv.FieldConstraints
 */
export interface FieldConstraints {
    /**
     * @generated from protobuf field: repeated buf.validate.priv.Constraint cel = 1;
     */
    cel: Constraint[];
}
/**
 * Do not use. Internal to protovalidate library
 *
 * @generated from protobuf message buf.validate.priv.Constraint
 */
export interface Constraint {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string message = 2;
     */
    message: string;
    /**
     * @generated from protobuf field: string expression = 3;
     */
    expression: string;
}
declare class FieldConstraints$Type extends MessageType<FieldConstraints> {
    constructor();
    create(value?: PartialMessage<FieldConstraints>): FieldConstraints;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FieldConstraints): FieldConstraints;
    internalBinaryWrite(message: FieldConstraints, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message buf.validate.priv.FieldConstraints
 */
export declare const FieldConstraints: FieldConstraints$Type;
declare class Constraint$Type extends MessageType<Constraint> {
    constructor();
    create(value?: PartialMessage<Constraint>): Constraint;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Constraint): Constraint;
    internalBinaryWrite(message: Constraint, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message buf.validate.priv.Constraint
 */
export declare const Constraint: Constraint$Type;
export {};