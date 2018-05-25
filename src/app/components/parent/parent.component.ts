import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  heroes = [
    { name: "Superman", power: "Volare" },
    { name: "Spiderman", power: "Escalar" },
    { name: "Batman", power: "Conducir" }
  ]
  constructor() { }

  ngOnInit() { }

  delete(hero) {
    var index = this.heroes.indexOf(hero);
    if (index !== -1) this.heroes.splice(index, 1);
  }


  toggleFlag1 = true;
  toggleFlag2 = true;
  toggleFlag3 = true;

  onToggle1() {
    this.toggleFlag1 = (this.toggleFlag1 === true) ? false : true;
  }
  onToggle2() {
    this.toggleFlag2 = (this.toggleFlag2 === true) ? false : true;
  }
  onToggle3() {
    this.toggleFlag3 = (this.toggleFlag3 === true) ? false : true;
  }

  myDir = ""

}
