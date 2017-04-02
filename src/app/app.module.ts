import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { HomepageComponent } from './pages/homepage.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { HttpModule }    from '@angular/http';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpModule],
  declarations: [AppComponent, HomepageComponent, FileSelectDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
