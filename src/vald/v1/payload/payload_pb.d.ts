// package: payload.v1
// file: vald/v1/payload/payload.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../../validate/validate_pb";
import * as google_rpc_status_pb from "../../../google/rpc/status_pb";
import * as vtproto_ext_pb from "../../../vtproto/ext_pb";

export class Search extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Search.AsObject;
  static toObject(includeInstance: boolean, msg: Search): Search.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Search, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Search;
  static deserializeBinaryFromReader(message: Search, reader: jspb.BinaryReader): Search;
}

export namespace Search {
  export type AsObject = {
  }

  export class Request extends jspb.Message {
    clearVectorList(): void;
    getVectorList(): Array<number>;
    setVectorList(value: Array<number>): void;
    addVector(value: number, index?: number): number;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): Search.Config | undefined;
    setConfig(value?: Search.Config): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
  }

  export namespace Request {
    export type AsObject = {
      vectorList: Array<number>,
      config?: Search.Config.AsObject,
    }
  }

  export class MultiRequest extends jspb.Message {
    clearRequestsList(): void;
    getRequestsList(): Array<Search.Request>;
    setRequestsList(value: Array<Search.Request>): void;
    addRequests(value?: Search.Request, index?: number): Search.Request;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MultiRequest): MultiRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiRequest;
    static deserializeBinaryFromReader(message: MultiRequest, reader: jspb.BinaryReader): MultiRequest;
  }

  export namespace MultiRequest {
    export type AsObject = {
      requestsList: Array<Search.Request.AsObject>,
    }
  }

  export class IDRequest extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): Search.Config | undefined;
    setConfig(value?: Search.Config): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: IDRequest): IDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IDRequest;
    static deserializeBinaryFromReader(message: IDRequest, reader: jspb.BinaryReader): IDRequest;
  }

  export namespace IDRequest {
    export type AsObject = {
      id: string,
      config?: Search.Config.AsObject,
    }
  }

  export class MultiIDRequest extends jspb.Message {
    clearRequestsList(): void;
    getRequestsList(): Array<Search.IDRequest>;
    setRequestsList(value: Array<Search.IDRequest>): void;
    addRequests(value?: Search.IDRequest, index?: number): Search.IDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MultiIDRequest): MultiIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiIDRequest;
    static deserializeBinaryFromReader(message: MultiIDRequest, reader: jspb.BinaryReader): MultiIDRequest;
  }

  export namespace MultiIDRequest {
    export type AsObject = {
      requestsList: Array<Search.IDRequest.AsObject>,
    }
  }

  export class ObjectRequest extends jspb.Message {
    getObject(): Uint8Array | string;
    getObject_asU8(): Uint8Array;
    getObject_asB64(): string;
    setObject(value: Uint8Array | string): void;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): Search.Config | undefined;
    setConfig(value?: Search.Config): void;

    hasVectorizer(): boolean;
    clearVectorizer(): void;
    getVectorizer(): Filter.Target | undefined;
    setVectorizer(value?: Filter.Target): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ObjectRequest): ObjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObjectRequest;
    static deserializeBinaryFromReader(message: ObjectRequest, reader: jspb.BinaryReader): ObjectRequest;
  }

  export namespace ObjectRequest {
    export type AsObject = {
      object: Uint8Array | string,
      config?: Search.Config.AsObject,
      vectorizer?: Filter.Target.AsObject,
    }
  }

  export class MultiObjectRequest extends jspb.Message {
    clearRequestsList(): void;
    getRequestsList(): Array<Search.ObjectRequest>;
    setRequestsList(value: Array<Search.ObjectRequest>): void;
    addRequests(value?: Search.ObjectRequest, index?: number): Search.ObjectRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiObjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MultiObjectRequest): MultiObjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiObjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiObjectRequest;
    static deserializeBinaryFromReader(message: MultiObjectRequest, reader: jspb.BinaryReader): MultiObjectRequest;
  }

  export namespace MultiObjectRequest {
    export type AsObject = {
      requestsList: Array<Search.ObjectRequest.AsObject>,
    }
  }

  export class Config extends jspb.Message {
    getRequestId(): string;
    setRequestId(value: string): void;

    getNum(): number;
    setNum(value: number): void;

    getRadius(): number;
    setRadius(value: number): void;

    getEpsilon(): number;
    setEpsilon(value: number): void;

    getTimeout(): number;
    setTimeout(value: number): void;

    hasIngressFilters(): boolean;
    clearIngressFilters(): void;
    getIngressFilters(): Filter.Config | undefined;
    setIngressFilters(value?: Filter.Config): void;

    hasEgressFilters(): boolean;
    clearEgressFilters(): void;
    getEgressFilters(): Filter.Config | undefined;
    setEgressFilters(value?: Filter.Config): void;

    getMinNum(): number;
    setMinNum(value: number): void;

    getAggregationAlgorithm(): Search.AggregationAlgorithmMap[keyof Search.AggregationAlgorithmMap];
    setAggregationAlgorithm(value: Search.AggregationAlgorithmMap[keyof Search.AggregationAlgorithmMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Config.AsObject;
    static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Config;
    static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
  }

  export namespace Config {
    export type AsObject = {
      requestId: string,
      num: number,
      radius: number,
      epsilon: number,
      timeout: number,
      ingressFilters?: Filter.Config.AsObject,
      egressFilters?: Filter.Config.AsObject,
      minNum: number,
      aggregationAlgorithm: Search.AggregationAlgorithmMap[keyof Search.AggregationAlgorithmMap],
    }
  }

  export class Response extends jspb.Message {
    getRequestId(): string;
    setRequestId(value: string): void;

    clearResultsList(): void;
    getResultsList(): Array<Object.Distance>;
    setResultsList(value: Array<Object.Distance>): void;
    addResults(value?: Object.Distance, index?: number): Object.Distance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
  }

  export namespace Response {
    export type AsObject = {
      requestId: string,
      resultsList: Array<Object.Distance.AsObject>,
    }
  }

  export class Responses extends jspb.Message {
    clearResponsesList(): void;
    getResponsesList(): Array<Search.Response>;
    setResponsesList(value: Array<Search.Response>): void;
    addResponses(value?: Search.Response, index?: number): Search.Response;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Responses.AsObject;
    static toObject(includeInstance: boolean, msg: Responses): Responses.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Responses, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Responses;
    static deserializeBinaryFromReader(message: Responses, reader: jspb.BinaryReader): Responses;
  }

  export namespace Responses {
    export type AsObject = {
      responsesList: Array<Search.Response.AsObject>,
    }
  }

  export class StreamResponse extends jspb.Message {
    hasResponse(): boolean;
    clearResponse(): void;
    getResponse(): Search.Response | undefined;
    setResponse(value?: Search.Response): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_rpc_status_pb.Status | undefined;
    setStatus(value?: google_rpc_status_pb.Status): void;

    getPayloadCase(): StreamResponse.PayloadCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamResponse): StreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamResponse;
    static deserializeBinaryFromReader(message: StreamResponse, reader: jspb.BinaryReader): StreamResponse;
  }

  export namespace StreamResponse {
    export type AsObject = {
      response?: Search.Response.AsObject,
      status?: google_rpc_status_pb.Status.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      RESPONSE = 1,
      STATUS = 2,
    }
  }

  export interface AggregationAlgorithmMap {
    UNKNOWN: 0;
    CONCURRENTQUEUE: 1;
    SORTSLICE: 2;
    SORTPOOLSLICE: 3;
    PAIRINGHEAP: 4;
  }

  export const AggregationAlgorithm: AggregationAlgorithmMap;
}

