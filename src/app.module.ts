import { Module } from '@nestjs/common';
import { AnimationsController } from './animations/animations.controller';
import { AnimationsService } from './animations/animations.service';

@Module({
  imports: [],
  controllers: [AnimationsController],
  providers: [AnimationsService],
})
export class AppModule {}
