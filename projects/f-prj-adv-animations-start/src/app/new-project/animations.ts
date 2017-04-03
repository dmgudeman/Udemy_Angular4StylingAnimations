import { keyframes, trigger, state, style, transition, animate } from '@angular/animations';

export const buttonStateTrigger = trigger('buttonState', [
  state('invalid', style({
    
  })),
  transition('invalid => valid', [
  
    animate('200ms ease-out', style({
      transform: 'scale(1.05)'
    })),
    animate(200)
  ])
]);