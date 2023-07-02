import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mshort2componentComponent } from './mshort2component.component';

describe('Mshort2componentComponent', () => {
  let component: Mshort2componentComponent;
  let fixture: ComponentFixture<Mshort2componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mshort2componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mshort2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
