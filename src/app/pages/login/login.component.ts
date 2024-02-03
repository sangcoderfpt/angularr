import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginService = inject(LoginService); // inject vao bien

  loginUser = {
   
    email: '',
    password: '',
   
  };

  handleSubmit() {
    
    this.loginService.loginUser(this.loginUser).subscribe(() => {});
  }
}