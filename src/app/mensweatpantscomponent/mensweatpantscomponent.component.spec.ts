import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensweatpantscomponentComponent } from './mensweatpantscomponent.component';

describe('MensweatpantscomponentComponent', () => {
  let component: MensweatpantscomponentComponent;
  let fixture: ComponentFixture<MensweatpantscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensweatpantscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensweatpantscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
