import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Msweatshirt4componentComponent } from './msweatshirt4component.component';

describe('Msweatshirt4componentComponent', () => {
  let component: Msweatshirt4componentComponent;
  let fixture: ComponentFixture<Msweatshirt4componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Msweatshirt4componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Msweatshirt4componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
