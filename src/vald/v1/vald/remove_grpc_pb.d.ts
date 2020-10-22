// GENERATED CODE -- DO NOT EDIT!

// package: vald.v1
// file: vald/v1/vald/remove.proto

import * as vald_v1_vald_remove_pb from "../../../vald/v1/vald/remove_pb";
import * as vald_v1_payload_payload_pb from "../../../vald/v1/payload/payload_pb";
import * as grpc from "grpc";

interface IRemoveService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  remove: grpc.MethodDefinition<vald_v1_payload_payload_pb.Remove.Request, vald_v1_payload_payload_pb.Object.Location>;
  streamRemove: grpc.MethodDefinition<vald_v1_payload_payload_pb.Remove.Request, vald_v1_payload_payload_pb.Object.Location>;
  multiRemove: grpc.MethodDefinition<vald_v1_payload_payload_pb.Remove.MultiRequest, vald_v1_payload_payload_pb.Object.Locations>;
}

export const RemoveService: IRemoveService;

export class RemoveClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  remove(argument: vald_v1_payload_payload_pb.Remove.Request, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  remove(argument: vald_v1_payload_payload_pb.Remove.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  remove(argument: vald_v1_payload_payload_pb.Remove.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  streamRemove(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Remove.Request, vald_v1_payload_payload_pb.Object.Location>;
  streamRemove(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Remove.Request, vald_v1_payload_payload_pb.Object.Location>;
  multiRemove(argument: vald_v1_payload_payload_pb.Remove.MultiRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiRemove(argument: vald_v1_payload_payload_pb.Remove.MultiRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiRemove(argument: vald_v1_payload_payload_pb.Remove.MultiRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
}
