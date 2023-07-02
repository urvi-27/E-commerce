import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pants1componentComponent } from './pants1component.component';

describe('Pants1componentComponent', () => {
  let component: Pants1componentComponent;
  let fixture: ComponentFixture<Pants1componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pants1componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pants1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
