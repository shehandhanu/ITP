import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SEmpDashboardComponent } from './semp-dashboard.component';

describe('SEmpDashboardComponent', () => {
  let component: SEmpDashboardComponent;
  let fixture: ComponentFixture<SEmpDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SEmpDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SEmpDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
