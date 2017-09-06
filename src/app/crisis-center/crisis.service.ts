import { Injectable } from '@angular/core';

@Injectable()
export class CrisisService {
  crisesPromise = Promise.resolve(CRISES);
  constructor() { }
  getCrises() { return this.crisesPromise; }

  getCrisisById(id: number | string) {
    return this.crisesPromise
      .then(crises => crises.find(crisis => crisis.id === +id));
  }
}

export class Crisis {
  constructor(public id: number, public name: string) { }
}

const CRISES = [
  new Crisis(1, '恶龙燃烧城市'),
  new Crisis(2, '天降大白鲨'),
  new Crisis(3, '小行星撞地球'),
  new Crisis(4, '联盟峰会延迟'),
];
