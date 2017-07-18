import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero: Hero;

  constructor(private heroService: HeroService,
    private routeInfo: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.routeInfo.params
      .map((params: Params) => this.heroService.getHero(+params.id))
      .subscribe(hero => this.hero = hero);
  }

}
