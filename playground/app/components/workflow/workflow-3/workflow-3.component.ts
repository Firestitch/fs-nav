import { Component, OnInit } from '@angular/core';
import { Nav } from '../../../../../src/services';

@Component({
  templateUrl: 'workflow-3.component.html'
})
export class Workflow3Component implements OnInit {

  constructor(private nav: Nav) {}

  public ngOnInit() {
    this.nav.setTitle('Workflow 3');
  }
}
