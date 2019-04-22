import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDivisionComponent } from './weather-division.component';

describe('WeatherDivisionComponent', () => {
  let component: WeatherDivisionComponent;
  let fixture: ComponentFixture<WeatherDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
