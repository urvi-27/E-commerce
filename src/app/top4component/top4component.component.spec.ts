import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top4componentComponent } from './top4component.component';

describe('Top4componentComponent', () => {
  let component: Top4componentComponent;
  let fixture: ComponentFixture<Top4componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top4componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top4componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
