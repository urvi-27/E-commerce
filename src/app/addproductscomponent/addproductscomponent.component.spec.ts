import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductscomponentComponent } from './addproductscomponent.component';

describe('AddproductscomponentComponent', () => {
  let component: AddproductscomponentComponent;
  let fixture: ComponentFixture<AddproductscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddproductscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
