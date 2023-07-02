import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pants3componentComponent } from './pants3component.component';

describe('Pants3componentComponent', () => {
  let component: Pants3componentComponent;
  let fixture: ComponentFixture<Pants3componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pants3componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pants3componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
