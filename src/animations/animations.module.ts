import { Module } from '@nestjs/common';
import { AnimationsController } from './animations.controller';
import { AnimationsService } from './animations.service';

@Module({
  controllers: [AnimationsController],
  providers: [AnimationsService],
})
export class AnimationsModule {}
