import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { FsNavRouteHandleService } from '../../services';

@Component({
  selector: 'fs-scroll-saver',
  template: ''
})
export class FsScrollSaverComponent implements OnInit, OnDestroy {

  protected _routeScrollPositions: {[url: string]: number}[] = [];
  protected _subscriptions: Subscription[] = [];

  constructor(
    public stack: FsNavRouteHandleService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute) {
    this.stack.router = router;
  }

  public ngOnInit() {
    this._subscriptions.push(
      this.router.events.pairwise().subscribe(([prevRouteEvent, currRouteEvent]) => {
        if (prevRouteEvent instanceof NavigationEnd && currRouteEvent instanceof NavigationStart) {
          this._routeScrollPositions[prevRouteEvent.url] = window.pageYOffset;
        }
        if (currRouteEvent instanceof NavigationEnd) {
          window.scrollTo(0, this._routeScrollPositions[currRouteEvent.url] || 0);
        }
      })
    );

    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .subscribe((event) => {
        this.stack.setActivePath(event.snapshot);
      });

    this._subscriptions.push(
      this.stack.onStackReset.subscribe(() => {
        this._routeScrollPositions = [];
      })
    );
  }

  public ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}