import { Module } from '@nestjs/common';
import { SkribblService } from './skribbl.service';
import { SkribblController } from './skribbl.controller';
import { RoomGateway } from './room.gateway';

@Module({
  controllers: [SkribblController],
  providers: [RoomGateway, SkribblService],
})
export class SkribblModule {}
