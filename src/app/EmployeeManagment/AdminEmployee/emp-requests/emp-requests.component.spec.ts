import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRequestsComponent } from './emp-requests.component';

describe('EmpRequestsComponent', () => {
  let component: EmpRequestsComponent;
  let fixture: ComponentFixture<EmpRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
