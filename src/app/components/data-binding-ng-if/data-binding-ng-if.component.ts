import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-ng-if',
  templateUrl: './data-binding-ng-if.component.html',
  styleUrls: ['./data-binding-ng-if.component.css'],
})
export class DataBindingNgIfComponent implements OnInit {
  public name: string = '';
  public age: number = 0;
  public isAllow: boolean = true;

  ngOnInit(): void {}
}
