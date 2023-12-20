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
// @generated from file vald/v1/vald/update.proto (package vald.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Object_Location, Object_Locations, Object_StreamLocation, Update_MultiRequest, Update_Request } from "../payload/payload_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Update service provides ways to update indexed vectors.
 *
 * @generated from service vald.v1.Update
 */
export declare const Update: {
  readonly typeName: "vald.v1.Update",
  readonly methods: {
    /**
     * A method to update an indexed vector.
     *
     * @generated from rpc vald.v1.Update.Update
     */
    readonly update: {
      readonly name: "Update",
      readonly I: typeof Update_Request,
      readonly O: typeof Object_Location,
      readonly kind: MethodKind.Unary,
    },
    /**
     * A method to update multiple indexed vectors by bidirectional streaming.
     *
     * @generated from rpc vald.v1.Update.StreamUpdate
     */
    readonly streamUpdate: {
      readonly name: "StreamUpdate",
      readonly I: typeof Update_Request,
      readonly O: typeof Object_StreamLocation,
      readonly kind: MethodKind.BiDiStreaming,
    },
    /**
     * A method to update multiple indexed vectors in a single request.
     *
     * @generated from rpc vald.v1.Update.MultiUpdate
     */
    readonly multiUpdate: {
      readonly name: "MultiUpdate",
      readonly I: typeof Update_MultiRequest,
      readonly O: typeof Object_Locations,
      readonly kind: MethodKind.Unary,
    },
  }
};

