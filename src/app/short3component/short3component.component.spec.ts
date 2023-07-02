import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Short3componentComponent } from './short3component.component';

describe('Short3componentComponent', () => {
  let component: Short3componentComponent;
  let fixture: ComponentFixture<Short3componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Short3componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Short3componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
