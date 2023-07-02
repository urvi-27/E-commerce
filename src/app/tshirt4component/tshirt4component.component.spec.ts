import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tshirt4componentComponent } from './tshirt4component.component';

describe('Tshirt4componentComponent', () => {
  let component: Tshirt4componentComponent;
  let fixture: ComponentFixture<Tshirt4componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tshirt4componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tshirt4componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
