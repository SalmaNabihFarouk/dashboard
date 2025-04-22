import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './features/layout/components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PostslistsComponent } from './features/posts/components/postslists/postslists.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgApexchartsModule } from "ng-apexcharts";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from './features/posts/components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { EditpostComponent } from './features/posts/components/editpost/editpost.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './features/posts/components/create/create.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { DashboardComponent } from './features/dashboard/components/dashboard/dashboard.component';
import { NotfoundComponent } from './features/notfound/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    PostslistsComponent,
    DeleteConfirmationDialogComponent,
    EditpostComponent,
    CreateComponent,
    LoginComponent,
    DashboardComponent,
    NotfoundComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatIconModule,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgApexchartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
