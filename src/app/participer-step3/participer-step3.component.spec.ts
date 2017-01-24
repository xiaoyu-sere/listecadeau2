/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParticiperStep3Component } from './participer-step3.component';

describe('ParticiperStep3Component', () => {
  let component: ParticiperStep3Component;
  let fixture: ComponentFixture<ParticiperStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticiperStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticiperStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
