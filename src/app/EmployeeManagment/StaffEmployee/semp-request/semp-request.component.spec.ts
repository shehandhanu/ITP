import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SEmpRequestComponent } from './semp-request.component';

describe('SEmpRequestComponent', () => {
  let component: SEmpRequestComponent;
  let fixture: ComponentFixture<SEmpRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SEmpRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SEmpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
