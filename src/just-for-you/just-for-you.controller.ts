import { Controller, Get, Body, Param, Post, Delete } from '@nestjs/common';
import { JustForYouService } from './just-for-you.service';
import { CreateJustForYouDto } from './dtos/create-just-for-you.dto';
@Controller('api/just-for-you')
export class JustForYouController {
    constructor(private justforyou: JustForYouService) { }

    @Get('/:id')
    async findUser(@Param('id') id: number) {
        return this.justforyou.findOne(id)
    }

    @Get('/')
    async findAll() {
        return this.justforyou.findAll()
    }

    @Post('/post')
    createJustForYou(@Body() body: CreateJustForYouDto) {
        // nest extract @body auto and provide as an argument body
        return this.justforyou.create(body.name, body.price)
    }
    @Delete('/delete/:id')
    removeJustForYou(@Param('id') id: number) {
        return this.justforyou.remove(id)
    }
}
