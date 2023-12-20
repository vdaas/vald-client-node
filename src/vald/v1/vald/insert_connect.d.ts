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

// @generated by protoc-gen-connect-es v1.2.0
// @generated from file vald/v1/vald/insert.proto (package vald.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Insert_MultiRequest, Insert_Request, Object_Location, Object_Locations, Object_StreamLocation } from "../payload/payload_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Insert service provides ways to add new vectors.
 *
 * @generated from service vald.v1.Insert
 */
export declare const Insert: {
  readonly typeName: "vald.v1.Insert",
  readonly methods: {
    /**
     * A method to add a new single vector.
     *
     * @generated from rpc vald.v1.Insert.Insert
     */
    readonly insert: {
      readonly name: "Insert",
      readonly I: typeof Insert_Request,
      readonly O: typeof Object_Location,
      readonly kind: MethodKind.Unary,
    },
    /**
     * A method to add new multiple vectors by bidirectional streaming.
     *
     * @generated from rpc vald.v1.Insert.StreamInsert
     */
    readonly streamInsert: {
      readonly name: "StreamInsert",
      readonly I: typeof Insert_Request,
      readonly O: typeof Object_StreamLocation,
      readonly kind: MethodKind.BiDiStreaming,
    },
    /**
     * A method to add new multiple vectors in a single request.
     *
     * @generated from rpc vald.v1.Insert.MultiInsert
     */
    readonly multiInsert: {
      readonly name: "MultiInsert",
      readonly I: typeof Insert_MultiRequest,
      readonly O: typeof Object_Locations,
      readonly kind: MethodKind.Unary,
    },
  }
};