export class Filter extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
  }

  export class Target extends jspb.Message {
    getHost(): string;
    setHost(value: string): void;

    getPort(): number;
    setPort(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Target.AsObject;
    static toObject(includeInstance: boolean, msg: Target): Target.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Target, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Target;
    static deserializeBinaryFromReader(message: Target, reader: jspb.BinaryReader): Target;
  }

  export namespace Target {
    export type AsObject = {
      host: string,
      port: number,
    }
  }

  export class Config extends jspb.Message {
    clearTargetsList(): void;
    getTargetsList(): Array<Filter.Target>;
    setTargetsList(value: Array<Filter.Target>): void;
    addTargets(value?: Filter.Target, index?: number): Filter.Target;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Config.AsObject;
    static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Config;
    static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
  }

  export namespace Config {
    export type AsObject = {
      targetsList: Array<Filter.Target.AsObject>,
    }
  }
}

export class Insert extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Insert.AsObject;
  static toObject(includeInstance: boolean, msg: Insert): Insert.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Insert, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Insert;
  static deserializeBinaryFromReader(message: Insert, reader: jspb.BinaryReader): Insert;
}

export namespace Insert {
  export type AsObject = {
  }

  export class Request extends jspb.Message {
    hasVector(): boolean;
    clearVector(): void;
    getVector(): Object.Vector | undefined;
    setVector(value?: Object.Vector): void;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): Insert.Config | undefined;
    setConfig(value?: Insert.Config): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
  }

  export namespace Request {
    export type AsObject = {
      vector?: Object.Vector.AsObject,
      config?: Insert.Config.AsObject,
    }
  }

  export class MultiRequest extends jspb.Message {
    clearRequestsList(): void;
    getRequestsList(): Array<Insert.Request>;
    setRequestsList(value: Array<Insert.Request>): void;
    addRequests(value?: Insert.Request, index?: number): Insert.Request;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MultiRequest): MultiRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiRequest;
    static deserializeBinaryFromReader(message: MultiRequest, reader: jspb.BinaryReader): MultiRequest;
  }

  export namespace MultiRequest {
    export type AsObject = {
      requestsList: Array<Insert.Request.AsObject>,
    }
  }

  export class ObjectRequest extends jspb.Message {
    hasObject(): boolean;
    clearObject(): void;
    getObject(): Object.Blob | undefined;
    setObject(value?: Object.Blob): void;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): Insert.Config | undefined;
    setConfig(value?: Insert.Config): void;

    hasVectorizer(): boolean;
    clearVectorizer(): void;
    getVectorizer(): Filter.Target | undefined;
    setVectorizer(value?: Filter.Target): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ObjectRequest): ObjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObjectRequest;
    static deserializeBinaryFromReader(message: ObjectRequest, reader: jspb.BinaryReader): ObjectRequest;
  }

  export namespace ObjectRequest {
    export type AsObject = {
      object?: Object.Blob.AsObject,
      config?: Insert.Config.AsObject,
      vectorizer?: Filter.Target.AsObject,
    }
  }

  export class MultiObjectRequest extends jspb.Message {
    clearRequestsList(): void;
    getRequestsList(): Array<Insert.ObjectRequest>;
    setRequestsList(value: Array<Insert.ObjectRequest>): void;
    addRequests(value?: Insert.ObjectRequest, index?: number): Insert.ObjectRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiObjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MultiObjectRequest): MultiObjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiObjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiObjectRequest;
    static deserializeBinaryFromReader(message: MultiObjectRequest, reader: jspb.BinaryReader): MultiObjectRequest;
  }

  export namespace MultiObjectRequest {
    export type AsObject = {
      requestsList: Array<Insert.ObjectRequest.AsObject>,
    }
  }

  export class Config extends jspb.Message {
    getSkipStrictExistCheck(): boolean;
    setSkipStrictExistCheck(value: boolean): void;

    hasFilters(): boolean;
    clearFilters(): void;
    getFilters(): Filter.Config | undefined;
    setFilters(value?: Filter.Config): void;

    getTimestamp(): number;
    setTimestamp(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Config.AsObject;
    static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Config;
    static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
  }

  export namespace Config {
    export type AsObject = {
      skipStrictExistCheck: boolean,
      filters?: Filter.Config.AsObject,
      timestamp: number,
    }
  }
}

