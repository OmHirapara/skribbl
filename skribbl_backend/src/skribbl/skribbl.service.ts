import { Injectable } from '@nestjs/common';
import { CreateSkribblDto } from './dto/create-skribbl.dto';
import { UpdateSkribblDto } from './dto/update-skribbl.dto';

@Injectable()
export class SkribblService {
  create(createSkribblDto: CreateSkribblDto) {
    return 'This action adds a new skribbl';
  }

  findAll() {
    return `This action returns all skribbl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} skribbl`;
  }

  update(id: number, updateSkribblDto: UpdateSkribblDto) {
    return `This action updates a #${id} skribbl`;
  }

  remove(id: number) {
    return `This action removes a #${id} skribbl`;
  }
}
