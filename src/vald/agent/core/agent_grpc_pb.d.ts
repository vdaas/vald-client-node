// GENERATED CODE -- DO NOT EDIT!

// package: core
// file: vald/agent/core/agent.proto

import * as vald_agent_core_agent_pb from "../../../vald/agent/core/agent_pb";
import * as vald_payload_payload_pb from "../../../vald/payload/payload_pb";
import * as grpc from "grpc";

interface IAgentService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createIndex: grpc.MethodDefinition<vald_payload_payload_pb.Control.CreateIndexRequest, vald_payload_payload_pb.Empty>;
  saveIndex: grpc.MethodDefinition<vald_payload_payload_pb.Empty, vald_payload_payload_pb.Empty>;
  createAndSaveIndex: grpc.MethodDefinition<vald_payload_payload_pb.Control.CreateIndexRequest, vald_payload_payload_pb.Empty>;
  indexInfo: grpc.MethodDefinition<vald_payload_payload_pb.Empty, vald_payload_payload_pb.Info.Index.Count>;
}

export const AgentService: IAgentService;

export class AgentClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createIndex(argument: vald_payload_payload_pb.Control.CreateIndexRequest, callback: grpc.requestCallback<vald_payload_payload_pb.Empty>): grpc.ClientUnaryCall;
  createIndex(argument: vald_payload_payload_pb.Control.CreateIndexRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Empty>): grpc.ClientUnaryCall;
  createIndex(argument: vald_payload_payload_pb.Control.CreateIndexRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Empty>): grpc.ClientUnaryCall;
  saveIndex(argument: vald_payload_payload_pb.Empty, callback: grpc.requestCallback<vald_payload_payload_pb.Empty>): grpc.ClientUnaryCall;
  saveIndex(argument: vald_payload_payload_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Empty>): grpc.ClientUnaryCall;
  saveIndex(argument: vald_payload_payload_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Empty>): grpc.ClientUnaryCall;
  createAndSaveIndex(argument: vald_payload_payload_pb.Control.CreateIndexRequest, callback: grpc.requestCallback<vald_payload_payload_pb.Empty>): grpc.ClientUnaryCall;
  createAndSaveIndex(argument: vald_payload_payload_pb.Control.CreateIndexRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Empty>): grpc.ClientUnaryCall;
  createAndSaveIndex(argument: vald_payload_payload_pb.Control.CreateIndexRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Empty>): grpc.ClientUnaryCall;
  indexInfo(argument: vald_payload_payload_pb.Empty, callback: grpc.requestCallback<vald_payload_payload_pb.Info.Index.Count>): grpc.ClientUnaryCall;
  indexInfo(argument: vald_payload_payload_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Info.Index.Count>): grpc.ClientUnaryCall;
  indexInfo(argument: vald_payload_payload_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_payload_payload_pb.Info.Index.Count>): grpc.ClientUnaryCall;
}
