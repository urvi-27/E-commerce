import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizechartcomponentComponent } from './sizechartcomponent.component';

describe('SizechartcomponentComponent', () => {
  let component: SizechartcomponentComponent;
  let fixture: ComponentFixture<SizechartcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizechartcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizechartcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
