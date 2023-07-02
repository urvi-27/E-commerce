import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dress2componentComponent } from './dress2component.component';

describe('Dress2componentComponent', () => {
  let component: Dress2componentComponent;
  let fixture: ComponentFixture<Dress2componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dress2componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dress2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
