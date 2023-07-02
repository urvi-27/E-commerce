import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensweatshirtcomponentComponent } from './womensweatshirtcomponent.component';

describe('WomensweatshirtcomponentComponent', () => {
  let component: WomensweatshirtcomponentComponent;
  let fixture: ComponentFixture<WomensweatshirtcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensweatshirtcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensweatshirtcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
