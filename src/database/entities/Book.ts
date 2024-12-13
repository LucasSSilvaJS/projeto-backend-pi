import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DBTable } from "../../constants/DBTable";
import { Author } from "./Author";
import { ImageUtil } from "../../utils/ImageUtil";

@Entity(DBTable.BOOKS)
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    title: string;

    @Column({nullable: false})
    description: string;

    @ManyToOne((type) => Author, (author) => author.books, {eager: true})
    author: Author;

    @Column()
    authorId: number;

    @Column()
    price: number;

    @Column()
    category: string;

    @Column({nullable: true})
    image: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    toPayload(): Partial<Book>{
        return{
            id: this.id,
            title: this.title,
            image: ImageUtil.prepareUrl("books", this.image),
            description: this.description,
            author: this.author.toPayload(),
            price: this.price,
            category: this.category,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}