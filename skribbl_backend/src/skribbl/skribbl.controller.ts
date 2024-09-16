import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SkribblService } from './skribbl.service';
import { CreateSkribblDto } from './dto/create-skribbl.dto';
import { UpdateSkribblDto } from './dto/update-skribbl.dto';

@Controller('skribbl')
export class SkribblController {
  constructor(private readonly skribblService: SkribblService) {}

  @Post()
  create(@Body() createSkribblDto: CreateSkribblDto) {
    return this.skribblService.create(createSkribblDto);
  }

  @Get()
  findAll() {
    return this.skribblService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skribblService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSkribblDto: UpdateSkribblDto) {
    return this.skribblService.update(+id, updateSkribblDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skribblService.remove(+id);
  }
}
