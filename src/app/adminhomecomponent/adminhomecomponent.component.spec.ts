import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhomecomponentComponent } from './adminhomecomponent.component';

describe('AdminhomecomponentComponent', () => {
  let component: AdminhomecomponentComponent;
  let fixture: ComponentFixture<AdminhomecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminhomecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminhomecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
