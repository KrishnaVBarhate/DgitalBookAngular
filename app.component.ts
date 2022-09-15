import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DigitalBook';
  IsAuthormoduleshow=false;
  IsUsermoduleshow=false;
  IsLogout=false;
  userFirst='';
  constructor(public routers:Router){}
  
  ngOnInit(): void {
    
  }

  GetUserID(){
    let values = JSON.parse(localStorage.getItem("User") || '');
    

    this.userFirst=values.firstName;
  }
  Onlogout()
{
  localStorage.removeItem("token");
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("User");
  this.IsAuthormoduleshow=false;
  this.IsUsermoduleshow=false;
  this.IsLogout=false;
  this.routers.navigate(['/login']);
}
  
}



 

