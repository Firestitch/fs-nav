import { Component, ElementRef, Renderer2, HostBinding, Input } from '@angular/core';

import { FsNavComponentComponent } from '../nav-component/nav-component.component';
import { FsNavStackService } from '../../services/fs-nav-stack.service';
import { FsNavUpdatesService, FsNavUpdateTarget } from '../../services/fs-nav-updates.service';


@Component({
  selector: '[fsNavSupertitle]',
  templateUrl: '../nav-component/nav-component.component.html',
  styleUrls: ['../nav-base/nav-base.component.scss']
})
export class FsNavSupertitleComponent extends FsNavComponentComponent {

  @Input('fsNavComponent')
  set name(value) {
    this._name = 'supertitle';
  };

  @HostBinding('class.fs-nav-supertitle') public subtitleClass = true;

  protected _type = FsNavUpdateTarget.component;

  constructor (
    navUpdates: FsNavUpdatesService,
    navStack: FsNavStackService,
    elementRef: ElementRef,
    renderer: Renderer2
  ) {
    super(navUpdates, navStack, elementRef, renderer);

    this._name = 'supertitle';
  }
}