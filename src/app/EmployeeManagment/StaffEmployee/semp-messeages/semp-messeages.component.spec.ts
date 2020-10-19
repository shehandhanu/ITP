import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SEmpMesseagesComponent } from './semp-messeages.component';

describe('SEmpMesseagesComponent', () => {
  let component: SEmpMesseagesComponent;
  let fixture: ComponentFixture<SEmpMesseagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SEmpMesseagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SEmpMesseagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
