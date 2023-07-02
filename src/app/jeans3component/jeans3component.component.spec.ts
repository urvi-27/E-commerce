import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jeans3componentComponent } from './jeans3component.component';

describe('Jeans3componentComponent', () => {
  let component: Jeans3componentComponent;
  let fixture: ComponentFixture<Jeans3componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jeans3componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jeans3componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
