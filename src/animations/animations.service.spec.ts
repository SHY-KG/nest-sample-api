import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AnimationsService } from './animations.service';

describe('AnimationsService', () => {
  let service: AnimationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimationsService],
    }).compile();

    service = module.get<AnimationsService>(AnimationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll Animation', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne Animation', () => {
    it('should return animation Kaguya', () => {
      service.create({
        genres: ['Romance, Comedy'],
        title: 'Kaguya',
        year: 2019,
      });
      const animation = service.getOne(1);
      expect(animation).toBeDefined();
      expect(animation.id).toEqual(1);
      expect(animation.title).toEqual('Kaguya');
    });
    it('should throw 404 error', () => {
      try {
        service.getOne(77);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toEqual('Animation ID 77 was not fount');
      }
    });
  });

  describe('deleteOne Animation', () => {
    it('deletes an animation', () => {
      service.create({
        genres: ['Romance, Comedy'],
        title: 'Kaguya',
        year: 2019,
      });
      const beforeDelete = service.getAll();
      service.deleteOne(1);
      const afterDelete = service.getAll();
      expect(afterDelete.length).toBeLessThan(beforeDelete.length);
    });
    it('should throw 404 error', () => {
      try {
        service.deleteOne(77);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('create Animation', () => {
    it('should create an animation', () => {
      const beforeCreate = service.getAll().length;
      service.create({
        genres: ['Romance, Comedy'],
        title: 'Kaguya',
        year: 2019,
      });
      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe('update Animation', () => {
    it('should update an animation', () => {
      service.create({
        genres: ['Romance, Comedy'],
        title: 'Kaguya',
        year: 2019,
      });
      const beforeUpdate = service.getOne(1).title;
      expect(beforeUpdate).toEqual('Kaguya');

      service.update(1, {
        title: 'Kaguya Hime',
      });
      const afterUpdate = service.getOne(1).title;
      expect(afterUpdate).toEqual('Kaguya Hime');
    });
    it('should throw a NotFoundExecption', () => {
      try {
        service.update(77, {
          title: 'Kaguya Hime',
        });
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
