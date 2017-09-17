import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRouterModule } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    appRouterModule.components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouterModule.routes
  ],
  providers: [],
  bootstrap: [AppComponent],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }


