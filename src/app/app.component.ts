import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';
import { promise } from 'protractor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public ajustes: SettingsService) {
}
}
