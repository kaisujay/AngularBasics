import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',  // '' means default page
    component:HomeComponent
  },
  {
    path:'contactRoute',
    component:ContactusComponent
  },
  {
    path:'contactRoute/:routeValue',  // "routeValue" is the parameter
    component:ContactusComponent
  },
  {
    path:'aboutRoute',
    component:AboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
