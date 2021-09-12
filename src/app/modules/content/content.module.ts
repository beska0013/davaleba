import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import {PostsComponent} from "./posts/posts.component";
import {OnePostComponent} from "./one-post/one-post.component";

import {ContentServiceService} from "./content-service.service";
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    ContentComponent,
    PostsComponent,
    OnePostComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
  ],
  providers:[ContentServiceService]
})
export class ContentModule { }
