import { Directive, ElementRef, HostBinding, HostListener, Input,  OnInit,  SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appChangefontsize]',
  standalone: true
})
export class ChangefontsizeDirective implements OnInit{

  @HostBinding('style.fontSize') fontSize!:string;
  @Input('appChangefontsize') startingFontSize!:string;
  @Input('clkfont') onclickFontSize!:string;

//   constructor(public elem:ElementRef, public renderer:Renderer2) { } 
  constructor()  { }
 

  ngOnInit()
  {
    this.fontSize=this.startingFontSize;
    // this.fontSize='300%';
    // this.renderer.setStyle(this.elem.nativeElement, 'fontSize', '200%');
  }

  @HostListener('click')
  onClick()
  {
    // this.fontSize='100%';
    this.fontSize=this.onclickFontSize;
    // this.renderer.setStyle(this.elem.nativeElement,'fontSize','100%');
  }


}
