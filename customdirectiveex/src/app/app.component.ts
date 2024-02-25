import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { ChangefontsizeDirective } from './directives/changefontsize.directive';
import { DomChangeDirective } from './directives/domchange.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,HighlightDirective, DomChangeDirective, ChangefontsizeDirective],
  templateUrl: './app.component.html',
  host:{ngSkipHydration:'true'},
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,OnChanges{
  title = 'customdirectiveex';
  mycolor:string="pink";

  constructor()
  {
    console.log('constructor of app component called')
  }

  ngOnChanges():void 
  {
    console.log('ngOnChange() of app componenet called')
  }

  ngOnInit():void 
  {
    console.log('ngOnInit() of app component called')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy() of app component called');
  }
}
