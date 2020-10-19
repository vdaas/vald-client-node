// GENERATED CODE -- DO NOT EDIT!

// package: vald
// file: vald/gateway/vald/vald.proto

import * as vald_gateway_vald_vald_pb from "../../../vald/gateway/vald/vald_pb";
import * as vald_payload_payload_pb from "../../../vald/payload/payload_pb";
import * as grpc from "grpc";

interface IValdService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  exists: grpc.MethodDefinition<vald_payload_payload_pb.Object.ID, vald_payload_payload_pb.Object.ID>;
  search: grpc.MethodDefinition<vald_payload_payload_pb.Search.Request, vald_payload_payload_pb.Search.Response>;
  searchByID: grpc.MethodDefinition<vald_payload_payload_pb.Search.IDRequest, vald_payload_payload_pb.Search.Response>;
  streamSearch: grpc.MethodDefinition<vald_payload_payload_pb.Search.Request, vald_payload_payload_pb.Search.Response>;
  streamSearchByID: grpc.MethodDefinition<vald_payload_payload_pb.Search.IDRequest, vald_payload_payload_pb.Search.Response>;
  insert: grpc.MethodDefinition<vald_payload_payload_pb.Object.Vector, vald_payload_payload_pb.Object.Location>;
  streamInsert: grpc.MethodDefinition<vald_payload_payload_pb.Object.Vector, vald_payload_payload_pb.Object.Location>;
  multiInsert: grpc.MethodDefinition<vald_payload_payload_pb.Object.Vectors, vald_payload_payload_pb.Object.Locations>;
  update: grpc.MethodDefinition<vald_payload_payload_pb.Object.Vector, vald_payload_payload_pb.Object.Location>;
  streamUpdate: grpc.MethodDefinition<vald_payload_payload_pb.Object.Vector, vald_payload_payload_pb.Object.Location>;
  multiUpdate: grpc.MethodDefinition<vald_payload_payload_pb.Object.Vectors, vald_payload_payload_pb.Object.Locations>;
  upsert: grpc.MethodDefinition<vald_payload_payload_pb.Object.Vector, vald_payload_payload_pb.Object.Location>;
  streamUpsert: grpc.MethodDefinition<vald_payload_payload_pb.Object.Vector, vald_payload_payload_pb.Object.Location>;
  multiUpsert: grpc.MethodDefinition<vald_payload_payload_pb.Object.Vectors, vald_payload_payload_pb.Object.Locations>;
  remove: grpc.MethodDefinition<vald_payload_payload_pb.Object.ID, vald_payload_payload_pb.Object.Location>;
  streamRemove: grpc.MethodDefinition<vald_payload_payload_pb.Object.ID, vald_payload_payload_pb.Object.Location>;
  multiRemove: grpc.MethodDefinition<vald_payload_payload_pb.Object.IDs, vald_payload_payload_pb.Object.Locations>;
  getObject: grpc.MethodDefinition<vald_payload_payload_pb.Object.ID, vald_payload_payload_pb.Object.Vector>;
  streamGetObject: grpc.MethodDefinition<vald_payload_payload_pb.Object.ID, vald_payload_payload_pb.Object.Vector>;
}

export const ValdService: IValdService;

