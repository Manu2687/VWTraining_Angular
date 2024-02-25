import { Directive, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit,OnChanges, OnDestroy{

  @Input('initcolor') color1 :string;
  @Input() color2:string;

  constructor(public elem:ElementRef, public renderer:Renderer2) 
  { 
    console.log('constructor of highlight.directive called')
    this.color1='yellow';
    this.color2='cyan';

    // this.renderer.setStyle(this.elem.nativeElement,'background-color',this.color1);
    // this.renderer.setProperty(this.elem.nativeElement,'innerHTML','Hello Everyone');
    
  } 

  ngOnChanges(changes:SimpleChanges):void 
  {
    console.log('ngOnChange() of highlight.directive called'+this.color1);
  }

  ngOnInit()
  {
    console.log("ngonit() of highlight.directive called",this.color1);
    this.renderer.setStyle(this.elem.nativeElement,'background-color',this.color1);
    this.renderer.setProperty(this.elem.nativeElement,'innerHTML','Hello Everyone');
   
  }

  
  ngOnDestroy(): void {
    console.log('ngOnDestroy() of highlight.directive called');
  }

  @HostListener('click')
  onClick() {
    this.renderer.setStyle(this.elem.nativeElement,'background-color',this.color2);
    this.renderer.setProperty(this.elem.nativeElement,'innerHTML','I am Manu');
  }

}
