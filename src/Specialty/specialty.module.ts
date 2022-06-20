import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specialty } from './specialty.entity';
/*import { DoctorController } from './Controllers/doctor.controller';
import { Doctor } from './Entities/doctor.entity';
import { DoctorService } from './Services/doctor.service';*/

@Module({
  imports: [TypeOrmModule.forFeature([Specialty])],
  /*providers: [DoctorService],
  controllers: [DoctorController],*/
})
export class SpecialtyModule {}
