import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sweatshirt4componentComponent } from './sweatshirt4component.component';

describe('Sweatshirt4componentComponent', () => {
  let component: Sweatshirt4componentComponent;
  let fixture: ComponentFixture<Sweatshirt4componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sweatshirt4componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sweatshirt4componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
