/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject, injectAsync
} from '@angular/core/testing';

import { ResumeComponent } from './resume.component';
import { Router } from '@angular/router';

describe('Component: Resume', () => {
  it('should create an instance', injectAsync(
        [Router], (_router: Router) => {
    let component = new ResumeComponent(_router);
    expect(component).toBeTruthy();
  }));
});
