import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenstshirtcomponentComponent } from './menstshirtcomponent.component';

describe('MenstshirtcomponentComponent', () => {
  let component: MenstshirtcomponentComponent;
  let fixture: ComponentFixture<MenstshirtcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenstshirtcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenstshirtcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
