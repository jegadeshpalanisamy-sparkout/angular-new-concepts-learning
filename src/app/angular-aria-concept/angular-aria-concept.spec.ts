import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAriaConcept } from './angular-aria-concept';

describe('AngularAriaConcept', () => {
  let component: AngularAriaConcept;
  let fixture: ComponentFixture<AngularAriaConcept>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularAriaConcept]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularAriaConcept);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
