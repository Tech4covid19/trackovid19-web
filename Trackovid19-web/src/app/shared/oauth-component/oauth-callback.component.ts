import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {UserService} from '../../states/user/state/user.service';
import {User} from "../../states/user/state/user.model";

@Component({
    template: '',
})
export class OauthCallbackComponent {

    tmp = {
        'postalCode': '4200-192',
        'geo': {'lat': 10.34, 'lon': 2.8},
        'phone': '+351960123122',
        'email': 'jane@doe.com',
        'name': 'Jane Doe',
        'patientToken': 'QWERTY',
        'showOnboarding': false,
        'optin_download_use': true,
        'optin_privacy': true,
        'optin_health_geo': true,
        'optin_push': true
    };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private userService: UserService,
    ) {
        this.route.queryParams.subscribe(params => {
            this.authService.authenticate(params.code);
            this.verifyCode();
        });
    }

    verifyCode(): void {
        this.userService.getUser().subscribe(user => {
            console.log(user, this.verifyTerms(user));
            localStorage.setItem('gdpr', JSON.stringify(this.verifyTerms(user)));
            if (user && user.postalcode && user.postalcode !== '0000-000') {
              const url = this.verifyTerms(user) ? '/dashboard' : '/privacy-terms';
              this.router.navigate([url]);
            } else {
              this.router.navigate(['post-code-step']);
            }
        });
    }

    verifyTerms(user: Partial<User>) {
      return user.hasOwnProperty('optin_download_use') && user.hasOwnProperty('optin_health_geo')
          && user.hasOwnProperty('optin_privacy') && user.hasOwnProperty('optin_push')
          && user.optin_download_use && user.optin_health_geo && user.optin_privacy && user.optin_push;
    }
}
// http://localhost:4200/#/post-code?code=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiOTIiLCJpZF9kYXRhIjoiYjUzZDU2YzAtYWQ4Yi00ZTZmLTk2MWYtODkxNGJjNDU0MmE0IiwibmFtZSI6IldhbHRlciBHYW5kYXJlbGxhIn0sInJvbGVzIjpbInVzZXIiXSwiaWF0IjoxNTg0OTYzMTEyLCJleHAiOjE1ODUwNDk1MTJ9.dKzuPqO59ttPh7hVz8wj2MfZRL9DhR_APe7V5fxh_mU
