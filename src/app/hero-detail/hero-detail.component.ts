import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switch';
import 'rxjs/add/observable/from';

import { Location } from '@angular/common';

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
      .switchMap((params: Params) => this.heroService.getHero(+params.id))
      .subscribe(hero => this.hero = hero);
  }

  // 使用 switchMap 等价于 下面这种写法: 即 switchMap = map + switch
  // ngOnInit() {
  //   this.routeInfo.params
  //     .map((params: Params) => Observable.from(
  //       this.heroService.getHero(+params.id)))
  //     .switch()
  //     .subscribe(hero => this.hero = hero);
  // }

  // 如果不使用switch, 则需要再次订阅
  // ngOnInit() {
  //   this.routeInfo.params
  //     .map((params: Params) => Observable.from(
  //       this.heroService.getHero(+params.id)))
  //     .subscribe(observable => observable.subscribe(hero => this.hero = hero));
  // }

  goBack() {
    this.location.back();
  }

}
