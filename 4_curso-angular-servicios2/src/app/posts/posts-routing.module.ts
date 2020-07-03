import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostHijoComponent } from './post-hijo/post-hijo.component';


const routes: Routes = [
  {path: 'posts', component: PostsComponent,
   children: [
     {path: '', component: PostHijoComponent} //lo que aparecera cuando se acceda a /posts
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
