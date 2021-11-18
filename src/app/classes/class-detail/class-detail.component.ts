import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student.model';
import {DataService} from '../../services/data-service.service';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
    selector: 'app-class-detail',
    templateUrl: './class-detail.component.html',
    styleUrls: ['./class-detail.component.css'],
})
export class ClassDetailComponent implements OnInit {
    className = 'defaultClass';
    students: Array<Student>;

    constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        /*this.className = this.route.snapshot.params['classname'];
        this.students = this.dataService.getStudentsOfClass(this.className);*/

        this.route.params.subscribe((params: Params)=> {
            this.className = params['classname'];
            this.students = this.dataService.getStudentsOfClass(this.className);
        })
    }
}
