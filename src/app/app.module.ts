import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { FormsModule } from '@angular/forms';
import { BarComponent } from './shared/bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
