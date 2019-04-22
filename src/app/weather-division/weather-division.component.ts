import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-division',
  templateUrl: './weather-division.component.html',
  styleUrls: ['./weather-division.component.css'],
  inputs:['parentData']
})
export class WeatherDivisionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
