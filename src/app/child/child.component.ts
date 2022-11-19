import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input () passingValue:number=0;    //Need to "Import" this "Input" as did above

  ngOnInit(): void {
  }

}
