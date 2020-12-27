import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnimationDto } from './dto/create-animation.dto';
import { Animation } from './entities/Animation.entity';

@Injectable()
export class AnimationsService {
  private animations: Animation[] = [];

  getAll(): Animation[] {
    return this.animations;
  }

  getOne(id: number): Animation {
    const animation = this.animations.find((animation) => animation.id === id);
    if (!animation) {
      throw new NotFoundException(`Animation ID ${id} was not fount`);
    }
    return animation;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.animations = this.animations.filter(
      (animation) => animation.id !== id,
    );
  }

  create(animationData: CreateAnimationDto) {
    this.animations.push({
      id: this.animations.length + 1,
      ...animationData,
    });
  }

  update(id: number, updateData) {
    const animation = this.getOne(id);
    this.deleteOne(id);
    this.animations.push({
      ...animation,
      ...updateData,
    });
  }
}
