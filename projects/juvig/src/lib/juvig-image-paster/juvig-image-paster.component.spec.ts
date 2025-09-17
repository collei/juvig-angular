import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuvigImagePasterComponent } from './juvig-image-paster.component';

describe('JuvigImagePasterComponent', () => {
  let component: JuvigImagePasterComponent;
  let fixture: ComponentFixture<JuvigImagePasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuvigImagePasterComponent]
    });
    fixture = TestBed.createComponent(JuvigImagePasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
