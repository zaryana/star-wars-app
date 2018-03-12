import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {animate, group, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('smooth', [
      transition('home => details', [
        query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
        group([
          query(':enter', [
            style({transform: 'translateX(100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))], {optional: true}),
          query(':leave', [
            style({transform: 'translate(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))], {optional: true})
        ]),
      ]),
      transition('details => home', [
        query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
        group([
          query(':enter', [
            style({transform: 'translateX(-100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))], {optional: true}),
          query(':leave', [
            style({transform: 'translate(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))], {optional: true})
        ]),
      ])
    ])
  ]
})
export class AppComponent implements OnDestroy {
  title = 'sw';
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
