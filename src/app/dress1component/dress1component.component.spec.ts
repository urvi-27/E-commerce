import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dress1componentComponent } from './dress1component.component';

describe('Dress1componentComponent', () => {
  let component: Dress1componentComponent;
  let fixture: ComponentFixture<Dress1componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dress1componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dress1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
