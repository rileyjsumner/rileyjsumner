import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanosLeagueComponent } from './thanos-league.component';

describe('ThanosLeagueComponent', () => {
  let component: ThanosLeagueComponent;
  let fixture: ComponentFixture<ThanosLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanosLeagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanosLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
