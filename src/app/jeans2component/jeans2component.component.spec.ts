import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jeans2componentComponent } from './jeans2component.component';

describe('Jeans2componentComponent', () => {
  let component: Jeans2componentComponent;
  let fixture: ComponentFixture<Jeans2componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jeans2componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jeans2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
