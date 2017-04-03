import { keyframes, group, trigger, state, style, transition, animate } from '@angular/animations';

export const buttonStateTrigger = trigger('buttonState', [
    state('valid', style({
        backgroundColor: 'green',
        borderColor: 'green',
        color: 'white'

    })),
    state('invalid', style({
        backgroundColor: 'lightgreen',
        borderColor: 'green',
        color: 'green'
    })),
    transition('invalid => valid', [
        group([
            animate('100ms ease-out', style({
                transform: 'scale(1.1)'
            })),
            animate(200, style({
                backgroundColor: 'green'
            }))
        ]),
        animate(200, style({
            transform: 'scale(1)'
        }))
    ])
]);