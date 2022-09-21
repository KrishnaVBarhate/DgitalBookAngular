import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { purchase } from '../Models/purchase';
import { BooksService } from '../service/books.service';
import { Booki } from '../Models/bookmodel';
import { Useri } from '../Models/user';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-purchase-component',
  templateUrl: './purchase-component.component.html',
  styleUrls: ['./purchase-component.component.css']
})
export class PurchaseComponentComponent implements OnInit {
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
    user:this.user
  }
  purchases:purchase[]=[];
  purchase:purchase={
    //purchaseId:0,
    emailId : '',
    bookId : 0,
    purchaseDate: new Date,
    paymentMode :'',
    book:this.bookd
    
    
  }
  bid:any;
  searchResult:any;
  bResult:string='';
  bdisplay:string='';
  bookinfo:any ;
  constructor(private BooksSvc:BooksService, private route:ActivatedRoute,private Appcomp:AppComponent) { }
  
  ngOnInit(): void {
    this.bid =this.route.snapshot.paramMap.get('id');
    console.log(this.bid);
    this.loadhistory(this.purchase);
    this.Appcomp.IsLogout=true;
    
  }
  onSubmit()
  {
    
    this.PurchaseBook(this.purchase);
    //this.getbook(this.purchase);
   
  }
  PurchaseBook(purchases: purchase)
  {
    
    purchases.bookId= this.bid; 
    console.log(this.bid);
    purchases.book=null;
    this.BooksSvc.addPurchase(purchases)
    .subscribe(
      response => { this.purchase;console.log(this.purchase); this.loadhistory(this.purchase);
        //this.bookinfo=this.purchase.book?.bookName;
        this.bdisplay="The Book Purchased Successfully,Thank You"}

      );
  }

  loadpur(email:string){
    this.BooksSvc.getAllpurchase(email).subscribe(
      response => {this.searchResult = response; console.log(this.searchResult);}
      );

  }
      loadhistory(purchases: purchase){
      this.BooksSvc.getAllpurchase(purchases.emailId).subscribe(
        response => {this.searchResult = response; console.log(this.searchResult);}
        );
      }
      // getbook(purchases: purchase){
      //   this.BooksSvc.getAllBooksbybookid(purchases.bookId).subscribe(
      //     response => {this.bResult = response; console.log(this.bResult);}
      //     );
      //   }
      }
      
      
    