// GENERATED CODE -- DO NOT EDIT!

// package: vald.v1
// file: vald/v1/vald/filter.proto

import * as vald_v1_vald_filter_pb from "../../../vald/v1/vald/filter_pb";
import * as vald_v1_payload_payload_pb from "../../../vald/v1/payload/payload_pb";
import * as grpc from "grpc";

interface IFilterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  searchObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Search.ObjectRequest, vald_v1_payload_payload_pb.Search.Response>;
  multiSearchObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Search.MultiObjectRequest, vald_v1_payload_payload_pb.Search.Responses>;
  streamSearchObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Search.ObjectRequest, vald_v1_payload_payload_pb.Search.StreamResponse>;
  insertObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Insert.ObjectRequest, vald_v1_payload_payload_pb.Object.Location>;
  streamInsertObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Insert.ObjectRequest, vald_v1_payload_payload_pb.Object.StreamLocation>;
  multiInsertObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Insert.MultiObjectRequest, vald_v1_payload_payload_pb.Object.Locations>;
  updateObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Update.ObjectRequest, vald_v1_payload_payload_pb.Object.Location>;
  streamUpdateObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Update.ObjectRequest, vald_v1_payload_payload_pb.Object.StreamLocation>;
  multiUpdateObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Update.MultiObjectRequest, vald_v1_payload_payload_pb.Object.Locations>;
  upsertObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Upsert.ObjectRequest, vald_v1_payload_payload_pb.Object.Location>;
  streamUpsertObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Upsert.ObjectRequest, vald_v1_payload_payload_pb.Object.StreamLocation>;
  multiUpsertObject: grpc.MethodDefinition<vald_v1_payload_payload_pb.Upsert.MultiObjectRequest, vald_v1_payload_payload_pb.Object.Locations>;
}

export const FilterService: IFilterService;

export class FilterClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  searchObject(argument: vald_v1_payload_payload_pb.Search.ObjectRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  searchObject(argument: vald_v1_payload_payload_pb.Search.ObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  searchObject(argument: vald_v1_payload_payload_pb.Search.ObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  multiSearchObject(argument: vald_v1_payload_payload_pb.Search.MultiObjectRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Responses>): grpc.ClientUnaryCall;
  multiSearchObject(argument: vald_v1_payload_payload_pb.Search.MultiObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Responses>): grpc.ClientUnaryCall;
  multiSearchObject(argument: vald_v1_payload_payload_pb.Search.MultiObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Search.Responses>): grpc.ClientUnaryCall;
  streamSearchObject(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Search.ObjectRequest, vald_v1_payload_payload_pb.Search.StreamResponse>;
  streamSearchObject(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Search.ObjectRequest, vald_v1_payload_payload_pb.Search.StreamResponse>;
  insertObject(argument: vald_v1_payload_payload_pb.Insert.ObjectRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  insertObject(argument: vald_v1_payload_payload_pb.Insert.ObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  insertObject(argument: vald_v1_payload_payload_pb.Insert.ObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  streamInsertObject(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Insert.ObjectRequest, vald_v1_payload_payload_pb.Object.StreamLocation>;
  streamInsertObject(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Insert.ObjectRequest, vald_v1_payload_payload_pb.Object.StreamLocation>;
  multiInsertObject(argument: vald_v1_payload_payload_pb.Insert.MultiObjectRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiInsertObject(argument: vald_v1_payload_payload_pb.Insert.MultiObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiInsertObject(argument: vald_v1_payload_payload_pb.Insert.MultiObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  updateObject(argument: vald_v1_payload_payload_pb.Update.ObjectRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  updateObject(argument: vald_v1_payload_payload_pb.Update.ObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  updateObject(argument: vald_v1_payload_payload_pb.Update.ObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  streamUpdateObject(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Update.ObjectRequest, vald_v1_payload_payload_pb.Object.StreamLocation>;
  streamUpdateObject(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Update.ObjectRequest, vald_v1_payload_payload_pb.Object.StreamLocation>;
  multiUpdateObject(argument: vald_v1_payload_payload_pb.Update.MultiObjectRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiUpdateObject(argument: vald_v1_payload_payload_pb.Update.MultiObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiUpdateObject(argument: vald_v1_payload_payload_pb.Update.MultiObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  upsertObject(argument: vald_v1_payload_payload_pb.Upsert.ObjectRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  upsertObject(argument: vald_v1_payload_payload_pb.Upsert.ObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  upsertObject(argument: vald_v1_payload_payload_pb.Upsert.ObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  streamUpsertObject(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Upsert.ObjectRequest, vald_v1_payload_payload_pb.Object.StreamLocation>;
  streamUpsertObject(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_v1_payload_payload_pb.Upsert.ObjectRequest, vald_v1_payload_payload_pb.Object.StreamLocation>;
  multiUpsertObject(argument: vald_v1_payload_payload_pb.Upsert.MultiObjectRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiUpsertObject(argument: vald_v1_payload_payload_pb.Upsert.MultiObjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiUpsertObject(argument: vald_v1_payload_payload_pb.Upsert.MultiObjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
}
