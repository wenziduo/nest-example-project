import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty()
  @IsString({ message: '名称必须是string类型' })
  name: string;

  @ApiProperty()
  @IsInt({ message: '年龄必须是number类型' })
  age: number;
}
