/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParticiperStep1Component } from './participer-step1.component';

describe('ParticiperStep1Component', () => {
  let component: ParticiperStep1Component;
  let fixture: ComponentFixture<ParticiperStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticiperStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticiperStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
