import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, AfterContentChecked, ViewChild, ElementRef, SimpleChanges, Input } from '@angular/core';
import { timeout } from 'q';
import { ChildComponent } from '../child/child.component';
import { HeroType } from '../../model/hero';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {

  messages: { order: number, message: string }[] = []
  order: number = 0
  modelo: string = ""
  displayText: boolean = true
  @Input() options: any;
  @ViewChild(ChildComponent) child: ChildComponent;
  private prevHero: HeroType;

  constructor() { }

  toggleText() {
    this.displayText = !this.displayText
  }

  log(msg: any) {
    this.messages.push(msg)
    console.log(msg)
  }

  ngOnInit() {
    this.order++
    this.log({ order: this.order, message: "ngOnInit" })
    this.prevHero = this.child.selectedHero
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    this.order++
    this.log({ order: this.order, message: "ngOnChanges" })
  }

  ngDoCheck() {
    this.order++
    this.log({ order: this.order, message: "ngDoCheck" })
  }

  ngAfterContentInit() {
    this.order++
    this.log({ order: this.order, message: "ngAfterContentInit" })
  }

  ngAfterContentChecked() {
    this.order++
    this.log({ order: this.order, message: "ngAfterContentChecked" })

  }

  ngAfterViewInit() {
    this.order++
    this.log({ order: this.order, message: "ngAfterViewInit" })
  }

  ngAfterViewChecked() {
    this.order++
    this.log({ order: this.order, message: "ngAfterViewChecked" })
    if (this.prevHero === this.child.selectedHero) {
      this.log({ order: this.order, message: "AfterViewChecked (no change)" })
    } else {
      this.prevHero = this.child.selectedHero;
      this.log({ order: this.order, message: "AfterViewChecked (change)" })

    }
  }

  ngOnDestroy() {
    this.order++
    this.log({ order: this.order, message: "ngOnDestroy" })
  }

}
