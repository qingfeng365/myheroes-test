import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
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
}
