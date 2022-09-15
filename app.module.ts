import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AuthorComponentComponent } from './author-component/author-component.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { ReaderComponentComponent } from './reader-component/reader-component.component';
import { PurchaseComponentComponent } from './purchase-component/purchase-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    RegisterComponentComponent,
    LoginComponentComponent,
    AuthorComponentComponent,
    ReaderComponentComponent,
    PurchaseComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
