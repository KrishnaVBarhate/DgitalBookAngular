import { Component, OnInit } from '@angular/core';
import { Book } from '../Models/bookmodel';
import { User } from '../Models/user';
import { BooksService } from '../service/books.service';
import { Router } from '@angular/router';
import { Booki } from '../Models/bookmodel';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit
 {

  users:User[]=[];
  user:User={
    //userId:0,
    userName:'',
    emailId:'',
    firstName:'',
    lastName:'',
    userpassword:'',
    roleId:'',
    active:true
  }
  booksall:any;
  books:Booki[]=[];
  book: Booki = {
  bookId:'',
  bookName:'',
  categoryid:'',
  price:'',
  publisher:'',
  userid:'',
  publishdate:'0000-00-00',
  content:'',
  active:true,
  user:this.user

  }
  searchResult: any;

  constructor(private BooksSvc:BooksService,private router:Router,private Appcomp:AppComponent) { }

  ngOnInit(): void {
    //this.searchBook(this.book);
    //this.Appcomp.IsLogout=false;

  }
  getAllBooks() {
    this.BooksSvc.getAllBooksi()
    .subscribe(
      response => { this.booksall = response}
    );
  }

    onSubmit()
    {
      this.searchBook(this.book);
     
     // this.searchBookn();
    }

  searchBook(bookz: Booki)
  {
    this.BooksSvc.searchBooks(bookz.bookName,bookz.user.userName,bookz.publisher,bookz.publishdate).subscribe(
      response => { this.books = response;console.log(this.books)});
  }

  // searchBookn()
  // {
  //   this.BooksSvc.searchBooksn(this.book.bookName,this.book.usermodel.userName,this.book.publisher,this.book.publishdate).subscribe(
  //     response => {this.searchResult = response; console.log(this.searchResult);});
  // }

  // searchBooks(){
  //   this.service.SearchBooks(this.selectedCategory,this.selectedAuthor,this.price).subscribe(
  //     response => {this.searchResult = response; console.log(this.searchResult);}
  //   );
  //   }

   
 }
