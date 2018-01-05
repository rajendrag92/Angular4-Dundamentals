import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';
import {CustomerReactiveComponent} from './customers/customer.component.reactive'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerReactiveComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
