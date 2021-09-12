import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
})
export class LogInFormComponent implements OnInit {

  constructor(private sharedService:SharedServiceService) {}

  logIn = new FormGroup({
    userName: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
    ]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{4,}$')
    ])
  })


  onSubmit() {
    localStorage.setItem('state',`${this.logIn.valid}`)
    this.sharedService.checkValid(this.logIn.valid)
  }



  ngOnInit(): void {
  localStorage.clear()
  }

}
