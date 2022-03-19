import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyMicroWrapperComponent } from './lazy-micro-wrapper.component';

describe('LazyMicroWrapperComponent', () => {
  let component: LazyMicroWrapperComponent;
  let fixture: ComponentFixture<LazyMicroWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyMicroWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyMicroWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
