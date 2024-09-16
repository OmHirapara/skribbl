// src/gateway/room.gateway.ts
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { subscribe } from 'diagnostics_channel';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class RoomGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('createRoom')
  handleCreateRoom(@ConnectedSocket() client: Socket) {
    const roomId = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit room number
    client.join(roomId);
    console.log('roomId', roomId);
    const room_Id = { roomId: roomId };
    client.emit('createdRoom', room_Id);
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(
    @MessageBody() data: { roomId: string },
    @ConnectedSocket() client: Socket,
  ) {
    const roomId = data.roomId;
    client.join(roomId);
    const message = { message: `${client.id} Is Join The Room` };
    console.log('message', roomId, roomId, message);
    client.broadcast.to(roomId).emit('join', message);
  }

  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { roomId: string },
  ) {
    const roomId = data.roomId;
    client.leave(roomId);
    const message = { message: `${roomId} Left The Room` };
    client.broadcast.to(roomId).emit('leave', message);
  }
  // Sending a chat message to a specific room
  @SubscribeMessage('sendMessage')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { roomId: string; message: string; sender: string },
  ) {
    const { roomId, message, sender } = data;
    // Broadcasting the message to everyone in the room
    console.log('recive', roomId, message, sender);
    client.to(roomId).emit('receiveMessage', { sender, message });
  }
}
