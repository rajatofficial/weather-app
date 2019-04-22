import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherDataService } from './weather-data.service';
import { FormsModule } from '@angular/forms';
import { WeatherDivisionComponent } from './weather-division/weather-division.component';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    WeatherDivisionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
