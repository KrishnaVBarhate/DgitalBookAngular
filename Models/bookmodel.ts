import { User } from "./user";

export interface Book
{
    //bookid:string;
    bookName:string;
    categoryid:string;
    price:string;
    publisher:string;
    userid:string;
    publishdate:string;
    content:string;
    active:boolean;
    usermodel:User;

}

export interface Booki
{
    bookId:string;
    bookName:string;
    categoryid:string;
    price:string;
    publisher:string;
    userid:string;
    publishdate:string;
    content:string;
    active:boolean;
    user:User;

}

