import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import ItemsListComponent from './components/main/items-list/items-list/items-list.component';
import MainComponent from './components/main/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsListComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export default class YoutubeRoutingModule { }
