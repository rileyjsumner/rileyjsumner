import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanosAdminComponent } from './thanos-admin.component';

describe('ThanosAdminComponent', () => {
  let component: ThanosAdminComponent;
  let fixture: ComponentFixture<ThanosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanosAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
