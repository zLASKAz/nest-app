import { Test, TestingModule } from '@nestjs/testing';
import { WhichListService } from './which-list.service';

describe('WhichListService', () => {
  let service: WhichListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhichListService],
    }).compile();

    service = module.get<WhichListService>(WhichListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
