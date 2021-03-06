import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosComponent } from './videos.component';
import { VideosViewComponent } from './videos-view/videos-view.component';
import { VideoAddComponent } from './video-add/video-add.component';
import { VideoEditComponent } from './video-edit/video-edit.component';

const routes: Routes = [
  {
    path: '', component: VideosComponent, children:
      [
        { path: '', component: VideosViewComponent },
        { path: 'add', component: VideoAddComponent },
        { path: 'edit/:id', component: VideoEditComponent },
        { path: '**', redirectTo: '/videos' }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
