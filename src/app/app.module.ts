import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { HomepageComponent } from './pages/homepage.component'

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, HomepageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
