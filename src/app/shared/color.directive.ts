import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ selector: '[change-color]' })

export class ColorDirective {
    constructor(private el:ElementRef, private renderer:Renderer2) { 

    }


    // j'ai trouvé cette manière de faire en fouillant sur internet (apparamment windows:keydown fonctionne aussi)

    @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        console.log(event);

        switch (event.keyCode) {
            case 37 :
                this.renderer.setStyle(this.el.nativeElement,"color", "red");
                break;        
            case 38 :
                this.renderer.setStyle(this.el.nativeElement,"color", "blue");
                break;
            case 39 :
                this.renderer.setStyle(this.el.nativeElement,"color", "yellow");
                break;
            case 40 :
                this.renderer.setStyle(this.el.nativeElement,"color", "orange");
                break;
        }

    }


}