import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from './service.service';


export class PostdataModel
{
  _id:any;
  name:String;
  email:String;
  address:String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {
  title = 'MEANSTACK';

  idEdit:boolean =false;

  post:PostdataModel = new PostdataModel();

  submit(form:NgForm):void
  {
    if(!this.idEdit)
    {
    this.Saevice.postdata(form.value).subscribe(resp => {
      form.resetForm();
      this.get();
    })
  }
  else
  {
    this.Saevice.update(form.value).subscribe(res => {
      form.resetForm();
      this.get();
    })
  }
  }
  delete(data:PostdataModel)
  {
    this.Saevice.delete(data._id).subscribe(res =>{
      this.get();
      this.idEdit = false;
    })
  }

 edit(data:PostdataModel)
 {
   this.idEdit = true;
   this.Saevice.getbyid(data._id).subscribe(res => {
     this.post = res;
   })
 }


  constructor(private Saevice:ServiceService){}


  public allStud:any = [];
  get()
  {
   this.Saevice.geturl().subscribe(res => this.allStud = res);
  }
 
   ngOnInit(){
  this.get();
  }
}


