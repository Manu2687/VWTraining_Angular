import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-listbook',
  standalone: true,
  imports: [],
  templateUrl: './listbook.component.html',
  styleUrl: './listbook.component.css'
})
export class ListbookComponent implements OnDestroy{

  constructor() 
  { 
    console.log("constructor of Listbook Component is called")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy() of Listbook Component called.")
  }

}
