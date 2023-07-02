import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensweatpantscomponentComponent } from './womensweatpantscomponent.component';

describe('WomensweatpantscomponentComponent', () => {
  let component: WomensweatpantscomponentComponent;
  let fixture: ComponentFixture<WomensweatpantscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensweatpantscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensweatpantscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
