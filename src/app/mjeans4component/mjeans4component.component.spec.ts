import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mjeans4componentComponent } from './mjeans4component.component';

describe('Mjeans4componentComponent', () => {
  let component: Mjeans4componentComponent;
  let fixture: ComponentFixture<Mjeans4componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mjeans4componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mjeans4componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
