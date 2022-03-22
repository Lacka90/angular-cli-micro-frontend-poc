import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxButtonComponent } from './tax-button.component';

describe('TaxButtonComponent', () => {
  let component: TaxButtonComponent;
  let fixture: ComponentFixture<TaxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
