import { Test, TestingModule } from '@nestjs/testing';
import { JustForYouService } from './just-for-you.service';

describe('JustForYouService', () => {
  let service: JustForYouService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JustForYouService],
    }).compile();

    service = module.get<JustForYouService>(JustForYouService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
