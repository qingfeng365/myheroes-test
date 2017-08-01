import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService, private router: Router) {

  }

  getHeroes(): void {
    this.heroService.getHeros().then(
      heroes => this.heroes = heroes
    );
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string) {
    name = name.trim();
    if (name === '') { return; }

    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      })
  }

  delete(hero: Hero) {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(item => item !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      })
  }
}
