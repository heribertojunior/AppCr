import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogiPage } from './logi.page';

describe('LogiPage', () => {
  let component: LogiPage;
  let fixture: ComponentFixture<LogiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
