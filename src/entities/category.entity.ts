import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { New } from './new.entity';
import { Document } from './document.entity';
import { ConstService } from './const-service.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  modifiedAt: Date;

  @Column()
  name: string;

  @Column()
  nameJP: string

  @Column()
  nameEN: string

  @OneToMany(() => New, (news) => news.category)
  news: New[];

  @OneToMany(() => Document, (documents) => documents.category)
  documents: Document[];

  @ManyToOne(() => User, (user) => user.createdCategories)
  createdBy: User;

  @ManyToOne(() => User, (user) => user.modifiedCategories)
  modifiedBy: User;

  @OneToMany(() => ConstService, (homeServices) => homeServices.category)
  homeServices : ConstService[]
}
