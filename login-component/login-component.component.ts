import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder  } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { User, Userl } from '../Models/user';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  
  signinForm = new FormGroup
  ({
    usern : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required])
  })
  users:Userl[]=[];
  user:Userl={
    // userId:0,
    userName:'',
    emailId:'',
    firstName:'',
    lastName:'',
    userpassword:'',
    roleId:'',
    active:true
  }
  token:string='';
  isAuthenticated:boolean=false;
  response:any;
  bdisplay:string='';
  
  constructor(private BooksSvc:BooksService,public router:Router,private AppComp:AppComponent,public formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.AppComp.IsLogout=false;
  }
  home(){
    this.router.navigate(['/Home']);
  }
  onSubmit()
  {
    //this.user.userName=this.signinForm.controls['usern'].value,
    //this.user.userpassword=this.signinForm.controls['password'].value
    this.BooksSvc.userlogin(this.user).subscribe(
      response => {this.response = response; 
        
        if(response.isAuthenticated ==true)
        {
          
          localStorage.setItem("Token",response.token);
          localStorage.setItem('User', JSON.stringify(this.response.user));
          console.log(this.response);
          
        
        
       if(this.response.user.roleId==0)
        
        {
          console.log(this.response.user.roleId);
          this.router.navigate(['/author']);
          this.AppComp.IsLogout=true;
        }
        else{
        this.router.navigate(['/reader']);
        this.AppComp.IsLogout=true;

        }
        
      }
      else{
        this.bdisplay="Invalid Username or Password"
      }
      
    }

      
      );
      
    }
  }
  