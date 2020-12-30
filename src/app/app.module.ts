import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//app
import { VideosComponent } from './views/videos/videos.component';
import { HomeComponent } from './views/home/home.component';
import { TaskServices } from 'src/app/shared/service/task.service';
//material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ListComponent } from './views/home/list/list.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './views/home/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
//import { ReactiveFormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    VideosComponent,
    DialogComponent
   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule

  ],
  providers: [TaskServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
