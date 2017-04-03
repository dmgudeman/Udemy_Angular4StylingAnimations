import { Component } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { animateStateTrigger, listStateTrigger, showStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    animateStateTrigger,
    listStateTrigger,
    showStateTrigger
  ]
})
export class AppComponent {
      animate = false;
      isShown = false;
      width=400;
      testResults = [];

      onAddElement() {
        this.testResults.push(Math.random());
      }
      onAnimationStarted(event: AnimationEvent){
        console.log(event);

      }
      onAnimationDone(event: AnimationEvent){
        console.log(event);

      }
  }
