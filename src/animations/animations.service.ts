import { Injectable, NotFoundException } from '@nestjs/common';
import { Animation } from './entities/Animation.entity';

@Injectable()
export class AnimationsService {
  private animations: Animation[] = [];

  getAll(): Animation[] {
    return this.animations;
  }

  getOne(id: string): Animation {
    const animation = this.animations.find(
      (animation) => animation.id === parseInt(id),
    );
    if (!animation) {
      throw new NotFoundException(`Animation ID ${id} was not fount`);
    }
    return animation;
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.animations = this.animations.filter(
      (animation) => animation.id !== parseInt(id),
    );
  }

  create(animationData) {
    this.animations.push({
      id: this.animations.length + 1,
      ...animationData,
    });
  }

  update(id: string, updateData) {
    const animation = this.getOne(id);
    this.deleteOne(id);
    this.animations.push({
      ...animation,
      ...updateData,
    });
  }
}
