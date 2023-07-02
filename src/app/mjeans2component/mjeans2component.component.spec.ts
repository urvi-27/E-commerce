import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mjeans2componentComponent } from './mjeans2component.component';

describe('Mjeans2componentComponent', () => {
  let component: Mjeans2componentComponent;
  let fixture: ComponentFixture<Mjeans2componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mjeans2componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mjeans2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
