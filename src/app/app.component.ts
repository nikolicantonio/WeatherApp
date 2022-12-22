import { RootObject } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  name: string = 'Split';
  weatherData?: RootObject;

  ngOnInit(): void {
    this.getWeatherData(this.name);
  }

  onSubmit() {
    this.getWeatherData(this.name);
    this.name = '';
  }

  private getWeatherData(name: string) {
    this.weatherService.getWeatherData(name).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      },
    });
  }
}
