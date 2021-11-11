import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student.model';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css'],
})
export class ClassDetailComponent implements OnInit {
  className = '4AHITM';
  students: Array<Student>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.students = this.dataService.getStudentsOfClass(this.className);
  }
}
