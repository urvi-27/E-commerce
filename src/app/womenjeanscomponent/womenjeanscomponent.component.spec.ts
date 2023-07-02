import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenjeanscomponentComponent } from './womenjeanscomponent.component';

describe('WomenjeanscomponentComponent', () => {
  let component: WomenjeanscomponentComponent;
  let fixture: ComponentFixture<WomenjeanscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenjeanscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenjeanscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
