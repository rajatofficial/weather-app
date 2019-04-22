import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  url: 'http://api.openweathermap.org/data/2.5/forecast?q=';
  
  backurl:'&APPID=3db4b6094bf74bac7266b58272ea04f6';
  wholeURL: string;

  constructor(private http: HttpClient) { }
  
  getWeather(city){
    this.wholeURL= 'http://api.openweathermap.org/data/2.5/forecast?q='+city+'&APPID=3db4b6094bf74bac7266b58272ea04f6';
    return this.http.get(this.wholeURL);
  }
}
