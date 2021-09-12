import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [
    LogInFormComponent,
    SignInFormComponent,
    FormComponent
  ],
  exports:[FormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class LogSignFormModule { }
