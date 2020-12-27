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
import { AnimationsService } from './animations.service';
import { Animation } from './entities/Animation.entity';

@Controller('animations')
export class AnimationsController {
  constructor(private readonly animationsService: AnimationsService) {}

  @Get()
  getAll(): Animation[] {
    return this.animationsService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') animationId: string): Animation {
    return this.animationsService.getOne(animationId);
  }

  @Post()
  create(@Body() animationData) {
    return this.animationsService.create(animationData);
  }

  @Delete('/:id')
  remove(@Param('id') animationId: string) {
    return this.animationsService.deleteOne(animationId);
  }

  @Patch('/:id')
  patch(@Param('id') animationId: string, @Body() updateData) {
    return this.animationsService.update(animationId, updateData);
  }
}
