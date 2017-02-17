/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViewaccountDataRowComponent } from './viewaccount-data-row.component';

describe('ViewaccountDataRowComponent', () => {
  let component: ViewaccountDataRowComponent;
  let fixture: ComponentFixture<ViewaccountDataRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewaccountDataRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaccountDataRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