export class Update extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Update.AsObject;
  static toObject(includeInstance: boolean, msg: Update): Update.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Update, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Update;
  static deserializeBinaryFromReader(message: Update, reader: jspb.BinaryReader): Update;
}

export namespace Update {
  export type AsObject = {
  }

  export class Request extends jspb.Message {
    hasVector(): boolean;
    clearVector(): void;
    getVector(): Object.Vector | undefined;
    setVector(value?: Object.Vector): void;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): Update.Config | undefined;
    setConfig(value?: Update.Config): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
  }

  export namespace Request {
    export type AsObject = {
      vector?: Object.Vector.AsObject,
      config?: Update.Config.AsObject,
    }
  }

  export class MultiRequest extends jspb.Message {
    clearRequestsList(): void;
    getRequestsList(): Array<Update.Request>;
    setRequestsList(value: Array<Update.Request>): void;
    addRequests(value?: Update.Request, index?: number): Update.Request;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MultiRequest): MultiRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiRequest;
    static deserializeBinaryFromReader(message: MultiRequest, reader: jspb.BinaryReader): MultiRequest;
  }

  export namespace MultiRequest {
    export type AsObject = {
      requestsList: Array<Update.Request.AsObject>,
    }
  }

  export class ObjectRequest extends jspb.Message {
    hasObject(): boolean;
    clearObject(): void;
    getObject(): Object.Blob | undefined;
    setObject(value?: Object.Blob): void;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): Update.Config | undefined;
    setConfig(value?: Update.Config): void;

    hasVectorizer(): boolean;
    clearVectorizer(): void;
    getVectorizer(): Filter.Target | undefined;
    setVectorizer(value?: Filter.Target): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ObjectRequest): ObjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObjectRequest;
    static deserializeBinaryFromReader(message: ObjectRequest, reader: jspb.BinaryReader): ObjectRequest;
  }

  export namespace ObjectRequest {
    export type AsObject = {
      object?: Object.Blob.AsObject,
      config?: Update.Config.AsObject,
      vectorizer?: Filter.Target.AsObject,
    }
  }

  export class MultiObjectRequest extends jspb.Message {
    clearRequestsList(): void;
    getRequestsList(): Array<Update.ObjectRequest>;
    setRequestsList(value: Array<Update.ObjectRequest>): void;
    addRequests(value?: Update.ObjectRequest, index?: number): Update.ObjectRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiObjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MultiObjectRequest): MultiObjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiObjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiObjectRequest;
    static deserializeBinaryFromReader(message: MultiObjectRequest, reader: jspb.BinaryReader): MultiObjectRequest;
  }

  export namespace MultiObjectRequest {
    export type AsObject = {
      requestsList: Array<Update.ObjectRequest.AsObject>,
    }
  }

  export class Config extends jspb.Message {
    getSkipStrictExistCheck(): boolean;
    setSkipStrictExistCheck(value: boolean): void;

    hasFilters(): boolean;
    clearFilters(): void;
    getFilters(): Filter.Config | undefined;
    setFilters(value?: Filter.Config): void;

    getTimestamp(): number;
    setTimestamp(value: number): void;

    getDisableBalancedUpdate(): boolean;
    setDisableBalancedUpdate(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Config.AsObject;
    static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Config;
    static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
  }

  export namespace Config {
    export type AsObject = {
      skipStrictExistCheck: boolean,
      filters?: Filter.Config.AsObject,
      timestamp: number,
      disableBalancedUpdate: boolean,
    }
  }
}

