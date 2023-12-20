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
// @generated from file vald/v1/vald/object.proto (package vald.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Object_ID, Object_List_Request, Object_List_Response, Object_StreamVector, Object_Vector, Object_VectorRequest } from "../payload/payload_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Object service provides ways to fetch indexed vectors.
 *
 * @generated from service vald.v1.Object
 */
export const Object$ = {
  typeName: "vald.v1.Object",
  methods: {
    /**
     * A method to check whether a specified ID is indexed or not.
     *
     * @generated from rpc vald.v1.Object.Exists
     */
    exists: {
      name: "Exists",
      I: Object_ID,
      O: Object_ID,
      kind: MethodKind.Unary,
    },
    /**
     * A method to fetch a vector.
     *
     * @generated from rpc vald.v1.Object.GetObject
     */
    getObject: {
      name: "GetObject",
      I: Object_VectorRequest,
      O: Object_Vector,
      kind: MethodKind.Unary,
    },
    /**
     * A method to fetch vectors by bidirectional streaming.
     *
     * @generated from rpc vald.v1.Object.StreamGetObject
     */
    streamGetObject: {
      name: "StreamGetObject",
      I: Object_VectorRequest,
      O: Object_StreamVector,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * A method to get all the vectors with server streaming
     *
     * @generated from rpc vald.v1.Object.StreamListObject
     */
    streamListObject: {
      name: "StreamListObject",
      I: Object_List_Request,
      O: Object_List_Response,
      kind: MethodKind.ServerStreaming,
    },
  }
};

