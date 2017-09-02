import { trigger, state, style, transition, animate} from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const slideInDownAnimation: AnimationEntryMetadata =
trigger('routeAnimation', [
  state('*',
    style({
      opacity: 1,
      transform: 'translateX(0)'
    })
  ),
  transition(':enter', [
    style({
      opacity: 1,
      transform: 'translateX(-100%)'
    }),
    animate('3s ease-in')
  ]),
  transition(':leave', [
    animate('2s ease-out', style({
      opacity: 0,
      transform: 'translateY(100%)'
    }))
  ])
]);
