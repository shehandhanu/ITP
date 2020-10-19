import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SEmpAccountComponent } from './semp-account.component';

describe('SEmpAccountComponent', () => {
  let component: SEmpAccountComponent;
  let fixture: ComponentFixture<SEmpAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SEmpAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SEmpAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
