import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterbookComponent } from './components/registerbook/registerbook.component';
import { ListbookComponent } from './components/listbook/listbook.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, RegisterbookComponent, ListbookComponent  ],
  // providers:[]
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyBookApp';
}
