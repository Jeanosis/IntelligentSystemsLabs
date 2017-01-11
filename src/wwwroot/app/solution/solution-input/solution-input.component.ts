import { Component, OnInit, Input, Renderer } from '@angular/core';

import { SyncService } from '../../shared/sync/sync.service';
import { StorageService } from '../../shared/storage.service';

import { Param } from '../../shared/param.model';

@Component({
    moduleId: module.id,
    selector: 'solution-input',
    templateUrl: 'solution-input.component.html',
    styleUrls: ['solution-input.component.css']
})
export class SolutionInputComponent implements OnInit {
    constructor(private storageService: StorageService, private syncService: SyncService, private renderer: Renderer) { }

    ngOnInit(): void {
        this.params = this.storageService.getInputParams();

        this.syncService.setListener(this.renderer, (event: any) => {
            alert('Solving task!');
        });
    }
    

    private params: Param[] = [];
}