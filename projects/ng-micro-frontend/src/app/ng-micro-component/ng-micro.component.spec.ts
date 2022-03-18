import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMicroComponent } from './ng-micro.component';

describe('NgMicroComponentComponent', () => {
  let component: NgMicroComponent;
  let fixture: ComponentFixture<NgMicroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMicroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
