import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListsComponent } from './emp-lists.component';

describe('EmpListsComponent', () => {
  let component: EmpListsComponent;
  let fixture: ComponentFixture<EmpListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
