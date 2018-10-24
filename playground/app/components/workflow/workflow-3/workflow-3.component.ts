import { Component, OnInit } from '@angular/core';
import { FsNavRouteHandleService } from '../../../../../src';

@Component({
  templateUrl: 'workflow-3.component.html'
})
export class Workflow3Component implements OnInit {

  constructor(public stack: FsNavRouteHandleService) {}

  public ngOnInit() {
    this.stack.setTitle('Workflow 3');
    // this.nav.onBack((data, observer) => {
    //   // IDEA: Do something to bypass the history: false for the
    //   observer.next(data);
    // });
  }
}
