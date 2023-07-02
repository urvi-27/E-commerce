import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Msweatpants2componentComponent } from './msweatpants2component.component';

describe('Msweatpants2componentComponent', () => {
  let component: Msweatpants2componentComponent;
  let fixture: ComponentFixture<Msweatpants2componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Msweatpants2componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Msweatpants2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
