/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AccountViewActivityNotesComponent } from './account-view-activity-notes.component';

describe('AccountViewActivityNotesComponent', () => {
  let component: AccountViewActivityNotesComponent;
  let fixture: ComponentFixture<AccountViewActivityNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountViewActivityNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountViewActivityNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
