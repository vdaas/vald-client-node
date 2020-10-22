// GENERATED CODE -- DO NOT EDIT!

// package: vald.v1
// file: vald/v1/vald/filter.proto

import * as vald_v1_vald_filter_pb from "../../../vald/v1/vald/filter_pb";
import * as vald_v1_payload_payload_pb from "../../../vald/v1/payload/payload_pb";
import * as grpc from "grpc";

interface IFilterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  searchObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Search.ObjectRequest, vald_v1_payload_payload_pb.Search.Response>;
  streamSearchObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Search.ObjectRequest, vald_v1_payload_payload_pb.Search.Response>;
  insertObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Object.Blob, vald_v1_payload_payload_pb.Object.Location>;
  streamInsertObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Object.Blob, vald_v1_payload_payload_pb.Object.Location>;
  multiInsertObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Object.Blob, vald_v1_payload_payload_pb.Object.Locations>;
  updateObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Object.Blob, vald_v1_payload_payload_pb.Object.Location>;
  streamUpdateObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Object.Blob, vald_v1_payload_payload_pb.Object.Location>;
  multiUpdateObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Object.Blob, vald_v1_payload_payload_pb.Object.Locations>;
  upsertObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Object.Blob, vald_v1_payload_payload_pb.Object.Location>;
  streamUpsertObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Object.Blob, vald_v1_payload_payload_pb.Object.Location>;
  multiUpsertObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Object.Blob, vald_v1_payload_payload_pb.Object.Locations>;
}

export const FilterService: IFilterService;

export class FilterClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  searchObject(argument: vald_v1_payload_payload_pb.Search.ObjectRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  searchObject(argument: vald_v1_payload_payload_pb.Search.ObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  searchObject(argument: vald_v1_payload_payload_pb.Search.ObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  streamSearchObject(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Search.ObjectRequest, vald_v1_payload_payload_pb.Search.Response>;
  streamSearchObject(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Search.ObjectRequest, vald_v1_payload_payload_pb.Search.Response>;
  insertObject(argument: vald_v1_payload_payload_pb.Object.Blob, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  insertObject(argument: vald_v1_payload_payload_pb.Object.Blob, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  insertObject(argument: vald_v1_payload_payload_pb.Object.Blob, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  streamInsertObject(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Object.Blob, vald_v1_payload_payload_pb.Object.Location>;
  streamInsertObject(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Object.Blob, vald_v1_payload_payload_pb.Object.Location>;
  multiInsertObject(argument: vald_v1_payload_payload_pb.Object.Blob, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiInsertObject(argument: vald_v1_payload_payload_pb.Object.Blob, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiInsertObject(argument: vald_v1_payload_payload_pb.Object.Blob, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  updateObject(argument: vald_v1_payload_payload_pb.Object.Blob, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  updateObject(argument: vald_v1_payload_payload_pb.Object.Blob, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  updateObject(argument: vald_v1_payload_payload_pb.Object.Blob, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  streamUpdateObject(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Object.Blob, vald_v1_payload_payload_pb.Object.Location>;
  streamUpdateObject(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Object.Blob, vald_v1_payload_payload_pb.Object.Location>;
  multiUpdateObject(argument: vald_v1_payload_payload_pb.Object.Blob, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiUpdateObject(argument: vald_v1_payload_payload_pb.Object.Blob, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiUpdateObject(argument: vald_v1_payload_payload_pb.Object.Blob, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  upsertObject(argument: vald_v1_payload_payload_pb.Object.Blob, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  upsertObject(argument: vald_v1_payload_payload_pb.Object.Blob, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  upsertObject(argument: vald_v1_payload_payload_pb.Object.Blob, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  streamUpsertObject(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Object.Blob, vald_v1_payload_payload_pb.Object.Location>;
  streamUpsertObject(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Object.Blob, vald_v1_payload_payload_pb.Object.Location>;
  multiUpsertObject(argument: vald_v1_payload_payload_pb.Object.Blob, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiUpsertObject(argument: vald_v1_payload_payload_pb.Object.Blob, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiUpsertObject(argument: vald_v1_payload_payload_pb.Object.Blob, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
}
