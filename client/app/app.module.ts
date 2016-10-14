import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import {HttpModule,JsonpModule} from '@angular/http';

import { AppComponent }   from './app.component';
import {EmpComponent } from './emp.component';

import { EmpService }          from './emp.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule ,HttpModule,JsonpModule],
  declarations: [ AppComponent, EmpComponent ],
  providers: [
    EmpService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

