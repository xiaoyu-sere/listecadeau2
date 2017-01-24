/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateStep3Component } from './create-step3.component';

describe('CreateStep3Component', () => {
  let component: CreateStep3Component;
  let fixture: ComponentFixture<CreateStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
