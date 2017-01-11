import { Injectable, ElementRef, Renderer } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class SyncService {

    constructor() {
        var elem = Cookie.get('syncElem');
        var prevListener = Cookie.get('prevListener');
        console.log('ffs', prevListener);
        this.element = elem === null ? undefined : new ElementRef(document.getElementById(elem));
        this.removeListener = prevListener == null || prevListener == 'undefined' ? undefined : JSON.parse(prevListener);
    }

    setElement(syncButton: ElementRef): void {
        this.element = syncButton;
        Cookie.set('syncElem', JSON.stringify(this.element.nativeElement.id));
    }

    setListener(renderer: Renderer, listener: any): void {
        if (typeof this.element === null)
            return;
        else if (typeof this.removeListener === 'Function')
            this.removeListener();
        
        this.removeListener = renderer.listen(this.element.nativeElement, 'click', listener);
        Cookie.set('prevListener', JSON.stringify(this.removeListener));
    }

    private element: ElementRef = null;
    private removeListener: any = undefined;
}