import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDO_9vdhT9kqpHe-WyZgvyPwh84LcHPSPM",
  authDomain: "businesscontacts-a8881.firebaseapp.com",
  databaseURL: "https://businesscontacts-a8881.firebaseio.com",
  storageBucket: "businesscontacts-a8881.appspot.com"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
