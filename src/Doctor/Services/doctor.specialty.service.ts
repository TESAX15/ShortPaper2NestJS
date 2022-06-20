import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from '../Entities/doctor.entity';
import { Specialty } from 'src/Specialty/specialty.entity';
import { DoctorBaseService } from './doctor.base.service';

@Injectable()
export class DoctorSpecialtyService implements DoctorBaseService {
  constructor(
    @InjectRepository(Doctor) private doctorRepo: Repository<Doctor>,
    @InjectRepository(Specialty) private specialtyRepo: Repository<Specialty>,
  ) {}

  getRepository(): Repository<Doctor> {
    return this.doctorRepo;
  }

  findAll(): Promise<Doctor[]> {
    return this.getRepository().find({ relations: { specialties: true } });
  }

  async findBy(by: number): Promise<Doctor[]> {
    //const especialidad = await this.specialtyRepo.findBy({ id_specialty: by }); en el caso de que no queramos mandar error se usa esta
    const especialidad = await this.specialtyRepo.findOneByOrFail({
      id_specialty: by,
    });
    let resultado = await this.getRepository().find({
      where: { specialties: especialidad },
      relations: { specialties: true },
    });
    return resultado;
  }
}
