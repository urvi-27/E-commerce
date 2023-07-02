import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sizechart1componentComponent } from './sizechart1component.component';

describe('Sizechart1componentComponent', () => {
  let component: Sizechart1componentComponent;
  let fixture: ComponentFixture<Sizechart1componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sizechart1componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sizechart1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
