import { AfterInsert, AfterUpdate, AfterRemove, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class JustForYou {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: string

    @Column()
    image_path: string

    // afterinssert update and remove is a hook but when you not create a user but save with a plain object 
    // hook will not executed
    @AfterInsert()
    logInsert() {
        console.log("Inserted User with id", this.id)
    }
    @AfterUpdate()
    logUpdate() {
        console.log('Updated User with id', this.id)
    }
    @AfterRemove()
    logRemove() {
        console.log('Remove User with id', this.id)
    }
}