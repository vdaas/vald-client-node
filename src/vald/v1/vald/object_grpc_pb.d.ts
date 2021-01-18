// GENERATED CODE -- DO NOT EDIT!

// package: vald.v1
// file: vald/v1/vald/object.proto

import * as vald_v1_vald_object_pb from "../../../vald/v1/vald/object_pb";
import * as vald_v1_payload_payload_pb from "../../../vald/v1/payload/payload_pb";
import * as grpc from "grpc";

interface IObjectService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  exists: grpc.MethodDefinition<vald_v1_payload_payload_pb.Object.ID, vald_v1_payload_payload_pb.Object.ID>;
  getObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Object.ID, vald_v1_payload_payload_pb.Object.Vector>;
  streamGetObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Object.ID, vald_v1_payload_payload_pb.Object.StreamVector>;
}

export const ObjectService: IObjectService;

export class ObjectClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  exists(argument: vald_v1_payload_payload_pb.Object.ID, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.ID>): grpc.ClientUnaryCall;
  exists(argument: vald_v1_payload_payload_pb.Object.ID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.ID>): grpc.ClientUnaryCall;
  exists(argument: vald_v1_payload_payload_pb.Object.ID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.ID>): grpc.ClientUnaryCall;
  getObject(argument: vald_v1_payload_payload_pb.Object.ID, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Vector>): grpc.ClientUnaryCall;
  getObject(argument: vald_v1_payload_payload_pb.Object.ID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Vector>): grpc.ClientUnaryCall;
  getObject(argument: vald_v1_payload_payload_pb.Object.ID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Vector>): grpc.ClientUnaryCall;
  streamGetObject(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Object.ID, vald_v1_payload_payload_pb.Object.StreamVector>;
  streamGetObject(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Object.ID, vald_v1_payload_payload_pb.Object.StreamVector>;
}
