// GENERATED CODE -- DO NOT EDIT!

// package: vald.v1
// file: vald/v1/vald/insert.proto

import * as vald_v1_vald_insert_pb from "../../../vald/v1/vald/insert_pb";
import * as vald_v1_payload_payload_pb from "../../../vald/v1/payload/payload_pb";
import * as grpc from "grpc";

interface IInsertService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  insert: grpc.MethodDefinition<vald_v1_payload_payload_pb.Insert.Request, vald_v1_payload_payload_pb.Object.Location>;
  streamInsert: grpc.MethodDefinition<vald_v1_payload_payload_pb.Insert.Request, vald_v1_payload_payload_pb.Object.StreamLocation>;
  multiInsert: grpc.MethodDefinition<vald_v1_payload_payload_pb.Insert.MultiRequest, vald_v1_payload_payload_pb.Object.Locations>;
}

export const InsertService: IInsertService;

export class InsertClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  insert(argument: vald_v1_payload_payload_pb.Insert.Request, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  insert(argument: vald_v1_payload_payload_pb.Insert.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  insert(argument: vald_v1_payload_payload_pb.Insert.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  streamInsert(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Insert.Request, vald_v1_payload_payload_pb.Object.StreamLocation>;
  streamInsert(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Insert.Request, vald_v1_payload_payload_pb.Object.StreamLocation>;
  multiInsert(argument: vald_v1_payload_payload_pb.Insert.MultiRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiInsert(argument: vald_v1_payload_payload_pb.Insert.MultiRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiInsert(argument: vald_v1_payload_payload_pb.Insert.MultiRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
}
