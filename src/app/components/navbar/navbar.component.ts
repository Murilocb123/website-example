import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ngOnInit() {
    // this.items = [
    //   {
    //     label: 'File',
    //     icon: 'pi pi-fw pi-file',
    //   },
    //   {
    //     label: 'Edit',
    //     icon: 'pi pi-fw pi-pencil',
    //   }
    // ];
  }
}