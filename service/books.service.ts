import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookk, Bookp } from '../Models/book';
import { Book, Booki } from '../Models/bookmodel';
import { purchase } from '../Models/purchase';
import { User, Useri } from '../Models/user';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseUrl = 'https://localhost:7283/api/Books';
  baseUrll = 'https://localhost:7283/api/Users';
  baseUrlauth='https://localhost:7244/ValidateLogin';
  baseUrlpur='https://localhost:7283/api/Purchases';

  constructor(private http: HttpClient) { }

  //Get all Books
  getAllBooks():Observable<Book[]>{
      return this.http.get<Book[]>(this.baseUrl);
  }

  getAllBooksbybookid(id:Number):Observable<string>{
    return this.http.get<string>(this.baseUrl+'/'+id);
}
  getAllBooksi():Observable<Booki[]>{
    return this.http.get<Booki[]>(this.baseUrl);
}
  getAllBookp():Observable<Bookp[]>{
    return this.http.get<Bookp[]>(this.baseUrl);
}
getAllBooksauth(id:String):Observable<Book[]>{
  return this.http.get<Book[]>(this.baseUrl+'/GetauthorBook?uid='+id);
}
getAllpurchase(eml:String):Observable<purchase[]>{
  return this.http.get<purchase[]>(this.baseUrlpur+'/Getpurchaseeml?eml='+eml);
}

getAllpurchasereader(eml:String):Observable<purchase[]>{
  return this.http.get<purchase[]>(this.baseUrlpur+'/Getpurchasedbook?eml='+eml);
}
getAllpurchaseall():Observable<purchase[]>{
  return this.http.get<purchase[]>(this.baseUrlpur);
}
  //search books by details
  searchBooks(Bname:string,author:string,publisher:string,pd:string):Observable<Booki[]>{
    return this.http.get<Booki[]>(this.baseUrl +'/SerachBook?BName='+Bname+'&Author='+author+'&Publisher='+publisher+'&Pd='+pd);
   
  }
  
  searchBooksn(Bname:string,author:string,publisher:string,pd:string):Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl +'/SearchBook?BName='+Bname+'&Author='+author+'&Publisher='+publisher+'&Pd='+pd);
   // return this.http.get<Book[]>(this.baseUrl +'/'+Bname+'&'+author+'&'+publisher+'&'+pd);
    ///?BName=BOOK1&Author=kvb&Publisher=ASDF&Pd=2022-07-20
    //BName=BOOK1&Author=kvb&Publisher=ASD&Pd=2022-07-20
  }
  addUser(user: User ):Observable<User> {
    //user.userId = '100';
    return this.http.post<User>(this.baseUrll, user);
  }
  addPurchase(pr: purchase ):Observable<purchase> {
    //user.userId = '100';
    return this.http.post<purchase>(this.baseUrlpur, pr);
  }
  deactivatebook(id:number ):Observable<Bookp> {
    //user.userId = '100';
    return this.http.put<Bookp>(this.baseUrl+'/Deactivebook?id='+id,id);


  }

  updatebook(id:number,content:string):Observable<Bookp> {
    //user.userId = '100';
    return this.http.put<Bookp>(this.baseUrl+'/ubook?id='+id+'&content='+content,id);
  }
  addBook(book: Bookk ):Observable<Book> {
    //user.userId = '100';
    return this.http.post<Book>(this.baseUrl, book);
  }
  addBookp(book: Bookp ):Observable<Bookp> {
    //user.userId = '100';
    return this.http.post<Bookp>(this.baseUrl, book);
  }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrll);
  }
  getAllUsersi():Observable<Useri[]>{
    return this.http.get<Useri[]>(this.baseUrll);
  }
  
  
  getAllUsersbyname(userName:String):Observable<User[]>{
    return this.http.get<Useri[]>(this.baseUrll+'/Userbyname?uname='+userName);
  }

  userlogin(user: User):Observable<any>{
    var request={
      userName: user.userName,
      password:user.userpassword
    }
    return this.http.post<any>(this.baseUrlauth,request)
  }
  // getAllBooks():Observable<Bookk[]>{
  //   return this.http.get<Bookk[]>(this.baseUrl);
}


