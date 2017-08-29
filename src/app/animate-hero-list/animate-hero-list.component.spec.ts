import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateHeroListComponent } from './animate-hero-list.component';

describe('AnimateHeroListComponent', () => {
  let component: AnimateHeroListComponent;
  let fixture: ComponentFixture<AnimateHeroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateHeroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateHeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
