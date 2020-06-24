import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsitecomponentComponent } from './websitecomponent/websitecomponent.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { RoomdetailsComponent } from './roomdetails/roomdetails.component';


const routes: Routes = [
  {path:'', component:WebsitecomponentComponent},
  {path:'about', component:AboutComponent},
  {path:'blog', component:BlogComponent},
  {path:'blogdetails', component:BlogdetailsComponent},
  {path:'contact', component:ContactComponent},
  {path:'home', component:HomeComponent},
  {path:'room', component:RoomComponent},
  {path:'roomdetails', component:RoomdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
