import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jeans4componentComponent } from './jeans4component.component';

describe('Jeans4componentComponent', () => {
  let component: Jeans4componentComponent;
  let fixture: ComponentFixture<Jeans4componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jeans4componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jeans4componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
