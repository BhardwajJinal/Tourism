import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { ContactComponent } from './contact/contact.component';
import { RegComponent } from './reg/reg.component';


const routes: Routes = [
  { path:"",component:HomeComponent},
{path:"home",component:HomeComponent},
{path:"reg",component:RegComponent}
];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
