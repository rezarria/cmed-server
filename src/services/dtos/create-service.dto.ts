import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @IsString()
  @MaxLength(255)
  nameJP: string;

  @IsString()
  @MaxLength(255)
  nameEN: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  description: string;

  @IsString()
  @MaxLength(255)
  descriptionEN: string;


  @IsString()
  @MaxLength(255)
  descriptionJP: string;

  @IsString()
  @IsNotEmpty()
  featuredImage: string;

  @IsString()
  @IsNotEmpty()
  logo: string;

  @IsString()
  @IsNotEmpty()
  featuredImage2: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  contentJP: string;

  @IsString()
  contentEN: string;
}
