import { Module } from '@nestjs/common';
import { AnimationsController } from './animations/animations.controller';

@Module({
  imports: [],
  controllers: [AnimationsController],
  providers: [],
})
export class AppModule {}
