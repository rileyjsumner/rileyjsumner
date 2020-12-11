import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidVisualizationComponent } from './covid-visualization.component';

describe('CovidVisualizationComponent', () => {
  let component: CovidVisualizationComponent;
  let fixture: ComponentFixture<CovidVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidVisualizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
