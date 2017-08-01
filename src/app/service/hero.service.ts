import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';
  private commonOp: RequestOptions = new RequestOptions(
    { headers: new Headers({ 'Content-Type': 'application/json' }) }
  );

  constructor(private http: Http) { }

  getHeros(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(res => res.json().data as Hero[])
      .catch(this.catchError);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.catchError);

  }

  catchError(err) {
    console.log(err);
    return Promise.reject(err.message || err)
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, hero)
      .toPromise()
      .then((res) => hero)
      .catch(this.catchError);
  }

  create(name: string): Promise<Hero> {
    const body = { name: name };
    return this.http.post(this.heroesUrl, body)
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.catchError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url)
      .toPromise()
      .then(res => null)
      .catch(this.catchError);
  }

}


/* 启用 内存web api 后, 之前的代码已失效
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

  getHero(id: number): Promise<Hero> {
    return this.getHeros()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

}

*/
