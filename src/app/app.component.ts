import { Component } from '@angular/core';
import { Hero } from './model/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '英雄之旅';

  heroes: Hero[] = [
    { id: 11, name: '美国队长' },
    { id: 12, name: '钢铁侠' },
    { id: 13, name: '雷神' },
    { id: 14, name: '绿巨人' },
    { id: 15, name: '黑寡妇' },
    { id: 16, name: '鹰眼' },
    { id: 17, name: '金刚狼' },
    { id: 18, name: '万磁王' },
    { id: 19, name: '死侍' },
    { id: 20, name: '月光骑士' }
  ]

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}



