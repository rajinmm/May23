import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
url="http://localhost:3000/users"
  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get(this.url);
   }

    saveUser(data: any){
    return this.http.post(this.url,data);
   }

   getSingleUsers(id: any){
    return this.http.get(`${this.url}/${id}`);
   }

   updateUser(id: any,data: any){
    return this.http.put(`${this.url}/${id}` ,data);
   }

}
