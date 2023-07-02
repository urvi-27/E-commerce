import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sweatshirt3componentComponent } from './sweatshirt3component.component';

describe('Sweatshirt3componentComponent', () => {
  let component: Sweatshirt3componentComponent;
  let fixture: ComponentFixture<Sweatshirt3componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sweatshirt3componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sweatshirt3componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
