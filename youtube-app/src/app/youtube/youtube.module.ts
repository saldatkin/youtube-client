import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import SharedModule from '../shared/shared.module';

import Error404Component from './components/error404/error404.component';
import ItemComponent from './components/main/items-list/item/item/item.component';
import ItemsListComponent from './components/main/items-list/items-list/items-list.component';
import PictureComponent from './components/main/items-list/item/picture/picture.component';
import ViewsComponent from './components/main/items-list/item/stats/views/views.component';
import LikesComponent from './components/main/items-list/item/stats/likes/likes.component';
import DislikesComponent from './components/main/items-list/item/stats/dislikes/dislikes.component';
import CommentsComponent from './components/main/items-list/item/stats/comments/comments.component';
import MoreBtnComponent from './components/main/items-list/item/more-btn/more-btn.component';
import ColorStripeComponent from './components/main/items-list/item/color-stripe/color-stripe.component';
import TitleComponent from './components/main/items-list/item/title/title.component';
import MainComponent from './components/main/main/main.component';
import YoutubeRoutingModule from './youtube-routing.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import CardDescriptionComponent from './components/card-description/card-description.component';

@NgModule({
  declarations: [
    MainComponent,
    Error404Component,
    ItemsListComponent,
    ItemComponent,
    PictureComponent,
    ViewsComponent,
    LikesComponent,
    DislikesComponent,
    CommentsComponent,
    MoreBtnComponent,
    ColorStripeComponent,
    TitleComponent,
    CardDescriptionComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    CoreModule,
    YoutubeRoutingModule,
  ],
})
export class YoutubeModule { }
