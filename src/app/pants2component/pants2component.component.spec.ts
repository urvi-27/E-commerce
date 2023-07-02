import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pants2componentComponent } from './pants2component.component';

describe('Pants2componentComponent', () => {
  let component: Pants2componentComponent;
  let fixture: ComponentFixture<Pants2componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pants2componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pants2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
