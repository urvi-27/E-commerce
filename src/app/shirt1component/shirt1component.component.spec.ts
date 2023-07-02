import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shirt1componentComponent } from './shirt1component.component';

describe('Shirt1componentComponent', () => {
  let component: Shirt1componentComponent;
  let fixture: ComponentFixture<Shirt1componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shirt1componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shirt1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
