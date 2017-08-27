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
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
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
    console.log('changeActiveHero...');
    console.log(hero);

    this.activeHero = hero;
  }
  changeInActiveHero(hero: Hero) {
    console.log('changeInActiveHero...');
    console.log(hero);
    if (this.activeHero === hero) {
      this.activeHero = null;
    }
  }
  isActiveHero(hero: Hero): boolean {
    return this.activeHero === hero;
  }
  getState(hero) {
    return this.isActiveHero(hero) ? 'active' : 'inactive';
  }
}
