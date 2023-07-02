import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top3componentComponent } from './top3component.component';

describe('Top3componentComponent', () => {
  let component: Top3componentComponent;
  let fixture: ComponentFixture<Top3componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top3componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top3componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
