import {
  IsEmail,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
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
