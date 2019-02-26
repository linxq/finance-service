import 'reflect-metadata'; // this shim is required
import { Controller, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

@Controller('/class')
export default class ClassController {

    @Get('/classes')
    getAll() {
        return 'This action returns all classes1222';
    }

    @Get('/classes/:id')
    getOne(@Param('id') id: number) {
        return 'This action returns user #' + id;
    }

    @Post('/classes1')
    post(@Body() user: any) {
        return 'Saving user...';
    }

    @Put('/classes/:id')
    put(@Param('id') id: number, @Body() user: any) {
        return 'Updating a user...';
    }

    @Delete('/classes/:id')
    remove(@Param('id') id: number) {
        return 'Removing user...';
    }

}