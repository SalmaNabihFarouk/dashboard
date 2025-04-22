import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostslistsComponent } from './features/posts/components/postslists/postslists.component';
import { EditpostComponent } from './features/posts/components/editpost/editpost.component';
import { CreateComponent } from './features/posts/components/create/create.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { DashboardComponent } from './features/dashboard/components/dashboard/dashboard.component';
import { NotfoundComponent } from './features/notfound/notfound/notfound.component';

const routes: Routes = [
  { path: "", component: DashboardComponent, canActivate: [authGuard], data: { showNavbar: true } },
  { path: "login", component: LoginComponent, data: { showNavbar: false } },
  { path: "posts", component: PostslistsComponent, canActivate: [authGuard], data: { showNavbar: true } },
  { path: 'posts/:id', component: EditpostComponent, canActivate: [authGuard], data: { showNavbar: true } },
  { path: "create", component: CreateComponent, canActivate: [authGuard], data: { showNavbar: true } },
  { path: "**", component: NotfoundComponent, canActivate: [authGuard], data: { showNavbar: false } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
