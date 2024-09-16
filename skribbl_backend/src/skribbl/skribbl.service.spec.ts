import { Test, TestingModule } from '@nestjs/testing';
import { SkribblService } from './skribbl.service';

describe('SkribblService', () => {
  let service: SkribblService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SkribblService],
    }).compile();

    service = module.get<SkribblService>(SkribblService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
