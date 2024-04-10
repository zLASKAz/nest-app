import { Module } from '@nestjs/common';
import { WhichListController } from './which-list.controller';
import { WhichListService } from './which-list.service';

@Module({
  controllers: [WhichListController],
  providers: [WhichListService]
})
export class WhichListModule {}
