import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-hijo',
  templateUrl: './post-hijo.component.html',
  styleUrls: ['./post-hijo.component.css']
})
export class PostHijoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  iraUsuarios(){
    this.router.navigate(['/usuarios'])
  }



}
