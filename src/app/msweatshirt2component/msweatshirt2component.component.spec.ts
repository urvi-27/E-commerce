import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Msweatshirt2componentComponent } from './msweatshirt2component.component';

describe('Msweatshirt2componentComponent', () => {
  let component: Msweatshirt2componentComponent;
  let fixture: ComponentFixture<Msweatshirt2componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Msweatshirt2componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Msweatshirt2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
