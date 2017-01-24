/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParticiperStep2Component } from './participer-step2.component';

describe('ParticiperStep2Component', () => {
  let component: ParticiperStep2Component;
  let fixture: ComponentFixture<ParticiperStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticiperStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticiperStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