export class Upsert extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Upsert.AsObject;
  static toObject(includeInstance: boolean, msg: Upsert): Upsert.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Upsert, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Upsert;
  static deserializeBinaryFromReader(message: Upsert, reader: jspb.BinaryReader): Upsert;
}

export namespace Upsert {
  export type AsObject = {
  }

  export class Request extends jspb.Message {
    hasVector(): boolean;
    clearVector(): void;
    getVector(): Object.Vector | undefined;
    setVector(value?: Object.Vector): void;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): Upsert.Config | undefined;
    setConfig(value?: Upsert.Config): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
  }

  export namespace Request {
    export type AsObject = {
      vector?: Object.Vector.AsObject,
      config?: Upsert.Config.AsObject,
    }
  }

  export class MultiRequest extends jspb.Message {
    clearRequestsList(): void;
    getRequestsList(): Array<Upsert.Request>;
    setRequestsList(value: Array<Upsert.Request>): void;
    addRequests(value?: Upsert.Request, index?: number): Upsert.Request;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MultiRequest): MultiRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiRequest;
    static deserializeBinaryFromReader(message: MultiRequest, reader: jspb.BinaryReader): MultiRequest;
  }

  export namespace MultiRequest {
    export type AsObject = {
      requestsList: Array<Upsert.Request.AsObject>,
    }
  }

  export class ObjectRequest extends jspb.Message {
    hasObject(): boolean;
    clearObject(): void;
    getObject(): Object.Blob | undefined;
    setObject(value?: Object.Blob): void;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): Upsert.Config | undefined;
    setConfig(value?: Upsert.Config): void;

    hasVectorizer(): boolean;
    clearVectorizer(): void;
    getVectorizer(): Filter.Target | undefined;
    setVectorizer(value?: Filter.Target): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ObjectRequest): ObjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObjectRequest;
    static deserializeBinaryFromReader(message: ObjectRequest, reader: jspb.BinaryReader): ObjectRequest;
  }

  export namespace ObjectRequest {
    export type AsObject = {
      object?: Object.Blob.AsObject,
      config?: Upsert.Config.AsObject,
      vectorizer?: Filter.Target.AsObject,
    }
  }

  export class MultiObjectRequest extends jspb.Message {
    clearRequestsList(): void;
    getRequestsList(): Array<Upsert.ObjectRequest>;
    setRequestsList(value: Array<Upsert.ObjectRequest>): void;
    addRequests(value?: Upsert.ObjectRequest, index?: number): Upsert.ObjectRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiObjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MultiObjectRequest): MultiObjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiObjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiObjectRequest;
    static deserializeBinaryFromReader(message: MultiObjectRequest, reader: jspb.BinaryReader): MultiObjectRequest;
  }

  export namespace MultiObjectRequest {
    export type AsObject = {
      requestsList: Array<Upsert.ObjectRequest.AsObject>,
    }
  }

  export class Config extends jspb.Message {
    getSkipStrictExistCheck(): boolean;
    setSkipStrictExistCheck(value: boolean): void;

    hasFilters(): boolean;
    clearFilters(): void;
    getFilters(): Filter.Config | undefined;
    setFilters(value?: Filter.Config): void;

    getTimestamp(): number;
    setTimestamp(value: number): void;

    getDisableBalancedUpdate(): boolean;
    setDisableBalancedUpdate(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Config.AsObject;
    static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Config;
    static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
  }

  export namespace Config {
    export type AsObject = {
      skipStrictExistCheck: boolean,
      filters?: Filter.Config.AsObject,
      timestamp: number,
      disableBalancedUpdate: boolean,
    }
  }
}

export class Remove extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Remove.AsObject;
  static toObject(includeInstance: boolean, msg: Remove): Remove.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Remove, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Remove;
  static deserializeBinaryFromReader(message: Remove, reader: jspb.BinaryReader): Remove;
}

export namespace Remove {
  export type AsObject = {
  }

