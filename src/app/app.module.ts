import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingComponent } from './Routing/routing.component';
import { AboutComponent } from './about/about.component';
import {DetailsComponent} from './details/details.component';
import {CrudService} from './services/crud.service';
import {HttpClientModule} from '@angular/common/http';
import {ServicesComponent} from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    AboutComponent,
    DetailsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
