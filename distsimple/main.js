(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/s1f":
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../video-list/video-list.component */ "WNIZ");



class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 1, vars: 0, consts: [["user", "andiamoworks"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-video-list", 0);
    } }, directives: [_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_1__["VideoListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\holni\OneDrive\Dokumenty\commerce\andiamo\andiamo\src\main.ts */"zUnb");


/***/ }),

/***/ "50a8":
/*!***********************************!*\
  !*** ./src/app/screen.service.ts ***!
  \***********************************/
/*! exports provided: ScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenService", function() { return ScreenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ScreenService {
    constructor() {
        this.isBigScreen = false;
    }
    getScreenSize(event) {
        this.scrWidth = window.innerWidth;
        console.log('szerokosc ekranu: ' + this.scrWidth);
        if (this.scrWidth > 1500) {
            this.isBigScreen = true;
            console.log('ekran duży: ' + this.isBigScreen);
        }
        else {
            this.isBigScreen = false;
            console.log('ekran duży: ' + this.isBigScreen);
        }
    }
}
ScreenService.ɵfac = function ScreenService_Factory(t) { return new (t || ScreenService)(); };
ScreenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScreenService, factory: ScreenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScreenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, { getScreenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









class AppComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.title = 'andiamo';
        this.vimeoIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faVimeoV"];
        this.instagramIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"];
        this.facebookIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebookF"];
        this.menuIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"];
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fafff6';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 46, vars: 5, consts: [[1, "mobile"], [3, "icon", "click"], ["href", "https://vimeo.com/andiamoworks", "target", "_blank"], [3, "icon"], ["href", "https://www.facebook.com/andiamoworks", "target", "_blank"], ["href", "https://www.instagram.com/andiamoworks", "target", "_blank"], ["sidenav", ""], ["mat-list-item", "", "routerLink", "/films", "routerLinkActive", "active", 3, "click"], ["mat-list-item", "", "routerLink", "/about", "routerLinkActive", "active", 3, "click"], ["mat-list-item", "", "routerLink", "/bts", "routerLinkActive", "active", 3, "click"], ["mat-list-item", "", "routerLink", "/digital", "routerLinkActive", "active", 3, "click"], ["mat-list-item", "", "routerLink", "/contact", "routerLinkActive", "active", 3, "click"], ["mat-list-item", "", "routerLink", "/reel", "routerLinkActive", "active", 3, "click"], ["id", "logotype-wrapper"], ["id", "allora"], ["src", "assets/andiamo-logo-big-green.png", "alt", "ANDIAMO", 1, "logotype"], ["id", "question-mark"], [1, "router-wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_fa_icon_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-sidenav", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "WORKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "BTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "DIGITAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "REEL 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Allora,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.menuIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.vimeoIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.facebookIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.instagramIcon);
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: [".mat-list-item[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  letter-spacing: 0.15rem;\n  margin-top: 3%;\n}\n\n.mat-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #84fb54;\n}\n\nfa-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 3rem;\n  filter: drop-shadow(2px 2px rgba(132, 251, 84, 0.2));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFJQTtFQUNJLHlCQVRNO0FBUVY7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxvREFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLTI6ICM4NGZiNTQ7XHJcblxyXG5cclxuLm1hdC1saXN0LWl0ZW17XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMTVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxufVxyXG4ubWF0LWxpc3QtaXRlbTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci0yO1xyXG59XHJcblxyXG5mYS1pY29ue1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDJweCAycHggcmdiYSgkY29sb3ItMiwgMC4yKSk7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAycHggMnB4IHJnYmEoJGNvbG9yLTIsIDAuMikpO1xyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "WNIZ":
/*!****************************************************!*\
  !*** ./src/app/video-list/video-list.component.ts ***!
  \****************************************************/
/*! exports provided: VideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListComponent", function() { return VideoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vimeo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vimeo.service */ "k5rY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _video_cover_video_cover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-cover/video-cover.component */ "l8dz");





