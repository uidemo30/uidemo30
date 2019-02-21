import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActionComponent } from './components/action/action.component';
import { TaskComponent } from './components/task/task.component';
import { MainComponent } from './components/main/main.component';
import { UrlService } from "src/app/services/url.service";
import { HttpService } from "src/app/services/http.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ActionComponent,
    TaskComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UrlService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
