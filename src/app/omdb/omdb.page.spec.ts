import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmdbPage } from './omdb.page';

describe('OmdbPage', () => {
  let component: OmdbPage;
  let fixture: ComponentFixture<OmdbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmdbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmdbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
