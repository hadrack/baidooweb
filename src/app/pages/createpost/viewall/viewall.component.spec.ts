import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallComponent } from './viewall.component';

describe('ViewallComponent', () => {
  let component: ViewallComponent;
  let fixture: ComponentFixture<ViewallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewallComponent]
    });
    fixture = TestBed.createComponent(ViewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
