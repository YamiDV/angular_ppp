import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvGuide } from './cv-guide';

describe('CvGuide', () => {
  let component: CvGuide;
  let fixture: ComponentFixture<CvGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvGuide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
