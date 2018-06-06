import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {  HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import{ FilterPipe} from './app.filter';



const router : Routes=([{
   path : 'registration' , component : RegistrationComponent
},
{path : 'login' ,  component : LoginComponent},
{path : 'profile' ,  component : ProfileComponent}
])


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(router),
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
