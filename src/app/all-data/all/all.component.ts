import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';
import { QuickAddComponent } from '../quick-add/quick-add.component';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  openDialog() {
    const dialogRef = this.dialog.open(QuickAddComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  panelOpenState = false;
  public alldata: any;
  isSubmitted: boolean = false;
  name: string = "Ramesh Dhudijyha";
  number: number = 9998881113;
  routerLink: any;
  empData: any[] = [];
  centers = ['Pune', 'Banglore', 'Mumbai'];
  courses = ['BCA', 'MCA', 'BSC', 'MSC'];
  enqirySorce = ['Googleads'];
  window: any;


  constructor(private DataServices: DataService, private form: FormBuilder, private route: Router, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.alldata = this.form.group({
      fname: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z]+")]],
      lname: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z]+")]],
      email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}")]],
      enqirytype: ['', [Validators.required, Validators.pattern("")]],
      center: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]],
      mobile: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      enqirysorce: ['', [Validators.required]],
      corse: ['', [Validators.required]],
      remark: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z]+")]]
    });

    this.DataServices.getData().subscribe((res: any) => {
      console.log(res);
      this.empData = res;
    });

  }

  onSubmitForm() {
    if (this.alldata.valid) {
      console.log(this.alldata);
      console.log(this.alldata.value);
      this.isSubmitted = true;      
      Swal.fire({
        title: "Thank You",
        text: "Data Submitted Successfully",
        icon: "success",
        confirmButtonText: 'Okay',

      });   
    } else {
      Swal.fire({
        title: "Sorry... ",
        text: "Please Enter All Fields",
        icon: "error",
        confirmButtonText: 'Okay'
      });
    }
  }

  onSubmit() {
    console.log(this.alldata);
    console.log(this.alldata.value);
    this.isSubmitted = true;
    this.alldata.reset();

    if (this.alldata.valid) {
      Swal.fire({
        title: "Thank You",
        text: "Data Submitted Successfully",
        icon: "success",
        confirmButtonText: 'Okay',
      })
    } else {
      return;
    }
  }

  get FormControl() {
    return this.alldata.controls;
  }
}

