import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {OnePostComponent} from "./one-post/one-post.component";


const contentRoutes: Routes = [
  {path:'', component: PostsComponent},
  {path:'post', component:  OnePostComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(contentRoutes)
  ],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
