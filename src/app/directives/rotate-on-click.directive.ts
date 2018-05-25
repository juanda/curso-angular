import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appRotateOnClick]'
})
export class RotateOnClickDirective {

  _angle: number = 0
  @Input("appRotateOnClick") angle: number
  @Input() color: string

  constructor(private el: ElementRef) { }

  @HostListener("click") onclick(){
    console.log("hay que rotar")
    this._angle += this.angle
    this.el.nativeElement.style.transform = `rotate(${this._angle}deg)`
    this.el.nativeElement.style.color = this.color
  }

  ngOnDestroy(){
    window.alert("Directiva RotateOnclick destroyed")
    console.log("Directiva RotateOnclick destroyed")
  }

}
