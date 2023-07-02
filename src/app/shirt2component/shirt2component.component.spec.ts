import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shirt2componentComponent } from './shirt2component.component';

describe('Shirt2componentComponent', () => {
  let component: Shirt2componentComponent;
  let fixture: ComponentFixture<Shirt2componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shirt2componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shirt2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
