// GENERATED CODE -- DO NOT EDIT!

// package: vald.v1
// file: vald/v1/vald/upsert.proto

import * as vald_v1_vald_upsert_pb from "../../../vald/v1/vald/upsert_pb";
import * as vald_v1_payload_payload_pb from "../../../vald/v1/payload/payload_pb";
import * as grpc from "@grpc/grpc-js";

interface IUpsertService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  upsert: grpc.MethodDefinition<vald_v1_payload_payload_pb.Upsert.Request, vald_v1_payload_payload_pb.Object.Location>;
  streamUpsert: grpc.MethodDefinition<vald_v1_payload_payload_pb.Upsert.Request, vald_v1_payload_payload_pb.Object.StreamLocation>;
  multiUpsert: grpc.MethodDefinition<vald_v1_payload_payload_pb.Upsert.MultiRequest, vald_v1_payload_payload_pb.Object.Locations>;
}

export const UpsertService: IUpsertService;

export class UpsertClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  upsert(argument: vald_v1_payload_payload_pb.Upsert.Request, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  upsert(argument: vald_v1_payload_payload_pb.Upsert.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  upsert(argument: vald_v1_payload_payload_pb.Upsert.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  streamUpsert(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Upsert.Request, vald_v1_payload_payload_pb.Object.StreamLocation>;
  streamUpsert(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Upsert.Request, vald_v1_payload_payload_pb.Object.StreamLocation>;
  multiUpsert(argument: vald_v1_payload_payload_pb.Upsert.MultiRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiUpsert(argument: vald_v1_payload_payload_pb.Upsert.MultiRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiUpsert(argument: vald_v1_payload_payload_pb.Upsert.MultiRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
}
