System.register(['@angular/core', '@angular2-material/button', '@angular2-material/card'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, button_1, card_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(elementRef) {
                    this.elementRef = elementRef;
                    this.repos = [
                        'domfarolino/angular2-login-seed',
                        'domfarolino/derbyhacks-hackathon',
                        'domfarolino/directory-tree-print',
                        'domfarolino/domfarolino'
                    ];
                }
                HomeComponent.prototype.ngAfterViewInit = function () {
                    var s = document.createElement("script");
                    s.type = "text/javascript";
                    s.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js";
                    this.elementRef.nativeElement.appendChild(s);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'client/components/home/home.component.html',
                        styleUrls: ['client/components/home/home.component.css'],
                        directives: [button_1.MdButton, card_1.MD_CARD_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map