import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from '../home-component/home-component.component';
import { LoginComponentComponent } from '../login-component/login-component.component';
import { RegisterComponentComponent } from '../register-component/register-component.component';
import { AuthorComponentComponent } from '../author-component/author-component.component';
import { ReaderComponentComponent } from '../reader-component/reader-component.component';
import { PurchaseComponentComponent } from '../purchase-component/purchase-component.component';


const routes:Routes = [ 
  { path: '', component:HomeComponentComponent  },
  { path: 'Home', component:HomeComponentComponent  },
  { path: 'logout', component:HomeComponentComponent  },
  { path: 'login', component: LoginComponentComponent },
  { path: 'signup', component: RegisterComponentComponent },
  { path: 'author', component: AuthorComponentComponent },
  { path: 'reader', component: ReaderComponentComponent },
  { path: 'purchase', component: PurchaseComponentComponent },
  { path: 'purchase/:id', component: PurchaseComponentComponent }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // declarations: [],
  // imports: [
  //   CommonModule
    
  // ]
})
export class AppRoutingModule { }
