import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { SomeService } from './shared/some.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent implements OnInit {
    @ViewChild('syncButton') syncButton: ElementRef;

    constructor(private someService: SomeService) { }

    ngOnInit() {
        console.log(this.someService.getProperty());
        this.someService.setProperty(3);
        console.log(this.someService.getProperty());
    }

    enableSync(): void {
        this.buttonState = true;
        setTimeout(() => {
            this.changeAnimationState();
        }, 2000);
    }

    changeAnimationState(): void {
        this.buttonState = !this.buttonState;
    }

    buttonState: boolean = false;
}