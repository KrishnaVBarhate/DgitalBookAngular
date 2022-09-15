import { Booki } from "./bookmodel";

export interface purchase {
    //purchaseId: number,
    emailId : string,
    bookId : number,
    purchaseDate:Date,
    paymentMode : string,
    book:Booki | null
    
}