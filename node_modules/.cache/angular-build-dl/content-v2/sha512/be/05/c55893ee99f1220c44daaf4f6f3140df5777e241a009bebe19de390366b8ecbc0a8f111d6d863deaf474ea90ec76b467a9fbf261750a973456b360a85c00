(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-map-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Map</ion-title>\n    <ion-title>{{show}}</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content> -->\n  <!-- <div id =\"map_canvas\" class = \"map_canvas\"> -->\n    <!-- <ion-button (click)=\"openHome()\">Back to home page</ion-button> -->\n  <!-- </div> -->\n \n<!-- </ion-content> -->\n<!-- <div id = \"map_canvas\" class = \"map_canvas\">\n  <button (click)=\"openStart()\">Back to Home Page</button>\n</div> -->\n\n<h1>{{address}}</h1>\n<h1>{{latitude}}</h1>\n<h1>{{longitude}}</h1>\n<p>{{show}}</p>\n\n<div id=\"dvMap\" style=\"width: 100vw; height:100vh\"></div>\n\n<button (click)=\"delete()\" class=\"btn btn-primary delete\">deleteMarker</button>\n\n<button (click)=\"currentLocation()\" class=\"btn btn-primary delete\">Current location</button>\n\n\n");

/***/ }),

/***/ "./src/app/map/map-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/map/map-routing.module.ts ***!
  \*******************************************/
/*! exports provided: MapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function() { return MapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.page */ "./src/app/map/map.page.ts");




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MapPageRoutingModule);



/***/ }),

/***/ "./src/app/map/map.module.ts":
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/*! exports provided: MapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-routing.module */ "./src/app/map/map-routing.module.ts");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.page */ "./src/app/map/map.page.ts");







let MapPageModule = class MapPageModule {
};
MapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"]
        ],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
    })
], MapPageModule);



/***/ }),

/***/ "./src/app/map/map.page.scss":
/*!***********************************!*\
  !*** ./src/app/map/map.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map_canvas {\n  height: 100%;\n}\n\n.gm-style {\n  background-color: red !important;\n}\n\nfooter {\n  top: 40% !important;\n  left: -10%;\n  z-index: 1 !important;\n  position: inherit !important;\n}\n\ndiv {\n  top: -16%;\n  left: 0;\n  z-index: -99 !important;\n  position: absolute !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaHlhaW5ub3ZhdGlvbnMvRGVza3RvcC9nbWFwLWdhbmVzaC9zcmMvYXBwL21hcC9tYXAucGFnZS5zY3NzIiwic3JjL2FwcC9tYXAvbWFwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFRTtFQUNFLGdDQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FER0U7RUFDRSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcF9jYW52YXN7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmdtLXN0eWxle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgZm9vdGVye1xuICAgIHRvcDo0MCUgIWltcG9ydGFudDtcbiAgICBsZWZ0OiAtMTAlO1xuICAgIHotaW5kZXg6IDEgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgXG4gIH1cblxuICBkaXZ7XG4gICAgdG9wOi0xNiU7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtOTkgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgfVxuIiwiI21hcF9jYW52YXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5nbS1zdHlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG5mb290ZXIge1xuICB0b3A6IDQwJSAhaW1wb3J0YW50O1xuICBsZWZ0OiAtMTAlO1xuICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbmRpdiB7XG4gIHRvcDogLTE2JTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTk5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/map/map.page.ts":
/*!*********************************!*\
  !*** ./src/app/map/map.page.ts ***!
  \*********************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");







let MapPage = class MapPage {
    constructor(geolocation, nativeGeocoder, loadingCtrl, platform, router) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.router = router;
        //Geocoder configuration
        this.geoencoderOptions = {
            useLocale: true,
            maxResults: 5
        };
        this.latitude = 11.016844;
        this.longitude = 76.955833;
    }
    ngOnInit() {
        this.mapLoding();
    }
    mapLoding() {
        var mapOptions = {
            center: new google.maps.LatLng(this.latitude, this.longitude),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);
        google.maps.event.addListener(map, 'click', function (e) {
            // console.log("Latitude: " + e.latLng.lat() + "\r\nLongitude: " + e.latLng.lng());
            this.show = (e.latLng.lat());
            console.log(this.show);
            this.address = new Object(e).toString();
            // "[object Object]"
            this.address = (e);
            alert(this.address);
            this.latitude = (e.latLng.lat());
            this.longitude = (e.latLng.lng());
            google.maps.event.addListener(map, 'click', function (event) {
                addMarker(event.latLng);
            });
            // add marker to positon
            function addMarker(location) {
                var marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    title: 'hello world'
                });
                // google.maps.event.addListenerOnce(marker, 'click', function (event) {
                //   this.setMap(null);
                // });
            }
            console.log(this.latitude, this.longitude);
        });
    }
    delete() {
        this.ngOnInit();
    }
    //Get current coordinates of device
    currentLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            alert(resp);
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            this.accuracy = resp.coords.accuracy;
            this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);
        }).catch((error) => {
            alert('Error getting location' + JSON.stringify(error));
        });
    }
    //geocoder method to fetch address from coordinates passed as arguments
    getGeoencoder(latitude, longitude) {
        this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
            .then((result) => {
            this.address = this.generateAddress(result[0]);
            console.log(this.address);
        })
            .catch((error) => {
            alert('Error getting location' + JSON.stringify(error));
        });
    }
    //Return Comma saperated address
    generateAddress(addressObj) {
        let obj = [];
        let address = "";
        for (let key in addressObj) {
            obj.push(addressObj[key]);
        }
        obj.reverse();
        for (let val in obj) {
            if (obj[val].length)
                address += obj[val] + ', ';
        }
        return address.slice(0, -2);
    }
};
MapPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.page.scss */ "./src/app/map/map.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
        _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], MapPage);



/***/ })

}]);
//# sourceMappingURL=map-map-module-es2015.js.map