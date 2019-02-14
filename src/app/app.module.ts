import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmbedIFrameComponent } from './embed.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EmbedIFrameComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
