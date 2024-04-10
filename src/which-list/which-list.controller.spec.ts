import { Test, TestingModule } from '@nestjs/testing';
import { WhichListController } from './which-list.controller';

describe('WhichListController', () => {
  let controller: WhichListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhichListController],
    }).compile();

    controller = module.get<WhichListController>(WhichListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
