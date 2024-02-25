import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-registerbook',
  standalone: true,
  imports: [],
  templateUrl: './registerbook.component.html',
  styleUrl: './registerbook.component.css'
})
export class RegisterbookComponent implements OnDestroy{

  constructor() 
  { 
    console.log("constructor of Register Component is called")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy() of Register Component called.")
  }

}
