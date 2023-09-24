import { Component } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';
import { User } from 'src/app/shared/models/User';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartQuantity = 0;
  user!: User;

  constructor(
    private cartService: CartService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    });

    this.userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    });
  }

  logout(): void {
    this.userService.logout();
  }

  get isAuth() {
    return this.user.token;
  }
}
