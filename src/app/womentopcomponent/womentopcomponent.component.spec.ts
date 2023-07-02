import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomentopcomponentComponent } from './womentopcomponent.component';

describe('WomentopcomponentComponent', () => {
  let component: WomentopcomponentComponent;
  let fixture: ComponentFixture<WomentopcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomentopcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomentopcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
