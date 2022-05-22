import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
isLoading = false
  constructor(private authSrv:AuthService) { }

  ngOnInit(): void {
  }
async onsubmit(form:NgForm){
  this.isLoading = true
  console.log(form)
  try {
   await this.authSrv.login(form.value)
    form.reset()
    this.isLoading = false
  } catch (error) {
    console.error(error)
    this.isLoading = false
  }

}
}
//
