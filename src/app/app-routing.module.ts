import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostslistsComponent } from './features/posts/components/postslists/postslists.component';
import { EditpostComponent } from './editpost/editpost.component';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: "posts", component: PostslistsComponent },
  { path: 'posts/:id', component: EditpostComponent },
  { path: "create", component: CreateComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
