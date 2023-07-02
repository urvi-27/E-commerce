import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateproductscomponentComponent } from './updateproductscomponent.component';

describe('UpdateproductscomponentComponent', () => {
  let component: UpdateproductscomponentComponent;
  let fixture: ComponentFixture<UpdateproductscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateproductscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateproductscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
