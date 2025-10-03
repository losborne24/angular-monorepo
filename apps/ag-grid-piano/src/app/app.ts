import { Component } from '@angular/core';
import { Piano } from '@core/piano/piano';

@Component({
  imports: [Piano],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'ag-grid-piano';
}
