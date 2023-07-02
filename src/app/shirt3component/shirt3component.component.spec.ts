import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shirt3componentComponent } from './shirt3component.component';

describe('Shirt3componentComponent', () => {
  let component: Shirt3componentComponent;
  let fixture: ComponentFixture<Shirt3componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shirt3componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shirt3componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
