import { Injectable, ElementRef, Renderer } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

export class SyncService {

    constructor() {
        var elem = Cookie.get('syncElem');
        
        this.element = elem === null ? undefined : new ElementRef(document.getElementById(elem));
    }

    setElement(syncButton: ElementRef): void {
        this.element = syncButton;
        Cookie.set('syncElem', this.element.nativeElement.id);
    }

    setListener(renderer: Renderer, listener: Function): void {
        if (typeof this.element === 'undefined')
            return console.log('sadness');
        else if (typeof this._removeListener !== 'undefined')
            this._removeListener();
        
        this._removeListener = renderer.listen(this.element.nativeElement, 'click', listener);
    }

    removeListener(): void {
        this._removeListener();
    }

    private element: ElementRef = null;
    private _removeListener: Function = undefined;
}