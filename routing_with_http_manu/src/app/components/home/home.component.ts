import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy{

  constructor() 
  { 
    console.log("constructor of Home Component is called")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy() of Home Component called.")
  }

}
