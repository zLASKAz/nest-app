import { Module } from '@nestjs/common';
import { JustForYouController } from './just-for-you.controller';
import { JustForYouService } from './just-for-you.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JustForYou } from './just-for-you.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([JustForYou])
  ],
  controllers: [JustForYouController],
  providers: [JustForYouService]
})
export class JustForYouModule { }
