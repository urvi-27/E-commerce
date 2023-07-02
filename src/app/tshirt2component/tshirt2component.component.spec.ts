import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tshirt2componentComponent } from './tshirt2component.component';

describe('Tshirt2componentComponent', () => {
  let component: Tshirt2componentComponent;
  let fixture: ComponentFixture<Tshirt2componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tshirt2componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tshirt2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