export class ValdClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  exists(argument: vald_payload_payload_pb.Object.ID, callback: grpc.requestCallback<vald_payload_payload_pb.Object.ID>): grpc.ClientUnaryCall;
  exists(argument: vald_payload_payload_pb.Object.ID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.ID>): grpc.ClientUnaryCall;
  exists(argument: vald_payload_payload_pb.Object.ID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.ID>): grpc.ClientUnaryCall;
  search(argument: vald_payload_payload_pb.Search.Request, callback: grpc.requestCallback<vald_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  search(argument: vald_payload_payload_pb.Search.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  search(argument: vald_payload_payload_pb.Search.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  searchByID(argument: vald_payload_payload_pb.Search.IDRequest, callback: grpc.requestCallback<vald_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  searchByID(argument: vald_payload_payload_pb.Search.IDRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  searchByID(argument: vald_payload_payload_pb.Search.IDRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Search.Response>): grpc.ClientUnaryCall;
  streamSearch(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_payload_payload_pb.Search.Request, vald_payload_payload_pb.Search.Response>;
  streamSearch(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_payload_payload_pb.Search.Request, vald_payload_payload_pb.Search.Response>;
  streamSearchByID(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_payload_payload_pb.Search.IDRequest, vald_payload_payload_pb.Search.Response>;
  streamSearchByID(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_payload_payload_pb.Search.IDRequest, vald_payload_payload_pb.Search.Response>;
  insert(argument: vald_payload_payload_pb.Object.Vector, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  insert(argument: vald_payload_payload_pb.Object.Vector, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  insert(argument: vald_payload_payload_pb.Object.Vector, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  streamInsert(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_payload_payload_pb.Object.Vector, vald_payload_payload_pb.Object.Location>;
  streamInsert(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_payload_payload_pb.Object.Vector, vald_payload_payload_pb.Object.Location>;
  multiInsert(argument: vald_payload_payload_pb.Object.Vectors, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiInsert(argument: vald_payload_payload_pb.Object.Vectors, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiInsert(argument: vald_payload_payload_pb.Object.Vectors, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  update(argument: vald_payload_payload_pb.Object.Vector, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  update(argument: vald_payload_payload_pb.Object.Vector, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  update(argument: vald_payload_payload_pb.Object.Vector, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  streamUpdate(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_payload_payload_pb.Object.Vector, vald_payload_payload_pb.Object.Location>;
  streamUpdate(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_payload_payload_pb.Object.Vector, vald_payload_payload_pb.Object.Location>;
  multiUpdate(argument: vald_payload_payload_pb.Object.Vectors, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiUpdate(argument: vald_payload_payload_pb.Object.Vectors, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiUpdate(argument: vald_payload_payload_pb.Object.Vectors, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  upsert(argument: vald_payload_payload_pb.Object.Vector, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  upsert(argument: vald_payload_payload_pb.Object.Vector, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  upsert(argument: vald_payload_payload_pb.Object.Vector, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  streamUpsert(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_payload_payload_pb.Object.Vector, vald_payload_payload_pb.Object.Location>;
  streamUpsert(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_payload_payload_pb.Object.Vector, vald_payload_payload_pb.Object.Location>;
  multiUpsert(argument: vald_payload_payload_pb.Object.Vectors, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiUpsert(argument: vald_payload_payload_pb.Object.Vectors, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiUpsert(argument: vald_payload_payload_pb.Object.Vectors, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  remove(argument: vald_payload_payload_pb.Object.ID, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  remove(argument: vald_payload_payload_pb.Object.ID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  remove(argument: vald_payload_payload_pb.Object.ID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Location>): grpc.ClientUnaryCall;
  streamRemove(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_payload_payload_pb.Object.ID, vald_payload_payload_pb.Object.Location>;
  streamRemove(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_payload_payload_pb.Object.ID, vald_payload_payload_pb.Object.Location>;
  multiRemove(argument: vald_payload_payload_pb.Object.IDs, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiRemove(argument: vald_payload_payload_pb.Object.IDs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  multiRemove(argument: vald_payload_payload_pb.Object.IDs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Locations>): grpc.ClientUnaryCall;
  getObject(argument: vald_payload_payload_pb.Object.ID, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Vector>): grpc.ClientUnaryCall;
  getObject(argument: vald_payload_payload_pb.Object.ID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Vector>): grpc.ClientUnaryCall;
  getObject(argument: vald_payload_payload_pb.Object.ID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Object.Vector>): grpc.ClientUnaryCall;
  streamGetObject(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<vald_payload_payload_pb.Object.ID, vald_payload_payload_pb.Object.Vector>;
  streamGetObject(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<vald_payload_payload_pb.Object.ID, vald_payload_payload_pb.Object.Vector>;
}
