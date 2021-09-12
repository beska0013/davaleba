import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from "../../shared-service.service";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  valid:boolean = false;

  constructor() {
    localStorage.getItem('state')==='true'?
      this.valid = true :
      this.valid = false
  }








  ngOnInit(): void {

  }

}
