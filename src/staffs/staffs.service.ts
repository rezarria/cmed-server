import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Staff } from 'src/entities/staff.entity';
import { Repository } from 'typeorm';
import { CreateStaffDto } from './dtos/create-staff.dto';
import { User } from 'src/entities/user.entity';
import { UpdateStaffDto } from './dtos/update-staff.dto';
import { ImagesService } from 'src/images/images.service';

@Injectable()
export class StaffsService {
  constructor(
    @InjectRepository(Staff) private readonly repo: Repository<Staff>,
    private readonly imagesService: ImagesService,
  ) {}

  async findAll() {
    return await this.repo.find({
      relations: {
        createdBy: true,
        modifiedBy: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.repo.findOne({
      relations: {
        createdBy: true,
        modifiedBy: true,
      },
      where: { id },
    });
  }

  async create(newStaff: CreateStaffDto, createdUser: User) {
    const { name, position, featuredImage } = newStaff;
    const imageUrl = await this.imagesService.uploadBase64Image(
      'staffs',
      featuredImage,
    );
    const staff = this.repo.create({
      name,
      position,
      featuredImage: imageUrl,
      createdBy: createdUser,
    });

    return await this.repo.save(staff);
  }

  async update(
    id: number,
    updateStaff: UpdateStaffDto | Partial<UpdateStaffDto>,
    modifiedUser: User,
  ) {
    const staff = await this.repo.findOneBy({ id });
    if (!staff) {
      throw new NotFoundException('Staff not found');
    }
    if (updateStaff.featuredImage) {
      const imageUrl = await this.imagesService.uploadBase64Image(
        'staffs',
        updateStaff.featuredImage,
      );
      updateStaff.featuredImage = imageUrl;
    }
    Object.assign(staff, updateStaff);
    staff.modifiedBy = modifiedUser;

    return await this.repo.save(staff);
  }

  async remove(id: number) {
    const staff = await this.repo.findOneBy({ id });
    if (!staff) {
      throw new NotFoundException('Staff not found');
    }

    await this.repo.remove(staff);
  }
}
