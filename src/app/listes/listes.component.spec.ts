/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListesComponent } from './listes.component';

describe('ListesComponent', () => {
  let component: ListesComponent;
  let fixture: ComponentFixture<ListesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
