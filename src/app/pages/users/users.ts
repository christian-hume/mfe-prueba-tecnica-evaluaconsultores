import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user';
import { User } from '../../models/user';
import { PhoneFormatPipe } from '../../pipes/phone-format-pipe';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,
    PhoneFormatPipe],
  templateUrl: './users.html'
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  loading = true;
  error = '';

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('UsersComponent INIT');

    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        console.log('DATA:', data);

        this.users = data;
        this.loading = false;

        this.cdr.detectChanges(); // 👈 CLAVE ABSOLUTA
      },
      error: () => {
        this.error = 'Error al cargar usuarios';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
