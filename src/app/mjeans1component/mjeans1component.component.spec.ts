import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mjeans1componentComponent } from './mjeans1component.component';

describe('Mjeans1componentComponent', () => {
  let component: Mjeans1componentComponent;
  let fixture: ComponentFixture<Mjeans1componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mjeans1componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mjeans1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
