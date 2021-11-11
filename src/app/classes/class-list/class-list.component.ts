import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data-service.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-class-list',
    templateUrl: './class-list.component.html',
    styleUrls: ['./class-list.component.css'],
})
export class ClassListComponent implements OnInit {
    classNames: Array<string>;

    constructor(private dataService: DataService, private router: Router) {
    }

    ngOnInit(): void {
        this.classNames = this.dataService.getClassNames();
    }

    showStudentOf(classname): void {
        this.router.navigate(['class-detail', classname]);
    }
}
