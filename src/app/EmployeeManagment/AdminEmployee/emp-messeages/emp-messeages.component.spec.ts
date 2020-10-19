import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpMesseagesComponent } from './emp-messeages.component';

describe('EmpMesseagesComponent', () => {
  let component: EmpMesseagesComponent;
  let fixture: ComponentFixture<EmpMesseagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpMesseagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpMesseagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
