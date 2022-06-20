import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Doctor } from 'src/Doctor/Entities/doctor.entity';

@Entity()
export class Specialty {
  @PrimaryGeneratedColumn()
  id_specialty: number;

  @Column()
  specialty_name: string;

  @ManyToMany(() => Doctor, (doctor) => doctor.specialties)
  doctors: Doctor[];
}
