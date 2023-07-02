import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jeans1componentComponent } from './jeans1component.component';

describe('Jeans1componentComponent', () => {
  let component: Jeans1componentComponent;
  let fixture: ComponentFixture<Jeans1componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jeans1componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jeans1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
