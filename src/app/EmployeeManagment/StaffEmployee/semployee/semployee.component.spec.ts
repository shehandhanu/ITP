import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SEmployeeComponent } from './semployee.component';

describe('SEmployeeComponent', () => {
  let component: SEmployeeComponent;
  let fixture: ComponentFixture<SEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
