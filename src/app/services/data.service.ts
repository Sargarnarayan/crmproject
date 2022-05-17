import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public id= new BehaviorSubject(2);
  public data = new BehaviorSubject('');
  newid= this.id.asObservable();
  newdata= this.data.asObservable();
  constructor(private http:HttpClient ) { }

  setdata(id: any, data: any){
    this.id.next(id);
    this.data.next(data);
  }
  getnewData(){
    return this.newid, this.newdata;
  }
   sendData(ab:any){
    return this.http.post('http://localhost:3000/api/insertCourses',ab);
   }

   
   getData(){
    return this.http.get('http://localhost:3000/api/getAllCourses');
  }

  
  updateData(id: any, data: any){
    return this.http.put('http://localhost:3000/api/updateCourses/'+id,data);
  }

  deleteData(id: any){
    return this.http.delete('http://localhost:3000/api/deleteCourses/'+id);
   }

  
}
