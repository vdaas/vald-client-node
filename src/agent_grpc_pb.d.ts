// GENERATED CODE -- DO NOT EDIT!

// package: agent
// file: agent.proto

import * as agent_pb from "./agent_pb";
import * as payload_pb from "./payload_pb";
import * as grpc from "grpc";

interface IAgentService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  exists: grpc.MethodDefinition<payload_pb.Object.ID, payload_pb.Object.ID>;
  search: grpc.MethodDefinition<payload_pb.Search.Request, payload_pb.Search.Response>;
  searchByID: grpc.MethodDefinition<payload_pb.Search.IDRequest, payload_pb.Search.Response>;
  streamSearch: grpc.MethodDefinition<payload_pb.Search.Request, payload_pb.Search.Response>;
  streamSearchByID: grpc.MethodDefinition<payload_pb.Search.IDRequest, payload_pb.Search.Response>;
  insert: grpc.MethodDefinition<payload_pb.Object.Vector, payload_pb.Empty>;
  streamInsert: grpc.MethodDefinition<payload_pb.Object.Vector, payload_pb.Empty>;
  multiInsert: grpc.MethodDefinition<payload_pb.Object.Vectors, payload_pb.Empty>;
  update: grpc.MethodDefinition<payload_pb.Object.Vector, payload_pb.Empty>;
  streamUpdate: grpc.MethodDefinition<payload_pb.Object.Vector, payload_pb.Empty>;
  multiUpdate: grpc.MethodDefinition<payload_pb.Object.Vectors, payload_pb.Empty>;
  remove: grpc.MethodDefinition<payload_pb.Object.ID, payload_pb.Empty>;
  streamRemove: grpc.MethodDefinition<payload_pb.Object.ID, payload_pb.Empty>;
  multiRemove: grpc.MethodDefinition<payload_pb.Object.IDs, payload_pb.Empty>;
  getObject: grpc.MethodDefinition<payload_pb.Object.ID, payload_pb.Object.Vector>;
  streamGetObject: grpc.MethodDefinition<payload_pb.Object.ID, payload_pb.Object.Vector>;
  createIndex: grpc.MethodDefinition<payload_pb.Control.CreateIndexRequest, payload_pb.Empty>;
  saveIndex: grpc.MethodDefinition<payload_pb.Empty, payload_pb.Empty>;
  createAndSaveIndex: grpc.MethodDefinition<payload_pb.Control.CreateIndexRequest, payload_pb.Empty>;
  indexInfo: grpc.MethodDefinition<payload_pb.Empty, payload_pb.Info.Index.Count>;
}

export const AgentService: IAgentService;

export class AgentClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  exists(argument: payload_pb.Object.ID, callback: grpc.requestCallback<payload_pb.Object.ID>): grpc.ClientUnaryCall;
  exists(argument: payload_pb.Object.ID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Object.ID>): grpc.ClientUnaryCall;
  exists(argument: payload_pb.Object.ID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Object.ID>): grpc.ClientUnaryCall;
  search(argument: payload_pb.Search.Request, callback: grpc.requestCallback<payload_pb.Search.Response>): grpc.ClientUnaryCall;
  search(argument: payload_pb.Search.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Search.Response>): grpc.ClientUnaryCall;
  search(argument: payload_pb.Search.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Search.Response>): grpc.ClientUnaryCall;
  searchByID(argument: payload_pb.Search.IDRequest, callback: grpc.requestCallback<payload_pb.Search.Response>): grpc.ClientUnaryCall;
  searchByID(argument: payload_pb.Search.IDRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Search.Response>): grpc.ClientUnaryCall;
  searchByID(argument: payload_pb.Search.IDRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Search.Response>): grpc.ClientUnaryCall;
  streamSearch(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<payload_pb.Search.Request, payload_pb.Search.Response>;
  streamSearch(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<payload_pb.Search.Request, payload_pb.Search.Response>;
  streamSearchByID(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<payload_pb.Search.IDRequest, payload_pb.Search.Response>;
  streamSearchByID(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<payload_pb.Search.IDRequest, payload_pb.Search.Response>;
  insert(argument: payload_pb.Object.Vector, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  insert(argument: payload_pb.Object.Vector, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  insert(argument: payload_pb.Object.Vector, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  streamInsert(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<payload_pb.Object.Vector, payload_pb.Empty>;
  streamInsert(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<payload_pb.Object.Vector, payload_pb.Empty>;
  multiInsert(argument: payload_pb.Object.Vectors, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  multiInsert(argument: payload_pb.Object.Vectors, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  multiInsert(argument: payload_pb.Object.Vectors, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: payload_pb.Object.Vector, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: payload_pb.Object.Vector, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: payload_pb.Object.Vector, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  streamUpdate(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<payload_pb.Object.Vector, payload_pb.Empty>;
  streamUpdate(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<payload_pb.Object.Vector, payload_pb.Empty>;
  multiUpdate(argument: payload_pb.Object.Vectors, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  multiUpdate(argument: payload_pb.Object.Vectors, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  multiUpdate(argument: payload_pb.Object.Vectors, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  remove(argument: payload_pb.Object.ID, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  remove(argument: payload_pb.Object.ID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  remove(argument: payload_pb.Object.ID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  streamRemove(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<payload_pb.Object.ID, payload_pb.Empty>;
  streamRemove(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<payload_pb.Object.ID, payload_pb.Empty>;
  multiRemove(argument: payload_pb.Object.IDs, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  multiRemove(argument: payload_pb.Object.IDs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  multiRemove(argument: payload_pb.Object.IDs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  getObject(argument: payload_pb.Object.ID, callback: grpc.requestCallback<payload_pb.Object.Vector>): grpc.ClientUnaryCall;
  getObject(argument: payload_pb.Object.ID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Object.Vector>): grpc.ClientUnaryCall;
  getObject(argument: payload_pb.Object.ID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Object.Vector>): grpc.ClientUnaryCall;
  streamGetObject(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<payload_pb.Object.ID, payload_pb.Object.Vector>;
  streamGetObject(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<payload_pb.Object.ID, payload_pb.Object.Vector>;
  createIndex(argument: payload_pb.Control.CreateIndexRequest, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  createIndex(argument: payload_pb.Control.CreateIndexRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  createIndex(argument: payload_pb.Control.CreateIndexRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  saveIndex(argument: payload_pb.Empty, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  saveIndex(argument: payload_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  saveIndex(argument: payload_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  createAndSaveIndex(argument: payload_pb.Control.CreateIndexRequest, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  createAndSaveIndex(argument: payload_pb.Control.CreateIndexRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  createAndSaveIndex(argument: payload_pb.Control.CreateIndexRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Empty>): grpc.ClientUnaryCall;
  indexInfo(argument: payload_pb.Empty, callback: grpc.requestCallback<payload_pb.Info.Index.Count>): grpc.ClientUnaryCall;
  indexInfo(argument: payload_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Info.Index.Count>): grpc.ClientUnaryCall;
  indexInfo(argument: payload_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<payload_pb.Info.Index.Count>): grpc.ClientUnaryCall;
}
