import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shirt4componentComponent } from './shirt4component.component';

describe('Shirt4componentComponent', () => {
  let component: Shirt4componentComponent;
  let fixture: ComponentFixture<Shirt4componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shirt4componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shirt4componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
