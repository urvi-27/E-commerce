import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenshirtcomponentComponent } from './menshirtcomponent.component';

describe('MenshirtcomponentComponent', () => {
  let component: MenshirtcomponentComponent;
  let fixture: ComponentFixture<MenshirtcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenshirtcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenshirtcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
