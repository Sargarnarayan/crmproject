import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public home: any;
  public myForm1: any;
  public empData: any;
    constructor(private ser: DataService, private rout: Router,  private frm: FormBuilder,
      public dialogRef: MatDialogRef<UpdateComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {

      this.ser.getnewData().subscribe(
        (res)=>{
          console.log(res);
          this.home=res;
          // this.dialogRef=res;
         
          })
     }
  
    ngOnInit(): void {
      this.myForm1 = this.frm.group({
        name:[this.home.name],
        age:[this.home.age],
        empId:[this.home.empId],
        branch:[this.home.branch],
        role:[this.home.role]    
      })
      
    }
    // update Data
    onSubmitForm(){
      this.ser.updateData(this.home.id, this.myForm1.value).subscribe(
        (res)=>{
          console.log(res);
        });
        // reset form after form submition
        if(this.myForm1.valid){
          this.myForm1.reset(); 
          window.location.reload();
          alert("update Data Sucessfully");     
        }
      // this.rout.navigate(['./all-data/all']);//update data then navigate table
    }  
   
  }

