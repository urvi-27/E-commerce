import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sweatshirt2componentComponent } from './sweatshirt2component.component';

describe('Sweatshirt2componentComponent', () => {
  let component: Sweatshirt2componentComponent;
  let fixture: ComponentFixture<Sweatshirt2componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sweatshirt2componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sweatshirt2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
