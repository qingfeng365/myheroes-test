import { Component, OnInit } from '@angular/core';
import {
  trigger, state, style,
  animate, transition
} from '@angular/animations';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#607D8B',
        transform: 'scale(1)',
        color: '#eee'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)',
        color: '#607d8b'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('inactive => active', [
        style({
          backgroundColor: 'red',
          transform: 'scale(1.3)'
        }),
        animate('500ms ease-in', style({
          backgroundColor: 'green',
          transform: 'scale(0.6)'
        }))
      ]),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  activeHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeros()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  changeActiveHero(hero: Hero) {
    this.activeHero = hero;
  }
  isActiveHero(hero: Hero): boolean {
    return this.activeHero === hero;
  }
  getState(hero) {
    return this.isActiveHero(hero) ? 'active' : 'inactive';
  }
}
