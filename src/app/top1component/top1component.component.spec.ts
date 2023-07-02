import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top1componentComponent } from './top1component.component';

describe('Top1componentComponent', () => {
  let component: Top1componentComponent;
  let fixture: ComponentFixture<Top1componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top1componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
