import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensweatshirtcomponentComponent } from './mensweatshirtcomponent.component';

describe('MensweatshirtcomponentComponent', () => {
  let component: MensweatshirtcomponentComponent;
  let fixture: ComponentFixture<MensweatshirtcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensweatshirtcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensweatshirtcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
