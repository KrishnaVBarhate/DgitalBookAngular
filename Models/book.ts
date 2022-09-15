import { User } from "./user";

export interface Bookk
{
    //Publish book
    //bookid:string;
    bookName:string;
    categoryid:string;
    price:string;
    publisher:string;
    userid:string;
    publishdate:string;
    content:string;
    active:boolean;
    

}

export interface Bookp
{
    //bookId:number,
    bookName :string,
    categoryId :string,
    price :string,
    publisher :string,
    userId:number,
    publishedDate :Date,
    content :string,
    active :boolean,

    

}