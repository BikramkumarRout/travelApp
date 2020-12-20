import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  count = 0;
  form: FormGroup;
  constructor(private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      place: [null, Validators.required],
      member: [this.count, Validators.required],
      fromdate: [null, Validators.required],
      todate: [null, Validators.required],
      validate: ''
    });
  }

  counter(data: string): void {
    if (data === 'plus') {
      this.count++;
    } else if (data === 'minus' && this.count > 0) {
      this.count--;
    }
  }

  bookNow(): void {
    this.route.navigate(['/booking', { data: JSON.stringify(this.form.value) }], { skipLocationChange: true });
  }
}
