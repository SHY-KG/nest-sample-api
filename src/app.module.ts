import { Module } from '@nestjs/common';
import { AnimationsModule } from './animations/animations.module';
import { AppController } from './app.controller';

@Module({
  imports: [AnimationsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
