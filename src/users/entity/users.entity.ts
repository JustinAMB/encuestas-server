import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({ type: 'varchar', length: 30, nullable: false })
    username:string;
    @Column({ type: 'varchar', length: 255, nullable: false })
    email:string;
    @Column({ type: 'varchar', length: 255, nullable: false })
    password:string;
}