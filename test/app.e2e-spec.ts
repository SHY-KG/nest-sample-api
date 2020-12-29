import { ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome nest-sample-api');
  });

  describe('/animations', () => {
    it('GET', () => {
      return request(app.getHttpServer())
        .get('/animations')
        .expect(200)
        .expect([]);
    });
    it('POST 201', () => {
      return request(app.getHttpServer())
        .post('/animations')
        .send({
          genres: ['Romance', 'Comedy'],
          title: 'Kaguya',
          year: 2019,
        })
        .expect(201);
    });
    it('POST 400', () => {
      return request(app.getHttpServer())
        .post('/animations')
        .send({
          genres: ['Romance', 'Comedy'],
          title: 'Kaguya',
          year: 2019,
          dummyError: 'Plz Validation',
        })
        .expect(400);
    });
    it('DELETE', () => {
      return request(app.getHttpServer()).delete('/animations').expect(404);
    });
  });

  describe('/animations/:id', () => {
    it('GET 200', () => {
      return request(app.getHttpServer()).get('/animations/1').expect(200);
    });
    it('GET 404', () => {
      return request(app.getHttpServer()).get('/animations/77').expect(404);
    });
    it('PATCH 200', () => {
      return request(app.getHttpServer())
        .patch('/animations/1')
        .send({ title: 'Kaguya Hime' })
        .expect(200);
    });
    it('PATCH 404', () => {
      return request(app.getHttpServer())
        .patch('/animations/77')
        .send({ title: 'Dummy Animation' })
        .expect(404);
    });
    it('DELETE 200', () => {
      return request(app.getHttpServer()).delete('/animations/1').expect(200);
    });
  });
});
