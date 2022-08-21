import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import CardDescriptionComponent from './components/card-description/card-description.component';
import ItemsListComponent from './components/main/items-list/items-list/items-list.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsListComponent,
  },
  {
    path: 'video',
    component: CardDescriptionComponent,
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export default class YoutubeRoutingModule { }
