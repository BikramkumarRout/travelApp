import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  durationInSeconds = 5;
  @ViewChild('email') inputElement: ElementRef;
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  subscribe(): void {
    if (this.inputElement.nativeElement.value) {

      this.snackBar.open('You are subscribed to our mailing list, Stay tuned for the updated',
        null, {
        duration: 2000,
      });
    } else {
      this.snackBar.open('Please enter valid email address to subscribe our mailing list',
        null, {
        duration: 2000,
      });
    }
  }

}
