import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import { InputComponent } from './header/search-form/input/input.component';
import { SubmitBtnComponent } from './header/search-form/submit-btn/submit-btn.component';
import { LogoComponent } from './header/logo/logo.component';
import { FilterBtnComponent } from './header/filter-btn/filter-btn.component';
import { FiltersComponent } from './header/filters/filters.component';
import { LoginBtnAreaComponent } from './header/login-btn-area/login-btn-area.component';
import { PictureComponent } from './main/items-list/item/picture/picture.component';
import { ViewsComponent } from './main/items-list/item/stats/views/views.component';
import { LikesComponent } from './main/items-list/item/stats/likes/likes.component';
import { DislikesComponent } from './main/items-list/item/stats/dislikes/dislikes.component';
import { CommentsComponent } from './main/items-list/item/stats/comments/comments.component';
import { ItemCaptionComponent } from './main/items-list/item/item-caption/item-caption.component';
import { MoreBtnComponent } from './main/items-list/item/more-btn/more-btn.component';
import { ColorStripeComponent } from './main/items-list/item/color-stripe/color-stripe.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SubmitBtnComponent,
    LogoComponent,
    FilterBtnComponent,
    FiltersComponent,
    LoginBtnAreaComponent,
    PictureComponent,
    ViewsComponent,
    LikesComponent,
    DislikesComponent,
    CommentsComponent,
    ItemCaptionComponent,
    MoreBtnComponent,
    ColorStripeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
