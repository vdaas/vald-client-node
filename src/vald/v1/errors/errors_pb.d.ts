// package: errors.v1
// file: vald/v1/errors/errors.proto

import * as jspb from "google-protobuf";

export class Errors extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Errors.AsObject;
  static toObject(includeInstance: boolean, msg: Errors): Errors.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Errors, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Errors;
  static deserializeBinaryFromReader(message: Errors, reader: jspb.BinaryReader): Errors;
}

export namespace Errors {
  export type AsObject = {
  }

  export class RPC extends jspb.Message {
    getType(): string;
    setType(value: string): void;

    getMsg(): string;
    setMsg(value: string): void;

    clearDetailsList(): void;
    getDetailsList(): Array<string>;
    setDetailsList(value: Array<string>): void;
    addDetails(value: string, index?: number): string;

    getInstance(): string;
    setInstance(value: string): void;

    getStatus(): number;
    setStatus(value: number): void;

    getError(): string;
    setError(value: string): void;

    clearRootsList(): void;
    getRootsList(): Array<Errors.RPC>;
    setRootsList(value: Array<Errors.RPC>): void;
    addRoots(value?: Errors.RPC, index?: number): Errors.RPC;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RPC.AsObject;
    static toObject(includeInstance: boolean, msg: RPC): RPC.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RPC, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RPC;
    static deserializeBinaryFromReader(message: RPC, reader: jspb.BinaryReader): RPC;
  }

  export namespace RPC {
    export type AsObject = {
      type: string,
      msg: string,
      detailsList: Array<string>,
      instance: string,
      status: number,
      error: string,
      rootsList: Array<Errors.RPC.AsObject>,
    }
  }
}

