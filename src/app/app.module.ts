import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LogSignFormModule} from "./modules/log-sign-form/log-sign-form.module";
import {ContentModule} from "./modules/content/content.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LogSignFormModule,
    HttpClientModule,
    ContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
