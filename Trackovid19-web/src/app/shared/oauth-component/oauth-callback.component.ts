import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    template: ''
})
export class OauthCallbackComponent {
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService
    ) {
        this.route.queryParams.subscribe(params => {
            this.authService.authenticate(params.code);
            this.router.navigate(['']);
        });
    }
}