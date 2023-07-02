import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pants4componentComponent } from './pants4component.component';

describe('Pants4componentComponent', () => {
  let component: Pants4componentComponent;
  let fixture: ComponentFixture<Pants4componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pants4componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pants4componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