function VideoListComponent_div_0_app_video_cover_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-video-cover", 3);
} if (rf & 2) {
    const video_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("video", video_r2);
} }
function VideoListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideoListComponent_div_0_app_video_cover_1_Template, 1, 1, "app-video-cover", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.videos);
} }
class VideoListComponent {
    constructor(_vimeoService) {
        this._vimeoService = _vimeoService;
    }
    ngOnInit() {
        this._vimeoService.getVideos(this.user).subscribe(videos => {
            this.videos = videos;
            console.log(this.videos);
        });
    }
}
VideoListComponent.ɵfac = function VideoListComponent_Factory(t) { return new (t || VideoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vimeo_service__WEBPACK_IMPORTED_MODULE_1__["VimeoService"])); };
VideoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoListComponent, selectors: [["app-video-list"]], inputs: { user: "user" }, decls: 1, vars: 1, consts: [["class", "grid", 4, "ngIf"], [1, "grid"], [3, "video", 4, "ngFor", "ngForOf"], [3, "video"]], template: function VideoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VideoListComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _video_cover_video_cover_component__WEBPACK_IMPORTED_MODULE_3__["VideoCoverComponent"]], styles: [".grid[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n@media screen and (max-width: 900px) {\n  .grid[_ngcontent-%COMP%] {\n    padding-bottom: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tbGlzdC92aWRlby1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKO0FBQUk7RUFGSjtJQUdRLG1CQUFBO0VBR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlke1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNSU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video-list',
                templateUrl: './video-list.component.html',
                styleUrls: ['./video-list.component.scss']
            }]
    }], function () { return [{ type: _vimeo_service__WEBPACK_IMPORTED_MODULE_1__["VimeoService"] }]; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "XEn3":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 30, vars: 0, consts: [[1, "board"], [1, "third"], ["href", "mailto:halo@andiamo.works"], ["href", "mailto:mat@andiamo.works"], ["href", "tel:+48606712060"], ["href", "mailto:michal@andiamo.works"], ["href", "tel:+48501355898"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ANDIAMO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "halo@andiamo.works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ul. Czeczota\u00A04/1, 02-607");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " WARSAW, Poland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mat Erdmann");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "mat@andiamo.works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "+48606712060");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Michal\u00A0Wieckowski");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "michal@andiamo.works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "+48501355898");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".board[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 17% auto;\n  position: relative;\n}\n@media screen and (max-width: 900px) {\n  .board[_ngcontent-%COMP%] {\n    border-left: 3px solid rgba(132, 251, 84, 0.2);\n    width: 270px;\n    margin: 25% auto;\n  }\n}\n@media screen and (max-width: 600px) {\n  .board[_ngcontent-%COMP%] {\n    margin: 13% auto;\n  }\n}\n.board[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .board[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: uppercase;\n  border-bottom: 3px solid rgba(132, 251, 84, 0.2);\n}\n@media screen and (max-width: 900px) {\n  .board[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .board[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    border-bottom: none;\n  }\n}\n.board[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .board[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .board[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.8rem;\n  font-size: 1.2rem;\n  padding: 0;\n  margin-bottom: 0;\n}\n@media screen and (max-width: 400px) {\n  .board[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 1%;\n  }\n}\n.third[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  width: 15%;\n  margin-left: 5%;\n}\n.third[_ngcontent-%COMP%]:first-child {\n  text-align: right;\n  width: 31%;\n}\n@media screen and (max-width: 900px) {\n  .third[_ngcontent-%COMP%] {\n    display: block;\n    width: 270px;\n    padding: 10%;\n    margin-left: 1%;\n  }\n  .third[_ngcontent-%COMP%]:first-child {\n    text-align: left;\n    width: 270px;\n  }\n}\n@media screen and (max-width: 400px) {\n  .third[_ngcontent-%COMP%] {\n    width: 236px;\n    padding: 9% 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUVJO0VBSko7SUFLUSw4Q0FBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQUNOO0FBQ0Y7QUFDSTtFQVZKO0lBV1EsZ0JBQUE7RUFFTjtBQUNGO0FBQ0k7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxnREFBQTtBQUNSO0FBQVE7RUFKSjtJQUtRLG1CQUFBO0VBR1Y7QUFDRjtBQUNJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNSO0FBRUk7RUFDSTtJQUNJLGNBQUE7RUFBVjtBQUNGO0FBS0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFGSjtBQUdJO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FBRFI7QUFJSTtFQVZKO0lBV1EsY0FBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQUROO0VBRU07SUFDSSxnQkFBQTtJQUNBLFlBQUE7RUFBVjtBQUNGO0FBRUk7RUFwQko7SUFxQlEsWUFBQTtJQUNBLGNBQUE7RUFDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLTI6ICM4NGZiNTQ7XHJcblxyXG4uYm9hcmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTclIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYmEoJGNvbG9yLTIsIC4yKTtcclxuICAgICAgICB3aWR0aDogMjcwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAyNSUgYXV0bztcclxuXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICBtYXJnaW46IDEzJSBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgJiBoMSwgaDJ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoJGNvbG9yLTIsIC4yKTtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgICYgaDEsIGgyLCBwe1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4udGhpcmR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDMxJTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDI3MHB4OyAgIFxyXG4gICAgICAgIHBhZGRpbmc6IDEwJTsgICAgXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNzBweDsgICBcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xyXG4gICAgICAgIHdpZHRoOiAyMzZweDsgIFxyXG4gICAgICAgIHBhZGRpbmc6IDklIDUlOyAgICBcclxuIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _video_list_video_cover_video_cover_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./video-list/video-cover/video-cover.component */ "l8dz");
/* harmony import */ var _vimeo_url_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vimeo-url.pipe */ "huxW");
/* harmony import */ var _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./video-list/video-list.component */ "WNIZ");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/main/main.component */ "/s1f");
/* harmony import */ var _pages_digital_digital_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/digital/digital.component */ "oTG5");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _pages_reel_reel_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/reel/reel.component */ "rPba");
/* harmony import */ var _pages_bts_bts_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/bts/bts.component */ "xOoz");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/contact/contact.component */ "XEn3");
/* harmony import */ var _video_list_video_details_video_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./video-list/video-details/video-details.component */ "an4w");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");




























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_11__["LazyLoadImageModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
        _video_list_video_cover_video_cover_component__WEBPACK_IMPORTED_MODULE_14__["VideoCoverComponent"],
        _vimeo_url_pipe__WEBPACK_IMPORTED_MODULE_15__["VimeoUrlPipe"],
        _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_16__["VideoListComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__["NavComponent"],
        _pages_main_main_component__WEBPACK_IMPORTED_MODULE_18__["MainComponent"],
        _pages_digital_digital_component__WEBPACK_IMPORTED_MODULE_19__["DigitalComponent"],
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
        _pages_reel_reel_component__WEBPACK_IMPORTED_MODULE_21__["ReelComponent"],
        _pages_bts_bts_component__WEBPACK_IMPORTED_MODULE_22__["BtsComponent"],
        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_23__["ContactComponent"],
        _video_list_video_details_video_details_component__WEBPACK_IMPORTED_MODULE_24__["VideoDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_11__["LazyLoadImageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                    _video_list_video_cover_video_cover_component__WEBPACK_IMPORTED_MODULE_14__["VideoCoverComponent"],
                    _vimeo_url_pipe__WEBPACK_IMPORTED_MODULE_15__["VimeoUrlPipe"],
                    _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_16__["VideoListComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__["NavComponent"],
                    _pages_main_main_component__WEBPACK_IMPORTED_MODULE_18__["MainComponent"],
                    _pages_digital_digital_component__WEBPACK_IMPORTED_MODULE_19__["DigitalComponent"],
                    _pages_about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
                    _pages_reel_reel_component__WEBPACK_IMPORTED_MODULE_21__["ReelComponent"],
                    _pages_bts_bts_component__WEBPACK_IMPORTED_MODULE_22__["BtsComponent"],
                    _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_23__["ContactComponent"],
                    _video_list_video_details_video_details_component__WEBPACK_IMPORTED_MODULE_24__["VideoDetailsComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng_lazyload_image__WEBPACK_IMPORTED_MODULE_11__["LazyLoadImageModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "an4w":
/*!*********************************************************************!*\
  !*** ./src/app/video-list/video-details/video-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: VideoDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDetailsComponent", function() { return VideoDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_vimeo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/vimeo.service */ "k5rY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _vimeo_url_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../vimeo-url.pipe */ "huxW");







class VideoDetailsComponent {
    constructor(http, route, location) {
        this.http = http;
        this.route = route;
        this.location = location;
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => this.http.getVideo(params.get('id')))).
            subscribe(video => {
            this.video = video;
            console.log(video);
        });
    }
    goToVideos() {
        this.location.back();
    }
}
VideoDetailsComponent.ɵfac = function VideoDetailsComponent_Factory(t) { return new (t || VideoDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_vimeo_service__WEBPACK_IMPORTED_MODULE_2__["VimeoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"])); };
VideoDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoDetailsComponent, selectors: [["app-video-details"]], decls: 7, vars: 4, consts: [[1, "video-wrapper"], [1, "title-wrapper"], [1, "iframe-wrapper"], ["frameborder", "0", "allow", "autoplay; fullscreen; picture-in-picture", "allowfullscreen", "", 3, "src"]], template: function VideoDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "vimeoUrl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.video.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.video.video_id), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    } }, pipes: [_vimeo_url_pipe__WEBPACK_IMPORTED_MODULE_5__["VimeoUrlPipe"]], styles: [".video-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 10rem);\n}\n@media screen and (max-width: 600px) {\n  .video-wrapper[_ngcontent-%COMP%] {\n    height: calc(100vh - 5.925rem);\n  }\n}\n.video-wrapper[_ngcontent-%COMP%]   .iframe-wrapper[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 960px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  background-color: black;\n}\n.video-wrapper[_ngcontent-%COMP%]   .iframe-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 960px;\n  height: 540px;\n  vertical-align: bottom;\n}\n@media screen and (min-width: 1800px) {\n  .video-wrapper[_ngcontent-%COMP%]   .iframe-wrapper[_ngcontent-%COMP%] {\n    width: 1440px;\n  }\n  .video-wrapper[_ngcontent-%COMP%]   .iframe-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    width: 1440px;\n    height: 810px;\n  }\n}\n@media screen and (max-width: 960px) {\n  .video-wrapper[_ngcontent-%COMP%]   .iframe-wrapper[_ngcontent-%COMP%] {\n    width: 720px;\n  }\n  .video-wrapper[_ngcontent-%COMP%]   .iframe-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    width: 720px;\n    height: 405px;\n  }\n}\n@media screen and (max-width: 720px) {\n  .video-wrapper[_ngcontent-%COMP%]   .iframe-wrapper[_ngcontent-%COMP%] {\n    width: 648px;\n  }\n  .video-wrapper[_ngcontent-%COMP%]   .iframe-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    width: 648px;\n    height: 364.5px;\n  }\n}\n@media screen and (max-width: 648px) {\n  .video-wrapper[_ngcontent-%COMP%]   .iframe-wrapper[_ngcontent-%COMP%] {\n    width: 576px;\n  }\n  .video-wrapper[_ngcontent-%COMP%]   .iframe-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    width: 576px;\n    height: 324px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .video-wrapper[_ngcontent-%COMP%]   .iframe-wrapper[_ngcontent-%COMP%] {\n    width: 432px;\n  }\n  .video-wrapper[_ngcontent-%COMP%]   .iframe-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    width: 432px;\n    height: 243px;\n  }\n}\n@media screen and (max-width: 432px) {\n  .video-wrapper[_ngcontent-%COMP%]   .iframe-wrapper[_ngcontent-%COMP%] {\n    width: 360px;\n  }\n  .video-wrapper[_ngcontent-%COMP%]   .iframe-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    width: 360px;\n    height: 202.5px;\n  }\n}\n@media screen and (max-width: 360px) {\n  .video-wrapper[_ngcontent-%COMP%]   .iframe-wrapper[_ngcontent-%COMP%] {\n    width: 270px;\n  }\n  .video-wrapper[_ngcontent-%COMP%]   .iframe-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    width: 270px;\n    height: 151.875px;\n  }\n}\n.video-wrapper[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  z-index: 1;\n}\n@media screen and (max-width: 960px) {\n  .video-wrapper[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n    padding-top: 20%;\n  }\n}\n@media screen and (max-width: 600px) {\n  .video-wrapper[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n    padding-top: 10%;\n  }\n}\n.video-wrapper[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 0.2rem;\n}\n.video-wrapper[_ngcontent-%COMP%]   button.back[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 50%;\n  left: 10%;\n  transform: translate(-50%, 50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tbGlzdC92aWRlby1kZXRhaWxzL3ZpZGVvLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQURSO0FBRVE7RUFKSjtJQUtRLDhCQUFBO0VBQ1Y7QUFDRjtBQUNJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtBQUNSO0FBQ1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ1o7QUFFUTtFQWJKO0lBY1EsYUFBQTtFQUNWO0VBQVU7SUFDSSxhQUFBO0lBQ0EsYUFBQTtFQUVkO0FBQ0Y7QUFBUTtFQXBCSjtJQXFCUSxZQUFBO0VBR1Y7RUFGVTtJQUNRLFlBQUE7SUFDQSxhQUFBO0VBSWxCO0FBQ0Y7QUFEUTtFQTVCSjtJQTZCUSxZQUFBO0VBSVY7RUFIVTtJQUNRLFlBQUE7SUFDQSxlQUFBO0VBS2xCO0FBQ0Y7QUFGUTtFQXBDSjtJQXFDUSxZQUFBO0VBS1Y7RUFKVTtJQUNZLFlBQUE7SUFDQSxhQUFBO0VBTXRCO0FBQ0Y7QUFKUTtFQTNDSjtJQTRDUSxZQUFBO0VBT1Y7RUFOVTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VBUWQ7QUFDRjtBQU5RO0VBbERKO0lBbURRLFlBQUE7RUFTVjtFQVJVO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUFVZDtBQUNGO0FBUlE7RUF6REo7SUEwRFEsWUFBQTtFQVdWO0VBVlU7SUFDSSxZQUFBO0lBQ0EsaUJBQUE7RUFZZDtBQUNGO0FBUEk7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQVNSO0FBUFE7RUFKSjtJQUtRLGdCQUFBO0VBVVY7QUFDRjtBQVJRO0VBUko7SUFTUSxnQkFBQTtFQVdWO0FBQ0Y7QUFWUTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQVlaO0FBUkk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtBQVVSIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8tbGlzdC92aWRlby1kZXRhaWxzL3ZpZGVvLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItMjogIzhjZmE2MDtcclxuXHJcbiAgICAudmlkZW8td3JhcHBlcntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTByZW0pO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1LjkyNXJlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAuaWZyYW1lLXdyYXBwZXJ7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDk2MHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHJcbiAgICAgICAgJiBpZnJhbWV7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NDBweDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE4MDBweCl7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNDQwcHg7XHJcbiAgICAgICAgICAgICYgaWZyYW1le1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0NDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogODEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpe1xyXG4gICAgICAgICAgICB3aWR0aDogNzIwcHg7XHJcbiAgICAgICAgICAgICYgaWZyYW1le1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjcyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpe1xyXG4gICAgICAgICAgICB3aWR0aDogNjQ4cHg7XHJcbiAgICAgICAgICAgICYgaWZyYW1le1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NDhweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2NC41cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDhweCl7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1NzZweDtcclxuICAgICAgICAgICAgJiBpZnJhbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1NzZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuICAgICAgICAgICAgd2lkdGg6IDQzMnB4O1xyXG4gICAgICAgICAgICAmIGlmcmFtZXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MzJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MzJweCl7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNjBweDtcclxuICAgICAgICAgICAgJiBpZnJhbWV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzYwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMi41cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KXtcclxuICAgICAgICAgICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgICAgICAgICAmIGlmcmFtZXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTUxLjg3NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZS13cmFwcGVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KXtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJiBoMXtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuMnJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uLmJhY2t7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video-details',
                templateUrl: './video-details.component.html',
                styleUrls: ['./video-details.component.scss']
            }]
    }], function () { return [{ type: src_app_vimeo_service__WEBPACK_IMPORTED_MODULE_2__["VimeoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }]; }, null); })();


/***/ }),

/***/ "huxW":
/*!***********************************!*\
  !*** ./src/app/vimeo-url.pipe.ts ***!
  \***********************************/
/*! exports provided: VimeoUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VimeoUrlPipe", function() { return VimeoUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class VimeoUrlPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(value, args) {
        let url = ('https://player.vimeo.com/video/' + value + '?app_id=122963&autoplay=1&autopause=0&playsinline=0');
        return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
VimeoUrlPipe.ɵfac = function VimeoUrlPipe_Factory(t) { return new (t || VimeoUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
VimeoUrlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "vimeoUrl", type: VimeoUrlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VimeoUrlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'vimeoUrl'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "izVM":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 40, vars: 0, consts: [[1, "desktop"], [1, "nav-main"], ["routerLink", "/films", "routerLinkActive", "active"], ["routerLink", "/about", "routerLinkActive", "active"], ["routerLink", "/bts", "routerLinkActive", "active"], ["routerLink", "/digital", "routerLinkActive", "active"], ["routerLink", "/contact", "routerLinkActive", "active"], [1, "nav-tri"], ["routerLink", "/reel", "routerLinkActive", "active"], [1, "nav-sec"], ["href", "https://shootme.pl/Andiamo", "target", "_blank"], ["href", "https://vimeo.com/andiamoworks", "target", "_blank"], ["href", "https://www.facebook.com/andiamoworks", "target", "_blank"], ["href", "https://www.instagram.com/andiamoworks", "target", "_blank"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "WORKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "BTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "DIGITAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "REEL 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "SHOOTME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "VIMEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "FACEBOOK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "INSTAGRAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".active[_ngcontent-%COMP%] {\n  background-color: #84fb54;\n  border-style: solid;\n  box-shadow: black 5px 5px;\n}\n\nnav[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  z-index: 10;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-decoration: none;\n  list-style-type: none;\n}\n\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n\nnav[_ngcontent-%COMP%]   .nav-main[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 96%;\n  position: fixed;\n  top: 0;\n  left: 2%;\n}\n\nnav[_ngcontent-%COMP%]   .nav-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\nnav[_ngcontent-%COMP%]   .nav-main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: 0.2s ease-out;\n}\n\nnav[_ngcontent-%COMP%]   .nav-sec[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 2%;\n  text-align: right;\n}\n\nnav[_ngcontent-%COMP%]   .nav-tri[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQUhNO0VBSU4sbUJBQUE7RUFDQSx5QkFBQTtBQURKOztBQUtJO0VBQ0ksV0FBQTtBQUZSOztBQUlJO0VBQ0ksVUFBQTtBQUZSOztBQUlJO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtBQUZSOztBQUlRO0VBQ0ksWUFBQTtBQUZaOztBQVFBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FBTEo7O0FBUUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFOUjs7QUFRSTtFQUNJLHlCQUFBO0FBTlI7O0FBVUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQVBKOztBQVVBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBUEoiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLTI6ICM4NGZiNTQ7XHJcblxyXG4uYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTI7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm94LXNoYWRvdzogYmxhY2sgNXB4IDVweDtcclxufVxyXG5cclxubmF2e1xyXG4gICAgJiAqe1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgfVxyXG4gICAgJiB1bHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgJiBsaXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgICAgICYgYXtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hdiAubmF2LW1haW57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMiU7XHJcbiAgICBcclxuXHJcbiAgICAmIHVse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gICAgJiBhe1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLW91dDtcclxuICAgIH1cclxufVxyXG5cclxubmF2IC5uYXYtc2Vje1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDIlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbm5hdiAubmF2LXRyaXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDIlO1xyXG4gICAgXHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "k5rY":
/*!**********************************!*\
  !*** ./src/app/vimeo.service.ts ***!
  \**********************************/
/*! exports provided: VimeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VimeoService", function() { return VimeoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class VimeoService {
    constructor(http) {
        this.http = http;
    }
    getVideos(user) {
        // return this.http.get('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/'+user);
        return this.http.get('https://vimeo.com/api/v2/' + user + '/videos.json');
    }
    getVideo(id) {
        return this.http.get('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/' + id);
        // return this.http.get('https://vimeo.com/api/v2/video/'+id+'.json');
    }
}
VimeoService.ɵfac = function VimeoService_Factory(t) { return new (t || VimeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
VimeoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VimeoService, factory: VimeoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VimeoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "l8dz":
/*!*****************************************************************!*\
  !*** ./src/app/video-list/video-cover/video-cover.component.ts ***!
  \*****************************************************************/
/*! exports provided: VideoCoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCoverComponent", function() { return VideoCoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");




const _c0 = function (a1) { return ["/video", a1]; };
class VideoCoverComponent {
    constructor() {
        this.logo = 'assets/alt.svg';
    }
    getName(videoTitle) {
        return videoTitle.split(' | ')[0].toUpperCase();
    }
    getRest(videoTitle) {
        let title = this.getName(videoTitle);
        let rest = videoTitle.substr(title.length + 2).split(' | ');
        if (rest.length > 1) {
            rest.pop();
        }
        return rest.join(' | ').toUpperCase();
    }
    getNameRest(videoTitle) {
        let name = this.getName(videoTitle);
        let rest = this.getRest(videoTitle);
        if (rest) {
            return name.concat(' |' + rest);
        }
        else {
            return name;
        }
    }
}
VideoCoverComponent.ɵfac = function VideoCoverComponent_Factory(t) { return new (t || VideoCoverComponent)(); };
VideoCoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoCoverComponent, selectors: [["app-video-cover"]], inputs: { video: "video" }, decls: 9, vars: 9, consts: [["onclick", "", 1, "grid__item"], [1, "name"], [3, "routerLink"], [3, "lazyLoad", "defaultImage", "alt"], [1, "name-rest"], [1, "rest"]], template: function VideoCoverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getName(ctx.video.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.video.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.getName(ctx.video.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lazyLoad", ctx.video.thumbnail_large)("defaultImage", ctx.logo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getNameRest(ctx.video.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getRest(ctx.video.title), " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__["LazyLoadImageDirective"]], styles: [".grid__item[_ngcontent-%COMP%] {\n  max-width: 34.5rem;\n  margin: 0 auto 0.8rem auto;\n}\n.grid__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.grid__item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  display: block;\n  visibility: visible;\n  opacity: 100%;\n}\n@media screen and (max-width: 900px) {\n  .grid__item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n    opacity: 0;\n  }\n}\n.grid__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 80%;\n  top: 50%;\n  transition: 0.2s ease-out;\n  display: none;\n  visibility: hidden;\n  opacity: 0%;\n  width: calc((100% - 34.5rem) / 2);\n  text-align: center;\n}\n@media screen and (max-width: 900px) {\n  .grid__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n.name[_ngcontent-%COMP%] {\n  left: 0;\n}\n.rest[_ngcontent-%COMP%] {\n  right: 0;\n}\nlabel.name-rest[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n  opacity: 0;\n  padding: 0;\n  text-align: center;\n  margin-top: 0;\n  width: 120%;\n  margin-left: -10%;\n}\n@media screen and (max-width: 900px) {\n  label.name-rest[_ngcontent-%COMP%] {\n    visibility: visible;\n    display: block;\n    opacity: 100%;\n  }\n}\n@media screen and (max-width: 600px) {\n  label.name-rest[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-left: 0%;\n    padding: 0 5%;\n    font-size: 1rem;\n    letter-spacing: 0.1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tbGlzdC92aWRlby1jb3Zlci92aWRlby1jb3Zlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7QUFDSjtBQUNJO0VBQ0ksV0FBQTtBQUNSO0FBRUk7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQVI7QUFDUTtFQUpKO0lBS1EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtFQUVWO0FBQ0Y7QUFDSTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUFRO0VBVko7SUFXUSxhQUFBO0lBQ0Esa0JBQUE7RUFHVjtBQUNGO0FBQ0E7RUFDSSxPQUFBO0FBRUo7QUFDQTtFQUNJLFFBQUE7QUFFSjtBQUNBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUFJO0VBVko7SUFXUSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxhQUFBO0VBR047QUFDRjtBQUZJO0VBZko7SUFnQlEsVUFBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUNBLHNCQUFBO0VBS047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWxpc3QvdmlkZW8tY292ZXIvdmlkZW8tY292ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZF9faXRlbXtcclxuICAgIG1heC13aWR0aDogMzQuNXJlbTtcclxuICAgIG1hcmdpbjogMCBhdXRvIC44cmVtIGF1dG87XHJcblxyXG4gICAgJiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciBzcGFue1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiBzcGFue1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLW91dDtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBvcGFjaXR5OiAwJTtcclxuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtIDM0LjVyZW0pIC8gMik7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm5hbWV7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4ucmVzdHtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG5sYWJlbC5uYW1lLXJlc3R7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEyMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwJTtcclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpe1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDUlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcblxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoCoverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video-cover',
                templateUrl: './video-cover.component.html',
                styleUrls: ['./video-cover.component.scss']
            }]
    }], function () { return []; }, { video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "oTG5":
/*!****************************************************!*\
  !*** ./src/app/pages/digital/digital.component.ts ***!
  \****************************************************/
/*! exports provided: DigitalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalComponent", function() { return DigitalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../video-list/video-list.component */ "WNIZ");





class DigitalComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.arrowIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowDown"];
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#8cfa60';
        let menu = Array.from(document.getElementsByClassName("mat-drawer"))[0];
        menu.style.backgroundColor = "#8cfa60";
    }
    scrollToElement($element) {
        $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    ngOnDestroy() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fafff6';
        let menu = Array.from(document.getElementsByClassName("mat-drawer"))[0];
        menu.style.backgroundColor = "#fafff6";
    }
}
DigitalComponent.ɵfac = function DigitalComponent_Factory(t) { return new (t || DigitalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DigitalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DigitalComponent, selectors: [["app-digital"]], decls: 8, vars: 1, consts: [[1, "board"], [3, "click"], [3, "icon"], ["list", ""], ["user", "andiamodigital"]], template: function DigitalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ANDIAMO WENT DIGITAL AS A PRODUCTION COMPANY WORKING WITH A RANGE OF CLIENTS WITHIN COMMERCIAL AND CULTURAL SECTOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DigitalComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.scrollToElement(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-video-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.arrowIcon);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"], _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_3__["VideoListComponent"]], styles: [".board[_ngcontent-%COMP%] {\n  height: calc(100vh - 180px);\n  width: 67%;\n  margin: 0 auto;\n  position: relative;\n}\n@media screen and (max-width: 900px) {\n  .board[_ngcontent-%COMP%] {\n    width: 87%;\n  }\n}\n@media screen and (max-width: 600px) {\n  .board[_ngcontent-%COMP%] {\n    height: calc(100vh - 5.925rem);\n  }\n}\n.board[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -75%);\n  font-size: 2.2rem;\n  letter-spacing: 0.21rem;\n  line-height: 2.5rem;\n  word-spacing: 0.26rem;\n}\n@media screen and (max-width: 900px) {\n  .board[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    letter-spacing: 0.11rem;\n    line-height: 2.1rem;\n    word-spacing: 0.19rem;\n  }\n}\n@media screen and (max-width: 600px) {\n  .board[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n    letter-spacing: 0.15rem;\n    line-height: 1.5rem;\n    word-spacing: 0.17rem;\n  }\n}\n.board[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 1.3rem;\n}\n@media screen and (max-width: 900px) {\n  .board[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n.board[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGlnaXRhbC9kaWdpdGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksMkJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREo7QUFFSTtFQUxKO0lBTVEsVUFBQTtFQUNOO0FBQ0Y7QUFBSTtFQVJKO0lBU1EsOEJBQUE7RUFHTjtBQUNGO0FBREk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFFUjtBQUFRO0VBWko7SUFhUSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0VBR1Y7QUFDRjtBQUZRO0VBbEJKO0lBbUJRLGlCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0VBS1Y7QUFDRjtBQURJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFHUjtBQUZRO0VBTko7SUFRSSxhQUFBO0lBQ0Esa0JBQUE7RUFJTjtBQUNGO0FBRFE7RUFDSSxhQUFBO0FBR1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kaWdpdGFsL2RpZ2l0YWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItMjogIzhjZmE2MDtcclxuXHJcbi5ib2FyZHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE4MHB4KTtcclxuICAgIHdpZHRoOiA2NyU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgICAgICB3aWR0aDogODclO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUuOTI1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmIGgxe1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6NTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNzUlKTtcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4yMXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xyXG4gICAgICAgIHdvcmQtc3BhY2luZzogLjI2cmVtO1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4xMXJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuMXJlbTtcclxuICAgICAgICAgICAgd29yZC1zcGFjaW5nOiAuMTlyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMTVyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgICAgIHdvcmQtc3BhY2luZzogLjE3cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgJiBidXR0b257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTAwcHgpe1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmZvY3Vze1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DigitalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-digital',
                templateUrl: './digital.component.html',
                styleUrls: ['./digital.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "rPba":
/*!**********************************************!*\
  !*** ./src/app/pages/reel/reel.component.ts ***!
  \**********************************************/
/*! exports provided: ReelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReelComponent", function() { return ReelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ReelComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReelComponent.ɵfac = function ReelComponent_Factory(t) { return new (t || ReelComponent)(); };
ReelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReelComponent, selectors: [["app-reel"]], decls: 3, vars: 0, consts: [[1, "board"]], template: function ReelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "REEL 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".board[_ngcontent-%COMP%] {\n  height: calc(100vh - 10rem);\n}\n@media screen and (max-width: 600px) {\n  .board[_ngcontent-%COMP%] {\n    height: calc(100vh - 5.925rem);\n  }\n}\np[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVlbC9yZWVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUFDSjtBQUFRO0VBRlI7SUFHWSw4QkFBQTtFQUdWO0FBQ0Y7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUlKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVlbC9yZWVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvYXJke1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTByZW0pO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1LjkyNXJlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5we1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reel',
                templateUrl: './reel.component.html',
                styleUrls: ['./reel.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rVrE":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/screen.service */ "50a8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");





function AboutComponent_div_35_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("push push-", photo_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "ANDIAMO photo", photo_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lazyLoad", ctx_r3.bigURL + photo_r4 + ".jpg");
} }
function AboutComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AboutComponent_div_35_div_2_Template, 3, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.photos);
} }
function AboutComponent_ng_template_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("push push-", photo_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "ANDIAMO photo", photo_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lazyLoad", ctx_r5.smallURL + photo_r6 + ".jpg");
} }
function AboutComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AboutComponent_ng_template_36_div_1_Template, 3, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.photos);
} }
class AboutComponent {
    constructor(elementRef, screen) {
        this.elementRef = elementRef;
        this.screen = screen;
        this.photos = [];
        this.smallURL = 'assets/about/small';
        this.bigURL = 'assets/about/big/compiled/';
    }
    ngOnInit() {
        this.screen.getScreenSize();
        for (let i = 1; i < 12; i++) {
            let newPhoto = i;
            this.photos.push(newPhoto);
        }
        ;
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#000';
        let nav = Array.from(document.getElementsByTagName("a"));
        for (let i = 0; i < nav.length; i++) {
            nav[i].style.color = "#fafff6";
        }
        let shadow = Array.from(document.getElementsByClassName("active"))[0];
        shadow.style.boxShadow = "5px 5px #fafff6";
        let menu = Array.from(document.getElementsByClassName("mat-drawer"))[0];
        menu.style.backgroundColor = "#000";
    }
    ngOnDestroy() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fafff6';
        let nav = Array.from(document.getElementsByTagName("a"));
        for (let i = 0; i < nav.length; i++) {
            nav[i].style.color = "#000";
        }
        let shadow = Array.from(document.getElementsByClassName("active"))[0];
        shadow.style.boxShadow = "none";
        let menu = Array.from(document.getElementsByClassName("mat-drawer"))[0];
        menu.style.backgroundColor = "#fafff6";
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_screen_service__WEBPACK_IMPORTED_MODULE_1__["ScreenService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 38, vars: 2, consts: [[1, "screen"], [1, "awards"], [4, "ngIf", "ngIfElse"], ["smallScreen", ""], [1, "gallery"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [3, "lazyLoad", "alt"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " ANDIAMO is a directors duo consisting of Mat\u00A0Erdmann and Michal\u00A0Wieckowski based in WARSAW, Poland. We are juggling with the FORM, not shaping our works in any permanently. In love with creating RAW and GLARING worlds since always. Because being in BETWEEN doesn\u2019t mean being NOWHERE, huh\u00A0? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " We found JOY in mixing documentary and feature for such brands as: ADIDAS, SAMSUNG, PUMA, TYSKIE, BALLANTINE\u2019S, WYBOROWA and VOGUE and such top polish artists as: PRO8L3M, BRODKA, PEZET, JJ\u00A0ORLI\u0143SKI, KR\u00D3L, SOK\u00D3\u0141 and KAYAH. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "PRESS & AWARDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pezet \u201ENisko jest Niebo\u201D VIDEOCLIP ITALIA 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pezet \u201ENisko jest Niebo\u201D Cinematographers Award 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pezet \u201ENisko jest Niebo\u201D DIRECTORS LIBRARY January 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Pezet \u201ENisko jest Niebo\u201D Best Music Video CULTURE.PL 3rd Place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "JJ Orli\u0144ski \u201EVoi che udite il mid lamento\u201D Best Music Video CULTURE.PL 7th Place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "JJ Orli\u0144ski \u201EVoi che udite\u201D Best Music Video Extra 2020 PMVA 2020 Nomination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Pezet \u201ENisko jest Niebo\u201D Best Music Video Rap PMVA 2020 Nomination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Adidas \u201EAmp Futbol\u201D Branded Content - KTR 2020 Nomination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Adidas \u201EAmp Futbol\u201D Best Sport Video - SPORT MARKETING 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "G\u0142osem Zwierz\u0105t \u201EPokochaj\u201D Best Social Campaign KREATURA 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u201ELe\u015Bne\u201D - Millenium DOCS AGAINST GRAVITY Special Screening 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u201EInner Voice\u201D MOSCOW SHORTS - Best Cinematography 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u201EInner Voice\u201D TOFIFEST Special Screening 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AboutComponent_div_35_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AboutComponent_ng_template_36_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screen.isBigScreen)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImageDirective"]], styles: ["@charset \"UTF-8\";\n.screen[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 100;\n  height: calc(100vh - 180px);\n  color: #fafff6;\n  mix-blend-mode: difference;\n}\n@media screen and (max-width: 600px) {\n  .screen[_ngcontent-%COMP%] {\n    position: relative;\n    height: unset;\n  }\n}\np[_ngcontent-%COMP%] {\n  padding: 0 22%;\n  font-size: 1.4rem;\n  letter-spacing: 0.15rem;\n  line-height: 1.7rem;\n  word-spacing: 0.1rem;\n  text-align: justify;\n}\np[_ngcontent-%COMP%]:first-child {\n  padding-top: 2%;\n}\n@media screen and (max-width: 900px) {\n  p[_ngcontent-%COMP%] {\n    padding: 0 18%;\n    font-size: 1.2rem;\n    letter-spacing: 0.12rem;\n    line-height: 1.4rem;\n    word-spacing: 0.06rem;\n  }\n  p[_ngcontent-%COMP%]:first-child {\n    padding-top: 18%;\n  }\n  p[_ngcontent-%COMP%]:nth-of-type(2) {\n    padding-bottom: 6%;\n  }\n}\n@media screen and (max-width: 600px) {\n  p[_ngcontent-%COMP%] {\n    padding: 0 10%;\n    font-size: 1.1rem;\n    letter-spacing: 0.1rem;\n    line-height: 1.4rem;\n    word-spacing: 0.05rem;\n  }\n  p[_ngcontent-%COMP%]:first-child {\n    padding-top: 8%;\n  }\n}\n@media screen and (min-width: 1600px) {\n  p[_ngcontent-%COMP%] {\n    padding: 0 24%;\n    font-size: 2rem;\n    letter-spacing: 0.25rem;\n    line-height: 2.4rem;\n    word-spacing: 0.25rem;\n    text-align: justify;\n  }\n  p[_ngcontent-%COMP%]:first-child {\n    padding-top: 5%;\n  }\n}\n.awards[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n}\n@media screen and (max-width: 600px) {\n  .awards[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\nh1[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  list-style: none;\n  font-size: 1rem;\n  padding: 0 1%;\n  letter-spacing: 0.16rem;\n  text-align: justify;\n}\n@media screen and (max-width: 900px) {\n  h1[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    letter-spacing: 0.1rem;\n    word-spacing: 0.05rem;\n  }\n}\n@media screen and (max-width: 600px) {\n  h1[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    padding: 0 4%;\n    letter-spacing: 0.1rem;\n    word-spacing: 0.16rem;\n    text-align: left;\n  }\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  padding-right: 0.5rem;\n  padding-bottom: 0.2rem;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"\u25AA \";\n  color: #84fb54;\n}\n@media screen and (max-width: 600px) {\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: list-item;\n  }\n}\n.gallery[_ngcontent-%COMP%] {\n  padding-top: 25%;\n  position: relative;\n}\n@media screen and (max-width: 900px) {\n  .gallery[_ngcontent-%COMP%] {\n    padding-top: 15%;\n  }\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10%;\n}\n@media screen and (max-width: 900px) {\n  .gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    margin-bottom: 20%;\n  }\n}\n@media screen and (max-width: 600px) {\n  .gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    margin-bottom: -2%;\n  }\n}\n@media screen and (max-width: 600px) {\n  .gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .push[_ngcontent-%COMP%] {\n    margin: 0 !important;\n  }\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .push-1[_ngcontent-%COMP%] {\n  margin-left: 70%;\n  margin-right: 2%;\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .push-2[_ngcontent-%COMP%] {\n  margin-left: 2%;\n  margin-right: 60%;\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .push-3[_ngcontent-%COMP%] {\n  margin-left: 70%;\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .push-4[_ngcontent-%COMP%] {\n  margin: 0 33.3%;\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .push-5[_ngcontent-%COMP%] {\n  margin-left: 70%;\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .push-6[_ngcontent-%COMP%] {\n  margin-left: 0%;\n  margin-right: 70%;\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .push-7[_ngcontent-%COMP%] {\n  margin-left: 70%;\n  margin-right: 4%;\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .push-8[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  margin-right: 60%;\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .push-9[_ngcontent-%COMP%] {\n  margin-left: 70%;\n  margin-right: 5%;\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .push-10[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  margin-right: 60%;\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .push-11[_ngcontent-%COMP%] {\n  margin-bottom: -8rem;\n}\n.gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGNBTEk7RUFNSiwwQkFBQTtBQUFKO0FBQ0k7RUFOSjtJQU9JLGtCQUFBO0lBQ0EsYUFBQTtFQUVGO0FBQ0Y7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUNJO0VBWEo7SUFZUSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7RUFFTjtFQURNO0lBQ0ksZ0JBQUE7RUFHVjtFQUFNO0lBQ0ksa0JBQUE7RUFFVjtBQUNGO0FBQUk7RUF6Qko7SUEwQlEsY0FBQTtJQUNBLGlCQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0VBR047RUFGTTtJQUNJLGVBQUE7RUFJVjtBQUNGO0FBRkk7RUFuQ0o7SUFvQ1EsY0FBQTtJQUNBLGVBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQUtOO0VBSk07SUFDSSxlQUFBO0VBTVY7QUFDRjtBQUZBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FBS0o7QUFKSTtFQUhKO0lBSVEsa0JBQUE7RUFPTjtBQUNGO0FBSkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU9KO0FBTkk7RUFOSjtJQU9RLGlCQUFBO0lBQ0Esc0JBQUE7SUFDQSxxQkFBQTtFQVNOO0FBQ0Y7QUFQSTtFQVpKO0lBYVEsaUJBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0VBVU47QUFDRjtBQUpJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFPUjtBQUxRO0VBQ0ksYUFBQTtFQUNBLGNBdEdGO0FBNkdWO0FBSlE7RUFWSjtJQVdRLGtCQUFBO0VBT1Y7QUFDRjtBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUtKO0FBSkk7RUFISjtJQUlRLGdCQUFBO0VBT047QUFDRjtBQUxJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBT1I7QUFOUTtFQUhKO0lBSVEsa0JBQUE7RUFTVjtBQUNGO0FBUlE7RUFOSjtJQU9RLGtCQUFBO0VBV1Y7QUFDRjtBQVJZO0VBREo7SUFFSSxvQkFBQTtFQVdWO0FBQ0Y7QUFUWTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFXaEI7QUFUWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQVdoQjtBQVRZO0VBQ0ksZ0JBQUE7QUFXaEI7QUFSWTtFQUNJLGVBQUE7QUFVaEI7QUFSWTtFQUNJLGdCQUFBO0FBVWhCO0FBUlk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFVaEI7QUFQWTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFTaEI7QUFOWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQVFoQjtBQU5ZO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQVFoQjtBQU5ZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBUWhCO0FBTlk7RUFDSSxvQkFBQTtBQVFoQjtBQUpRO0VBQ0ksV0FBQTtBQU1aIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uc2NyZWVuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDA7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE4MHB4KTtcbiAgY29sb3I6ICNmYWZmZjY7XG4gIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnNjcmVlbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogdW5zZXQ7XG4gIH1cbn1cblxucCB7XG4gIHBhZGRpbmc6IDAgMjIlO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjdyZW07XG4gIHdvcmQtc3BhY2luZzogMC4xcmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxucDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAyJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIHAge1xuICAgIHBhZGRpbmc6IDAgMTglO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjEycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XG4gICAgd29yZC1zcGFjaW5nOiAwLjA2cmVtO1xuICB9XG4gIHA6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctdG9wOiAxOCU7XG4gIH1cbiAgcDpudGgtb2YtdHlwZSgyKSB7XG4gICAgcGFkZGluZy1ib3R0b206IDYlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBwIHtcbiAgICBwYWRkaW5nOiAwIDEwJTtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XG4gICAgd29yZC1zcGFjaW5nOiAwLjA1cmVtO1xuICB9XG4gIHA6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctdG9wOiA4JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIHAge1xuICAgIHBhZGRpbmc6IDAgMjQlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMi40cmVtO1xuICAgIHdvcmQtc3BhY2luZzogMC4yNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG4gIHA6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgfVxufVxuXG4uYXdhcmRzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYXdhcmRzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuaDEsIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAwIDElO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNnJlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIGgxLCB1bCB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgICB3b3JkLXNwYWNpbmc6IDAuMDVyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGgxLCB1bCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgcGFkZGluZzogMCA0JTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICAgIHdvcmQtc3BhY2luZzogMC4xNnJlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG59XG5cbnVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XG59XG51bCBsaTpiZWZvcmUge1xuICBjb250ZW50OiBcIuKWqiBcIjtcbiAgY29sb3I6ICM4NGZiNTQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICB1bCBsaSB7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICB9XG59XG5cbi5nYWxsZXJ5IHtcbiAgcGFkZGluZy10b3A6IDI1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmdhbGxlcnkge1xuICAgIHBhZGRpbmctdG9wOiAxNSU7XG4gIH1cbn1cbi5nYWxsZXJ5IC5yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmdhbGxlcnkgLnJvdyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZ2FsbGVyeSAucm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMiU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5nYWxsZXJ5IC5yb3cgLnB1c2gge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG59XG4uZ2FsbGVyeSAucm93IC5wdXNoLTEge1xuICBtYXJnaW4tbGVmdDogNzAlO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xufVxuLmdhbGxlcnkgLnJvdyAucHVzaC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW4tcmlnaHQ6IDYwJTtcbn1cbi5nYWxsZXJ5IC5yb3cgLnB1c2gtMyB7XG4gIG1hcmdpbi1sZWZ0OiA3MCU7XG59XG4uZ2FsbGVyeSAucm93IC5wdXNoLTQge1xuICBtYXJnaW46IDAgMzMuMyU7XG59XG4uZ2FsbGVyeSAucm93IC5wdXNoLTUge1xuICBtYXJnaW4tbGVmdDogNzAlO1xufVxuLmdhbGxlcnkgLnJvdyAucHVzaC02IHtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xuICBtYXJnaW4tcmlnaHQ6IDcwJTtcbn1cbi5nYWxsZXJ5IC5yb3cgLnB1c2gtNyB7XG4gIG1hcmdpbi1sZWZ0OiA3MCU7XG4gIG1hcmdpbi1yaWdodDogNCU7XG59XG4uZ2FsbGVyeSAucm93IC5wdXNoLTgge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNjAlO1xufVxuLmdhbGxlcnkgLnJvdyAucHVzaC05IHtcbiAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cbi5nYWxsZXJ5IC5yb3cgLnB1c2gtMTAge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNjAlO1xufVxuLmdhbGxlcnkgLnJvdyAucHVzaC0xMSB7XG4gIG1hcmdpbi1ib3R0b206IC04cmVtO1xufVxuLmdhbGxlcnkgLnJvdyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: src_app_screen_service__WEBPACK_IMPORTED_MODULE_1__["ScreenService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _pages_bts_bts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/bts/bts.component */ "xOoz");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact/contact.component */ "XEn3");
/* harmony import */ var _pages_digital_digital_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/digital/digital.component */ "oTG5");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/main/main.component */ "/s1f");
/* harmony import */ var _pages_reel_reel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/reel/reel.component */ "rPba");
/* harmony import */ var _video_list_video_details_video_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./video-list/video-details/video-details.component */ "an4w");











