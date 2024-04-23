import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCapitalize]',
  standalone: true
})
export class CapitalizeDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    const nativeElement = this.el.nativeElement;
    const text = nativeElement.textContent || nativeElement.innerText;

    this.renderer.setProperty(nativeElement, 'textContent', text.toUpperCase());
   }

}
