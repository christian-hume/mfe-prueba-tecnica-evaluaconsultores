import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  loading = true;
  error: string | null = null;

  constructor(private userService: UserService) {}

ngOnInit(): void {
  console.log('UsersComponent INIT'); // 🔹 línea de depuración

 this.userService.getUsers().subscribe({
  next: (data: User[]) => {
    console.log('DATA:', data);
    this.users = data;      // ✅ actualiza array
    this.loading = false;   // ✅ esto debe ocultar "Cargando..."
  },
  error: (err: any) => {
    console.error('ERROR HTTP', err);
    this.error = 'Error cargando usuarios';
    this.loading = false;
  }
});


}
}
