import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../shared/storage.service';

@Component({
    moduleId: module.id,
    selector: 'solution-results',
    templateUrl: 'solution-results.component.html',
    styleUrls: ['solution-results.component.css']
})
export class SolutionResultsComponent implements OnInit {
    constructor(private storageService: StorageService) { }

    ngOnInit() {
        this.results = this.storageService.getResults();
    }

    getValues(result: any): string {
        return JSON.stringify(result.graph.values);
    }

    private results: Object[] = [];
}