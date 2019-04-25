import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-division',
  templateUrl: './weather-division.component.html',
  styleUrls: ['./weather-division.component.css'],
})
export class WeatherDivisionComponent implements OnInit {
  @Input() parentData: Array<any>

  constructor() { }

  ngOnInit() {
  }

}
