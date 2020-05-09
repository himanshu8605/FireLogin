import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginPageComponent } from './login-page/login-page.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { HomeComponent } from './home/home.component';


import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';

var config = {
  apiKey: "AIzaSyA5fjQQA5QSh0jKhSWhCFOzo-d1aIWdqzs",
  authDomain: "fir-login-a143f.firebaseapp.com",
  databaseURL: "https://fir-login-a143f.firebaseio.com",
  projectId: "fir-login-a143f",
  storageBucket: "fir-login-a143f.appspot.com",
  messagingSenderId: "9s57224104605",
  appId: "1:957224104605:web:708a6438c8907b58a69a74",
  measurementId: "G-Z4QKEL7Z4X"

};

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, HttpClientModule,FormsModule,
    BrowserAnimationsModule,MatSliderModule,Ng2SearchPipeModule,
    AngularFireModule.initializeApp(config),AngularFireAuthModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSelectModule,
  ],
  exports:[],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
