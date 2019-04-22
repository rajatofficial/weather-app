import { Component } from '@angular/core';
import { WeatherDataService } from './weather-data.service';
import { RootObject } from './weather';
import { stringify } from 'querystring';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  imgBase:string = 'http://openweathermap.org/img/w/';
  city: string;
  list1: Array<any>=[];
  list2: Array<any>=[];
  list3: Array<any>=[];
  list4: Array<any>=[];
  headerList: Array<any>=[];
  mainList: Array<any>=[];
  result: string;
  country: string;
  days: Array<string> = ['Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday','Sunday'];
  months: Array<string> = ['Janury','February','March','April','May','June','July','August','September','October','November','December']
  fullDate: string ;
  constructor(private _serviceWeatherData: WeatherDataService){}
  loadComponent: boolean = false;
  getData(){
    this._serviceWeatherData.getWeather(this.city).subscribe(
      (data : RootObject) => {
        // var numbers = [1, 2, 3];
        // for (var _i = 0; _i < 4 ;_i++) {
        //   this.list1.push(data.list[_i].weather[0].main);
        //   this.list2.push(data.list[_i].main.temp);
        //   this.list3.push('http://openweathermap.org/img/w/'+data.list[_i].weather[0].icon+'.png');
        //   this.list4.push(data.list[_i].dt_txt)
        //   _i=_i+8;
        // }
          
          this.country = data.city.country;
          this.headerList.push(this.city);
          this.headerList.push(this.country);
          this.headerList.push((Math.round(data.list[0].main.temp-273.15)*100)/100)
          this.headerList.push(data.list[0].main.pressure)
          this.headerList.push(data.list[0].main.humidity)
          this.headerList.push(data.list[0].wind.speed)
          let newDate = new Date(data.list[0].dt_txt);
          this.fullDate = newDate.getDate()+'-'+this.months[newDate.getMonth()]+"-"+newDate.getFullYear();
          this.headerList.push(this.fullDate)
          this.headerList.push('http://openweathermap.org/img/w/'+data.list[0].weather[0].icon+'.png')
          this.list1.push('Today')
          this.list2.push(this.days[new Date(data.list[8].dt_txt).getDay()])
          this.list3.push(this.days[new Date(data.list[16].dt_txt).getDay()])
          this.list4.push(this.days[new Date(data.list[24].dt_txt).getDay()])

          this.list1.push('http://openweathermap.org/img/w/'+data.list[0].weather[0].icon+'.png');
          this.list2.push('http://openweathermap.org/img/w/'+data.list[8].weather[0].icon+'.png');
          this.list3.push('http://openweathermap.org/img/w/'+data.list[16].weather[0].icon+'.png');
          this.list4.push('http://openweathermap.org/img/w/'+data.list[24].weather[0].icon+'.png');

          this.list1.push(Math.round(data.list[0].main.temp_min-273.15)+'°C');
          this.list2.push(Math.round(data.list[8].main.temp_min-273.15)+'°C');
          this.list3.push(Math.round(data.list[16].main.temp_min-273.15)+'°C');
          this.list4.push(Math.round(data.list[24].main.temp_min-273.15)+'°C');

          this.list1.push(Math.round(data.list[0].main.temp_max-273.15)+'°C');
          this.list2.push(Math.round(data.list[8].main.temp_max-273.15)+'°C');
          this.list3.push(Math.round(data.list[16].main.temp_max-273.15)+'°C');
          this.list4.push(Math.round(data.list[24].main.temp_max-273.15)+'°C');

          this.list1.push(data.list[0].weather[0].main);
          this.list2.push(data.list[8].weather[0].main)
          this.list3.push(data.list[16].weather[0].main);
          this.list4.push(data.list[24].weather[0].main);


          this.mainList.push(this.list1);
          this.mainList.push(this.list2);
          this.mainList.push(this.list3);
          this.mainList.push(this.list4);
          this.loadComponent = true;
      }

      
    );
    
  }
  
    

}
