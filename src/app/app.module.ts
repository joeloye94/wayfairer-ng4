import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRouterModule } from "./app.routes";
import { TestSassComponent } from './test-sass/test-sass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    appRouterModule.components,
    TestSassComponent
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


