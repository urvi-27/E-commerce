import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Short2componentComponent } from './short2component.component';

describe('Short2componentComponent', () => {
  let component: Short2componentComponent;
  let fixture: ComponentFixture<Short2componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Short2componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Short2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
