import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/interface/Customer';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-customer-block',
  templateUrl: './customer-block.component.html',
  styleUrls: ['./customer-block.component.css']
})
export class CustomerBlockComponent implements OnInit{
  @Input() customer? : Customer ;
  panelOpenState : boolean = true;
    constructor() {
      
    }
  ngOnInit(): void {
    
  }
}
