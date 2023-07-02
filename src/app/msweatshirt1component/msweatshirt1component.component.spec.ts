import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Msweatshirt1componentComponent } from './msweatshirt1component.component';

describe('Msweatshirt1componentComponent', () => {
  let component: Msweatshirt1componentComponent;
  let fixture: ComponentFixture<Msweatshirt1componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Msweatshirt1componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Msweatshirt1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
