import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Msweatpants3componentComponent } from './msweatpants3component.component';

describe('Msweatpants3componentComponent', () => {
  let component: Msweatpants3componentComponent;
  let fixture: ComponentFixture<Msweatpants3componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Msweatpants3componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Msweatpants3componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
