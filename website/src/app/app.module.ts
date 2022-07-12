import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoemComponent } from './poem/poem.component';
import { HttpClientModule } from '@angular/common/http';
import { PoemListComponent } from './poem-list/poem-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { PoemInfoComponent } from './poem-info/poem-info.component'


@NgModule({
  declarations: [
    AppComponent,
    PoemComponent,
    PoemListComponent,
    PoemInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
