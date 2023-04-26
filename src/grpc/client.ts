import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import { ProtoGrpcType } from "./rpc/chat";

const packageDefinition = protoLoader.loadSync(
  path.resolve(process.cwd(), "proto", "chat.proto")
);

const proto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

export const chatClient = new proto.pb.ChatService(
  "host.docker.internal:50052",
  grpc.credentials.createInsecure()
);

// localhost - ao proprio 

// nome db 192.168.15.5

// /etc/hosts
// host.docker.internal --- 172.17.0.1 (Docker Gateway)

//Mac ou Linux

// /etc/hosts

//127.0.0.1 host.docker.internal

// Windows

// C:\Windows\System32\drivers\etc\hosts

//127.0.0.1 host.docker.internal