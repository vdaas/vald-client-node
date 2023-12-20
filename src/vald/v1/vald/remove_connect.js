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
// @generated from file vald/v1/vald/remove.proto (package vald.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Object_Location, Object_Locations, Object_StreamLocation, Remove_MultiRequest, Remove_Request, Remove_TimestampRequest } from "../payload/payload_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Remove service provides ways to remove indexed vectors.
 *
 * @generated from service vald.v1.Remove
 */
export const Remove = {
  typeName: "vald.v1.Remove",
  methods: {
    /**
     * A method to remove an indexed vector.
     *
     * @generated from rpc vald.v1.Remove.Remove
     */
    remove: {
      name: "Remove",
      I: Remove_Request,
      O: Object_Location,
      kind: MethodKind.Unary,
    },
    /**
     * A method to remove an indexed vector based on timestamp.
     *
     * @generated from rpc vald.v1.Remove.RemoveByTimestamp
     */
    removeByTimestamp: {
      name: "RemoveByTimestamp",
      I: Remove_TimestampRequest,
      O: Object_Locations,
      kind: MethodKind.Unary,
    },
    /**
     * A method to remove multiple indexed vectors by bidirectional streaming.
     *
     * @generated from rpc vald.v1.Remove.StreamRemove
     */
    streamRemove: {
      name: "StreamRemove",
      I: Remove_Request,
      O: Object_StreamLocation,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * A method to remove multiple indexed vectors in a single request.
     *
     * @generated from rpc vald.v1.Remove.MultiRemove
     */
    multiRemove: {
      name: "MultiRemove",
      I: Remove_MultiRequest,
      O: Object_Locations,
      kind: MethodKind.Unary,
    },
  }
};

