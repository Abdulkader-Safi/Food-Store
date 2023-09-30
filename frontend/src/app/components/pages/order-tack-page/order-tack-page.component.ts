import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-order-tack-page',
  templateUrl: './order-tack-page.component.html',
  styleUrls: ['./order-tack-page.component.css'],
})
export class OrderTackPageComponent {
  order!: Order;

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (!params['orderId']) return;

    this.orderService.trackOrderById(params['orderId']).subscribe((order) => {
      this.order = order;
    });
  }
}
