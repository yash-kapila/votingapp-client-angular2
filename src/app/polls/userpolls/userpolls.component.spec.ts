/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserpollsComponent } from './userpolls.component';

describe('UserpollsComponent', () => {
  let component: UserpollsComponent;
  let fixture: ComponentFixture<UserpollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
