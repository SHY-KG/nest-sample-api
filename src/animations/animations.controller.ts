import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('animations')
export class AnimationsController {
  @Get()
  getAll() {
    return 'This will Return All Animations';
  }

  @Get('/:id')
  getOne(@Param('id') animationId: string) {
    return `This will reeturn one Animation with the id: ${animationId}`;
  }

  @Post()
  create() {
    return 'This will create a animation';
  }

  @Delete('/:id')
  remove(@Param('id') animationId: string) {
    return `This will remove a animation with the id: ${animationId}`;
  }

  @Patch('/:id')
  patch(@Param('id') animationId: string) {
    return `This will patch a animation with the id: ${animationId}`;
  }
}
