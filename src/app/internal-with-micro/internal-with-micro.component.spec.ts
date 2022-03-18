import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalWithMicroComponent } from './internal-with-micro.component';

describe('InternalWithMicroComponent', () => {
  let component: InternalWithMicroComponent;
  let fixture: ComponentFixture<InternalWithMicroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalWithMicroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalWithMicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