  export class Request extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): Object.ID | undefined;
    setId(value?: Object.ID): void;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): Remove.Config | undefined;
    setConfig(value?: Remove.Config): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
  }

  export namespace Request {
    export type AsObject = {
      id?: Object.ID.AsObject,
      config?: Remove.Config.AsObject,
    }
  }

  export class MultiRequest extends jspb.Message {
    clearRequestsList(): void;
    getRequestsList(): Array<Remove.Request>;
    setRequestsList(value: Array<Remove.Request>): void;
    addRequests(value?: Remove.Request, index?: number): Remove.Request;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MultiRequest): MultiRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiRequest;
    static deserializeBinaryFromReader(message: MultiRequest, reader: jspb.BinaryReader): MultiRequest;
  }

  export namespace MultiRequest {
    export type AsObject = {
      requestsList: Array<Remove.Request.AsObject>,
    }
  }

  export class TimestampRequest extends jspb.Message {
    clearTimestampsList(): void;
    getTimestampsList(): Array<Remove.Timestamp>;
    setTimestampsList(value: Array<Remove.Timestamp>): void;
    addTimestamps(value?: Remove.Timestamp, index?: number): Remove.Timestamp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimestampRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TimestampRequest): TimestampRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimestampRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimestampRequest;
    static deserializeBinaryFromReader(message: TimestampRequest, reader: jspb.BinaryReader): TimestampRequest;
  }

  export namespace TimestampRequest {
    export type AsObject = {
      timestampsList: Array<Remove.Timestamp.AsObject>,
    }
  }

  export class Timestamp extends jspb.Message {
    getTimestamp(): number;
    setTimestamp(value: number): void;

    getOperator(): Remove.Timestamp.OperatorMap[keyof Remove.Timestamp.OperatorMap];
    setOperator(value: Remove.Timestamp.OperatorMap[keyof Remove.Timestamp.OperatorMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Timestamp.AsObject;
    static toObject(includeInstance: boolean, msg: Timestamp): Timestamp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Timestamp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Timestamp;
    static deserializeBinaryFromReader(message: Timestamp, reader: jspb.BinaryReader): Timestamp;
  }

  export namespace Timestamp {
    export type AsObject = {
      timestamp: number,
      operator: Remove.Timestamp.OperatorMap[keyof Remove.Timestamp.OperatorMap],
    }

    export interface OperatorMap {
      EQ: 0;
      NE: 1;
      GE: 2;
      GT: 3;
      LE: 4;
      LT: 5;
    }

    export const Operator: OperatorMap;
  }

  export class Config extends jspb.Message {
    getSkipStrictExistCheck(): boolean;
    setSkipStrictExistCheck(value: boolean): void;

    getTimestamp(): number;
    setTimestamp(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Config.AsObject;
    static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Config;
    static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
  }

  export namespace Config {
    export type AsObject = {
      skipStrictExistCheck: boolean,
      timestamp: number,
    }
  }
}

export class Object extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object.AsObject;
  static toObject(includeInstance: boolean, msg: Object): Object.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Object, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Object;
  static deserializeBinaryFromReader(message: Object, reader: jspb.BinaryReader): Object;
}

export namespace Object {
  export type AsObject = {
  }

  export class VectorRequest extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): Object.ID | undefined;
    setId(value?: Object.ID): void;

    hasFilters(): boolean;
    clearFilters(): void;
    getFilters(): Filter.Config | undefined;
    setFilters(value?: Filter.Config): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VectorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VectorRequest): VectorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VectorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VectorRequest;
    static deserializeBinaryFromReader(message: VectorRequest, reader: jspb.BinaryReader): VectorRequest;
  }

  export namespace VectorRequest {
    export type AsObject = {
      id?: Object.ID.AsObject,
      filters?: Filter.Config.AsObject,
    }
  }

  export class Distance extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getDistance(): number;
    setDistance(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Distance.AsObject;
    static toObject(includeInstance: boolean, msg: Distance): Distance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Distance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Distance;
    static deserializeBinaryFromReader(message: Distance, reader: jspb.BinaryReader): Distance;
  }

  export namespace Distance {
    export type AsObject = {
      id: string,
      distance: number,
    }
  }

  export class StreamDistance extends jspb.Message {
    hasDistance(): boolean;
    clearDistance(): void;
    getDistance(): Object.Distance | undefined;
    setDistance(value?: Object.Distance): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_rpc_status_pb.Status | undefined;
    setStatus(value?: google_rpc_status_pb.Status): void;

    getPayloadCase(): StreamDistance.PayloadCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamDistance.AsObject;
    static toObject(includeInstance: boolean, msg: StreamDistance): StreamDistance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamDistance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamDistance;
    static deserializeBinaryFromReader(message: StreamDistance, reader: jspb.BinaryReader): StreamDistance;
  }

  export namespace StreamDistance {
    export type AsObject = {
      distance?: Object.Distance.AsObject,
      status?: google_rpc_status_pb.Status.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      DISTANCE = 1,
      STATUS = 2,
    }
  }

  export class ID extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ID.AsObject;
    static toObject(includeInstance: boolean, msg: ID): ID.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ID, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ID;
    static deserializeBinaryFromReader(message: ID, reader: jspb.BinaryReader): ID;
  }

  export namespace ID {
    export type AsObject = {
      id: string,
    }
  }

  export class IDs extends jspb.Message {
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): void;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IDs.AsObject;
    static toObject(includeInstance: boolean, msg: IDs): IDs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IDs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IDs;
    static deserializeBinaryFromReader(message: IDs, reader: jspb.BinaryReader): IDs;
  }

  export namespace IDs {
    export type AsObject = {
      idsList: Array<string>,
    }
  }

  export class Vector extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    clearVectorList(): void;
    getVectorList(): Array<number>;
    setVectorList(value: Array<number>): void;
    addVector(value: number, index?: number): number;

    getTimestamp(): number;
    setTimestamp(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Vector.AsObject;
    static toObject(includeInstance: boolean, msg: Vector): Vector.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Vector, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Vector;
    static deserializeBinaryFromReader(message: Vector, reader: jspb.BinaryReader): Vector;
  }

  export namespace Vector {
    export type AsObject = {
      id: string,
      vectorList: Array<number>,
      timestamp: number,
    }
  }

  export class Vectors extends jspb.Message {
    clearVectorsList(): void;
    getVectorsList(): Array<Object.Vector>;
    setVectorsList(value: Array<Object.Vector>): void;
    addVectors(value?: Object.Vector, index?: number): Object.Vector;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Vectors.AsObject;
    static toObject(includeInstance: boolean, msg: Vectors): Vectors.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Vectors, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Vectors;
    static deserializeBinaryFromReader(message: Vectors, reader: jspb.BinaryReader): Vectors;
  }

  export namespace Vectors {
    export type AsObject = {
      vectorsList: Array<Object.Vector.AsObject>,
    }
  }

  export class StreamVector extends jspb.Message {
    hasVector(): boolean;
    clearVector(): void;
    getVector(): Object.Vector | undefined;
    setVector(value?: Object.Vector): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_rpc_status_pb.Status | undefined;
    setStatus(value?: google_rpc_status_pb.Status): void;

    getPayloadCase(): StreamVector.PayloadCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamVector.AsObject;
    static toObject(includeInstance: boolean, msg: StreamVector): StreamVector.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamVector, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamVector;
    static deserializeBinaryFromReader(message: StreamVector, reader: jspb.BinaryReader): StreamVector;
  }

  export namespace StreamVector {
    export type AsObject = {
      vector?: Object.Vector.AsObject,
      status?: google_rpc_status_pb.Status.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      VECTOR = 1,
      STATUS = 2,
    }
  }

  export class ReshapeVector extends jspb.Message {
    getObject(): Uint8Array | string;
    getObject_asU8(): Uint8Array;
    getObject_asB64(): string;
    setObject(value: Uint8Array | string): void;

    clearShapeList(): void;
    getShapeList(): Array<number>;
    setShapeList(value: Array<number>): void;
    addShape(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReshapeVector.AsObject;
    static toObject(includeInstance: boolean, msg: ReshapeVector): ReshapeVector.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReshapeVector, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReshapeVector;
    static deserializeBinaryFromReader(message: ReshapeVector, reader: jspb.BinaryReader): ReshapeVector;
  }

  export namespace ReshapeVector {
    export type AsObject = {
      object: Uint8Array | string,
      shapeList: Array<number>,
    }
  }

  export class Blob extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getObject(): Uint8Array | string;
    getObject_asU8(): Uint8Array;
    getObject_asB64(): string;
    setObject(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Blob.AsObject;
    static toObject(includeInstance: boolean, msg: Blob): Blob.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Blob, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Blob;
    static deserializeBinaryFromReader(message: Blob, reader: jspb.BinaryReader): Blob;
  }

  export namespace Blob {
    export type AsObject = {
      id: string,
      object: Uint8Array | string,
    }
  }

  export class StreamBlob extends jspb.Message {
    hasBlob(): boolean;
    clearBlob(): void;
    getBlob(): Object.Blob | undefined;
    setBlob(value?: Object.Blob): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_rpc_status_pb.Status | undefined;
    setStatus(value?: google_rpc_status_pb.Status): void;

    getPayloadCase(): StreamBlob.PayloadCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamBlob.AsObject;
    static toObject(includeInstance: boolean, msg: StreamBlob): StreamBlob.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamBlob, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamBlob;
    static deserializeBinaryFromReader(message: StreamBlob, reader: jspb.BinaryReader): StreamBlob;
  }

  export namespace StreamBlob {
    export type AsObject = {
      blob?: Object.Blob.AsObject,
      status?: google_rpc_status_pb.Status.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      BLOB = 1,
      STATUS = 2,
    }
  }

  export class Location extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getUuid(): string;
    setUuid(value: string): void;

    clearIpsList(): void;
    getIpsList(): Array<string>;
    setIpsList(value: Array<string>): void;
    addIps(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Location.AsObject;
    static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Location;
    static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
  }

  export namespace Location {
    export type AsObject = {
      name: string,
      uuid: string,
      ipsList: Array<string>,
    }
  }

  export class StreamLocation extends jspb.Message {
    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Object.Location | undefined;
    setLocation(value?: Object.Location): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_rpc_status_pb.Status | undefined;
    setStatus(value?: google_rpc_status_pb.Status): void;

    getPayloadCase(): StreamLocation.PayloadCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamLocation.AsObject;
    static toObject(includeInstance: boolean, msg: StreamLocation): StreamLocation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamLocation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamLocation;
    static deserializeBinaryFromReader(message: StreamLocation, reader: jspb.BinaryReader): StreamLocation;
  }

  export namespace StreamLocation {
    export type AsObject = {
      location?: Object.Location.AsObject,
      status?: google_rpc_status_pb.Status.AsObject,
    }

    export enum PayloadCase {
      PAYLOAD_NOT_SET = 0,
      LOCATION = 1,
      STATUS = 2,
    }
  }

  export class Locations extends jspb.Message {
    clearLocationsList(): void;
    getLocationsList(): Array<Object.Location>;
    setLocationsList(value: Array<Object.Location>): void;
    addLocations(value?: Object.Location, index?: number): Object.Location;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Locations.AsObject;
    static toObject(includeInstance: boolean, msg: Locations): Locations.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Locations, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Locations;
    static deserializeBinaryFromReader(message: Locations, reader: jspb.BinaryReader): Locations;
  }

  export namespace Locations {
    export type AsObject = {
      locationsList: Array<Object.Location.AsObject>,
    }
  }

  export class List extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): List.AsObject;
    static toObject(includeInstance: boolean, msg: List): List.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): List;
    static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
  }

  export namespace List {
    export type AsObject = {
    }

    export class Request extends jspb.Message {
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Request.AsObject;
      static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Request;
      static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
      export type AsObject = {
      }
    }

    export class Response extends jspb.Message {
      hasVector(): boolean;
      clearVector(): void;
      getVector(): Object.Vector | undefined;
      setVector(value?: Object.Vector): void;

      hasStatus(): boolean;
      clearStatus(): void;
      getStatus(): google_rpc_status_pb.Status | undefined;
      setStatus(value?: google_rpc_status_pb.Status): void;

      getPayloadCase(): Response.PayloadCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Response.AsObject;
      static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Response;
      static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
      export type AsObject = {
        vector?: Object.Vector.AsObject,
        status?: google_rpc_status_pb.Status.AsObject,
      }

      export enum PayloadCase {
        PAYLOAD_NOT_SET = 0,
        VECTOR = 1,
        STATUS = 2,
      }
    }
  }
}

