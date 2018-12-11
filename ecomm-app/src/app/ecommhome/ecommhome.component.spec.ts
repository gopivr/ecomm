import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommhomeComponent } from './ecommhome.component';

describe('EcommhomeComponent', () => {
  let component: EcommhomeComponent;
  let fixture: ComponentFixture<EcommhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
