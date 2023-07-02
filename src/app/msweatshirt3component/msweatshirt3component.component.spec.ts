import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Msweatshirt3componentComponent } from './msweatshirt3component.component';

describe('Msweatshirt3componentComponent', () => {
  let component: Msweatshirt3componentComponent;
  let fixture: ComponentFixture<Msweatshirt3componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Msweatshirt3componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Msweatshirt3componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
