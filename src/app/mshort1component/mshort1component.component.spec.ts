import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mshort1componentComponent } from './mshort1component.component';

describe('Mshort1componentComponent', () => {
  let component: Mshort1componentComponent;
  let fixture: ComponentFixture<Mshort1componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mshort1componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mshort1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
