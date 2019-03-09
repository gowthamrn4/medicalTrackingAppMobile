import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DataService} from './data.service';
import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LandingpagePage} from '../pages/landingpage/landingpage';
import {ListpagePage} from '../pages/listpage/listpage'
import { LoginPage } from '../pages/login/login';
import { AddFeedbackPage } from '../pages/add-feedback/add-feedback';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    LandingpagePage,
    ListpagePage,
    AddFeedbackPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingpagePage,
    ListpagePage,
    LoginPage,
    AddFeedbackPage
  ],
  providers: [
    StatusBar,
    DataService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
