import { Component, OnInit } from '@angular/core';
import { DashboardQuery } from 'src/app/states/dashboard/dashboard.query';
import { Observable } from 'rxjs';
import { UserQuery } from 'src/app/states/user/state/user.query';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss'],
})
export class LocationInfoComponent implements OnInit {
  postalCode$: Observable<any>;
  county$: Observable<any>;
  count$: Observable<number>;

  constructor(private query: DashboardQuery, private userQuery: UserQuery, private router: Router) {
    this.count$ = this.query.selectFirst(state =>
      state.confinements.reduce((total, d) => total + parseInt(d.hits, 10), 0),
    );
  }

  ngOnInit(): void {
    const id = this.userQuery.getActiveId();
    const user = this.userQuery.getEntity(id);
    this.postalCode$ = this.userQuery.selectActive(entity => {
      return entity.postalcode.slice(0, -4); // Get just the first 4 digits
    });
    this.county$ = this.userQuery.selectActive(entity => entity.county);
  }

  updatePostCode() {
    this.router.navigate(['post-code-step']);
  }
}