export class Control extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Control.AsObject;
  static toObject(includeInstance: boolean, msg: Control): Control.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Control, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Control;
  static deserializeBinaryFromReader(message: Control, reader: jspb.BinaryReader): Control;
}

export namespace Control {
  export type AsObject = {
  }

  export class CreateIndexRequest extends jspb.Message {
    getPoolSize(): number;
    setPoolSize(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateIndexRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateIndexRequest): CreateIndexRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateIndexRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateIndexRequest;
    static deserializeBinaryFromReader(message: CreateIndexRequest, reader: jspb.BinaryReader): CreateIndexRequest;
  }

  export namespace CreateIndexRequest {
    export type AsObject = {
      poolSize: number,
    }
  }
}

export class Discoverer extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Discoverer.AsObject;
  static toObject(includeInstance: boolean, msg: Discoverer): Discoverer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Discoverer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Discoverer;
  static deserializeBinaryFromReader(message: Discoverer, reader: jspb.BinaryReader): Discoverer;
}

export namespace Discoverer {
  export type AsObject = {
  }

  export class Request extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getNamespace(): string;
    setNamespace(value: string): void;

    getNode(): string;
    setNode(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
  }

  export namespace Request {
    export type AsObject = {
      name: string,
      namespace: string,
      node: string,
    }
  }
}

