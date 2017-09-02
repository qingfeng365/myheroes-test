import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

import { Observable } from 'rxjs/Rx';
// import 'rxjs/Rx';

@Component({
  selector: 'app-animate-hero-list',
  templateUrl: './animate-hero-list.component.html',
  styleUrls: ['./animate-hero-list.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)',
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)',
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('void => *', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('1.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('2.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('1.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('2.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class AnimateHeroListComponent implements OnInit {
  heroes: Hero[] = [];
  _heroes: Hero[] = [];

  constructor(private heroService: HeroService, private router: Router) { }

  getHeroes(): void {
    this.heroService.getHeros().then(
      heroes => {
        this._heroes =
          [...heroes].map(e => Object.assign(
            {}, e, { state: 'inactive' }));
      }
    );
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  toggleState(hero: Hero): void {
    hero.state = (hero.state === 'inactive') ? 'active' : 'inactive';
  }
  enter() {
    this.heroes = [];
    Observable.from(this._heroes)
      .zip(
      Observable.interval(500),
      v => v
      )
      .take(1)
      .subscribe(hero => this.heroes.push(hero))
  }
  leave() {
    Observable
      .interval(500)
      .take(this.heroes.length)
      .subscribe(
      v => this.heroes.pop()
      );
  }
  logit(event: any) {
    console.log(event);
  }
}
