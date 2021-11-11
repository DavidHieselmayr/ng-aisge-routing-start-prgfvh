import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css'],
})
export class ClassListComponent implements OnInit {
  classNames: Array<string>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.classNames = this.dataService.getClassNames();
  }
}