const routes = [
    { path: '', redirectTo: '/films', pathMatch: 'full' },
    { path: 'films', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"] },
    { path: 'video/:id', component: _video_list_video_details_video_details_component__WEBPACK_IMPORTED_MODULE_8__["VideoDetailsComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'reel', component: _pages_reel_reel_component__WEBPACK_IMPORTED_MODULE_7__["ReelComponent"] },
    { path: 'digital', component: _pages_digital_digital_component__WEBPACK_IMPORTED_MODULE_5__["DigitalComponent"] },
    { path: 'bts', component: _pages_bts_bts_component__WEBPACK_IMPORTED_MODULE_3__["BtsComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: '**', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xOoz":
/*!********************************************!*\
  !*** ./src/app/pages/bts/bts.component.ts ***!
  \********************************************/
/*! exports provided: BtsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtsComponent", function() { return BtsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/screen.service */ "50a8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-lazyload-image */ "wf0l");





function BtsComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "BTS photo", photo_r4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.bigURL + photo_r4 + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BtsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BtsComponent_div_0_div_2_Template, 2, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.photos);
} }
function BtsComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "BTS photo", photo_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lazyLoad", ctx_r5.smallURL + photo_r6 + ".jpg");
} }
function BtsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BtsComponent_ng_template_1_div_1_Template, 2, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.photos);
} }
class BtsComponent {
    constructor(screen) {
        this.screen = screen;
        // numbers: number[] = Array(121).fill(1).map((x, i) => i + 1);
        this.photos = [];
        this.smallURL = 'assets/bts/smallbts';
        this.bigURL = 'assets/bts/big/compiled/bts';
    }
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    ngOnInit() {
        this.screen.getScreenSize();
        for (let i = 1; i < 121; i++) {
            let newPhoto = i;
            this.photos.push(newPhoto);
        }
        ;
        // this.photos = Array(121).fill(1).map((x, i) => i + 1);
        let photosMix = this.shuffleArray(this.photos);
        this.photos = photosMix;
    }
    ngAfterViewInit() {
        let logo = document.getElementById("logotype-wrapper");
        logo.style.bottom = "50%";
        logo.style.left = "calc(50% + 4.725rem)";
        if (this.screen.scrWidth < 405) {
            logo.style.left = "calc(50% + 3.225rem)";
        }
        logo.style.transform = "translate(-50%, 50%)";
        let allora = document.getElementById("allora");
        allora.style.display = "block";
        let question = document.getElementById("question-mark");
        question.style.display = "block";
        // let logo = document.getElementsByTagName("h1")[0];
        // logo.style.display="block";
        // logo.style.visibility="visible";
    }
    ngOnDestroy() {
        let logo = document.getElementById("logotype-wrapper");
        logo.style.bottom = "-1rem";
        logo.style.left = "50%";
        logo.style.transform = "translate(-50%, 0%)";
        let allora = document.getElementById("allora");
        allora.style.display = "none";
        let question = document.getElementById("question-mark");
        question.style.display = "none";
    }
}
BtsComponent.ɵfac = function BtsComponent_Factory(t) { return new (t || BtsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_screen_service__WEBPACK_IMPORTED_MODULE_1__["ScreenService"])); };
BtsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BtsComponent, selectors: [["app-bts"]], decls: 5, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["smallScreen", ""], [1, "masonry-with-columns"], ["class", "masonry", 4, "ngFor", "ngForOf"], [1, "masonry"], [3, "src", "alt"], [3, "lazyLoad", "alt"]], template: function BtsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BtsComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BtsComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Allora, ANDIAMO ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screen.isBigScreen)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImageDirective"]], styles: [".masonry-with-columns[_ngcontent-%COMP%] {\n  margin-top: -7%;\n  columns: 3 300px;\n  column-gap: 0;\n  column-span: none;\n  column-fill: balance;\n}\n.masonry-with-columns[_ngcontent-%COMP%]   div.masonry[_ngcontent-%COMP%] {\n  width: 100px;\n  background: black;\n  margin: 0;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n.masonry-with-columns[_ngcontent-%COMP%]   div.masonry[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  vertical-align: bottom;\n}\nh1[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  text-align: center;\n  text-transform: uppercase;\n  color: #8cfa60;\n}\n@media screen and (min-width: 600px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnRzL2J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBRko7QUFHSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRE47QUFHTTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtBQURWO0FBTUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FsQ007QUErQlY7QUFJSTtFQVhGO0lBWUksZUFBQTtFQURKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9idHMvYnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLTI6ICM4Y2ZhNjA7XHJcblxyXG5cclxuLm1hc29ucnktd2l0aC1jb2x1bW5zIHtcclxuICAgIG1hcmdpbi10b3A6IC03JTtcclxuICAgIGNvbHVtbnM6IDMgMzAwcHg7XHJcbiAgICBjb2x1bW4tZ2FwOiAwO1xyXG4gICAgY29sdW1uLXNwYW46IG5vbmU7XHJcbiAgICBjb2x1bW4tZmlsbDogYmFsYW5jZTtcclxuICAgICYgZGl2Lm1hc29ucnkge1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICYgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgIH1cclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICBoMXsgXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogJGNvbG9yLTI7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjYwMHB4KXtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BtsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bts',
                templateUrl: './bts.component.html',
                styleUrls: ['./bts.component.scss']
            }]
    }], function () { return [{ type: src_app_screen_service__WEBPACK_IMPORTED_MODULE_1__["ScreenService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map