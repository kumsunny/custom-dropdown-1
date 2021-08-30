import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListPopulation } from './list.component';
import { ListService } from './list.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ListPopulation],
  bootstrap: [AppComponent],
  providers: [ListService]
})
export class AppModule {}
