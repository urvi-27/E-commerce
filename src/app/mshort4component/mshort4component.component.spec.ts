import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mshort4componentComponent } from './mshort4component.component';

describe('Mshort4componentComponent', () => {
  let component: Mshort4componentComponent;
  let fixture: ComponentFixture<Mshort4componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mshort4componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mshort4componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
