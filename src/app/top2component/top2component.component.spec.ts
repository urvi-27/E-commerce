import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top2componentComponent } from './top2component.component';

describe('Top2componentComponent', () => {
  let component: Top2componentComponent;
  let fixture: ComponentFixture<Top2componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top2componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
