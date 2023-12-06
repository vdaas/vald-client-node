// GENERATED CODE -- DO NOT EDIT!

// package: core.v1
// file: vald/v1/agent/core/agent.proto

import * as vald_v1_agent_core_agent_pb from "../../../../vald/v1/agent/core/agent_pb";
import * as vald_v1_payload_payload_pb from "../../../../vald/v1/payload/payload_pb";
import * as grpc from "@grpc/grpc-js";

interface IAgentService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createIndex: grpc.MethodDefinition<vald_v1_payload_payload_pb.Control.CreateIndexRequest, vald_v1_payload_payload_pb.Empty>;
  saveIndex: grpc.MethodDefinition<vald_v1_payload_payload_pb.Empty, vald_v1_payload_payload_pb.Empty>;
  createAndSaveIndex: grpc.MethodDefinition<vald_v1_payload_payload_pb.Control.CreateIndexRequest, vald_v1_payload_payload_pb.Empty>;
  indexInfo: grpc.MethodDefinition<vald_v1_payload_payload_pb.Empty, vald_v1_payload_payload_pb.Info.Index.Count>;
  getTimestamp: grpc.MethodDefinition<vald_v1_payload_payload_pb.Object.GetTimestampRequest, vald_v1_payload_payload_pb.Object.Timestamp>;
}

export const AgentService: IAgentService;

export class AgentClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createIndex(argument: vald_v1_payload_payload_pb.Control.CreateIndexRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Empty>): grpc.ClientUnaryCall;
  createIndex(argument: vald_v1_payload_payload_pb.Control.CreateIndexRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Empty>): grpc.ClientUnaryCall;
  createIndex(argument: vald_v1_payload_payload_pb.Control.CreateIndexRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Empty>): grpc.ClientUnaryCall;
  saveIndex(argument: vald_v1_payload_payload_pb.Empty, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Empty>): grpc.ClientUnaryCall;
  saveIndex(argument: vald_v1_payload_payload_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Empty>): grpc.ClientUnaryCall;
  saveIndex(argument: vald_v1_payload_payload_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Empty>): grpc.ClientUnaryCall;
  createAndSaveIndex(argument: vald_v1_payload_payload_pb.Control.CreateIndexRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Empty>): grpc.ClientUnaryCall;
  createAndSaveIndex(argument: vald_v1_payload_payload_pb.Control.CreateIndexRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Empty>): grpc.ClientUnaryCall;
  createAndSaveIndex(argument: vald_v1_payload_payload_pb.Control.CreateIndexRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Empty>): grpc.ClientUnaryCall;
  indexInfo(argument: vald_v1_payload_payload_pb.Empty, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Info.Index.Count>): grpc.ClientUnaryCall;
  indexInfo(argument: vald_v1_payload_payload_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Info.Index.Count>): grpc.ClientUnaryCall;
  indexInfo(argument: vald_v1_payload_payload_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Info.Index.Count>): grpc.ClientUnaryCall;
  getTimestamp(argument: vald_v1_payload_payload_pb.Object.GetTimestampRequest, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Timestamp>): grpc.ClientUnaryCall;
  getTimestamp(argument: vald_v1_payload_payload_pb.Object.GetTimestampRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Timestamp>): grpc.ClientUnaryCall;
  getTimestamp(argument: vald_v1_payload_payload_pb.Object.GetTimestampRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vald_v1_payload_payload_pb.Object.Timestamp>): grpc.ClientUnaryCall;
}
