import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sweatshirt1componentComponent } from './sweatshirt1component.component';

describe('Sweatshirt1componentComponent', () => {
  let component: Sweatshirt1componentComponent;
  let fixture: ComponentFixture<Sweatshirt1componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sweatshirt1componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sweatshirt1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
