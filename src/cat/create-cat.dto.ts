import { IsString, IsInt } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;
  @IsString()
  age: string;
}
