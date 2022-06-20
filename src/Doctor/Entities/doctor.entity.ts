import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Specialty } from 'src/Specialty/specialty.entity';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id_doctor: number;

  @Column()
  doctor_name: string;

  @Column()
  image: number;

  @Column()
  gender: string;

  @ManyToMany(() => Specialty, (specialty) => specialty.doctors)
  @JoinTable({
    name: 'doctor_specialty',
    joinColumn: {
      name: 'id_doctor',
    },
    inverseJoinColumn: {
      name: 'id_specialty',
    },
  })
  specialties: Specialty[];
}
