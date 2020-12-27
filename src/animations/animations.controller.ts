import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AnimationsService } from './animations.service';
import { CreateAnimationDto } from './dto/create-animation.dto';
import { Animation } from './entities/Animation.entity';

@Controller('animations')
export class AnimationsController {
  constructor(private readonly animationsService: AnimationsService) {}

  @Get()
  getAll(): Animation[] {
    return this.animationsService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') animationId: number): Animation {
    console.log(typeof animationId);
    return this.animationsService.getOne(animationId);
  }

  @Post()
  create(@Body() animationData: CreateAnimationDto) {
    return this.animationsService.create(animationData);
  }

  @Delete('/:id')
  remove(@Param('id') animationId: number) {
    return this.animationsService.deleteOne(animationId);
  }

  @Patch('/:id')
  patch(@Param('id') animationId: number, @Body() updateData) {
    return this.animationsService.update(animationId, updateData);
  }
}
