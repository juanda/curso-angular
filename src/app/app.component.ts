import { Component, OnInit, Input } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit(){
    console.log(this.title)
    setTimeout(() => {
      console.log("cambio opciones del componente lifecycle a los 5 segundos")
      this.title = "cambio opciones del componente lifecycle a los 5 segundos"
    }, 5000)
  }
}
