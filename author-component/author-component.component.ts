import { Component, OnInit } from '@angular/core';
import { BooksService } from '../service/books.service';
import { Bookk, Bookp } from '../Models/book';
import { Useri } from '../Models/user';
import { User } from '../Models/user';
import { Category } from '../Models/category';
import { Router } from '@angular/router';
import { Book } from '../Models/bookmodel';

@Component({
  selector: 'app-author-component',
  templateUrl: './author-component.component.html',
  styleUrls: ['./author-component.component.css']
})
export class AuthorComponentComponent implements OnInit {
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
  obj='';
  categories:Category[]=[];
  category:Category={
    categoryId:0,
    categoryName:''
  }
  // users:Useri[]=[];
  // user:Useri={
  //   userId:0,
  //   userName:'',
  //   emailId:'',
  //   firstName:'',
  //   lastName:'',
  //   userpassword:'',
  //   roleId:'',
  //   active:true
  // }
  booksd:Book[]=[];
  bookd: Book = {
  //bookid:'',
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
  books:Bookp[]=[];
  book: Bookp = {
    //bookId: 0,
    bookName :'',
    categoryId :'',
    price :'',
    publisher :'',
    userId:0,
    publishedDate : new Date,
    content :'',
    active :true,
  

  }
  userID : number =0;
  userIDs:string='';
  userFirst:string='';
  searchResult:any;
  bookcontent:string='';
  constructor(private BooksSvc:BooksService,private router:Router) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.GetUserID();
    this.loadBooks();
    
  }

  signOut()
  {
    localStorage.removeItem('');
    this.router.navigate(['/Login']);
  }

  getAllBooks() {
    this.BooksSvc.getAllBookp()
    .subscribe(
      response => { this.books = response}
      
    );
  }
  getAllUsers() {
    this.BooksSvc.getAllUsersi()
    .subscribe(
      response => { this.users = response}
    );
  }
  GetUserID(){
    let values = JSON.parse(localStorage.getItem("User") || '');
    this.userID = values.userId;
    this.userIDs = values.userId;

    this.userFirst=values.firstName;
  }

  onSubmit()
  {
    this.AddBook(this.book);
  }
  AddBook(book: Bookp)
  {
    if(this.obj=='Fiction')  
    {     this.book.categoryId='1';  }  
    else if(this.obj=='comic')  
    {    this.book.categoryId='2';  } 
     else{    this.book.categoryId='3';  }  



    const  userdetail = this.users.find(users => users.userName == this.user.userName);
    
     console.log(userdetail); 
     this.book.userId=userdetail?.userId!;  
    //this.book.bookId=0;
      this.book.userId=this.userID;

    
    this.BooksSvc.addBookp(book)
    .subscribe(
      response => { this.books}
  );
  }
  loadBooks(){
    this.BooksSvc.getAllBooksauth(this.userIDs).subscribe(
      response => {this.searchResult = response; console.log(this.searchResult);}
    );
    }
    read(book:Book)
    {
      this.bookcontent=book.content;
    }
  
  deactivatebook(id:number){
    // this.book.active=false;
    this.BooksSvc.deactivatebook(id).subscribe(
      response =>{
        this.loadBooks()
      }
    );

  }

  update(id:number,content:string)
  {
    this.BooksSvc.updatebook(id,content).subscribe(
      response =>{
        this.loadBooks();
        alert('Book content Updated');
      }
    );
  }
  
  

}
