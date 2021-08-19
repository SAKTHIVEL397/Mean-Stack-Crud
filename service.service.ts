import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostdataModel } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = "http://localhost:3000/get";
  posturl = "http://localhost:3000/abc";
  
  constructor(private http:HttpClient) { }
  
  geturl()
  {
    return this.http.get(this.url);
  }

  getbyid(id:any):Observable<PostdataModel>
  {
    
    return this.http.get<PostdataModel>("http://localhost:3000/"+ id);
  }
  update(data:PostdataModel):Observable<PostdataModel>
  {
    return this.http.put<PostdataModel>("http://localhost:3000/" + data._id,data);
  }

delete(id:any):Observable<PostdataModel>
{
  return this.http.delete<PostdataModel>("http://localhost:3000/" + id);
}
  postdata(data:PostdataModel):Observable<PostdataModel>
  {
    return this.http.post<PostdataModel>(this.posturl,data);
  }

}
