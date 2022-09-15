import { Component, OnInit } from '@angular/core';
import { BooksService } from '../service/books.service';
import { Book, Booki } from '../Models/bookmodel';
import { Useri } from '../Models/user';

@Component({
  selector: 'app-reader-component',
  templateUrl: './reader-component.component.html',
  styleUrls: ['./reader-component.component.css']
})
export class ReaderComponentComponent implements OnInit {

  
  searchResult:any;
  userID:any;

  uname:string='';
  users:Useri[]=[];
  user:Useri={
    userId:0,
    userName:'',
    emailId:'',
    firstName:'',
    lastName:'',
    userpassword:'',
    roleId:'',
    active:true
  }

  booksd:Booki[]=[];
  bookd: Booki = {
  bookId:'',
  bookName:'',
  categoryid:'',
  price:'',
  publisher:'',
  userid:'',
  publishdate:'',
  content:'',
  active:true,
  usermodel:this.user

  }
  emailID:any;
  bookcontent:string='';
  userFirst:string="";
  

  constructor(private BooksSvc:BooksService) { }

  ngOnInit(): void {
    this.GetUserID();
    //this.loadhistory();
    this.getAllBooks();
    
  }
  GetUserID(){
    let values = JSON.parse(localStorage.getItem("User") || '');
    this.emailID = values.emailId;
    this.userID=values.userId;
    this.userFirst=values.firstName;
  }

  loadhistory(){
    this.BooksSvc.getAllpurchasereader(this.emailID).subscribe(
      response => {this.searchResult = response; console.log(this.searchResult);}
    );
    }
  
    loadBooks(){
      this.BooksSvc.getAllBooksauth(this.userID).subscribe(
        response => {this.searchResult = response; console.log(this.searchResult);}
      );
      }
    getAllBooks() {
      this.BooksSvc.getAllBooksi()
      .subscribe(
        response => { this.booksd = response}
        
      );
    }

    onViewClick(book:Booki)
    {
      this.bookcontent=book.content;
    }
}
