import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.warn(this.route.snapshot.paramMap.get('routeValue')); //Getting the route value
    
  }

}
