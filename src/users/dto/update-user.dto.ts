import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
  Max,
  IsNumber,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsEmail()
  @IsString()
  @MaxLength(50)
  @MinLength(4)
  email: string;

  @IsString()
  @MaxLength(50)
  @MinLength(4)
  password: string;

  @IsString()
  @MaxLength(50)
  @MinLength(4)
  name: string;

  @Max(120)
  @IsNumber()
  age: number;
}
