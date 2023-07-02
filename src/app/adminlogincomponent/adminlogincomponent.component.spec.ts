import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlogincomponentComponent } from './adminlogincomponent.component';

describe('AdminlogincomponentComponent', () => {
  let component: AdminlogincomponentComponent;
  let fixture: ComponentFixture<AdminlogincomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlogincomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminlogincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
