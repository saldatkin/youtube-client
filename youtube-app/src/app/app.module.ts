import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { UrlKeyAdderInterceptor } from './youtube/interceptors/url-key-adder.interceptor';
import { YoutubeService } from './youtube/services/youtube.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [
    YoutubeService,
    { provide: HTTP_INTERCEPTORS, useClass: UrlKeyAdderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
