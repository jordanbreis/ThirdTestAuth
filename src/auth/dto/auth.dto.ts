import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsString()
  @MaxLength(50)
  @MinLength(4)
  email: string;

  @IsString()
  @MaxLength(50)
  @MinLength(4)
  password: string;
}
