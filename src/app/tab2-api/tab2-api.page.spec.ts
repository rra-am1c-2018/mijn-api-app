import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2ApiPage } from './tab2-api.page';

describe('Tab2ApiPage', () => {
  let component: Tab2ApiPage;
  let fixture: ComponentFixture<Tab2ApiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2ApiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2ApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
