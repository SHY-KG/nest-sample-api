import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAnimationDto {
  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
}
