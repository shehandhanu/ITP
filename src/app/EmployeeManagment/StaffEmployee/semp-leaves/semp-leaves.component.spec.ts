import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SEmpLeavesComponent } from './semp-leaves.component';

describe('SEmpLeavesComponent', () => {
  let component: SEmpLeavesComponent;
  let fixture: ComponentFixture<SEmpLeavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SEmpLeavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SEmpLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
