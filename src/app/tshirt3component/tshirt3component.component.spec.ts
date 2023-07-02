import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tshirt3componentComponent } from './tshirt3component.component';

describe('Tshirt3componentComponent', () => {
  let component: Tshirt3componentComponent;
  let fixture: ComponentFixture<Tshirt3componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tshirt3componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tshirt3componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
