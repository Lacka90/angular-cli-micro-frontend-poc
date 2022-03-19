import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroWrapperComponent } from './micro-wrapper.component';

describe('MicroWrapperComponent', () => {
  let component: MicroWrapperComponent;
  let fixture: ComponentFixture<MicroWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
