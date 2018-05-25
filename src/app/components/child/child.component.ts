import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HeroType } from '../../model/hero';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() selectedHero: HeroType
  @Output() onHeroDeleted = new  EventEmitter<HeroType>()
  
  constructor() { }

  ngOnInit() {
  }

  delete(){
    this.onHeroDeleted.emit(this.selectedHero)
  }

}
