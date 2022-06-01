import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAltComponent } from './button-alt.component';

describe('ButtonAltComponent', () => {
  let component: ButtonAltComponent;
  let fixture: ComponentFixture<ButtonAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
