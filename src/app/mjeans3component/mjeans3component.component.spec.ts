import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mjeans3componentComponent } from './mjeans3component.component';

describe('Mjeans3componentComponent', () => {
  let component: Mjeans3componentComponent;
  let fixture: ComponentFixture<Mjeans3componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mjeans3componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mjeans3componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
