import { Component, OnInit } from '@angular/core';
import { Hero } from './model/hero';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {

  title = '英雄之旅';

  heroes: Hero[] = [];

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) {

  }

  getHeroes(): void {
    this.heroService.getHeros().then(
      heroes => this.heroes = heroes
    );
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}



