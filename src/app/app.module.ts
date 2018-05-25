import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { RotateOnClickDirective } from './directives/rotate-on-click.directive';
import { SinPipe } from './pipes/sin.pipe';
import { PipesComponent } from './components/pipes/pipes.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivesComponent,
    RotateOnClickDirective,
    SinPipe,
    PipesComponent,
    LifecycleComponent,
    ChildComponent,
    ParentComponent,
    UnlessDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
