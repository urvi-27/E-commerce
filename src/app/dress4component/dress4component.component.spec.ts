import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dress4componentComponent } from './dress4component.component';

describe('Dress4componentComponent', () => {
  let component: Dress4componentComponent;
  let fixture: ComponentFixture<Dress4componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dress4componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dress4componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
