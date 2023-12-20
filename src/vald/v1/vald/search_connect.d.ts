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
// @generated from file vald/v1/vald/search.proto (package vald.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Search_IDRequest, Search_MultiIDRequest, Search_MultiRequest, Search_Request, Search_Response, Search_Responses, Search_StreamResponse } from "../payload/payload_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Search service provides ways to search indexed vectors.
 *
 * @generated from service vald.v1.Search
 */
export declare const Search: {
  readonly typeName: "vald.v1.Search",
  readonly methods: {
    /**
     * A method to search indexed vectors by a raw vector.
     *
     * @generated from rpc vald.v1.Search.Search
     */
    readonly search: {
      readonly name: "Search",
      readonly I: typeof Search_Request,
      readonly O: typeof Search_Response,
      readonly kind: MethodKind.Unary,
    },
    /**
     * A method to search indexed vectors by ID.
     *
     * @generated from rpc vald.v1.Search.SearchByID
     */
    readonly searchByID: {
      readonly name: "SearchByID",
      readonly I: typeof Search_IDRequest,
      readonly O: typeof Search_Response,
      readonly kind: MethodKind.Unary,
    },
    /**
     * A method to search indexed vectors by multiple vectors.
     *
     * @generated from rpc vald.v1.Search.StreamSearch
     */
    readonly streamSearch: {
      readonly name: "StreamSearch",
      readonly I: typeof Search_Request,
      readonly O: typeof Search_StreamResponse,
      readonly kind: MethodKind.BiDiStreaming,
    },
    /**
     * A method to search indexed vectors by multiple IDs.
     *
     * @generated from rpc vald.v1.Search.StreamSearchByID
     */
    readonly streamSearchByID: {
      readonly name: "StreamSearchByID",
      readonly I: typeof Search_IDRequest,
      readonly O: typeof Search_StreamResponse,
      readonly kind: MethodKind.BiDiStreaming,
    },
    /**
     * A method to search indexed vectors by multiple vectors in a single request.
     *
     * @generated from rpc vald.v1.Search.MultiSearch
     */
    readonly multiSearch: {
      readonly name: "MultiSearch",
      readonly I: typeof Search_MultiRequest,
      readonly O: typeof Search_Responses,
      readonly kind: MethodKind.Unary,
    },
    /**
     * A method to search indexed vectors by multiple IDs in a single request.
     *
     * @generated from rpc vald.v1.Search.MultiSearchByID
     */
    readonly multiSearchByID: {
      readonly name: "MultiSearchByID",
      readonly I: typeof Search_MultiIDRequest,
      readonly O: typeof Search_Responses,
      readonly kind: MethodKind.Unary,
    },
    /**
     * A method to linear search indexed vectors by a raw vector.
     *
     * @generated from rpc vald.v1.Search.LinearSearch
     */
    readonly linearSearch: {
      readonly name: "LinearSearch",
      readonly I: typeof Search_Request,
      readonly O: typeof Search_Response,
      readonly kind: MethodKind.Unary,
    },
    /**
     * A method to linear search indexed vectors by ID.
     *
     * @generated from rpc vald.v1.Search.LinearSearchByID
     */
    readonly linearSearchByID: {
      readonly name: "LinearSearchByID",
      readonly I: typeof Search_IDRequest,
      readonly O: typeof Search_Response,
      readonly kind: MethodKind.Unary,
    },
    /**
     * A method to linear search indexed vectors by multiple vectors.
     *
     * @generated from rpc vald.v1.Search.StreamLinearSearch
     */
    readonly streamLinearSearch: {
      readonly name: "StreamLinearSearch",
      readonly I: typeof Search_Request,
      readonly O: typeof Search_StreamResponse,
      readonly kind: MethodKind.BiDiStreaming,
    },
    /**
     * A method to linear search indexed vectors by multiple IDs.
     *
     * @generated from rpc vald.v1.Search.StreamLinearSearchByID
     */
    readonly streamLinearSearchByID: {
      readonly name: "StreamLinearSearchByID",
      readonly I: typeof Search_IDRequest,
      readonly O: typeof Search_StreamResponse,
      readonly kind: MethodKind.BiDiStreaming,
    },
    /**
     * A method to linear search indexed vectors by multiple vectors in a single
     * request.
     *
     * @generated from rpc vald.v1.Search.MultiLinearSearch
     */
    readonly multiLinearSearch: {
      readonly name: "MultiLinearSearch",
      readonly I: typeof Search_MultiRequest,
      readonly O: typeof Search_Responses,
      readonly kind: MethodKind.Unary,
    },
    /**
     * A method to linear search indexed vectors by multiple IDs in a single
     * request.
     *
     * @generated from rpc vald.v1.Search.MultiLinearSearchByID
     */
    readonly multiLinearSearchByID: {
      readonly name: "MultiLinearSearchByID",
      readonly I: typeof Search_MultiIDRequest,
      readonly O: typeof Search_Responses,
      readonly kind: MethodKind.Unary,
    },
  }
};

