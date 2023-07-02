import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenshortscomponentComponent } from './womenshortscomponent.component';

describe('WomenshortscomponentComponent', () => {
  let component: WomenshortscomponentComponent;
  let fixture: ComponentFixture<WomenshortscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenshortscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenshortscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
