import { Component, OnInit } from '@angular/core';
import { FsListConfig } from '@firestitch/list';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { FsNavService } from '@firestitch/nav';


@Component({
  templateUrl: 'list.component.html'
})
export class ListComponent implements OnInit {

  public config: FsListConfig;

  constructor(private router: Router, private nav: FsNavService) {}

  public ngOnInit() {
    this.nav.setTitle('List');

    this.config = {
      actions: [
        {
          click: (event) => {
            this.router.navigateByUrl('/workflow/1');
          },
          label: 'Go To Workflow 1',
          primary: true
        },
        {
          click: (event) => {
            this.router.navigateByUrl('/something');
          },
          label: 'Go To Something',
          primary: true
        },
        {
          click: (event) => {
            this.router.navigateByUrl('/tabs/d');
          },
          label: 'Go To Tab D',
          primary: true
        }
      ],
      fetch: (query) => {
        return Observable.create((observer) => {
          observer.next({ data: [{}, {}, {}] });
        });
      },
      paging: false,
      status: false
    };
  }
}



