import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mshort3componentComponent } from './mshort3component.component';

describe('Mshort3componentComponent', () => {
  let component: Mshort3componentComponent;
  let fixture: ComponentFixture<Mshort3componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mshort3componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mshort3componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
