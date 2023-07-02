import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Msweatpants1componentComponent } from './msweatpants1component.component';

describe('Msweatpants1componentComponent', () => {
  let component: Msweatpants1componentComponent;
  let fixture: ComponentFixture<Msweatpants1componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Msweatpants1componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Msweatpants1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
