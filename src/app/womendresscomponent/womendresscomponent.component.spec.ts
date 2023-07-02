import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomendresscomponentComponent } from './womendresscomponent.component';

describe('WomendresscomponentComponent', () => {
  let component: WomendresscomponentComponent;
  let fixture: ComponentFixture<WomendresscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomendresscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomendresscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
