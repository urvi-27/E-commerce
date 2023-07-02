import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Short4componentComponent } from './short4component.component';

describe('Short4componentComponent', () => {
  let component: Short4componentComponent;
  let fixture: ComponentFixture<Short4componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Short4componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Short4componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
