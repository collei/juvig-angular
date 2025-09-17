import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuvigComponent } from './juvig.component';

describe('JuvigComponent', () => {
  let component: JuvigComponent;
  let fixture: ComponentFixture<JuvigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuvigComponent]
    });
    fixture = TestBed.createComponent(JuvigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
