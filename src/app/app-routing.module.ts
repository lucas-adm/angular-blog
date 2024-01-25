import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  {
    path: 'https://angular-blog-2mq9.onrender.com',
    component: HomeComponent
  },
  {
    path: 'https://angular-blog-2mq9.onrender.com/content/:id',
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
