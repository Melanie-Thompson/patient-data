import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DataTreeComponent } from './data-tree/data-tree.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, DataTreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'patient-data';
}
