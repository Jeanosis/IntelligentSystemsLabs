import 'rxjs/add/operator/filter';
import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-toolbar',
    templateUrl: './app-toolbar.component.html',
    styleUrls: ['./app-toolbar.component.css']
})
export class AppToolbarComponent extends OnInit {
    constructor(private location: Location, private router: Router) {
        super();
        console.log('lel');
        router.events
            .filter(event => event instanceof NavigationStart)
            .subscribe((event: NavigationEvent) => {
                console.log('router changed!');
            });
    }

    ngOnInit(): void {

    }


}