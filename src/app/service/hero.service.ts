import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from '../mock-data/mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  // 普通写法
  // getHeros(): Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // }

  // 模拟网络延时的写法
  getHeros(): Promise<Hero[]> {
    return new Promise(
      resolve => setTimeout(
        () => resolve(HEROES), 1000
      ));
  }

}

