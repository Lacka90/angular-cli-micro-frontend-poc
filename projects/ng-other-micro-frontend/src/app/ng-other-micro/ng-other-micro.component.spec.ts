import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOtherMicroComponent } from './ng-other-micro.component';

describe('NgOtherMicroComponent', () => {
  let component: NgOtherMicroComponent;
  let fixture: ComponentFixture<NgOtherMicroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOtherMicroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOtherMicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
