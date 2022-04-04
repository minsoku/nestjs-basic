import { Controller, Get, Param, Post, Delete, Patch, Body, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return 'This will return all movies';
    }

    @Get('search')
    search(@Query('year') searchingYear: string) {
        return `search ${searchingYear}`;
    }

    @Get(':id')
    getId(@Param('id') id: string) {
        return id;
    }

    @Post()
    create(@Body() moveData) {
        console.log(moveData);
        return moveData;
    }

    @Delete(':id')
    remove(@Param('id') movieId: string) {
        return `delete ${movieId}`;
    }

    @Patch(':id')
    patch(@Param('id') movieId: string, @Body() updateData) {
        return {
            movieId,
            ...updateData
        }
    }
}
