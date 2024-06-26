import { Expose } from 'class-transformer';
import { DocumentDto } from 'src/documents/dtos/document.dto';
import { NewDto } from 'src/news/dtos/new.dto';

export class CategoryDto {
  @Expose()
  id: number;

  @Expose()
  createdAt: Date;

  @Expose()
  modifiedAt: Date;

  @Expose()
  name: string;

  @Expose()
  nameJP: string;


  @Expose()
  nameEN: string

  @Expose()
  news: NewDto;

  @Expose()
  documents: DocumentDto;
}
