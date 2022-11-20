import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusCustomercareTeamComponent } from './aboutus/aboutus-customercare-team/aboutus-customercare-team.component';
import { AboutusSalesTeamComponent } from './aboutus/aboutus-sales-team/aboutus-sales-team.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    component:AboutusComponent,
    children:[
      {
        path:'aboutSalesRoute',
        component:AboutusSalesTeamComponent
      },
      {
        path:'aboutCareRoule',
        component:AboutusCustomercareTeamComponent
      }
    ]
  },
  {
    path:'**',  //This ** is the WILDCARD used for 404 : Page not found
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
