import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureTogglerComponent } from './picture-toggler.component';

describe('PictureTogglerComponent', () => {
  let component: PictureTogglerComponent;
  let fixture: ComponentFixture<PictureTogglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureTogglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
