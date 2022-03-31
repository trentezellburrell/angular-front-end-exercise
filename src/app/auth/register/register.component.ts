import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private globService: GlobalService,
    private router: Router,
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      bio: ['']
    });
  }

  ngOnInit(): void {
  }

  registerUser() {
    if (this.registerForm.valid) {
      this.globService.registerUser(this.registerForm.value).subscribe((result: any) => {
        this.globService.logIn = true;
        this.router.navigateByUrl('dashboard/profile');
      }, error => {
        console.log(error);
      })
    }
  }

}