export class Info extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Info.AsObject;
  static toObject(includeInstance: boolean, msg: Info): Info.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Info, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Info;
  static deserializeBinaryFromReader(message: Info, reader: jspb.BinaryReader): Info;
}

export namespace Info {
  export type AsObject = {
  }

  export class Index extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Index.AsObject;
    static toObject(includeInstance: boolean, msg: Index): Index.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Index, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Index;
    static deserializeBinaryFromReader(message: Index, reader: jspb.BinaryReader): Index;
  }

  export namespace Index {
    export type AsObject = {
    }

    export class Count extends jspb.Message {
      getStored(): number;
      setStored(value: number): void;

      getUncommitted(): number;
      setUncommitted(value: number): void;

      getIndexing(): boolean;
      setIndexing(value: boolean): void;

      getSaving(): boolean;
      setSaving(value: boolean): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Count.AsObject;
      static toObject(includeInstance: boolean, msg: Count): Count.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Count, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Count;
      static deserializeBinaryFromReader(message: Count, reader: jspb.BinaryReader): Count;
    }

    export namespace Count {
      export type AsObject = {
        stored: number,
        uncommitted: number,
        indexing: boolean,
        saving: boolean,
      }
    }

    export class UUID extends jspb.Message {
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): UUID.AsObject;
      static toObject(includeInstance: boolean, msg: UUID): UUID.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: UUID, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): UUID;
      static deserializeBinaryFromReader(message: UUID, reader: jspb.BinaryReader): UUID;
    }

    export namespace UUID {
      export type AsObject = {
      }

      export class Committed extends jspb.Message {
        getUuid(): string;
        setUuid(value: string): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Committed.AsObject;
        static toObject(includeInstance: boolean, msg: Committed): Committed.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Committed, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Committed;
        static deserializeBinaryFromReader(message: Committed, reader: jspb.BinaryReader): Committed;
      }

      export namespace Committed {
        export type AsObject = {
          uuid: string,
        }
      }

      export class Uncommitted extends jspb.Message {
        getUuid(): string;
        setUuid(value: string): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Uncommitted.AsObject;
        static toObject(includeInstance: boolean, msg: Uncommitted): Uncommitted.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Uncommitted, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Uncommitted;
        static deserializeBinaryFromReader(message: Uncommitted, reader: jspb.BinaryReader): Uncommitted;
      }

      export namespace Uncommitted {
        export type AsObject = {
          uuid: string,
        }
      }
    }
  }

  export class Pod extends jspb.Message {
    getAppName(): string;
    setAppName(value: string): void;

    getName(): string;
    setName(value: string): void;

    getNamespace(): string;
    setNamespace(value: string): void;

    getIp(): string;
    setIp(value: string): void;

    hasCpu(): boolean;
    clearCpu(): void;
    getCpu(): Info.CPU | undefined;
    setCpu(value?: Info.CPU): void;

    hasMemory(): boolean;
    clearMemory(): void;
    getMemory(): Info.Memory | undefined;
    setMemory(value?: Info.Memory): void;

    hasNode(): boolean;
    clearNode(): void;
    getNode(): Info.Node | undefined;
    setNode(value?: Info.Node): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pod.AsObject;
    static toObject(includeInstance: boolean, msg: Pod): Pod.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pod, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pod;
    static deserializeBinaryFromReader(message: Pod, reader: jspb.BinaryReader): Pod;
  }

  export namespace Pod {
    export type AsObject = {
      appName: string,
      name: string,
      namespace: string,
      ip: string,
      cpu?: Info.CPU.AsObject,
      memory?: Info.Memory.AsObject,
      node?: Info.Node.AsObject,
    }
  }

  export class Node extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getInternalAddr(): string;
    setInternalAddr(value: string): void;

    getExternalAddr(): string;
    setExternalAddr(value: string): void;

    hasCpu(): boolean;
    clearCpu(): void;
    getCpu(): Info.CPU | undefined;
    setCpu(value?: Info.CPU): void;

    hasMemory(): boolean;
    clearMemory(): void;
    getMemory(): Info.Memory | undefined;
    setMemory(value?: Info.Memory): void;

    hasPods(): boolean;
    clearPods(): void;
    getPods(): Info.Pods | undefined;
    setPods(value?: Info.Pods): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Node.AsObject;
    static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Node;
    static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
  }

  export namespace Node {
    export type AsObject = {
      name: string,
      internalAddr: string,
      externalAddr: string,
      cpu?: Info.CPU.AsObject,
      memory?: Info.Memory.AsObject,
      pods?: Info.Pods.AsObject,
    }
  }

  export class CPU extends jspb.Message {
    getLimit(): number;
    setLimit(value: number): void;

    getRequest(): number;
    setRequest(value: number): void;

    getUsage(): number;
    setUsage(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CPU.AsObject;
    static toObject(includeInstance: boolean, msg: CPU): CPU.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CPU, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CPU;
    static deserializeBinaryFromReader(message: CPU, reader: jspb.BinaryReader): CPU;
  }

  export namespace CPU {
    export type AsObject = {
      limit: number,
      request: number,
      usage: number,
    }
  }

  export class Memory extends jspb.Message {
    getLimit(): number;
    setLimit(value: number): void;

    getRequest(): number;
    setRequest(value: number): void;

    getUsage(): number;
    setUsage(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Memory.AsObject;
    static toObject(includeInstance: boolean, msg: Memory): Memory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Memory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Memory;
    static deserializeBinaryFromReader(message: Memory, reader: jspb.BinaryReader): Memory;
  }

  export namespace Memory {
    export type AsObject = {
      limit: number,
      request: number,
      usage: number,
    }
  }

  export class Pods extends jspb.Message {
    clearPodsList(): void;
    getPodsList(): Array<Info.Pod>;
    setPodsList(value: Array<Info.Pod>): void;
    addPods(value?: Info.Pod, index?: number): Info.Pod;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pods.AsObject;
    static toObject(includeInstance: boolean, msg: Pods): Pods.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pods, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pods;
    static deserializeBinaryFromReader(message: Pods, reader: jspb.BinaryReader): Pods;
  }

  export namespace Pods {
    export type AsObject = {
      podsList: Array<Info.Pod.AsObject>,
    }
  }

  export class Nodes extends jspb.Message {
    clearNodesList(): void;
    getNodesList(): Array<Info.Node>;
    setNodesList(value: Array<Info.Node>): void;
    addNodes(value?: Info.Node, index?: number): Info.Node;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Nodes.AsObject;
    static toObject(includeInstance: boolean, msg: Nodes): Nodes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Nodes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Nodes;
    static deserializeBinaryFromReader(message: Nodes, reader: jspb.BinaryReader): Nodes;
  }

  export namespace Nodes {
    export type AsObject = {
      nodesList: Array<Info.Node.AsObject>,
    }
  }

  export class IPs extends jspb.Message {
    clearIpList(): void;
    getIpList(): Array<string>;
    setIpList(value: Array<string>): void;
    addIp(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IPs.AsObject;
    static toObject(includeInstance: boolean, msg: IPs): IPs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IPs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IPs;
    static deserializeBinaryFromReader(message: IPs, reader: jspb.BinaryReader): IPs;
  }

  export namespace IPs {
    export type AsObject = {
      ipList: Array<string>,
    }
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

