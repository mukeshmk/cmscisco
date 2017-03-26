/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlisComponent } from './blis.component';

describe('BlisComponent', () => {
  let component: BlisComponent;
  let fixture: ComponentFixture<BlisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
