import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tshirt1componentComponent } from './tshirt1component.component';

describe('Tshirt1componentComponent', () => {
  let component: Tshirt1componentComponent;
  let fixture: ComponentFixture<Tshirt1componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tshirt1componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tshirt1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
