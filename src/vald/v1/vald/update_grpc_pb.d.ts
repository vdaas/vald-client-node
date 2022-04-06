// GENERATED CODE -- DO NOT EDIT!

// package: vald.v1
// file: vald/v1/vald/update.proto

import * as vald_v1_vald_update_pb from "../../../vald/v1/vald/update_pb";
import * as vald_v1_payload_payload_pb from "../../../vald/v1/payload/payload_pb";
import * as grpc from "@grpc/grpc-js";

interface IUpdateService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  update: grpc.MethodDefinition<vald_v1_payload_payload_pb.Update.Request, vald_v1_payload_payload_pb.Object.Location>;
  streamUpdate: grpc.MethodDefinition<vald_v1_payload_payload_pb.Update.Request, vald_v1_payload_payload_pb.Object.StreamLocation>;
  multiUpdate: grpc.MethodDefinition<vald_v1_payload_payload_pb.Update.MultiRequest, vald_v1_payload_payload_pb.Object.Locations>;
}

export const UpdateService: IUpdateService;

export class UpdateClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  update(argument: vald_v1_payload_payload_pb.Update.Request, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  update(argument: vald_v1_payload_payload_pb.Update.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  update(argument: vald_v1_payload_payload_pb.Update.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  streamUpdate(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Update.Request, vald_v1_payload_payload_pb.Object.StreamLocation>;
  streamUpdate(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Update.Request, vald_v1_payload_payload_pb.Object.StreamLocation>;
  multiUpdate(argument: vald_v1_payload_payload_pb.Update.MultiRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiUpdate(argument: vald_v1_payload_payload_pb.Update.MultiRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiUpdate(argument: vald_v1_payload_payload_pb.Update.MultiRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
}
