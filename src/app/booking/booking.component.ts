import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingInfo: any;
  constructor(private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.router.snapshot.params.data);

    this.bookingInfo = JSON.parse(this.router.snapshot.params.data);

  }

}
