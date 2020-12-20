import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  durationInSeconds = 5;
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  subscribe(): void {
    this.snackBar.open('You are subscribed to our mailing list, Stay tuned for the updated',
      null, {
      duration: 2000,
    });
  }

}
