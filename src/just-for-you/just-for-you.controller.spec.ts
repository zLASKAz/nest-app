import { Test, TestingModule } from '@nestjs/testing';
import { JustForYouController } from './just-for-you.controller';

describe('JustForYouController', () => {
  let controller: JustForYouController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JustForYouController],
    }).compile();

    controller = module.get<JustForYouController>(JustForYouController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
