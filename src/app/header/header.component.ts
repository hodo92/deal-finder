import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthenticationService]
})
export class HeaderComponent {

  constructor(public authService: AuthenticationService) { }

  authLogin() {
    this.authService.login();
  }

}
