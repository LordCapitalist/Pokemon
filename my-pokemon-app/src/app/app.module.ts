import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokeapiComponent } from './pokeapi/pokeapi.component';
import { PokeapiService } from './pokeapi.service';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PokeapiComponent,
    
      
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
