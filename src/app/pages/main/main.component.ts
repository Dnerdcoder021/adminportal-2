// import { Component } from '@angular/core';
import { Component, ViewChild, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { Router,RouterModule } from '@angular/router';
import { faTabletScreenButton,faShieldHalved,faDisplay,faUpload,faEnvelope,faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";


// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from "@angular/cdk/layout";

import {MatMenuModule} from '@angular/material/menu';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  CommonModule,FontAwesomeModule,MatMenuModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  title = 'sidenav-material'; 
  isMobile = false;
  icon=faTabletScreenButton;
  icon2=faShieldHalved;
  icon3=faDisplay;
  upload=faUpload;
  envelope=faEnvelope;
  card=faIdCard;
  visible=true;

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
 


  @HostListener('window:resize')
  onWindowResize() {
    const screenWidth = window.innerWidth;
    this.isMobile = screenWidth <= 800;
  }

  constructor(private  observer: BreakpointObserver,private router:Router){

  }
  

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
      }else{
        this.sidenav.mode='side';
        this.sidenav.open();
      }
    });
  }
  dashboard(){
    this.router.navigate(['./portal/dashboard'])
    if(this.isMobile){
      this.sidenav.toggle();
    }
  }
  profile(){
    this.router.navigate(['/user-management'])
    if(this.isMobile){
      this.sidenav.toggle();
    }
  }

  toggle(){
    this.visible=false;

  }
  navigateto(){
    this.router.navigate(['/dashboard']);
  }

}
