import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorSpecialtyController } from './Controllers/doctor.specialty.controller';
import { Doctor } from './Entities/doctor.entity';
import { DoctorSpecialtyService } from './Services/doctor.specialty.service';
import { Specialty } from 'src/Specialty/specialty.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Doctor, Specialty])],
  providers: [DoctorSpecialtyService],
  controllers: [DoctorSpecialtyController],
})
export class DoctorModule {}
