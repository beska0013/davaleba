import { Component} from '@angular/core';
import {ContentServiceService} from "../content-service.service";





@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})


export class PostsComponent {
  posts:any = []
  constructor(private service:ContentServiceService) {
    service.getPosts().subscribe( posts => {
      // @ts-ignore
        this.posts.push(...posts);
    })
  }

  postId (id:number) {
    this.service.getId(id)
  }

}
