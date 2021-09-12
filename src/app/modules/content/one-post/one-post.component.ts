import { Component, OnInit } from '@angular/core';
import {ContentServiceService} from "../content-service.service";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.scss']
})
export class OnePostComponent implements OnInit {


  url = 'https://jsonplaceholder.typicode.com/posts'
  id = this.service.id
  post: any = []
  constructor(private service:ContentServiceService,private http: HttpClient) {}

  idSave() {
    this.id > 0 ? localStorage.setItem(`id`,this.id.toString()): null
    let idNum = localStorage.getItem(`id`)
    if(idNum !=null) this.getPost(parseInt(idNum))
  }

  getPost = (id:number) => {
     this.http.get(this.url + `/${id}`)
     .subscribe(res => this.post.push(res))
  }


  ngOnInit(): void {
    this.idSave()
  }

}
