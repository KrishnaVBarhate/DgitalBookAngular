import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  users:User[]=[];
  user:User={
   // userId:0,
    userName:'',
    emailId:'',
    firstName:'',
    lastName:'',
    userpassword:'',
    roleId:'',
    active:true
  }

  constructor(private BooksSvc:BooksService) { }

  ngOnInit(): void {
    
  }

  getAllUsers() {
    this.BooksSvc.getAllUsers()
    .subscribe(
      response => { this.users = response}
    );
  }

onSubmit(){
  //if(this.user.userId === ''){
    this.BooksSvc.addUser(this.user)
    .subscribe(
      response => {
        alert("Registration Successful");
        this.getAllUsers();
        this.user = {
         // userId:0,
    userName:'',
    emailId:'',
    firstName:'',
    lastName:'',
    userpassword:'',
    roleId:'',
    active:true
        };
      }
    );
  }
  onAuthorRole()
  {
    console.log("Author");
    this.user.roleId='0';
  }
  onReaderRole()
  {
    console.log("Reader");
    this.user.roleId='1';
  }
}

