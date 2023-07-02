import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dress3componentComponent } from './dress3component.component';

describe('Dress3componentComponent', () => {
  let component: Dress3componentComponent;
  let fixture: ComponentFixture<Dress3componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dress3componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dress3componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
