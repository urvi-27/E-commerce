import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Msweatpants4componentComponent } from './msweatpants4component.component';

describe('Msweatpants4componentComponent', () => {
  let component: Msweatpants4componentComponent;
  let fixture: ComponentFixture<Msweatpants4componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Msweatpants4componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Msweatpants4componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
