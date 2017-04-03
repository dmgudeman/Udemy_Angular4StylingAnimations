import { animate, group, keyframes, trigger, state, style, transition} from '@angular/animations';


export const showStateTrigger = trigger('showState', [
   
//     transition('void => *', [
//         style({
//             opacity:0
//         }), animate(300)
//    ]),
//    transition('* => void', animate(300, style({
//        opacity: 0
//    })))

    transition(':enter', [
        style({
            opacity: 0
        }), animate(300)
   ]),
   transition(':leave', animate(300, style({
       opacity: 0
   })))
]);


export const animateStateTrigger = trigger('animateState', [
    transition('* => *', [
        animate('400ms ease-out', style ({
            width: 0
        })),
        animate(400, style ({
            width: '*'
        }))
    ])
]);

export const listStateTrigger = trigger('listState', [
   
//     transition('void => *', [
//         style({
//             opacity:0
//         }), animate(300)
//    ]),
//    transition('* => void', animate(300, style({
//        opacity: 0
//    })))

    transition(':enter', [
        style({
            opacity: 0,
            backgroundColor: 'white'
        }), 
        group([
        animate(1000, style({
            opacity: 1
        })),
        animate (5000, keyframes([
            style({
                backgroundColor: 'white',
                offset: 0
            }),
            style({
                backgroundColor: 'red',
                offset: 0.8
            }),
            style({
                backgroundColor: 'green',
                offset: 1
            })
        ])),

        ]),
        animate(300, style({
            backgroundColor:'lightblue'
        }))
   ]),
   transition(':leave', animate(300, style({
       opacity: 0
   })))
]);