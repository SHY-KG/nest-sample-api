import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('animations')
export class AnimationsController {
  @Get()
  getAll() {
    return 'This will Return All Animations';
  }

  @Get('/search')
  serach(@Query('year') serachingYear: string) {
    return `Searching for a Animation made on ${serachingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') animationId: string) {
    return `This will reeturn one Animation with the id: ${animationId}`;
  }

  @Post()
  create(@Body() animationData) {
    return animationData;
  }

  @Delete('/:id')
  remove(@Param('id') animationId: string) {
    return `This will remove a animation with the id: ${animationId}`;
  }

  @Patch('/:id')
  patch(@Param('id') animationId: string, @Body() updateData) {
    return {
      updatedAnimation: animationId,
      ...updateData,
    };
  }
}
