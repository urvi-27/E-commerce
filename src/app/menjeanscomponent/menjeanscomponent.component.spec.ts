import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenjeanscomponentComponent } from './menjeanscomponent.component';

describe('MenjeanscomponentComponent', () => {
  let component: MenjeanscomponentComponent;
  let fixture: ComponentFixture<MenjeanscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenjeanscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenjeanscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
