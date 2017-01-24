/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateStep1Component } from './create-step1.component';

describe('CreateStep1Component', () => {
  let component: CreateStep1Component;
  let fixture: ComponentFixture<CreateStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
