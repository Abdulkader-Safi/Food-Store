import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent {
  food!: Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param['id']) {
        this.foodService.getFoodById(param['id']).subscribe((food) => {
          this.food = food;
        });
      }
    });
  }

  addToCart(): void {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
