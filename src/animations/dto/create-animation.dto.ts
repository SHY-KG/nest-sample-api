import { IsNumber, IsString } from 'class-validator';

export class CreateAnimationDto {
  @IsString({ each: true })
  readonly genres: string[];
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
}
