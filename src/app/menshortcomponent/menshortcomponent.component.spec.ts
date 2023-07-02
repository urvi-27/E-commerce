import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenshortcomponentComponent } from './menshortcomponent.component';

describe('MenshortcomponentComponent', () => {
  let component: MenshortcomponentComponent;
  let fixture: ComponentFixture<MenshortcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenshortcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenshortcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
