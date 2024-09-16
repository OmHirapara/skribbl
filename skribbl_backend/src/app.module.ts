import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkribblModule } from './skribbl/skribbl.module';
import { RoomGateway } from './skribbl/room.gateway';

@Module({
  imports: [SkribblModule],
  controllers: [],
  providers: [AppService, RoomGateway],
})
export class AppModule {}
