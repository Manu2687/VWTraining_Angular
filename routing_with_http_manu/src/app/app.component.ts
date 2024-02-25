import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListbookComponent } from './components/listbook/listbook.component';
import { RegisterbookComponent } from './components/registerbook/registerbook.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, CommonModule, RouterLink,
    HomeComponent, ListbookComponent, 
    RegisterbookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})  
export class AppComponent implements OnDestroy{
  title = 'routing_ex_manu';

  constructor() 
  { 
    console.log("constructor of App Component is called")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy() of App Component called.")
  }
}
