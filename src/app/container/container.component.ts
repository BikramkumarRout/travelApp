import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  resource;
  count = 3;


  constructor(private mainService: ApidataService) { }

  ngOnInit(): void {
    this.allFilter();
  }

  allFilter(): void {
    this.mainService.allex().subscribe((data) => {
      this.resource = data;
      console.log(this.resource);

    });

  }

  viewAll(): void {
    this.count = this.resource?.length;
  }

}
