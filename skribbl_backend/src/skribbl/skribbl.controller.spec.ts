import { Test, TestingModule } from '@nestjs/testing';
import { SkribblController } from './skribbl.controller';
import { SkribblService } from './skribbl.service';

describe('SkribblController', () => {
  let controller: SkribblController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkribblController],
      providers: [SkribblService],
    }).compile();

    controller = module.get<SkribblController>(SkribblController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
