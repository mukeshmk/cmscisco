/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrgDataRowComponent } from './org-data-row.component';

describe('OrgDataRowComponent', () => {
  let component: OrgDataRowComponent;
  let fixture: ComponentFixture<OrgDataRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgDataRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgDataRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
