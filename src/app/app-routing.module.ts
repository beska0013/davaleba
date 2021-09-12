import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./modules/log-sign-form/form/form.component";
import {ContentComponent} from "./modules/content/content.component";
import {PostsComponent} from "./modules/content/posts/posts.component";
import {OnePostComponent} from "./modules/content/one-post/one-post.component";


const routes: Routes = [
  {path:'', component: FormComponent},
  {
    path:'content', component:ContentComponent,
    children:[
      {path:'',component:PostsComponent},
      {path:'post',component:OnePostComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
