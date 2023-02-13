import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';
import { StorageService } from '@modules/_services/storage.service';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    form: any = {
        numeroOrEmail: null,
        password: null
    };
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];


    constructor(private authService: AuthService, private storageService: StorageService, private route: Router) { }
    ngOnInit() {
        if (this.storageService.isLoggedIn()) {
            this.isLoggedIn = true;
            this.roles = this.storageService.getUser().roles;
        }
    }

    onSubmit(): void {
        const { numeroOrEmail,
            password, } = this.form;

        this.authService.connexion(numeroOrEmail, password).subscribe({
            next: data => {
                this.storageService.saveUser(data);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.roles = this.storageService.getUser().roles;
                // this.reloadPage();
                console.log(this.roles[0])

                if(this.isLoggedIn=true){
                    this.route.navigate(['/charts'])
                }
                
                // if (this.roles[0] == "ROLE_ADMIN") {
                //     this.route.navigate(['/dashboard'])
                // }
            },
            error: err => {
                this.errorMessage = err.error.message;
                this.isLoginFailed = true;
            }
        });
    }
}
