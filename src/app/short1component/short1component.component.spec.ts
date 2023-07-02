import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Short1componentComponent } from './short1component.component';

describe('Short1componentComponent', () => {
  let component: Short1componentComponent;
  let fixture: ComponentFixture<Short1componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Short1componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Short1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
