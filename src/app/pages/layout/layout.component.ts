import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/home',
    title: 'Home',
    icon: 'home',
    class: '',
  },
  {
    path: '/information',
    title: 'Information',
    icon: 'file',
    class: '',
  },
  {
    path: '/transfer',
    title: 'Transfer',
    icon: 'swap',
    class: '',
  },
  {
    path: '/backup',
    title: 'Backup',
    icon: 'database',
    class: '',
  },
  {
    path: '/setting',
    title: 'Setting',
    icon: 'setting',
    class: '',
  },
  {
    path: '/recommended',
    title: 'Recommended ',
    icon: 'audit',
    class: '',
  },
  {
    path: '/about',
    title: 'About',
    icon: 'info-circle',
    class: '',
  },
  {
    path: '/update',
    title: 'Update',
    icon: 'sync',
    class: '',
  },
 

];
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  public menuItems: any[];

  constructor(private router :Router) { }

  ngOnInit(): void {
    
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    console.log(this.menuItems);
   
    
  }
  clickToPage(page : string){
    this.router.navigate(["/"+page+""]);
  }
}
