(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgetpass/forgetpass.component */ 5063);
/* harmony import */ var _forgetotp_forgetotp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgetotp/forgetotp.component */ 3835);
/* harmony import */ var _forgetreset_forgetreset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgetreset/forgetreset.component */ 8735);
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ 2481);
/* harmony import */ var _celebrity_onboarding_celebrity_onboarding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./celebrity-onboarding/celebrity-onboarding.component */ 4816);
/* harmony import */ var _celebrity_videos_celebrity_videos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./celebrity-videos/celebrity-videos.component */ 9193);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7528);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _invitefriends_invitefriends_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./invitefriends/invitefriends.component */ 411);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./change-password/change-password.component */ 4250);
/* harmony import */ var _bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bank-details/bank-details.component */ 2996);
/* harmony import */ var _transaction_history_transaction_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transaction-history/transaction-history.component */ 6349);
/* harmony import */ var _request_view_request_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./request-view/request-view.component */ 4520);
/* harmony import */ var _stripe_stripe_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stripe/stripe.page */ 1033);
/* harmony import */ var _services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/guards/auth.guard */ 3980);
/* harmony import */ var _services_guards_un_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/guards/un-auth.guard */ 5148);
/* harmony import */ var _customeroccasion_customeroccasion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./customeroccasion/customeroccasion.component */ 8299);
/* harmony import */ var _liveperformanceorders_liveperformanceorders_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./liveperformanceorders/liveperformanceorders.component */ 1367);
/* harmony import */ var _privateperformanceorders_privateperformanceorders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./privateperformanceorders/privateperformanceorders.component */ 3961);
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./events/events.component */ 5282);
/* harmony import */ var _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tickets/tickets.component */ 7666);
/* harmony import */ var _celebrities_celebrities_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./celebrities/celebrities.component */ 2710);
/* harmony import */ var _liveperformances_liveperformances_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./liveperformances/liveperformances.component */ 3660);
/* harmony import */ var _eventdetails_eventdetails_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./eventdetails/eventdetails.component */ 2930);




























const routes = [
    {
        path: '',
        redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
        canActivate: [_services_guards_un_auth_guard__WEBPACK_IMPORTED_MODULE_16__.UnAuthGuard]
    },
    {
        path: 'forgetpass',
        component: _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_1__.ForgetpassComponent,
        canActivate: [_services_guards_un_auth_guard__WEBPACK_IMPORTED_MODULE_16__.UnAuthGuard]
    },
    {
        path: 'forgetotp',
        component: _forgetotp_forgetotp_component__WEBPACK_IMPORTED_MODULE_2__.ForgetotpComponent,
        canActivate: [_services_guards_un_auth_guard__WEBPACK_IMPORTED_MODULE_16__.UnAuthGuard]
    },
    {
        path: 'forgetreset',
        component: _forgetreset_forgetreset_component__WEBPACK_IMPORTED_MODULE_3__.ForgetresetComponent,
        canActivate: [_services_guards_un_auth_guard__WEBPACK_IMPORTED_MODULE_16__.UnAuthGuard]
    },
    {
        path: 'register',
        component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__.RegistrationComponent,
        canActivate: [_services_guards_un_auth_guard__WEBPACK_IMPORTED_MODULE_16__.UnAuthGuard]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__.ProfileComponent,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.DashboardComponent,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    },
    {
        path: 'occasion',
        component: _customeroccasion_customeroccasion_component__WEBPACK_IMPORTED_MODULE_17__.CustomeroccasionComponent,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    },
    {
        path: 'change-password',
        component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__.ChangePasswordComponent,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    },
    {
        path: 'bank-details',
        component: _bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_11__.BankDetailsComponent,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    },
    {
        path: 'transaction-history',
        component: _transaction_history_transaction_history_component__WEBPACK_IMPORTED_MODULE_12__.TransactionHistoryComponent,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    },
    {
        path: 'request-view',
        component: _request_view_request_view_component__WEBPACK_IMPORTED_MODULE_13__.RequestViewComponent,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    },
    {
        path: 'onboarding',
        component: _celebrity_onboarding_celebrity_onboarding_component__WEBPACK_IMPORTED_MODULE_5__.CelebrityOnboardingComponent,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    },
    {
        path: 'videos',
        component: _celebrity_videos_celebrity_videos_component__WEBPACK_IMPORTED_MODULE_6__.CelebrityVideosComponent,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    },
    {
        path: 'invitefriends',
        component: _invitefriends_invitefriends_component__WEBPACK_IMPORTED_MODULE_9__.InvitefriendsComponent,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    },
    {
        path: 'my-profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__.ProfileComponent,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    },
    {
        path: 'stripe/:id',
        component: _stripe_stripe_page__WEBPACK_IMPORTED_MODULE_14__.StripePage,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    },
    {
        path: 'liveperformanceorders',
        component: _liveperformanceorders_liveperformanceorders_component__WEBPACK_IMPORTED_MODULE_18__.LiveperformanceordersComponent,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    },
    {
        path: 'privateperformanceorders',
        component: _privateperformanceorders_privateperformanceorders_component__WEBPACK_IMPORTED_MODULE_19__.PrivateperformanceordersComponent,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    },
    {
        path: 'events',
        component: _events_events_component__WEBPACK_IMPORTED_MODULE_20__.EventsComponent,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    },
    {
        path: 'tickets',
        component: _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_21__.TicketsComponent,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    },
    {
        path: 'celebrities',
        component: _celebrities_celebrities_component__WEBPACK_IMPORTED_MODULE_22__.CelebritiesComponent,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    },
    {
        path: 'liveperformances',
        component: _liveperformances_liveperformances_component__WEBPACK_IMPORTED_MODULE_23__.LiveperformancesComponent,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    },
    {
        path: 'eventdetails',
        component: _eventdetails_eventdetails_component__WEBPACK_IMPORTED_MODULE_24__.EventdetailsComponent,
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__.AuthGuard]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_26__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_27__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 2009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/storage/storage.service */ 6578);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5485);







let AppComponent = class AppComponent {
    constructor(authService, storageService, router) {
        this.authService = authService;
        this.storageService = storageService;
        this.router = router;
        this.appPages = [
            { title: 'DASHBOARD', url: '/dashboard', icon: 'home' },
            { title: 'MY VEHICLES', url: '/request-view', icon: 'list' },
            { title: 'ADD NEW VEHICLE', url: '/invitefriends', icon: 'clipboard' },
            { title: 'REPORTS', url: '/privateperformanceorders', icon: 'file-tray-full' },
            { title: 'TRANSACTION HISTORY', url: '/transaction-history', icon: 'card' },
            { title: 'PAYMENTS', url: '/events', icon: 'bag' }
        ];
        this.profilePages = [
            { title: 'PROFILE', url: '/profile', icon: 'person-circle' },
            { title: 'CHANGE PASSWORD', url: '/change-password', icon: 'cog' },
        ];
    }
    ngOnInit() { }
    logOut() {
        this.storageService.removePermanentStorage("authToken");
        this.storageService.removePermanentStorage("userInfo");
        location.reload();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser */ 8394);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/crop/ngx */ 5715);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/file/ngx */ 8232);
/* harmony import */ var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/downloader/ngx */ 1428);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ 7642);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration/registration.component */ 2481);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _customeroccasion_customeroccasion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customeroccasion/customeroccasion.component */ 8299);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _transaction_history_transaction_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transaction-history/transaction-history.component */ 6349);
/* harmony import */ var _request_view_request_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./request-view/request-view.component */ 4520);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./change-password/change-password.component */ 4250);
/* harmony import */ var _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forgetpass/forgetpass.component */ 5063);
/* harmony import */ var _forgetotp_forgetotp_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forgetotp/forgetotp.component */ 3835);
/* harmony import */ var _forgetreset_forgetreset_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forgetreset/forgetreset.component */ 8735);
/* harmony import */ var _invitefriends_invitefriends_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./invitefriends/invitefriends.component */ 411);
/* harmony import */ var _stripe_stripe_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stripe/stripe.page */ 1033);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _liveperformanceorders_liveperformanceorders_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./liveperformanceorders/liveperformanceorders.component */ 1367);
/* harmony import */ var _privateperformanceorders_privateperformanceorders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./privateperformanceorders/privateperformanceorders.component */ 3961);
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./events/events.component */ 5282);
/* harmony import */ var _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tickets/tickets.component */ 7666);
/* harmony import */ var _celebrities_celebrities_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./celebrities/celebrities.component */ 2710);
/* harmony import */ var _liveperformances_liveperformances_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./liveperformances/liveperformances.component */ 3660);
/* harmony import */ var _eventdetails_eventdetails_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./eventdetails/eventdetails.component */ 2930);
/* harmony import */ var ion_intl_tel_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ion-intl-tel-input */ 5103);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 2834);



































let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_26__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent,
            _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__.RegistrationComponent,
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__.LoginComponent,
            _customeroccasion_customeroccasion_component__WEBPACK_IMPORTED_MODULE_8__.CustomeroccasionComponent,
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__.ProfileComponent,
            _request_view_request_view_component__WEBPACK_IMPORTED_MODULE_11__.RequestViewComponent,
            _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_12__.ChangePasswordComponent,
            _forgetpass_forgetpass_component__WEBPACK_IMPORTED_MODULE_13__.ForgetpassComponent,
            _forgetotp_forgetotp_component__WEBPACK_IMPORTED_MODULE_14__.ForgetotpComponent,
            _forgetreset_forgetreset_component__WEBPACK_IMPORTED_MODULE_15__.ForgetresetComponent,
            _invitefriends_invitefriends_component__WEBPACK_IMPORTED_MODULE_16__.InvitefriendsComponent,
            _transaction_history_transaction_history_component__WEBPACK_IMPORTED_MODULE_10__.TransactionHistoryComponent,
            _stripe_stripe_page__WEBPACK_IMPORTED_MODULE_17__.StripePage,
            _liveperformanceorders_liveperformanceorders_component__WEBPACK_IMPORTED_MODULE_18__.LiveperformanceordersComponent,
            _privateperformanceorders_privateperformanceorders_component__WEBPACK_IMPORTED_MODULE_19__.PrivateperformanceordersComponent,
            _events_events_component__WEBPACK_IMPORTED_MODULE_20__.EventsComponent,
            _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_21__.TicketsComponent,
            _celebrities_celebrities_component__WEBPACK_IMPORTED_MODULE_22__.CelebritiesComponent,
            _liveperformances_liveperformances_component__WEBPACK_IMPORTED_MODULE_23__.LiveperformancesComponent,
            _eventdetails_eventdetails_component__WEBPACK_IMPORTED_MODULE_24__.EventdetailsComponent
        ],
        entryComponents: [],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule,
            ion_intl_tel_input__WEBPACK_IMPORTED_MODULE_32__.IonIntlTelInputModule,
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_33__.NgxQRCodeModule
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_34__.RouterModule, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonicRouteStrategy },
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_1__.File,
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__.HTTP,
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_0__.Crop,
            _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_2__.Downloader
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2996:
/*!********************************************************!*\
  !*** ./src/app/bank-details/bank-details.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankDetailsComponent": () => (/* binding */ BankDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _bank_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-details.component.html?ngResource */ 3229);
/* harmony import */ var _bank_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank-details.component.scss?ngResource */ 3444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let BankDetailsComponent = class BankDetailsComponent {
    constructor() { }
    ngOnInit() { }
};
BankDetailsComponent.ctorParameters = () => [];
BankDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-bank-details',
        template: _bank_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_bank_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BankDetailsComponent);



/***/ }),

/***/ 2710:
/*!******************************************************!*\
  !*** ./src/app/celebrities/celebrities.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CelebritiesComponent": () => (/* binding */ CelebritiesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _celebrities_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./celebrities.component.html?ngResource */ 5289);
/* harmony import */ var _celebrities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./celebrities.component.scss?ngResource */ 6143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);






let CelebritiesComponent = class CelebritiesComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.celebRequests = [];
        this.expertise = [];
        this.industries = [];
    }
    ngOnInit() {
        this.getMyTickets();
    }
    getMyTickets() {
        this.apiService.getcelebList().subscribe(res => {
            if (res.success) {
                this.celebRequests = res.data.celebList;
                this.expertise = res.data.expertise;
                this.industries = res.data.subcelebList;
                window.location.href = "/celebrities#celeb-all";
            }
        });
    }
};
CelebritiesComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
CelebritiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-celebrities',
        template: _celebrities_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_celebrities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CelebritiesComponent);



/***/ }),

/***/ 4816:
/*!************************************************************************!*\
  !*** ./src/app/celebrity-onboarding/celebrity-onboarding.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CelebrityOnboardingComponent": () => (/* binding */ CelebrityOnboardingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _celebrity_onboarding_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./celebrity-onboarding.component.html?ngResource */ 3470);
/* harmony import */ var _celebrity_onboarding_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./celebrity-onboarding.component.scss?ngResource */ 686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let CelebrityOnboardingComponent = class CelebrityOnboardingComponent {
    constructor() { }
    ngOnInit() { }
};
CelebrityOnboardingComponent.ctorParameters = () => [];
CelebrityOnboardingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-celebrity-onboarding',
        template: _celebrity_onboarding_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_celebrity_onboarding_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CelebrityOnboardingComponent);



/***/ }),

/***/ 9193:
/*!****************************************************************!*\
  !*** ./src/app/celebrity-videos/celebrity-videos.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CelebrityVideosComponent": () => (/* binding */ CelebrityVideosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _celebrity_videos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./celebrity-videos.component.html?ngResource */ 6589);
/* harmony import */ var _celebrity_videos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./celebrity-videos.component.scss?ngResource */ 2464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let CelebrityVideosComponent = class CelebrityVideosComponent {
    constructor() { }
    ngOnInit() { }
};
CelebrityVideosComponent.ctorParameters = () => [];
CelebrityVideosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-celebrity-videos',
        template: _celebrity_videos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_celebrity_videos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CelebrityVideosComponent);



/***/ }),

/***/ 4250:
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _change_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.component.html?ngResource */ 3417);
/* harmony import */ var _change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.component.scss?ngResource */ 2569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/message/message.service */ 7849);
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage/storage.service */ 6578);





//import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';

//mport { AbstractControl, ValidationErrors } from "@angular/forms"




let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(router, formBuilder, authService, messageService, storageService, apiService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.messageService = messageService;
        this.storageService = storageService;
        this.apiService = apiService;
        this.passObjToUpdate = {};
        this.changpassForm = this.formBuilder.group({
            oldpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
            newpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
            confpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        }, { validators: [this.ConfirmedValidator("newpassword", "confpassword")]
        });
    }
    /*ConfirmedValidator(controlName: string, matchingControlName: string){
      return (control: AbstractControl): ValidationErrors | null => {
          const input = control.get(controlName);
          const matchingInput = control.get(matchingControlName);
  
          if (input === null || matchingInput === null) {
              return null;
          }
  
          if (matchingInput?.errors && !matchingInput.errors.confirmedValidator) {
              return null;
          }
  
          if (input.value !== matchingInput.value) {
              matchingInput.setErrors({ confirmedValidator: true });
              return ({ confirmedValidator: true });
          } else {
              matchingInput.setErrors(null);
              return null;
          }
      };
  }*/
    ConfirmedValidator(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
                return null;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ confirmedValidator: true });
                return ({ confirmedValidator: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    ngOnInit() { }
    submit() {
        //console.log(this.changpassForm.value);
        let passObj = {
            'old_password': this.changpassForm.value.oldpassword,
            'new_password': this.changpassForm.value.newpassword,
        };
        this.apiService.doChangePass(passObj).subscribe(res => {
            if (res.success) {
                //profile status will come from response
                //profile complete then go to dashboard else sent to celebrity registration
                //this.router.navigate(['login']);
                this.messageService.presentAlertChangePassSucc('Password Change', 'Password successfully change');
            }
            else {
                //this.messageService.presentToast("Please check your credentials and try again");
                this.messageService.presentAlert('Password Change Failed', 'Old password does not match');
            }
        });
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _services_message_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService },
    { type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
ChangePasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-change-password',
        template: _change_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChangePasswordComponent);



/***/ }),

/***/ 8299:
/*!****************************************************************!*\
  !*** ./src/app/customeroccasion/customeroccasion.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomeroccasionComponent": () => (/* binding */ CustomeroccasionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _customeroccasion_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customeroccasion.component.html?ngResource */ 6762);
/* harmony import */ var _customeroccasion_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customeroccasion.component.scss?ngResource */ 7801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);








let CustomeroccasionComponent = class CustomeroccasionComponent {
    constructor(router, formBuilder, apiService, platform) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.platform = platform;
        this.isItemAvailable = false;
        this.isExpAreasAvailable = false;
        this.items = [];
        this.itemsAfterFilter = [];
        this.expertiseAreas = [];
        this.occTypes = [];
        this.date = new Date().toISOString();
        this.occasionForm = this.formBuilder.group({
            occation_type: [''],
            occation_date: [''],
            search: [''],
            expertise_areas: [''],
            Purpose: [''],
            celeb_id: ['']
        });
    }
    get occation_type() {
        return this.occasionForm.get('occation_type');
    }
    get occation_date() {
        return this.occasionForm.get('occation_date');
    }
    get search() {
        return this.occasionForm.get('search');
    }
    get Purpose() {
        return this.occasionForm.get('Purpose');
    }
    get celeb_id() {
        return this.occasionForm.get('celeb_id');
    }
    get expertise_areas() {
        return this.occasionForm.get('expertise_areas');
    }
    initializeItems() {
        this.apiService.getOccationTypes().subscribe(res => {
            if (res.success) {
                // this.occTypes = res.data.occasion_types;
                this.items = res.data.celebs;
                if (this.platform.getQueryParam('id') != "")
                    this.getItems(null);
                //console.log(this.transactionHistory);
            }
        });
    }
    loadData(item) {
        console.log(item);
        this.isItemAvailable = false;
        this.isExpAreasAvailable = false;
        this.occasionForm.patchValue({
            search: item.name
        });
        this.occasionForm.patchValue({
            celeb_id: item.id
        });
        this.getCelebrityExpertiseAreas(item.id);
        //isExpAreasAvailable = false;
        return false;
    }
    getItems(ev) {
        const val = (ev != null) ? ev.target.value : "";
        console.log("ID", this.platform.getQueryParam('id'));
        if (this.platform.getQueryParam('id') != "" || (val && val.trim() !== '')) {
            this.isItemAvailable = true;
            this.itemsAfterFilter = this.items.filter((item) => {
                if (val != "" && item.name.toLowerCase().indexOf(val.toLowerCase().trim()) >= 0) {
                    console.log(item.name);
                    return true;
                }
                if (item.id == this.platform.getQueryParam('id')) {
                    console.log(item.id);
                    this.loadData(item);
                    return true;
                }
                return false;
                //return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.isItemAvailable = false;
        }
    }
    submit() {
        this.occasionForm.patchValue({
            occation_date: this.occasionForm.value.occation_date.split("T")[0]
        });
        console.log(this.occasionForm.value);
        this.apiService.postOccationForm(this.occasionForm.value).subscribe(res => {
            console.log(res);
            this.router.navigate(['/stripe/' + res.data.occ_id]);
        });
    }
    getOccationTypes() {
        this.apiService.getOccationTypes().subscribe(res => {
            if (res.success) {
                this.occTypes = res.data.occasion_types;
                //console.log(this.transactionHistory);
            }
        });
    }
    getCelebrityExpertiseAreas(celeb_id) {
        let Obj = {
            'celeb_id': celeb_id
        };
        this.apiService.fetchCelebExpertiseAreas(Obj).subscribe(res => {
            //if (res.success) {
            this.expertiseAreas = res;
            this.isExpAreasAvailable = true;
            console.log(res);
            // }
        });
        this.apiService.fetchCelebIntroVideo(Obj).subscribe(res => {
            //if (res.success) {
            this.introVideo = res;
            //this.isExpAreasAvailable = true;
            console.log(res);
            // }
        });
    }
    ngOnInit() {
        this.getOccationTypes();
        this.initializeItems();
    }
};
CustomeroccasionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform }
];
CustomeroccasionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-customeroccasion',
        template: _customeroccasion_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_customeroccasion_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomeroccasionComponent);



/***/ }),

/***/ 7528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component.html?ngResource */ 1029);
/* harmony import */ var _dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss?ngResource */ 6057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5485);





let DashboardComponent = class DashboardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    redirectTo(toPath) {
        this.router.navigate([toPath]);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
DashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-dashboard',
        template: _dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardComponent);



/***/ }),

/***/ 2930:
/*!********************************************************!*\
  !*** ./src/app/eventdetails/eventdetails.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventdetailsComponent": () => (/* binding */ EventdetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _eventdetails_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventdetails.component.html?ngResource */ 5222);
/* harmony import */ var _eventdetails_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventdetails.component.scss?ngResource */ 2392);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);








let EventdetailsComponent = class EventdetailsComponent {
    constructor(router, formBuilder, apiService, platform) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.platform = platform;
        this.event_poster = [];
        this.event = [];
        this.event_tables = [];
    }
    ngOnInit() {
        this.getEventDetails();
    }
    getEventDetails() {
        this.apiService.getEventDetails(this.platform.getQueryParam('id')).subscribe(res => {
            if (res.success) {
                this.event = res.data.event;
                this.event_poster = res.data.event_poster;
                this.event_tables = res.data.event_tables;
            }
        });
    }
};
EventdetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform }
];
EventdetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-eventdetails',
        template: _eventdetails_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_eventdetails_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventdetailsComponent);



/***/ }),

/***/ 5282:
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsComponent": () => (/* binding */ EventsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _events_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.component.html?ngResource */ 6606);
/* harmony import */ var _events_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.component.scss?ngResource */ 7934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/message/message.service */ 7849);









let EventsComponent = class EventsComponent {
    constructor(apiService, modalController, router, formBuilder, messageService) {
        this.apiService = apiService;
        this.modalController = modalController;
        this.router = router;
        this.formBuilder = formBuilder;
        this.messageService = messageService;
        this.celebEvents = [];
        this.paymentFrm = this.formBuilder.group({
            eventName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
            amount: []
        });
    }
    ngOnInit() {
        this.getCelebEvents();
    }
    getCelebEvents() {
        this.apiService.getCelebEvents().subscribe(res => {
            if (res.success) {
                this.celebEvents = res.data.my_events;
                console.log(res.data.my_events);
            }
        });
    }
    submit() {
        //console.log(this.changpassForm.value);
        /*this.apiService.doInviteFrnd(this.invitefrndForm.value).subscribe(res => {
          if (res.success) {
            //this.router.navigate(['login']);
            this.messageService.presentAlertChangePassSucc('Add New Vehicle', 'Vehicle added successfully.');
            this.router.navigate(['dashboard']);
          } else {
            //this.messageService.presentToast("Please check your credentials and try again");
            this.messageService.presentAlert('Password Change Failed', 'Old password does not match');
          }
        });*/
        this.messageService.presentAlertChangePassSucc('Payment', 'Integrated After payment Gateway.');
    }
    triggerEvent(event) {
        if (event.target.value != "")
            this.paymentFrm.controls['amount'].setValue(event.target.value.split("#")[1]);
    }
};
EventsComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService }
];
EventsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-events',
        template: _events_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_events_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventsComponent);



/***/ }),

/***/ 3835:
/*!**************************************************!*\
  !*** ./src/app/forgetotp/forgetotp.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetotpComponent": () => (/* binding */ ForgetotpComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _forgetotp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgetotp.component.html?ngResource */ 3083);
/* harmony import */ var _forgetotp_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgetotp.component.scss?ngResource */ 2060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/message/message.service */ 7849);








let ForgetotpComponent = class ForgetotpComponent {
    constructor(router, formBuilder, messageService, apiService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.messageService = messageService;
        this.apiService = apiService;
        this.forgetotpForm = this.formBuilder.group({
            forgetotp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4)]],
        });
    }
    ngOnInit() { }
    submit() {
        //console.log(localStorage.getItem('forgetpassemail'));
        //localStorage.setItem('forgetpassemail', this.forgetotpForm.value.email);
        let passObj = {
            'email': localStorage.getItem('forgetpassemail'),
            'otp': this.forgetotpForm.value.forgetotp,
        };
        this.apiService.doCheckForgetpassotp(passObj).subscribe(res => {
            if (res.success) {
                console.log(res.data.user_id);
                //profile status will come from response
                //profile complete then go to dashboard else sent to celebrity registration
                localStorage.removeItem('forgetpassemail');
                localStorage.setItem('forgetpassuserID', res.data.user_id);
                this.router.navigate(['forgetreset']);
            }
            else {
                this.messageService.presentToast("Please check your credentials and try again");
            }
        });
    }
};
ForgetotpComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
ForgetotpComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-forgetotp',
        template: _forgetotp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgetotp_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgetotpComponent);



/***/ }),

/***/ 5063:
/*!****************************************************!*\
  !*** ./src/app/forgetpass/forgetpass.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetpassComponent": () => (/* binding */ ForgetpassComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _forgetpass_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgetpass.component.html?ngResource */ 1051);
/* harmony import */ var _forgetpass_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgetpass.component.scss?ngResource */ 4958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/message/message.service */ 7849);








let ForgetpassComponent = class ForgetpassComponent {
    constructor(router, formBuilder, messageService, apiService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.messageService = messageService;
        this.apiService = apiService;
        this.forgetpassForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        });
    }
    ngOnInit() { }
    submit() {
        //console.log(this.forgetpassForm.value);
        localStorage.setItem('forgetpassemail', this.forgetpassForm.value.email);
        let passObj = {
            'email': this.forgetpassForm.value.email,
        };
        this.apiService.doSendForgetpassotp(passObj).subscribe(res => {
            if (res.success) {
                //profile status will come from response
                //profile complete then go to dashboard else sent to celebrity registration
                this.router.navigate(['forgetotp']);
            }
            else {
                this.messageService.presentToast("Please check your credentials and try again");
            }
        });
    }
};
ForgetpassComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
ForgetpassComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-forgetpass',
        template: _forgetpass_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgetpass_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgetpassComponent);



/***/ }),

/***/ 8735:
/*!******************************************************!*\
  !*** ./src/app/forgetreset/forgetreset.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetresetComponent": () => (/* binding */ ForgetresetComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _forgetreset_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgetreset.component.html?ngResource */ 9511);
/* harmony import */ var _forgetreset_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgetreset.component.scss?ngResource */ 3643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/message/message.service */ 7849);








let ForgetresetComponent = class ForgetresetComponent {
    constructor(router, formBuilder, messageService, apiService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.messageService = messageService;
        this.apiService = apiService;
        this.forgetresetForm = this.formBuilder.group({
            newpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
            confpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
        });
    }
    ngOnInit() { }
    submit() {
        //console.log(localStorage.getItem('forgetpassemail'));
        //localStorage.setItem('forgetpassemail', this.forgetotpForm.value.email);
        let passObj = {
            'user_id': localStorage.getItem('forgetpassuserID'),
            'new_password': this.forgetresetForm.value.newpassword,
        };
        this.apiService.doChangeForgetpass(passObj).subscribe(res => {
            if (res.success) {
                //profile status will come from response
                //profile complete then go to dashboard else sent to celebrity registration
                localStorage.removeItem('forgetpassuserID');
                this.router.navigate(['login']);
            }
            else {
                this.messageService.presentToast("Please check your credentials and try again");
            }
        });
    }
};
ForgetresetComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
ForgetresetComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-forgetreset',
        template: _forgetreset_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgetreset_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgetresetComponent);



/***/ }),

/***/ 411:
/*!**********************************************************!*\
  !*** ./src/app/invitefriends/invitefriends.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvitefriendsComponent": () => (/* binding */ InvitefriendsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _invitefriends_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invitefriends.component.html?ngResource */ 2414);
/* harmony import */ var _invitefriends_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invitefriends.component.scss?ngResource */ 900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/message/message.service */ 7849);









let InvitefriendsComponent = class InvitefriendsComponent {
    constructor(formBuilder, authService, router, messageService, apiService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.messageService = messageService;
        this.apiService = apiService;
        this.invitefrndForm = this.formBuilder.group({
            district: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)]],
            vehicleNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    ngOnInit() { }
    submit() {
        //console.log(this.changpassForm.value);
        this.apiService.doInviteFrnd(this.invitefrndForm.value).subscribe(res => {
            if (res.success) {
                //this.router.navigate(['login']);
                this.messageService.presentAlertChangePassSucc('Add New Vehicle', 'Vehicle added successfully.');
                this.router.navigate(['dashboard']);
            }
            else {
                //this.messageService.presentToast("Please check your credentials and try again");
                this.messageService.presentAlert('Password Change Failed', 'Old password does not match');
            }
        });
    }
};
InvitefriendsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_message_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
InvitefriendsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-invitefriends',
        template: _invitefriends_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_invitefriends_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InvitefriendsComponent);



/***/ }),

/***/ 1367:
/*!**************************************************************************!*\
  !*** ./src/app/liveperformanceorders/liveperformanceorders.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveperformanceordersComponent": () => (/* binding */ LiveperformanceordersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _liveperformanceorders_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./liveperformanceorders.component.html?ngResource */ 8036);
/* harmony import */ var _liveperformanceorders_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liveperformanceorders.component.scss?ngResource */ 7005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ 8232);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ 7642);
/* harmony import */ var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/downloader/ngx */ 1428);








let LiveperformanceordersComponent = class LiveperformanceordersComponent {
    constructor(apiService, http, file, downloader) {
        this.apiService = apiService;
        this.http = http;
        this.file = file;
        this.downloader = downloader;
        this.celebRequests = [];
    }
    ngOnInit() {
        this.getCelebRequests();
    }
    downloadFile(url) {
        //alert(this.file.dataDirectory+this.file.externalRootDirectory);
        var link = document.createElement('a');
        link.href = url;
        link.download = url.substr(url.lastIndexOf('/') + 1);
        link.click();
        //window.open(url);
    }
    getCelebRequests() {
        this.apiService.getRequestCustomer().subscribe(res => {
            if (res.success) {
                this.celebRequests = res.data.occationDetails.filter(obj => obj.expertise_id == '4');
            }
        });
    }
};
LiveperformanceordersComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__.HTTP },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File },
    { type: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_5__.Downloader }
];
LiveperformanceordersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-liveperformanceorders',
        template: _liveperformanceorders_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_liveperformanceorders_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LiveperformanceordersComponent);



/***/ }),

/***/ 3660:
/*!****************************************************************!*\
  !*** ./src/app/liveperformances/liveperformances.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveperformancesComponent": () => (/* binding */ LiveperformancesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _liveperformances_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./liveperformances.component.html?ngResource */ 869);
/* harmony import */ var _liveperformances_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liveperformances.component.scss?ngResource */ 276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let LiveperformancesComponent = class LiveperformancesComponent {
    constructor() { }
    ngOnInit() { }
};
LiveperformancesComponent.ctorParameters = () => [];
LiveperformancesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-liveperformances',
        template: _liveperformances_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_liveperformances_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LiveperformancesComponent);



/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 2010);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 4103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/message/message.service */ 7849);
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage/storage.service */ 6578);









let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, authService, messageService, storageService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.messageService = messageService;
        this.storageService = storageService;
        this.hide = true;
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)]],
        });
    }
    togglePasswordFieldType() {
        this.isTextFieldType = !this.isTextFieldType;
    }
    submit() {
        this.authService.doLogin(this.loginForm.value).subscribe(res => {
            if (res.success) {
                //console.log('AAAA');
                this.storageService.setToPermanentStorage("authToken", res.data.auth_token);
                this.storageService.setToPermanentStorage("userInfo", JSON.stringify(res.data));
                this.storageService.setTosingleTonService("authToken", res.data.auth_token);
                this.storageService.setTosingleTonService("userInfo", JSON.stringify(res.data));
                //profile status will come from response
                //profile complete then go to dashboard else sent to celebrity registration
                this.router.navigate(['dashboard']);
            }
            else {
                //console.log('Login Fail'); 
                //this.messageService.presentToast("Please check your credentials and try again");
                this.messageService.presentAlert('Login Failed', 'Please check your credentials and try again');
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService },
    { type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 3961:
/*!********************************************************************************!*\
  !*** ./src/app/privateperformanceorders/privateperformanceorders.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivateperformanceordersComponent": () => (/* binding */ PrivateperformanceordersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _privateperformanceorders_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privateperformanceorders.component.html?ngResource */ 154);
/* harmony import */ var _privateperformanceorders_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privateperformanceorders.component.scss?ngResource */ 6331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ 8232);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ 7642);
/* harmony import */ var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/downloader/ngx */ 1428);








let PrivateperformanceordersComponent = class PrivateperformanceordersComponent {
    constructor(apiService, http, file, downloader) {
        this.apiService = apiService;
        this.http = http;
        this.file = file;
        this.downloader = downloader;
        this.celebRequests = [];
    }
    ngOnInit() {
        this.getCelebRequests();
    }
    downloadFile(url) {
        //alert(this.file.dataDirectory+this.file.externalRootDirectory);
        var link = document.createElement('a');
        link.href = url;
        link.download = url.substr(url.lastIndexOf('/') + 1);
        link.click();
        //window.open(url);
    }
    getCelebRequests() {
        this.apiService.getRequestCustomer().subscribe(res => {
            if (res.success) {
                this.celebRequests = res.data.occationDetails.filter(obj => obj.expertise_id == '5');
            }
        });
    }
    triggerEvent(event) {
        this.apiService.getRequestCustomer().subscribe(res => {
            if (res.success) {
                this.celebRequests = res.data.occationDetails.filter(obj => obj.district == event.target.value);
            }
        });
    }
};
PrivateperformanceordersComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__.HTTP },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File },
    { type: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_5__.Downloader }
];
PrivateperformanceordersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-privateperformanceorders',
        template: _privateperformanceorders_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_privateperformanceorders_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrivateperformanceordersComponent);



/***/ }),

/***/ 6630:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component.html?ngResource */ 6038);
/* harmony import */ var _profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.scss?ngResource */ 8178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/message/message.service */ 7849);
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/crop/ngx */ 5715);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ 8232);









let ProfileComponent = class ProfileComponent {
    constructor(messageService, apiService, crop, file, actionSheetController) {
        this.messageService = messageService;
        this.apiService = apiService;
        this.crop = crop;
        this.file = file;
        this.actionSheetController = actionSheetController;
        this.profileToShow = {};
        this.editing = false;
        this.fileUrl = null;
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
        };
    }
    ngOnInit() {
        this.getProfile();
    }
    getProfile() {
        this.apiService.getCelebProfie().subscribe(res => {
            if (res.success) {
                this.profileToShow = res.data;
                this.profileObjToUpdate = {
                    fullname: res.data.fullname,
                    band_name: res.data.band_name,
                    address: res.data.address,
                    phone: res.data.mobilenumber,
                    city: res.data.city,
                    state: res.data.state,
                    country: res.data.country,
                    dob: res.data.dob,
                    email: res.data.email,
                    profile_pic: ""
                };
                this.profilePic = "https://yiiu.net/" + res.data.profile_pic;
            }
        });
    }
    toogleEditing(option) {
        this.editing = option;
    }
    // cropUpload() {
    //   //alert('Test');
    //   this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 0 }).then((results) => {
    //     for (let i = 0; i < results.length; i++) {
    //       console.log('Image URI: ' + results[i]);
    //       this.crop.crop(results[i], { quality: 100 })
    //         .then(
    //           newImage => {
    //             console.log('new image path is: ' + newImage);
    //             const fileTransfer: FileTransferObject = this.transfer.create();
    //             const uploadOpts: FileUploadOptions = {
    //               fileKey: 'file',
    //               fileName: newImage.substr(newImage.lastIndexOf('/') + 1)
    //             };
    //             fileTransfer.upload(newImage, 'https://yiiu.net/profile_pics/132/', uploadOpts)
    //               .then((data) => {
    //                 console.log(data);
    //                 this.respData = JSON.parse(data.response);
    //                 console.log(this.respData);
    //                 this.fileUrl = this.respData.fileUrl;
    //               }, (err) => {
    //                 console.log(err);
    //               });
    //           },
    //           error => console.error('Error cropping image', error)
    //         );
    //     }
    //   }, (err) => { console.log(err); });
    // }
    onSubmit() {
        //debugger;
        this.profileObjToUpdate;
        this.apiService.postCelebProfile(this.profileObjToUpdate, this.profilePic).subscribe(res => {
            if (res.success) {
                this.profileToShow = res.data;
                this.editing = false;
                this.messageService.presentAlert('Profile Update', 'Profile successfully updated.');
            }
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_4__.Crop },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController }
];
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile',
        template: _profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileComponent);



/***/ }),

/***/ 2481:
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationComponent": () => (/* binding */ RegistrationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _registration_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.component.html?ngResource */ 9756);
/* harmony import */ var _registration_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.component.scss?ngResource */ 2121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/message/message.service */ 7849);









let RegistrationComponent = class RegistrationComponent {
    constructor(formBuilder, authService, router, messageService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.messageService = messageService;
        this.trueFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(true);
        this.falseFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false);
        this.errorMessages = {
            fullname: [
                { type: 'required', message: 'Name is required' },
                { type: 'minlength', message: 'Name cant be shorter than 16 charecters' }
            ],
            email: [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Please Enter a Valid EmailAddress' }
            ],
            phone: [
                { type: 'required', message: 'Phone Number is required' },
                { type: 'pattern', message: 'Please Enter a Valid Phone Number' }
            ],
            password: [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password cant be shorter than 6 charecters' }
            ],
            vehicleNo: [
                { type: 'required', message: 'Vehicle No is required' }
            ],
            district: [
                { type: 'required', message: 'District is required' }
            ]
        };
        this.registrationForm = this.formBuilder.group({
            fullname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            vehicleNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            district: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
        });
    }
    get fullname() {
        return this.registrationForm.get('fullname');
    }
    get email() {
        return this.registrationForm.get('email');
    }
    get phone() {
        return this.registrationForm.get('phone');
    }
    get password() {
        return this.registrationForm.get('password');
    }
    get vehicleNo() {
        return this.registrationForm.get('vehicleNo');
    }
    get district() {
        return this.registrationForm.get('district');
    }
    get f() {
        console.log(this.registrationForm);
        return this.registrationForm.controls;
    }
    submit() {
        console.log(this.registrationForm.value);
        this.authService.doRegister(this.registrationForm.value).subscribe(res => {
            if (res.success) {
                this.messageService.presentAlert('Registration', 'Your vehicle is successfully registered. Please login to continue.');
                this.router.navigate(['login']);
            }
            else {
                console.log(res);
            }
        });
    }
    ngOnInit() { }
};
RegistrationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_message_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService }
];
RegistrationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-registration',
        template: _registration_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_registration_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistrationComponent);



/***/ }),

/***/ 4520:
/*!********************************************************!*\
  !*** ./src/app/request-view/request-view.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestViewComponent": () => (/* binding */ RequestViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _request_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-view.component.html?ngResource */ 4615);
/* harmony import */ var _request_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-view.component.scss?ngResource */ 7190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ 8232);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ 7642);
/* harmony import */ var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/downloader/ngx */ 1428);








let RequestViewComponent = class RequestViewComponent {
    constructor(apiService, http, file, downloader) {
        this.apiService = apiService;
        this.http = http;
        this.file = file;
        this.downloader = downloader;
        this.celebRequests = [];
    }
    ngOnInit() {
        this.getCelebRequests();
    }
    downloadFile(url) {
        //alert(this.file.dataDirectory+this.file.externalRootDirectory);
        var link = document.createElement('a');
        link.href = url;
        link.download = url.substr(url.lastIndexOf('/') + 1);
        link.click();
        //window.open(url);
    }
    getCelebRequests() {
        this.apiService.getRequestCustomer().subscribe(res => {
            if (res.success) {
                this.celebRequests = res.data.occationDetails;
            }
        });
    }
    downloadQrCode() {
        const qrCodeElement = document.querySelector('.aclass');
        if (qrCodeElement) {
            const canvas = qrCodeElement.querySelector('img');
            if (canvas) {
                const link = document.createElement('a');
                link.href = canvas.src;
                link.download = 'qrcode.png';
                link.click();
            }
        }
    }
};
RequestViewComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__.HTTP },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File },
    { type: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_5__.Downloader }
];
RequestViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-request-view',
        template: _request_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_request_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RequestViewComponent);



/***/ }),

/***/ 5146:
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var _url_url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../url/url.service */ 7312);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ 7556);





let ApiService = class ApiService {
    constructor(http, urlService, authService) {
        this.http = http;
        this.urlService = urlService;
        this.authService = authService;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': "Bearer " + this.authService.getToken()
        });
        this.options = {
            headers: headers
        };
        const fileheaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Authorization': "Bearer " + this.authService.getToken()
        });
        this.fileoptions = {
            headers: fileheaders
        };
    }
    updateCelebExpertise(params) {
        return this.http.post(this.urlService.postExpertiseAreaUpdateUrl(), params, this.options);
    }
    getCelebExpertise() {
        return this.http.get(this.urlService.getExpertiseAreaUpdateUrl(), this.options);
    }
    getCelebRequests() {
        return this.http.get(this.urlService.getMyRequestsUrl(), this.options);
    }
    getTransactionHistory() {
        return this.http.get(this.urlService.getTxnHistoryUrl(), this.options);
    }
    getRequestCustomer() {
        return this.http.get(this.urlService.getRequestCustomerURL(), this.options);
    }
    getMyTickets() {
        return this.http.get(this.urlService.getMyTicketsURL(), this.options);
    }
    getcelebList() {
        return this.http.get(this.urlService.getcelebListURL(), this.options);
    }
    getCelebEvents() {
        return this.http.get(this.urlService.getEventsListURL(), this.options);
    }
    getEventDetails(id) {
        return this.http.get(this.urlService.getEventDetailsURL() + "?id=" + id, this.options);
    }
    getOccationTypes() {
        return this.http.get(this.urlService.getOccTypeUrl(), this.options);
    }
    getCelebProfie() {
        return this.http.get(this.urlService.getCelebProfileUrl(), this.options);
    }
    /*postCelebProfile(params: Profile): Observable<any> {
      return this.http.post(this.urlService.getCelebProfileUrl(), params, this.options);
    }*/
    postCelebProfile(params, proImg) {
        var seq = (Math.floor(Math.random() * 10000000) + 10000000).toString().substring(1);
        //console.log(seq);
        const fileToUpload = this.DataURIToBlob(proImg);
        //const formData = new FormData();
        //formData.append('profile_pic', fileToUpload, 'image.jpg')
        //console.log(params.fullname)
        const data = new FormData();
        data.append("fullname", params.fullname);
        data.append("band_name", params.band_name);
        data.append("address", params.address);
        data.append("phone", params.phone);
        data.append("city", params.city);
        data.append("state", params.state);
        data.append("country", params.country);
        data.append("dob", params.dob);
        data.append("email", params.email);
        data.append("profile_pic", fileToUpload, seq + '_propic.jpg');
        data.append("language_id", "1");
        return this.http.post(this.urlService.getCelebProfileUrl(), data, this.fileoptions);
    }
    postOccationForm(params) {
        return this.http.post(this.urlService.getOccationFormSubmitURL(), params, this.options);
    }
    doChangePass(params) {
        return this.http.post(this.urlService.postchangpassUrl(), params, this.options);
    }
    fetchCelebExpertiseAreas(params) {
        return this.http.post("https://yiiu.vip/celeb/expertise/areas", params, this.options);
    }
    fetchOccationById(params) {
        return this.http.post(this.urlService.getOccasionByIdURL(), params, this.options);
    }
    fetchCelebIntroVideo(params) {
        return this.http.post("https://yiiu.vip/celeb/intro/video", params, this.options);
    }
    submitStripePayment(payload) {
        return this.http.post("https://yiiu.vip/strpcustomerpayments", payload, this.options);
    }
    doSendForgetpassotp(params) {
        return this.http.post(this.urlService.postForgetPassOtpUrl(), params);
    }
    doCheckForgetpassotp(params) {
        return this.http.post(this.urlService.postForgetPassOtpCheckUrl(), params);
    }
    doChangeForgetpass(params) {
        return this.http.post(this.urlService.postForgetPassChangeUrl(), params);
    }
    doInviteFrnd(params) {
        return this.http.post(this.urlService.postInviteFrndUrl(), params, this.options);
    }
    //for bold file send==
    DataURIToBlob(dataURI) {
        const splitDataURI = dataURI.split(',');
        const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
        const mimeString = splitDataURI[0].split(':')[1].split(';')[0];
        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++)
            ia[i] = byteString.charCodeAt(i);
        return new Blob([ia], { type: mimeString });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _url_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage/storage.service */ 6578);
/* harmony import */ var _url_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url/url.service */ 7312);





let AuthService = class AuthService {
    constructor(storageService, http, urlService) {
        this.storageService = storageService;
        this.http = http;
        this.urlService = urlService;
    }
    doLogin(params) {
        return this.http.post(this.urlService.postLoginUrl(), params);
    }
    doRegister(params) {
        return this.http.post(this.urlService.postRegisterUrl(), params);
    }
    isLoggedIn() {
        let token = this.storageService.singleTonService("authToken");
        if (token) {
            return true;
        }
        else {
            token = this.storageService.getPermanentStorage("authToken");
            if (token) {
                this.storageService.setTosingleTonService("authToken", token);
                this.storageService.setTosingleTonService("userInfo", this.storageService.getPermanentStorage("userInfo"));
                return true;
            }
            else {
                return false;
            }
        }
    }
    getToken() {
        let token = this.storageService.singleTonService("authToken");
        if (token) {
            return token;
        }
        else {
            token = this.storageService.getPermanentStorage("authToken");
            return token;
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _url_url_service__WEBPACK_IMPORTED_MODULE_1__.UrlService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 3980:
/*!***********************************************!*\
  !*** ./src/app/services/guards/auth.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 7556);




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 5148:
/*!**************************************************!*\
  !*** ./src/app/services/guards/un-auth.guard.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnAuthGuard": () => (/* binding */ UnAuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 7556);




let UnAuthGuard = class UnAuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (!this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['dashboard']);
            return false;
        }
    }
};
UnAuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
UnAuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UnAuthGuard);



/***/ }),

/***/ 7849:
/*!*****************************************************!*\
  !*** ./src/app/services/message/message.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5485);




let MessageService = class MessageService {
    constructor(router, toastController, alertController) {
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    presentAlert(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                message: message,
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            //this.router.navigate(['login']);
                        }
                    }]
            });
            yield alert.present();
        });
    }
    presentAlertChangePassSucc(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                message: message,
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            this.router.navigate(['dashboard']);
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
MessageService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController }
];
MessageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], MessageService);



/***/ }),

/***/ 6578:
/*!*****************************************************!*\
  !*** ./src/app/services/storage/storage.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);


let StorageService = class StorageService {
    constructor() {
        this.singletnData = {};
    }
    setToPermanentStorage(key, value) {
        localStorage.setItem(key, value);
        return true;
    }
    getPermanentStorage(key) {
        return localStorage.getItem(key);
    }
    removePermanentStorage(key) {
        return localStorage.removeItem(key);
    }
    setToTempStorage(key, value) {
        sessionStorage.setItem(key, value);
        return true;
    }
    getTempStorage(key) {
        return sessionStorage.getItem(key);
    }
    removeTempStorage(key) {
        return sessionStorage.removeItem(key);
    }
    singleTonService(key) {
        return this.singletnData[key];
    }
    setTosingleTonService(key, value) {
        this.singletnData[key] = value;
        return this.singletnData[key];
    }
};
StorageService.ctorParameters = () => [];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 7312:
/*!*********************************************!*\
  !*** ./src/app/services/url/url.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlService": () => (/* binding */ UrlService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);



let UrlService = class UrlService {
    constructor() { }
    postRegisterUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.customBaseUrl + "register";
    }
    postLoginUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.customBaseUrl + "login";
    }
    postExpertiseAreaUpdateUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.customBaseUrl + "expertise/areas";
    }
    postchangpassUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "change/password/logged-in-users";
    }
    getExpertiseAreaUpdateUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.customBaseUrl + "expertise/areas";
    }
    getMyRequestsUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.customBaseUrl + "requests";
    }
    getTxnHistoryUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "transaction/history";
    }
    getOccTypeUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "customer/ocassion/page/details";
    }
    getCelebProfileUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "customer/profile";
    }
    getOccationFormSubmitURL() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "customer/occasion/add";
    }
    getRequestCustomerURL() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "customer/ocassion/requests/list";
    }
    getMyTicketsURL() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "customer/mytickets/list";
    }
    getEventsListURL() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "customer/events/list";
    }
    getEventDetailsURL() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "customer/events/details";
    }
    getcelebListURL() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "celeb/list";
    }
    getOccasionByIdURL() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "get_occation_by_id";
    }
    postForgetPassOtpUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "send/otp/forget-password";
    }
    postForgetPassOtpCheckUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "verify/otp/forget-password";
    }
    postForgetPassChangeUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "change/password/forget-password";
    }
    postInviteFrndUrl() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "invite/friend";
    }
};
UrlService.ctorParameters = () => [];
UrlService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UrlService);



/***/ }),

/***/ 1033:
/*!***************************************!*\
  !*** ./src/app/stripe/stripe.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StripePage": () => (/* binding */ StripePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _stripe_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stripe.page.html?ngResource */ 6210);
/* harmony import */ var _stripe_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stripe.page.scss?ngResource */ 5922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);






let StripePage = class StripePage {
    constructor(route, apiService, router) {
        this.route = route;
        this.apiService = apiService;
        this.router = router;
        this.apiService = apiService;
        this.router = router;
        this.stripe = Stripe('pk_live_51GvaadAkOCdLNBG63whEwMsx0xIqqvKzUa1EPf0IxvmIJ3JS971p5hBhE210paDMxZ52PlguNrPw5uNGw8chXVze00vJBRZsxX');
    }
    ngOnInit() {
        this.occ_id = this.route.snapshot.paramMap.get('id');
        this.disabled = false;
        let obj = {
            "occ_id": this.occ_id
        };
        this.apiService.fetchOccationById(obj).subscribe(res => {
            if (res.success) {
                this.occDet = res.data;
            }
        });
        this.setupStripe();
    }
    makePayment(token) {
        console.log(token);
        let paymentObj = {
            "amounts": this.occDet.reqAmount,
            "stripeToken": token,
            "ocs_id": this.occ_id
        };
        console.log(paymentObj);
        this.apiService.submitStripePayment(paymentObj).subscribe(data => {
            /*if (data.message) {*/
            /*} else {
              alert(data.error);
            }*/
        });
    }
    backtoForm() {
        this.router.navigate(['/occasion']);
    }
    setupStripe() {
        let elements = this.stripe.elements();
        var style = {
            base: {
                color: '#32325d',
                lineHeight: '24px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };
        this.card = elements.create('card', { style: style });
        this.card.mount('#card-element');
        this.card.addEventListener('change', event => {
            var displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            }
            else {
                displayError.textContent = '';
            }
        });
        var form = document.getElementById('payment-form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            this.disabled = true;
            // this.stripe.createToken(this.card)
            this.stripe.createSource(this.card).then(result => {
                if (result.error) {
                    var errorElement = document.getElementById('card-errors');
                    errorElement.textContent = result.error.message;
                    this.disabled = false;
                }
                else {
                    console.log(result);
                    this.disabled = true;
                    this.makePayment(result.source.id);
                    alert("Successfully paid and you will be notified after your YIIU is ready.");
                    this.disabled = false;
                    this.router.navigate(['request-view']);
                }
            });
        });
    }
};
StripePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
StripePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-stripe',
        template: _stripe_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stripe_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StripePage);



/***/ }),

/***/ 7666:
/*!**********************************************!*\
  !*** ./src/app/tickets/tickets.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketsComponent": () => (/* binding */ TicketsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _tickets_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tickets.component.html?ngResource */ 4693);
/* harmony import */ var _tickets_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tickets.component.scss?ngResource */ 4587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);





let TicketsComponent = class TicketsComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.celebRequests = [];
        this.user = [];
    }
    ngOnInit() {
        this.getMyTickets();
    }
    getMyTickets() {
        this.apiService.getMyTickets().subscribe(res => {
            if (res.success) {
                this.celebRequests = res.data.my_bookings;
                this.user = res.data.user;
            }
        });
    }
};
TicketsComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
TicketsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tickets',
        template: _tickets_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tickets_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TicketsComponent);



/***/ }),

/***/ 6349:
/*!**********************************************************************!*\
  !*** ./src/app/transaction-history/transaction-history.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionHistoryComponent": () => (/* binding */ TransactionHistoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _transaction_history_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction-history.component.html?ngResource */ 5469);
/* harmony import */ var _transaction_history_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction-history.component.scss?ngResource */ 9466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);





let TransactionHistoryComponent = class TransactionHistoryComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.transactionHistory = [];
    }
    ngOnInit() {
        this.getCelebEarnings();
    }
    getCelebEarnings() {
        this.apiService.getTransactionHistory().subscribe(res => {
            if (res.success) {
                this.transactionHistory = res.data.transaction_history;
                //console.log(this.transactionHistory);
            }
        });
    }
};
TransactionHistoryComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
TransactionHistoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-transaction-history',
        template: _transaction_history_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_transaction_history_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransactionHistoryComponent);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    customBaseUrl: "https://wbpta.in/api/v1/customer/",
    baseUrl: "https://wbpta.in/api/v1/"
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4909);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		470,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		2725,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6149,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		9288,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		1031,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		8310,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		1983,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		7039,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		7945,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8714,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		1786,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4702,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		4094,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		795,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		6976,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1417,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		8412,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4706,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		3459,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3354,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		1025,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		8592,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		2526,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2447,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4820,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3212,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		7557,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8692,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3544,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		42,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		718,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		5981,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		6488,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		7937,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		942,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		816,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		9062,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		3466,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		8404,
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		953,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4254,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5195,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		6116,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		9781,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8323,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		376,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2072,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 2009:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3lpaXUtY3VzdG9tZXItYW5kcmlvZC1tYWluJTIwMi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTs7RUFFRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkRBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0RBQUE7QUNIRjs7QURNQTtFQUNFLCtCQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0JBQUE7QUNIRjs7QURNQTtFQUNFLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLCtCQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUNKRjs7QURPQTtFQUNFLGlDQUFBO0FDSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuIiwiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */";

/***/ }),

/***/ 3444:
/*!*********************************************************************!*\
  !*** ./src/app/bank-details/bank-details.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: url(\"/assets/images/bg-webc112.png\") no-repeat center left/contain fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.bgpro {\n  background-image: url(\"/assets/images/bgpro.jpg\");\n  height: auto;\n  background-size: cover;\n  filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 140px;\n}\n\n.card .header .avatar {\n  width: 160px;\n  height: 100px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -84px;\n  border: 8px solid #9Dc912;\n  background-color: #fff;\n}\n\n.card-body {\n  padding: 30px;\n  height: calc(100vh - 256px);\n  overflow: hidden;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 40px;\n  font-size: 1.3rem;\n}\n\n.loginBx form {\n  text-align: center;\n}\n\n.loginBx form ion-label {\n  font-weight: 700;\n  font-size: 0.9rem;\n  padding-bottom: 10px;\n}\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form textarea {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form ion-select {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: 0.4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: 0.9em;\n}\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1;\n}\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F;\n}\n\n.loginBx form input {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form textarea {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form ion-select {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.log_in_btn {\n  width: 100%;\n  margin: 0;\n  background: #126666;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbmstZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3lpaXUtY3VzdG9tZXItYW5kcmlvZC1tYWluJTIwMi9zcmMvYXBwL2JhbmstZGV0YWlscy9iYW5rLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0RkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0k7RUFDSSxhQUFBO0FDQ1I7O0FEQ1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NaOztBRENZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ0NoQjs7QURLQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDRko7O0FESUk7RUFDSSxpQkFBQTtBQ0ZSOztBRElRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ZaOztBREtRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNIWjs7QURRQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRFFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksa0JBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0xKOztBRFFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQ0xKOztBRFFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQ0xKOztBRFFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FDTEo7O0FEUUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0xKOztBRFFBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURRQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDhFQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTEo7O0FEUUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4RUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNMSiIsImZpbGUiOiJiYW5rLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnLXdlYmMxMTIucG5nJykgbm8tcmVwZWF0IGNlbnRlciBsZWZ0L2NvbnRhaW4gZml4ZWQsICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJncHJvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JncHJvLmpwZycpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmNhcmQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG5cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IGNhbGMoLTEqKDgwcHggKyA0cHgpKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDhweCBzb2xpZCAjOURjOTEyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDIwMHB4ICsgNTZweCkpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAudXNlci1tZXRhIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG5cbiAgICAgICAgLnBsYXllcm5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzAzOTQwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvdW50cnkge1xuICAgICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgICBjb2xvcjogIzk0OWVhNjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxvZ2luQngge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDM3NHB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDI1MCwgMjUwLCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5CeCAubG9nb2xvZ2luIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZ2luQng+aDEge1xuICAgIG1hcmdpbjogMjBweCAwIDQwcHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5sb2dpbkJ4IGZvcm0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luQnggZm9ybSBpb24tbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBjb2xvcjogIzUyNTI1Mjk0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbn1cblxuLmxvZ2luQnggZm9ybSB0ZXh0YXJlYSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBjb2xvcjogIzUyNTI1Mjk0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbn1cblxuLmxvZ2luQnggZm9ybSBpb24tc2VsZWN0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbn1cblxuLnNlY29uZGFyeS1saW5rIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG9wYWNpdHk6IC40O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbn1cblxuLnNlY29uZGFyeS1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ubG9naW5CdG4ge1xuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU4RjBGO1xufVxuXG4ubG9naW5CeCBmb3JtIGlucHV0IHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTYlKSwgMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9naW5CeCBmb3JtIHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTYlKSwgMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpLCAwIDBweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTYlKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbi5sb2dfaW5fYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZDogIzEyNjY2NjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JnLXdlYmMxMTIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgbGVmdC9jb250YWluIGZpeGVkLCAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iZ3BybyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JncHJvLmpwZ1wiKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIge1xuICBoZWlnaHQ6IDE0MHB4O1xufVxuLmNhcmQgLmhlYWRlciAuYXZhdGFyIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNhcmQgLmhlYWRlciAuYXZhdGFyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtODRweDtcbiAgYm9yZGVyOiA4cHggc29saWQgIzlEYzkxMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDI1NnB4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIC5wbGF5ZXJuYW1lIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMwMzk0MDtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSAuY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBjb2xvcjogIzk0OWVhNjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5sb2dpbkJ4IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDM3NHB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMjUwLCAyNTAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luQnggLmxvZ29sb2dpbiB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZ2luQnggPiBoMSB7XG4gIG1hcmdpbjogMjBweCAwIDQwcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjA7XG4gIGNvbG9yOiAjNTI1MjUyOTQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5sb2dpbkJ4IGZvcm0gdGV4dGFyZWEge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmYwO1xuICBjb2xvcjogIzUyNTI1Mjk0O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmYwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4uc2Vjb25kYXJ5LWxpbmsge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC40O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5zZWNvbmRhcnktbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubG9naW5CdG4ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVFOEYwRjtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbi5sb2dpbkJ4IGZvcm0gdGV4dGFyZWEge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9nX2luX2J0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6ICMxMjY2NjY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */";

/***/ }),

/***/ 6143:
/*!*******************************************************************!*\
  !*** ./src/app/celebrities/celebrities.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: url(\"/assets/images/bg-webc112.png\") no-repeat center left/contain fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.bgpro {\n  background-image: url(\"/assets/images/bgpro.jpg\");\n  height: auto;\n  background-size: cover;\n  filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n}\n\n.celebriti-list-items .nav-tabs {\n  white-space: nowrap;\n  overflow: auto;\n  display: block;\n  border-bottom: none;\n}\n\n.celebriti-list-items .nav-tabs .nav-item {\n  margin-bottom: 0;\n  display: inline-block;\n}\n\n.celebriti-list-items .nav-tabs .nav-link {\n  background: #52a8ac;\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  margin: 0 5px;\n  text-decoration: none;\n}\n\n.celebriti-list-items .nav-tabs .nav-link.active, .celebriti-list-items .nav-tabs .nav-link:hover {\n  background: #0f6464;\n}\n\ndiv[id^=celeb]:not(:target) {\n  display: none;\n}\n\n.celebriti-list-items .tab-content .celebrity-item {\n  margin-bottom: 25px;\n}\n\n.celebrity-item {\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n}\n\n.cele-details {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  color: #fff;\n  text-align: center;\n  background: linear-gradient(1deg, #065e5e, #065e5e00) !important;\n  padding: 70px 0 15px;\n  transition: 0.5s;\n}\n\n.celebriti-list-items .cele-details h3 {\n  font-family: \"Playfair Display\", serif;\n  font-size: 18px;\n  font-weight: 400;\n}\n\n.cele-details p {\n  font-size: 14px;\n  color: #ffeb00;\n  margin: 0;\n}\n\n.star-rating ul {\n  margin: 0;\n  padding: 0;\n}\n\n.star-rating ul > li {\n  display: inline-block;\n  font-size: 14px !important;\n  color: #9b9b9b;\n  padding: 0 !important;\n  border: none !important;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: 0.5s ease;\n  background: linear-gradient(0deg, #065e5e, #00000000) !important;\n}\n\n.celebrity-img img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n\n.celebrity-item:hover .overlay {\n  opacity: 1;\n}\n\n.star-rating ul > li.active-str {\n  color: #fbe800;\n}\n\n.celebrity-item:hover .cele-details {\n  opacity: 0;\n  transition: 0.5;\n}\n\n.text {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.text h3 {\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n\n.text p {\n  font-size: 14px;\n  color: #ffeb00;\n}\n\n.text h4 {\n  font-size: 17px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  color: #ffe000;\n}\n\n.text i {\n  font-size: 14px;\n}\n\n.text span {\n  margin-left: 10px;\n  text-decoration: line-through;\n  color: #ffffff;\n  font-weight: 400;\n}\n\n.text span i {\n  text-decoration: line-through;\n}\n\n.book-btn {\n  background: #ff0000;\n  border: 2px solid transparent;\n  color: #fff;\n  display: inline-block;\n  padding: 5px 15px;\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n  line-height: 25px;\n  border-radius: 20px;\n  margin-top: 5px;\n}\n\n.book-btn:hover {\n  background: transparent;\n  border-color: #ff0000;\n  color: #ff0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbGVicml0aWVzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4veWlpdS1jdXN0b21lci1hbmRyaW9kLW1haW4lMjAyL3NyYy9hcHAvY2VsZWJyaXRpZXMvY2VsZWJyaXRpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0RkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7QUNFSjs7QURBQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQ0lKOztBREZFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDS0o7O0FESEU7RUFDRSxtQkFBQTtBQ01KOztBREhFO0VBRUEsYUFBQTtBQ0tGOztBREZFO0VBQ0UsbUJBQUE7QUNLSjs7QURIRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnRUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNPSjs7QURMRTtFQUNFLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUUo7O0FETkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNTSjs7QURQRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDVUo7O0FEUkU7RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNXSjs7QURURTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0VBQUE7QUNZSjs7QURWRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNhSjs7QURYRTtFQUNFLFVBQUE7QUNjSjs7QURaRTtFQUNJLGNBQUE7QUNlTjs7QURiRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDZ0JKOztBRGRFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUdBLGdDQUFBO0VBQ0Esa0JBQUE7QUNpQko7O0FEZkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2tCSjs7QURoQkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ21CSjs7QURqQkU7RUFDRSxlQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNvQko7O0FEbEJFO0VBQ0UsZUFBQTtBQ3FCSjs7QURuQkU7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDc0JKOztBRHBCRTtFQUNFLDZCQUFBO0FDdUJKOztBRHJCRTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUN3Qko7O0FEdEJFO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUN5QkoiLCJmaWxlIjoiY2VsZWJyaXRpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnLXdlYmMxMTIucG5nJykgbm8tcmVwZWF0IGNlbnRlciBsZWZ0L2NvbnRhaW4gZml4ZWQsICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJncHJvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JncHJvLmpwZycpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbi5uYXYtbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG4uY2VsZWJyaXRpLWxpc3QtaXRlbXMgLm5hdi10YWJze1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTpub25lO1xuICB9XG4gIC5jZWxlYnJpdGktbGlzdC1pdGVtcyAubmF2LXRhYnMgLm5hdi1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuY2VsZWJyaXRpLWxpc3QtaXRlbXMgIC5uYXYtdGFicyAubmF2LWxpbmt7XG4gICAgYmFja2dyb3VuZDogIzUyYThhYztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIC5jZWxlYnJpdGktbGlzdC1pdGVtcyAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSwgLmNlbGVicml0aS1saXN0LWl0ZW1zICAubmF2LXRhYnMgLm5hdi1saW5rOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IzBmNjQ2NDtcbiAgfVxuXG4gIGRpdltpZF49XCJjZWxlYlwiXTpub3QoOnRhcmdldCkgXG4gIHsgXG4gIGRpc3BsYXkgOiBub25lO1xuICB9XG4gIFxuICAuY2VsZWJyaXRpLWxpc3QtaXRlbXMgLnRhYi1jb250ZW50IC5jZWxlYnJpdHktaXRlbXtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG4gIC5jZWxlYnJpdHktaXRlbXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5jZWxlLWRldGFpbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDFkZWcsIzA2NWU1ZSwjMDY1ZTVlMDApICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNzBweCAwIDE1cHg7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xuICB9XG4gIC5jZWxlYnJpdGktbGlzdC1pdGVtcyAuY2VsZS1kZXRhaWxzIGgzIHtcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMFxuICB9XG4gIC5jZWxlLWRldGFpbHMgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjZmZlYjAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuc3Rhci1yYXRpbmcgdWwge1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbiAgfVxuICAuc3Rhci1yYXRpbmcgdWw+bGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzliOWI5YjtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIzA2NWU1ZSwjMDAwMDAwMDApICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNlbGVicml0eS1pbWcgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG4gIC5jZWxlYnJpdHktaXRlbTpob3ZlciAub3ZlcmxheSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAuc3Rhci1yYXRpbmcgdWw+bGkuYWN0aXZlLXN0cntcbiAgICAgIGNvbG9yOiAjZmJlODAwO1xuICB9XG4gIC5jZWxlYnJpdHktaXRlbTpob3ZlciAuY2VsZS1kZXRhaWxze1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogLjU7XG4gIH1cbiAgLnRleHQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC50ZXh0IGgze1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAudGV4dCBwe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI2ZmZWIwMDtcbiAgfVxuICAudGV4dCBoNHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZlMDAwO1xuICB9XG4gIC50ZXh0IGl7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC50ZXh0IHNwYW57XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICAudGV4dCBzcGFuIGl7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIH1cbiAgLmJvb2stYnRue1xuICAgIGJhY2tncm91bmQ6ICNmZjAwMDA7XG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbiAgLmJvb2stYnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmYwMDAwO1xuICAgIGNvbG9yOiNmZjAwMDA7XG4gIH0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmctd2ViYzExMi5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBsZWZ0L2NvbnRhaW4gZml4ZWQsICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJncHJvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmdwcm8uanBnXCIpO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGZpbHRlcjogYmx1cigwcHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4ubmF2LWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG5cbi5jZWxlYnJpdGktbGlzdC1pdGVtcyAubmF2LXRhYnMge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5jZWxlYnJpdGktbGlzdC1pdGVtcyAubmF2LXRhYnMgLm5hdi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY2VsZWJyaXRpLWxpc3QtaXRlbXMgLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIGJhY2tncm91bmQ6ICM1MmE4YWM7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwIDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2VsZWJyaXRpLWxpc3QtaXRlbXMgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUsIC5jZWxlYnJpdGktbGlzdC1pdGVtcyAubmF2LXRhYnMgLm5hdi1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzBmNjQ2NDtcbn1cblxuZGl2W2lkXj1jZWxlYl06bm90KDp0YXJnZXQpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNlbGVicml0aS1saXN0LWl0ZW1zIC50YWItY29udGVudCAuY2VsZWJyaXR5LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uY2VsZWJyaXR5LWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jZWxlLWRldGFpbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxZGVnLCAjMDY1ZTVlLCAjMDY1ZTVlMDApICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDcwcHggMCAxNXB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uY2VsZWJyaXRpLWxpc3QtaXRlbXMgLmNlbGUtZGV0YWlscyBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNlbGUtZGV0YWlscyBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmZWIwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3Rhci1yYXRpbmcgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zdGFyLXJhdGluZyB1bCA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM5YjliOWI7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwNjVlNWUsICMwMDAwMDAwMCkgIWltcG9ydGFudDtcbn1cblxuLmNlbGVicml0eS1pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY2VsZWJyaXR5LWl0ZW06aG92ZXIgLm92ZXJsYXkge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc3Rhci1yYXRpbmcgdWwgPiBsaS5hY3RpdmUtc3RyIHtcbiAgY29sb3I6ICNmYmU4MDA7XG59XG5cbi5jZWxlYnJpdHktaXRlbTpob3ZlciAuY2VsZS1kZXRhaWxzIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41O1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dCBoMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udGV4dCBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmZWIwMDtcbn1cblxuLnRleHQgaDQge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNmZmUwMDA7XG59XG5cbi50ZXh0IGkge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi50ZXh0IHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udGV4dCBzcGFuIGkge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmJvb2stYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmMDAwMDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5ib29rLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6ICNmZjAwMDA7XG4gIGNvbG9yOiAjZmYwMDAwO1xufSJdfQ== */";

/***/ }),

/***/ 686:
/*!*************************************************************************************!*\
  !*** ./src/app/celebrity-onboarding/celebrity-onboarding.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: url(\"/assets/images/bg-webc112.png\") no-repeat center left/contain fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.bgpro {\n  background-image: url(\"/assets/images/bgpro.jpg\");\n  height: auto;\n  background-size: cover;\n  filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 140px;\n}\n\n.card .header .avatar {\n  width: 160px;\n  height: 100px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -84px;\n  border: 8px solid #9Dc912;\n  background-color: #fff;\n}\n\n.card-body {\n  padding: 30px;\n  height: calc(100vh - 256px);\n  text-align: center;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 40px;\n  font-size: 1.3rem;\n}\n\n.loginBx form {\n  text-align: left;\n}\n\nform label {\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form textarea {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form ion-select {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: 0.4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: 0.9em;\n}\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1;\n}\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F;\n}\n\n.loginBx form .exp-area {\n  padding: 1%;\n  margin-bottom: 15px;\n}\n\n.loginBx form .exp-area .form-group {\n  border-bottom: 1px solid #c8cccf;\n  margin-bottom: 5px;\n}\n\n.loginBx form p {\n  font-size: 14px;\n  color: #57595a;\n}\n\n.loginBx form .form-smlinput {\n  width: 87%;\n  margin-left: 10px;\n}\n\n.loginBx form input {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form textarea {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form ion-select {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.log_in_btn {\n  width: 100%;\n  margin: 0;\n  background: #126666;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.face_btn {\n  background: #4267b2;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 50px;\n  display: block;\n  width: 140px;\n  text-align: center;\n  margin: 0 5px;\n}\n\n.g_btn {\n  background: #db4437;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 50px;\n  width: 120px;\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbGVicml0eS1vbmJvYXJkaW5nLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4veWlpdS1jdXN0b21lci1hbmRyaW9kLW1haW4lMjAyL3NyYy9hcHAvY2VsZWJyaXR5LW9uYm9hcmRpbmcvY2VsZWJyaXR5LW9uYm9hcmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0RkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0k7RUFDSSxhQUFBO0FDQ1I7O0FEQ1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NaOztBRENZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ0NoQjs7QURLQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FESUk7RUFDSSxpQkFBQTtBQ0ZSOztBRElRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ZaOztBREtRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNIWjs7QURRQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRFFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksZ0JBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQ0xKOztBRFFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FDTEo7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0FDTEo7O0FEUUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDTEo7O0FEUUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ0xKOztBRFFBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNMSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ0xKOztBRFFBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRFFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNMSjs7QURRQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURRQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDhFQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTEo7O0FEUUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4RUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNMSjs7QURRQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNMSjs7QURRQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0xKIiwiZmlsZSI6ImNlbGVicml0eS1vbmJvYXJkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZy13ZWJjMTEyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgbGVmdC9jb250YWluIGZpeGVkLCAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5iZ3BybyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZ3Byby5qcGcnKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIC5oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuXG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiBjYWxjKC0xKig4MHB4ICsgNHB4KSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiA4cHggc29saWQgIzlEYzkxMjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgyMDBweCArIDU2cHgpKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAudXNlci1tZXRhIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG5cbiAgICAgICAgLnBsYXllcm5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzAzOTQwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvdW50cnkge1xuICAgICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgICBjb2xvcjogIzk0OWVhNjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxvZ2luQngge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDM3NHB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDI1MCwgMjUwLCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5CeCAubG9nb2xvZ2luIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZ2luQng+aDEge1xuICAgIG1hcmdpbjogMjBweCAwIDQwcHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5sb2dpbkJ4IGZvcm0ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmZvcm0gbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBjb2xvcjogIzUyNTI1Mjk0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbn1cblxuLmxvZ2luQnggZm9ybSB0ZXh0YXJlYSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBjb2xvcjogIzUyNTI1Mjk0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbn1cblxuLmxvZ2luQnggZm9ybSBpb24tc2VsZWN0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbn1cblxuLnNlY29uZGFyeS1saW5rIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG9wYWNpdHk6IC40O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbn1cblxuLnNlY29uZGFyeS1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ubG9naW5CdG4ge1xuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU4RjBGO1xufVxuXG4ubG9naW5CeCBmb3JtIC5leHAtYXJlYSB7XG4gICAgcGFkZGluZzogMSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmxvZ2luQnggZm9ybSAuZXhwLWFyZWEgLmZvcm0tZ3JvdXAge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzhjY2NmO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmxvZ2luQnggZm9ybSBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM1NzU5NWE7XG59XG5cbi5sb2dpbkJ4IGZvcm0gLmZvcm0tc21saW5wdXQge1xuICAgIHdpZHRoOiA4NyU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW5wdXQge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpLCAwIDBweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTYlKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbi5sb2dpbkJ4IGZvcm0gdGV4dGFyZWEge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpLCAwIDBweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTYlKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW9uLXNlbGVjdCB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSksIDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuLmxvZ19pbl9idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kOiAjMTI2NjY2O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmZhY2VfYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDI2N2IyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgNXB4O1xufVxuXG4uZ19idG4ge1xuICAgIGJhY2tncm91bmQ6ICNkYjQ0Mzc7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZy13ZWJjMTEyLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGxlZnQvY29udGFpbiBmaXhlZCwgI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmdwcm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZ3Byby5qcGdcIik7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmlsdGVyOiBibHVyKDBweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNDBweDtcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTg0cHg7XG4gIGJvcmRlcjogOHB4IHNvbGlkICM5RGM5MTI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAzMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTZweCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIC5wbGF5ZXJuYW1lIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMwMzk0MDtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSAuY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBjb2xvcjogIzk0OWVhNjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5sb2dpbkJ4IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDM3NHB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMjUwLCAyNTAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luQnggLmxvZ29sb2dpbiB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZ2luQnggPiBoMSB7XG4gIG1hcmdpbjogMjBweCAwIDQwcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuZm9ybSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmYwO1xuICBjb2xvcjogIzUyNTI1Mjk0O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIHRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmYwO1xuICBjb2xvcjogIzUyNTI1Mjk0O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5zZWNvbmRhcnktbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAwLjQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLnNlY29uZGFyeS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5sb2dpbkJ0biB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU4RjBGO1xufVxuXG4ubG9naW5CeCBmb3JtIC5leHAtYXJlYSB7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubG9naW5CeCBmb3JtIC5leHAtYXJlYSAuZm9ybS1ncm91cCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzhjY2NmO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5sb2dpbkJ4IGZvcm0gcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM1NzU5NWE7XG59XG5cbi5sb2dpbkJ4IGZvcm0gLmZvcm0tc21saW5wdXQge1xuICB3aWR0aDogODclO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbi5sb2dpbkJ4IGZvcm0gdGV4dGFyZWEge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9nX2luX2J0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6ICMxMjY2NjY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5mYWNlX2J0biB7XG4gIGJhY2tncm91bmQ6ICM0MjY3YjI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLmdfYnRuIHtcbiAgYmFja2dyb3VuZDogI2RiNDQzNztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";

/***/ }),

/***/ 2464:
/*!*****************************************************************************!*\
  !*** ./src/app/celebrity-videos/celebrity-videos.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZWxlYnJpdHktdmlkZW9zLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 2569:
/*!***************************************************************************!*\
  !*** ./src/app/change-password/change-password.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content, body, :host {\n  --background: url(\"/assets/images/bg-webc112.png\") no-repeat center left/contain fixed, #fff;\n}\n\n.bgpro {\n  background-image: url(\"/assets/images/bgpro.jpg\");\n  height: auto;\n  background-size: cover;\n  filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 140px;\n}\n\n.card .header .avatar {\n  width: 160px;\n  height: 100px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -84px;\n  border: 8px solid #9Dc912;\n  background-color: #fff;\n}\n\n.card-body {\n  padding: 30px;\n  height: calc(100vh - 256px);\n  overflow: hidden;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 40px;\n  font-size: 1.3rem;\n}\n\n.loginBx form {\n  text-align: left;\n}\n\nform label {\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form textarea {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form ion-select {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: 0.4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: 0.9em;\n}\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1;\n}\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F;\n}\n\n.loginBx form input {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form textarea {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form ion-select {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.log_in_btn {\n  width: 100%;\n  margin: 0;\n  background: #126666;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3lpaXUtY3VzdG9tZXItYW5kcmlvZC1tYWluJTIwMi9zcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0RkFBQTtBQ0NKOztBREdBO0VBQ0ksaURBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURFSTtFQUNJLGFBQUE7QUNBUjs7QURFUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQVo7O0FERVk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDQWhCOztBRE1BO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURLSTtFQUNJLGlCQUFBO0FDSFI7O0FES1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSFo7O0FETVE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0paOztBRFNBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFNBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDTko7O0FEU0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FDTko7O0FEU0E7RUFDSSxnQkFBQTtBQ05KOztBRFNBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQ05KOztBRFNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQ05KOztBRFNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7QUNOSjs7QURTQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QURTQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FDTko7O0FEU0E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ05KOztBRFNBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURTQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDhFQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTko7O0FEU0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4RUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFNBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNOSiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCxib2R5LDpob3N0IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmctd2ViYzExMi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGxlZnQvY29udGFpbiBmaXhlZCwgI2ZmZjtcbiAgIFxufVxuXG4uYmdwcm8ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmdwcm8uanBnJyk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcblxuICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogY2FsYygtMSooODBweCArIDRweCkpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogOHB4IHNvbGlkICM5RGM5MTI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoMjAwcHggKyA1NnB4KSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC51c2VyLW1ldGEge1xuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcblxuICAgICAgICAucGxheWVybmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICMzMDM5NDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY291bnRyeSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDkwJTtcbiAgICAgICAgICAgIGNvbG9yOiAjOTQ5ZWE2O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubG9naW5CeCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogMzc0cHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMjUwLCAyNTAsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbkJ4IC5sb2dvbG9naW4ge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubG9naW5CeD5oMSB7XG4gICAgbWFyZ2luOiAyMHB4IDAgNDBweDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmxvZ2luQnggZm9ybSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuZm9ybSBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IC45cmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIGlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYwO1xuICAgIGNvbG9yOiAjNTI1MjUyOTQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIHRleHRhcmVhIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYwO1xuICAgIGNvbG9yOiAjNTI1MjUyOTQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzUpO1xufVxuXG4uc2Vjb25kYXJ5LWxpbmsge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eTogLjQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgZm9udC1zaXplOiAuOWVtO1xufVxuXG4uc2Vjb25kYXJ5LWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5sb2dpbkJ0biB7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RThGMEY7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW5wdXQge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpLCAwIDBweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTYlKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbi5sb2dpbkJ4IGZvcm0gdGV4dGFyZWEge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpLCAwIDBweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTYlKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW9uLXNlbGVjdCB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSksIDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuLmxvZ19pbl9idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kOiAjMTI2NjY2O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMTBweDtcbn0iLCJpb24tY29udGVudCwgYm9keSwgOmhvc3Qge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JnLXdlYmMxMTIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgbGVmdC9jb250YWluIGZpeGVkLCAjZmZmO1xufVxuXG4uYmdwcm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZ3Byby5qcGdcIik7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmlsdGVyOiBibHVyKDBweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNDBweDtcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTg0cHg7XG4gIGJvcmRlcjogOHB4IHNvbGlkICM5RGM5MTI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAzMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTZweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSAucGxheWVybmFtZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMDM5NDA7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEgLmNvdW50cnkge1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICM5NDllYTY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubG9naW5CeCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAzNzRweDtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDI1MCwgMjUwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbkJ4IC5sb2dvbG9naW4ge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2dpbkJ4ID4gaDEge1xuICBtYXJnaW46IDIwcHggMCA0MHB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmxvZ2luQnggZm9ybSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmZvcm0gbGFiZWwge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjA7XG4gIGNvbG9yOiAjNTI1MjUyOTQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5sb2dpbkJ4IGZvcm0gdGV4dGFyZWEge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmYwO1xuICBjb2xvcjogIzUyNTI1Mjk0O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmYwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4uc2Vjb25kYXJ5LWxpbmsge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC40O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5zZWNvbmRhcnktbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubG9naW5CdG4ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVFOEYwRjtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbi5sb2dpbkJ4IGZvcm0gdGV4dGFyZWEge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9nX2luX2J0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6ICMxMjY2NjY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */";

/***/ }),

/***/ 7801:
/*!*****************************************************************************!*\
  !*** ./src/app/customeroccasion/customeroccasion.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lcm9jY2FzaW9uLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 6057:
/*!***************************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: url(\"/assets/images/bg-webc112.png\") no-repeat center left/contain fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\na {\n  text-decoration: none;\n}\n\n.dashboard_item {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07), 0 2px 10px 0 rgba(0, 0, 0, 0.04);\n  text-align: center;\n  padding: 30px 10px;\n  margin-bottom: 20px;\n  min-height: 180px;\n  transition: 0.5s;\n  border-radius: 30px;\n  background: linear-gradient(359deg, #0e136F, #90d5ffab);\n}\n\n.dashboard_item:hover {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.28), 0 2px 10px 0 rgba(0, 0, 0, 0.18);\n}\n\n.dshborad_item_icon img {\n  width: 60px;\n}\n\n.dashboard_item_name {\n  margin-top: 10px;\n}\n\n.dashboard_item_name h1 {\n  font-size: 15px;\n  margin: 0;\n  font-weight: 600;\n  line-height: 15px;\n  color: #fff;\n  margin-bottom: 5px;\n}\n\n.dashboard_item_name p {\n  font-size: 12px !important;\n  color: #a0a0a0 !important;\n  margin: 0 !important;\n  line-height: 15px;\n  margin-top: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3lpaXUtY3VzdG9tZXItYW5kcmlvZC1tYWluJTIwMi9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyw0RkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRDs7QURDQTtFQUNJLHFCQUFBO0FDRUo7O0FEQUE7RUFDSSw2RUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUFBO0FDR0o7O0FEREE7RUFDSSw2RUFBQTtBQ0lKOztBRERBO0VBQ0ksV0FBQTtBQ0lKOztBREZBO0VBQ0ksZ0JBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ01KOztBREpBO0VBQ0ksMEJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ09KIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcblx0LS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnLXdlYmMxMTIucG5nJykgbm8tcmVwZWF0IGNlbnRlciBsZWZ0L2NvbnRhaW4gZml4ZWQsICNmZmY7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcbn1cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5kYXNoYm9hcmRfaXRlbSB7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiKDAgMCAwIC8gNyUpLCAwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gNCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtaW4taGVpZ2h0OiAxODBweDtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgYm9yZGVyLXJhZGl1czozMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNTlkZWcsIzBlMTM2RiwjOTBkNWZmYWIpO1xufVxuLmRhc2hib2FyZF9pdGVtOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2IoMCAwIDAgLyAyOCUpLCAwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTglKTtcbn1cblxuLmRzaGJvcmFkX2l0ZW1faWNvbiBpbWcge1xuICAgIHdpZHRoOiA2MHB4O1xufVxuLmRhc2hib2FyZF9pdGVtX25hbWUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZGFzaGJvYXJkX2l0ZW1fbmFtZSBoMSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5kYXNoYm9hcmRfaXRlbV9uYW1lIHAge1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjYTBhMGEwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JnLXdlYmMxMTIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgbGVmdC9jb250YWluIGZpeGVkLCAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5kYXNoYm9hcmRfaXRlbSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4wNyksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWluLWhlaWdodDogMTgwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNTlkZWcsICMwZTEzNkYsICM5MGQ1ZmZhYik7XG59XG5cbi5kYXNoYm9hcmRfaXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuXG4uZHNoYm9yYWRfaXRlbV9pY29uIGltZyB7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4uZGFzaGJvYXJkX2l0ZW1fbmFtZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5kYXNoYm9hcmRfaXRlbV9uYW1lIGgxIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZGFzaGJvYXJkX2l0ZW1fbmFtZSBwIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYTBhMGEwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 2392:
/*!*********************************************************************!*\
  !*** ./src/app/eventdetails/eventdetails.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: url('bg-webc112.png') no-repeat left center/contain fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  font-size: 1.3rem;\n}\n\n.bgpro {\n  background-image: url(\"/assets/images/bgpro.jpg\");\n  height: auto;\n  background-size: cover;\n  filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: 5px;\n  margin-left: 5px;\n}\n\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.left-event-section {\n  background: #fff;\n  border-radius: 5px;\n  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.1);\n}\n\n.image-left-enent {\n  padding: 10px;\n}\n\n.image-left-enent img {\n  width: 100%;\n}\n\n.item-details {\n  padding: 0 10px 10px;\n}\n\n.item-details h3 {\n  font-family: \"Montserrat\", sans-serif;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: #0f6464;\n  margin: 0;\n}\n\n.item-details p {\n  text-align: center;\n  font-size: 12px;\n  line-height: 16px;\n  color: #7e7e7e;\n  font-weight: 400;\n  margin: 0;\n}\n\n.share-item {\n  padding: 10px;\n  border-top: 1px dashed #dbdbdb80;\n  text-align: center;\n}\n\n.share-item p {\n  text-align: center;\n  font-size: 12px;\n  font-weight: 500;\n  color: #727272;\n  margin: 0;\n}\n\n.share-item a {\n  border: 1px solid #a6a6a6;\n  padding: 0px 15px;\n  display: inline-block;\n  font-size: 13px;\n  color: #a6a6a6;\n  border-radius: 10px;\n  transition: 0.8s;\n}\n\n.share-item a:hover {\n  border: 1px solid #7e7e7e;\n  background: #7e7e7e;\n  color: #fff;\n}\n\n.ticket-details {\n  margin-top: 15px;\n  padding: 15px 10px;\n  background: #fff;\n  border-radius: 5px;\n  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.1);\n}\n\n.note-section p {\n  display: flex;\n  align-items: start;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 16px;\n}\n\n.note-section p i {\n  line-height: 22px;\n  margin-right: 5px;\n}\n\n.ticket-type {\n  margin-top: 20px;\n}\n\n.ticket-heading {\n  border-bottom: 1px solid #afafaf;\n}\n\n.ticket-heading p {\n  font-size: 12px;\n  color: #0f6464;\n  font-weight: 500;\n  margin: 0;\n}\n\n.ticket-data-type {\n  padding: 15px 0;\n  border-bottom: 1px solid #afafaf;\n}\n\n.ticket-data-type p {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 30px;\n  margin: 0;\n}\n\n.ticket-data-type p span {\n  font-size: 12px;\n  font-weight: 500;\n  font-family: \"Montserrat\", sans-serif;\n  color: #353535;\n}\n\n.ticket-data-type .custom-select {\n  margin: 0;\n  font-size: 14px;\n  height: 30px;\n  line-height: 16px;\n  border-radius: 5px;\n}\n\n.ticket-data-type .custom-select:focus {\n  border: 1px solid #000;\n  outline: 0;\n  box-shadow: none;\n}\n\n.event-details {\n  margin-top: 25px;\n}\n\n.event-details h3 {\n  font-family: \"Montserrat\", sans-serif;\n  border-bottom: 1px solid #afafaf;\n  font-size: 12px;\n  font-weight: 700;\n  color: #09615f;\n  padding-bottom: 5px;\n}\n\n.event-details ul {\n  margin: 0;\n  padding: 0;\n}\n\n.event-details ul > li {\n  list-style: none;\n  font-size: 12px;\n  font-weight: 600;\n  border-bottom: 1px dashed #e0e0e0;\n  padding: 5px 0;\n}\n\n.event-details ul > li:last-child {\n  border-bottom: none;\n}\n\n.event-details ul > li span {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 12px;\n  color: #4c4c4c;\n  font-weight: 500;\n}\n\n/*============== Choose Table================*/\n\n.book-yur-tbl {\n  margin-top: 20px;\n}\n\n.book-yur-tbl .home-event-heading {\n  background: #f5f5f5;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.book-yur-tbl .home-event-heading h1 {\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  color: #065e5e;\n  font-weight: 700;\n  font-size: 20px;\n  margin: 0;\n  background: #fff;\n  display: inline-block;\n  padding: 2px 20px;\n}\n\n.soldout::before {\n  background-color: #00000054;\n  content: \" \";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n\n.table-type-area {\n  display: flex;\n}\n\n.view-tble-name {\n  height: 102px;\n  width: 100px;\n  padding: 10px;\n  background: #fff;\n  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 10px; */\n  border-radius: 5px;\n  transition: 0.5s;\n  border: 2px solid #ccc;\n  color: #949494;\n  transition: 0.5s;\n  margin-right: 5px;\n  display: table-cell;\n  align-items: center;\n  position: relative;\n}\n\n.view-tble-name h4 {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n  text-align: center;\n}\n\n.view-tble-name:hover {\n  background: #ebebeb;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 10px;\n}\n\n.view-table-others-details {\n  padding: 10px 20px;\n  background: #e9e9e99e;\n  border-radius: 5px;\n}\n\n.select-table-area li {\n  display: inline-block;\n  width: 49%;\n}\n\n.view-table-others-details p {\n  font-size: 12px;\n  font-weight: 600;\n  color: #065e5e;\n}\n\n.ticket-indi {\n  text-align: right;\n  font-size: 10px !important;\n  color: #f00 !important;\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.view-table-others-details .custom-select {\n  font-size: 12px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  margin-top: 5px;\n}\n\n@media (min-width: 320px) {\n  .select-table-area li {\n    display: inline-block;\n    width: 100%;\n  }\n}\n\n@media (min-width: 480px) {\n  .select-table-area li {\n    display: inline-block;\n    width: 49%;\n  }\n}\n\n@media (min-width: 768px) {\n  .select-table-area li {\n    display: inline-block;\n    width: 100%;\n  }\n}\n\n@media (min-width: 992px) {\n  .select-table-area li {\n    display: inline-block;\n    width: 49%;\n  }\n}\n\n/*======End Choose table=====*/\n\n.buy-ticket-btn {\n  background: #ff0a0a;\n  color: #fff;\n  font-size: 12px;\n  text-transform: uppercase;\n  padding: 10px 25px;\n  display: table;\n  margin-top: 10px;\n  position: fixed;\n  bottom: 0px;\n  text-align: center;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  border: none;\n}\n\n.details-event-area {\n  margin-top: 25px;\n  padding: 15px 10px;\n  background: #fff;\n  border-radius: 5px;\n  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.1);\n}\n\n.details-event-area-left h3 {\n  font-family: \"Montserrat\", sans-serif;\n  border-bottom: 1px solid #afafaf;\n  font-size: 12px;\n  font-weight: 700;\n  color: #09615f;\n  padding-bottom: 5px;\n  margin-bottom: 10px;\n}\n\n.details-event-area-left ul > li {\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 0;\n}\n\n.details-event-area-left ul > li span {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 12px;\n  color: #4c4c4c;\n  font-weight: 500;\n}\n\n.details-event-area-left p {\n  font-size: 12px;\n  font-weight: 500;\n  text-align: justify;\n  margin: 0;\n}\n\n.location-right {\n  margin-top: 15px;\n}\n\n.location-right a {\n  font-size: 13px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50ZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3lpaXUtY3VzdG9tZXItYW5kcmlvZC1tYWluJTIwMi9zcmMvYXBwL2V2ZW50ZGV0YWlscy9ldmVudGRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2RUFBQTtFQUFrRyxrQkFBQTtFQUNsRyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxpREFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtBQ0VKOztBREFBO0VBRUksYUFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFFSSxhQUFBO0VBQ0EsY0FBQTtBQ0lKOztBRERFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDSUo7O0FERkU7RUFDRSxhQUFBO0FDS0o7O0FESEU7RUFDRSxXQUFBO0FDTUo7O0FESkU7RUFDRSxvQkFBQTtBQ09KOztBRExFO0VBQ0UscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDUUo7O0FETkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNTSjs7QURQRTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDVUo7O0FEUkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDV0o7O0FEVEU7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNZSjs7QURWRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDYUo7O0FEWEU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDY0o7O0FEVEU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1lKOztBRFZFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ2FKOztBRFhFO0VBQ0UsZ0JBQUE7QUNjSjs7QURaRTtFQUNFLGdDQUFBO0FDZUo7O0FEYkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ2dCSjs7QURkRTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQ2lCSjs7QURmRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ2tCSjs7QURoQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QUNtQko7O0FEakJFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ29CSjs7QURsQkU7RUFDRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ3FCSjs7QURuQkU7RUFDRSxnQkFBQTtBQ3NCSjs7QURwQkU7RUFDRSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDdUJKOztBRHJCRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDd0JKOztBRHRCRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FDeUJKOztBRHZCRTtFQUNFLG1CQUFBO0FDMEJKOztBRHhCRTtFQUNFLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQzJCSjs7QUR6QkUsOENBQUE7O0FBQ0E7RUFDSSxnQkFBQTtBQzRCTjs7QUQxQkU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUM2Qko7O0FEM0JFO0VBQ0UscUNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDOEJKOztBRDVCRTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUMrQko7O0FEN0JFO0VBQ0UsYUFBQTtBQ2dDSjs7QUQ5QkU7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNpQ047O0FEL0JFO0VBQ0kscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDa0NOOztBRGhDRTtFQUNJLG1CQUFBO0VBQ0EsNENBQUE7QUNtQ047O0FEakNFO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDb0NOOztBRGxDRTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtBQ3FDTjs7QURuQ0U7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDc0NOOztBRHBDRTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3VDTjs7QURyQ0U7RUFDSSxlQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUN3Q047O0FEdENFO0VBQ0E7SUFDSSxxQkFBQTtJQUNBLFdBQUE7RUN5Q0o7QUFDRjs7QUR2Q0U7RUFDQTtJQUNJLHFCQUFBO0lBQ0EsVUFBQTtFQ3lDSjtBQUNGOztBRHZDRTtFQUNBO0lBQ0kscUJBQUE7SUFDQSxXQUFBO0VDeUNKO0FBQ0Y7O0FEdkNFO0VBQ0E7SUFDSSxxQkFBQTtJQUNBLFVBQUE7RUN5Q0o7QUFDRjs7QUR2Q0UsOEJBQUE7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDeUNKOztBRHZDRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUMwQ0o7O0FEeENFO0VBQ0UscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDMkNKOztBRHpDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUM0Q0o7O0FEMUNFO0VBQ0UscUNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDNkNKOztBRDNDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQzhDSjs7QUQ1Q0U7RUFDRSxnQkFBQTtBQytDSjs7QUQ3Q0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNnREoiLCJmaWxlIjoiZXZlbnRkZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JnLXdlYmMxMTIucG5nJykgbm8tcmVwZWF0IGxlZnQgY2VudGVyL2NvbnRhaW4gZml4ZWQsICNmZmY7cG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmJncHJvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JncHJvLmpwZycpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbi5yb3cge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5jb2wtMyB7XG4gICAgLW1zLWZsZXg6IDAgMCAyNSU7XG4gICAgZmxleDogMCAwIDI1JTtcbiAgICBtYXgtd2lkdGg6IDI1JTtcbn1cblxuICAubGVmdC1ldmVudC1zZWN0aW9ue1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDIwcHggMCByZ2IoMCAwIDAgLyAxMCUpO1xuICB9XG4gIC5pbWFnZS1sZWZ0LWVuZW50e1xuICAgIHBhZGRpbmc6MTBweDtcbiAgfVxuICAuaW1hZ2UtbGVmdC1lbmVudCBpbWd7XG4gICAgd2lkdGg6MTAwJTtcbiAgfVxuICAuaXRlbS1kZXRhaWxze1xuICAgIHBhZGRpbmc6MCAxMHB4IDEwcHg7XG4gIH1cbiAgLml0ZW0tZGV0YWlscyBoM3tcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzBmNjQ2NDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLml0ZW0tZGV0YWlscyBwe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgY29sb3I6ICM3ZTdlN2U7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLnNoYXJlLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjZGJkYmRiODA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5zaGFyZS1pdGVtIHB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNzI3MjcyO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuc2hhcmUtaXRlbSBhe1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhNmE2YTY7XG4gICAgcGFkZGluZzogMHB4IDE1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogI2E2YTZhNjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRyYW5zaXRpb246LjhzO1xuICB9XG4gIC5zaGFyZS1pdGVtIGE6aG92ZXJ7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjN2U3ZTdlO1xuICAgIGJhY2tncm91bmQ6IzdlN2U3ZTtcbiAgICBjb2xvcjojZmZmO1xuICB9XG4gIC50aWNrZXQtZGV0YWlsc3tcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwIDNweCAyMHB4IDAgcmdiKDAgMCAwIC8gMTAlKTtcbiAgfVxuICAubm90ZS1zZWN0aW9ue1xuICAgICAgXG4gIH1cbiAgLm5vdGUtc2VjdGlvbiBwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB9XG4gIC5ub3RlLXNlY3Rpb24gcCBpe1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gIC50aWNrZXQtdHlwZXtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIC50aWNrZXQtaGVhZGluZ3tcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FmYWZhZjtcbiAgfVxuICAudGlja2V0LWhlYWRpbmcgcHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMwZjY0NjQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46MDtcbiAgfVxuICAudGlja2V0LWRhdGEtdHlwZXtcbiAgICBwYWRkaW5nOjE1cHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FmYWZhZjtcbiAgfVxuICAudGlja2V0LWRhdGEtdHlwZSBwe1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OjMwcHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC50aWNrZXQtZGF0YS10eXBlIHAgc3BhbntcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjMzUzNTM1O1xuICB9XG4gIC50aWNrZXQtZGF0YS10eXBlIC5jdXN0b20tc2VsZWN0e1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICAudGlja2V0LWRhdGEtdHlwZSAuY3VzdG9tLXNlbGVjdDpmb2N1cyB7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMDAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAuZXZlbnQtZGV0YWlsc3tcbiAgICBtYXJnaW4tdG9wOjI1cHg7XG4gIH1cbiAgLmV2ZW50LWRldGFpbHMgaDN7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FmYWZhZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzA5NjE1ZjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICB9XG4gIC5ldmVudC1kZXRhaWxzIHVse1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5ldmVudC1kZXRhaWxzIHVsPmxpe1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZTBlMGUwO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICB9XG4gIC5ldmVudC1kZXRhaWxzIHVsPmxpOmxhc3QtY2hpbGR7XG4gICAgYm9yZGVyLWJvdHRvbTpub25lO1xuICB9XG4gIC5ldmVudC1kZXRhaWxzIHVsPmxpIHNwYW57XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM0YzRjNGM7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAvKj09PT09PT09PT09PT09IENob29zZSBUYWJsZT09PT09PT09PT09PT09PT0qL1xuICAuYm9vay15dXItdGJse1xuICAgICAgbWFyZ2luLXRvcDoyMHB4O1xuICB9XG4gIC5ib29rLXl1ci10YmwgLmhvbWUtZXZlbnQtaGVhZGluZyB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICAuYm9vay15dXItdGJsIC5ob21lLWV2ZW50LWhlYWRpbmcgaDEge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzA2NWU1ZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMnB4IDIwcHg7XG4gIH1cbiAgLnNvbGRvdXQ6OmJlZm9yZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTQ7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIC50YWJsZS10eXBlLWFyZWF7XG4gICAgZGlzcGxheTpmbGV4O1xuICB9XG4gIC52aWV3LXRibGUtbmFtZXtcbiAgICAgIGhlaWdodDogMTAycHg7XG4gICAgICB3aWR0aDoxMDBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgLyogYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggMHB4IDEwcHg7ICovXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICAgICAgY29sb3I6ICM5NDk0OTQ7XG4gICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcbiAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAudmlldy10YmxlLW5hbWUgaDR7XG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC52aWV3LXRibGUtbmFtZTpob3ZlcntcbiAgICAgIGJhY2tncm91bmQ6I2ViZWJlYjtcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDBweCAxMHB4O1xuICB9XG4gIC52aWV3LXRhYmxlLW90aGVycy1kZXRhaWxze1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTllO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIC5zZWxlY3QtdGFibGUtYXJlYSBsaXtcbiAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6NDklO1xuICB9XG4gIC52aWV3LXRhYmxlLW90aGVycy1kZXRhaWxzIHB7XG4gICAgICBmb250LXNpemU6MTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICAgIGNvbG9yOiMwNjVlNWU7XG4gIH1cbiAgLnRpY2tldC1pbmRpe1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjZjAwICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC52aWV3LXRhYmxlLW90aGVycy1kZXRhaWxzIC5jdXN0b20tc2VsZWN0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbWFyZ2luLXRvcDo1cHg7XG4gIH1cbiAgQG1lZGlhKG1pbi13aWR0aDozMjBweCl7XG4gIC5zZWxlY3QtdGFibGUtYXJlYSBsaXtcbiAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6MTAwJTtcbiAgfVxuICB9XG4gIEBtZWRpYShtaW4td2lkdGg6NDgwcHgpe1xuICAuc2VsZWN0LXRhYmxlLWFyZWEgbGl7XG4gICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOjQ5JTtcbiAgfVxuICB9XG4gIEBtZWRpYShtaW4td2lkdGg6NzY4cHgpe1xuICAuc2VsZWN0LXRhYmxlLWFyZWEgbGl7XG4gICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOjEwMCU7XG4gIH1cbiAgfVxuICBAbWVkaWEobWluLXdpZHRoOjk5MnB4KXtcbiAgLnNlbGVjdC10YWJsZS1hcmVhIGxpe1xuICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDo0OSU7XG4gIH1cbiAgfVxuICAvKj09PT09PUVuZCBDaG9vc2UgdGFibGU9PT09PSovXG4gIC5idXktdGlja2V0LWJ0bntcbiAgICBiYWNrZ3JvdW5kOiAjZmYwYTBhO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAuZGV0YWlscy1ldmVudC1hcmVhe1xuICAgIG1hcmdpbi10b3A6MjVweDtcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMjBweCAwIHJnYigwIDAgMCAvIDEwJSk7XG4gIH1cbiAgLmRldGFpbHMtZXZlbnQtYXJlYS1sZWZ0IGgzIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWZhZmFmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDk2MTVmO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICB9XG4gIC5kZXRhaWxzLWV2ZW50LWFyZWEtbGVmdCB1bD5saXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAzcHggMDtcbiAgfVxuICAuZGV0YWlscy1ldmVudC1hcmVhLWxlZnQgdWw+bGkgc3BhbntcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzRjNGM0YztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIC5kZXRhaWxzLWV2ZW50LWFyZWEtbGVmdCBwe1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5sb2NhdGlvbi1yaWdodHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG4gIC5sb2NhdGlvbi1yaWdodCBhe1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gICIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2JnLXdlYmMxMTIucG5nXCIpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlci9jb250YWluIGZpeGVkLCAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uYmdwcm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZ3Byby5qcGdcIik7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmlsdGVyOiBibHVyKDBweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmNvbC0zIHtcbiAgLW1zLWZsZXg6IDAgMCAyNSU7XG4gIGZsZXg6IDAgMCAyNSU7XG4gIG1heC13aWR0aDogMjUlO1xufVxuXG4ubGVmdC1ldmVudC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDNweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaW1hZ2UtbGVmdC1lbmVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pbWFnZS1sZWZ0LWVuZW50IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaXRlbS1kZXRhaWxzIHtcbiAgcGFkZGluZzogMCAxMHB4IDEwcHg7XG59XG5cbi5pdGVtLWRldGFpbHMgaDMge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzBmNjQ2NDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaXRlbS1kZXRhaWxzIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAjN2U3ZTdlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5zaGFyZS1pdGVtIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjZGJkYmRiODA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNoYXJlLWl0ZW0gcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzcyNzI3MjtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2hhcmUtaXRlbSBhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2YTZhNjtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2E2YTZhNjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNpdGlvbjogMC44cztcbn1cblxuLnNoYXJlLWl0ZW0gYTpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ZTdlN2U7XG4gIGJhY2tncm91bmQ6ICM3ZTdlN2U7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGlja2V0LWRldGFpbHMge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAzcHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLm5vdGUtc2VjdGlvbiBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4ubm90ZS1zZWN0aW9uIHAgaSB7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnRpY2tldC10eXBlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRpY2tldC1oZWFkaW5nIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZmFmYWY7XG59XG5cbi50aWNrZXQtaGVhZGluZyBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzBmNjQ2NDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGlja2V0LWRhdGEtdHlwZSB7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZmFmYWY7XG59XG5cbi50aWNrZXQtZGF0YS10eXBlIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi50aWNrZXQtZGF0YS10eXBlIHAgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzM1MzUzNTtcbn1cblxuLnRpY2tldC1kYXRhLXR5cGUgLmN1c3RvbS1zZWxlY3Qge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udGlja2V0LWRhdGEtdHlwZSAuY3VzdG9tLXNlbGVjdDpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5ldmVudC1kZXRhaWxzIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmV2ZW50LWRldGFpbHMgaDMge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWZhZmFmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMDk2MTVmO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uZXZlbnQtZGV0YWlscyB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmV2ZW50LWRldGFpbHMgdWwgPiBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZTBlMGUwO1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxuLmV2ZW50LWRldGFpbHMgdWwgPiBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmV2ZW50LWRldGFpbHMgdWwgPiBsaSBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKj09PT09PT09PT09PT09IENob29zZSBUYWJsZT09PT09PT09PT09PT09PT0qL1xuLmJvb2steXVyLXRibCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5ib29rLXl1ci10YmwgLmhvbWUtZXZlbnQtaGVhZGluZyB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmJvb2steXVyLXRibCAuaG9tZS1ldmVudC1oZWFkaW5nIGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzA2NWU1ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMnB4IDIwcHg7XG59XG5cbi5zb2xkb3V0OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTQ7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cblxuLnRhYmxlLXR5cGUtYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi52aWV3LXRibGUtbmFtZSB7XG4gIGhlaWdodDogMTAycHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgLyogYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggMHB4IDEwcHg7ICovXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgY29sb3I6ICM5NDk0OTQ7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi52aWV3LXRibGUtbmFtZSBoNCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmlldy10YmxlLW5hbWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAwcHggMTBweDtcbn1cblxuLnZpZXctdGFibGUtb3RoZXJzLWRldGFpbHMge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk5ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2VsZWN0LXRhYmxlLWFyZWEgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0OSU7XG59XG5cbi52aWV3LXRhYmxlLW90aGVycy1kZXRhaWxzIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDY1ZTVlO1xufVxuXG4udGlja2V0LWluZGkge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZjAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnZpZXctdGFibGUtb3RoZXJzLWRldGFpbHMgLmN1c3RvbS1zZWxlY3Qge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLnNlbGVjdC10YWJsZS1hcmVhIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAuc2VsZWN0LXRhYmxlLWFyZWEgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNDklO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNlbGVjdC10YWJsZS1hcmVhIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuc2VsZWN0LXRhYmxlLWFyZWEgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNDklO1xuICB9XG59XG4vKj09PT09PUVuZCBDaG9vc2UgdGFibGU9PT09PSovXG4uYnV5LXRpY2tldC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZmYwYTBhO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5kZXRhaWxzLWV2ZW50LWFyZWEge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAzcHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmRldGFpbHMtZXZlbnQtYXJlYS1sZWZ0IGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FmYWZhZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzA5NjE1ZjtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmRldGFpbHMtZXZlbnQtYXJlYS1sZWZ0IHVsID4gbGkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDNweCAwO1xufVxuXG4uZGV0YWlscy1ldmVudC1hcmVhLWxlZnQgdWwgPiBsaSBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZGV0YWlscy1ldmVudC1hcmVhLWxlZnQgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubG9jYXRpb24tcmlnaHQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ubG9jYXRpb24tcmlnaHQgYSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */";

/***/ }),

/***/ 7934:
/*!*********************************************************!*\
  !*** ./src/app/events/events.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: url(\"/assets/images/bg-webc112.png\") no-repeat center left/contain fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.bgpro {\n  background-image: url(\"/assets/images/bgpro.jpg\");\n  height: auto;\n  background-size: cover;\n  filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 140px;\n}\n\n.card .header .avatar {\n  width: 160px;\n  height: 100px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -84px;\n  border: 8px solid #9Dc912;\n  background-color: #fff;\n}\n\n.card-body {\n  height: calc(100vh - 256px);\n  overflow: hidden;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 40px;\n  font-size: 1.3rem;\n}\n\n.loginBx form {\n  text-align: left;\n}\n\nform label {\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form textarea {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form ion-select {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: 0.4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: 0.9em;\n}\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1;\n}\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F;\n}\n\n.loginBx form input {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form textarea {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form ion-select {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.log_in_btn {\n  width: 100%;\n  margin: 0;\n  background: #126666;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3lpaXUtY3VzdG9tZXItYW5kcmlvZC1tYWluJTIwMi9zcmMvYXBwL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0RkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FEQ0U7RUFDSSxhQUFBO0FDQ047O0FEQ007RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NWOztBRENVO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ0NkOztBREtBO0VBRUUsMkJBQUE7RUFDQSxnQkFBQTtBQ0hGOztBREtFO0VBQ0ksaUJBQUE7QUNITjs7QURLTTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNIVjs7QURNTTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDSlY7O0FEU0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTkY7O0FEU0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNORjs7QURTQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNORjs7QURTQTtFQUNFLGdCQUFBO0FDTkY7O0FEU0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDTkY7O0FEU0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FDTkY7O0FEU0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FDTkY7O0FEU0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtBQ05GOztBRFNBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ05GOztBRFNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNORjs7QURTQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDTkY7O0FEU0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4RUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ05GOztBRFNBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNORjs7QURTQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDhFQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTkY7O0FEU0E7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ05GIiwiZmlsZSI6ImV2ZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnLXdlYmMxMTIucG5nJykgbm8tcmVwZWF0IGNlbnRlciBsZWZ0L2NvbnRhaW4gZml4ZWQsICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJncHJvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZ3Byby5qcGcnKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDAgYXV0bztcblxuICAuaGVhZGVyIHtcbiAgICAgIGhlaWdodDogMTQwcHg7XG5cbiAgICAgIC5hdmF0YXIge1xuICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiBjYWxjKC0xKig4MHB4ICsgNHB4KSk7XG4gICAgICAgICAgICAgIGJvcmRlcjogOHB4IHNvbGlkICM5RGM5MTI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG59XG5cbi5jYXJkLWJvZHkge1xuIFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoMjAwcHggKyA1NnB4KSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLnVzZXItbWV0YSB7XG4gICAgICBwYWRkaW5nLXRvcDogNDBweDtcblxuICAgICAgLnBsYXllcm5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiAjMzAzOTQwO1xuICAgICAgfVxuXG4gICAgICAuY291bnRyeSB7XG4gICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgY29sb3I6ICM5NDllYTY7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgfVxufVxuXG4ubG9naW5CeCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAzNzRweDtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDI1MCwgMjUwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbkJ4IC5sb2dvbG9naW4ge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2dpbkJ4PmgxIHtcbiAgbWFyZ2luOiAyMHB4IDAgNDBweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5sb2dpbkJ4IGZvcm0ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5mb3JtIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAuOXJlbTtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjA7XG4gIGNvbG9yOiAjNTI1MjUyOTQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbn1cblxuLmxvZ2luQnggZm9ybSB0ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjA7XG4gIGNvbG9yOiAjNTI1MjUyOTQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbn1cblxuLmxvZ2luQnggZm9ybSBpb24tc2VsZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzUpO1xufVxuXG4uc2Vjb25kYXJ5LWxpbmsge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogLjQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgZm9udC1zaXplOiAuOWVtO1xufVxuXG4uc2Vjb25kYXJ5LWxpbms6aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmxvZ2luQnRuIHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1RThGMEY7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW5wdXQge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSksIDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9naW5CeCBmb3JtIHRleHRhcmVhIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpLCAwIDBweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTYlKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuLmxvZ2luQnggZm9ybSBpb24tc2VsZWN0IHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpLCAwIDBweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTYlKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuLmxvZ19pbl9idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAjMTI2NjY2O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4O1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZy13ZWJjMTEyLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGxlZnQvY29udGFpbiBmaXhlZCwgI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmdwcm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZ3Byby5qcGdcIik7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmlsdGVyOiBibHVyKDBweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNDBweDtcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTg0cHg7XG4gIGJvcmRlcjogOHB4IHNvbGlkICM5RGM5MTI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTZweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSAucGxheWVybmFtZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMDM5NDA7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEgLmNvdW50cnkge1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICM5NDllYTY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubG9naW5CeCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAzNzRweDtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDI1MCwgMjUwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbkJ4IC5sb2dvbG9naW4ge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2dpbkJ4ID4gaDEge1xuICBtYXJnaW46IDIwcHggMCA0MHB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmxvZ2luQnggZm9ybSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmZvcm0gbGFiZWwge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjA7XG4gIGNvbG9yOiAjNTI1MjUyOTQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5sb2dpbkJ4IGZvcm0gdGV4dGFyZWEge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmYwO1xuICBjb2xvcjogIzUyNTI1Mjk0O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmYwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4uc2Vjb25kYXJ5LWxpbmsge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC40O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5zZWNvbmRhcnktbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubG9naW5CdG4ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVFOEYwRjtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbi5sb2dpbkJ4IGZvcm0gdGV4dGFyZWEge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9nX2luX2J0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6ICMxMjY2NjY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */";

/***/ }),

/***/ 2060:
/*!***************************************************************!*\
  !*** ./src/app/forgetotp/forgetotp.component.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: url(\"/assets/images/bg-webc112.png\") no-repeat center left/contain fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.bgpro {\n  background-image: url(\"/assets/images/bgpro.jpg\");\n  height: auto;\n  background-size: cover;\n  filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 140px;\n}\n\n.card .header .avatar {\n  width: 160px;\n  height: 100px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -84px;\n  border: 8px solid #9Dc912;\n  background-color: #fff;\n}\n\n.card-body {\n  padding: 30px;\n  height: calc(100vh - 256px);\n  overflow: hidden;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 40px;\n  font-size: 1.3rem;\n}\n\n.loginBx form {\n  text-align: left;\n}\n\nform label {\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form textarea {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form ion-select {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: 0.4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: 0.9em;\n}\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1;\n}\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F;\n}\n\n.loginBx form input {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form textarea {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form ion-select {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.log_in_btn {\n  width: 100%;\n  margin: 0;\n  background: #126666;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldG90cC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3lpaXUtY3VzdG9tZXItYW5kcmlvZC1tYWluJTIwMi9zcmMvYXBwL2ZvcmdldG90cC9mb3JnZXRvdHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0RkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0k7RUFDSSxhQUFBO0FDQ1I7O0FEQ1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NaOztBRENZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ0NoQjs7QURLQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDRko7O0FESUk7RUFDSSxpQkFBQTtBQ0ZSOztBRElRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ZaOztBREtRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNIWjs7QURRQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRFFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksZ0JBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0FDTEo7O0FEUUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDTEo7O0FEUUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ0xKOztBRFFBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNMSjs7QURRQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDhFQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTEo7O0FEUUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4RUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDTEoiLCJmaWxlIjoiZm9yZ2V0b3RwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZy13ZWJjMTEyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgbGVmdC9jb250YWluIGZpeGVkLCAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5iZ3BybyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZ3Byby5qcGcnKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIC5oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuXG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiBjYWxjKC0xKig4MHB4ICsgNHB4KSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiA4cHggc29saWQgIzlEYzkxMjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgyMDBweCArIDU2cHgpKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLnVzZXItbWV0YSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuXG4gICAgICAgIC5wbGF5ZXJuYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogIzMwMzk0MDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudHJ5IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICAgICAgY29sb3I6ICM5NDllYTY7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5sb2dpbkJ4IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiAzNzRweDtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUyLCAyNTAsIDI1MCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luQnggLmxvZ29sb2dpbiB7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2dpbkJ4PmgxIHtcbiAgICBtYXJnaW46IDIwcHggMCA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5mb3JtIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XG4gICAgY29sb3I6ICM1MjUyNTI5NDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG59XG5cbi5sb2dpbkJ4IGZvcm0gdGV4dGFyZWEge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XG4gICAgY29sb3I6ICM1MjUyNTI5NDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW9uLXNlbGVjdCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG59XG5cbi5zZWNvbmRhcnktbGluayB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OiAuNDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICBmb250LXNpemU6IC45ZW07XG59XG5cbi5zZWNvbmRhcnktbGluazpob3ZlciB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmxvZ2luQnRuIHtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVFOEYwRjtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSksIDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuLmxvZ2luQnggZm9ybSB0ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSksIDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuLmxvZ2luQnggZm9ybSBpb24tc2VsZWN0IHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTYlKSwgMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9nX2luX2J0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQ6ICMxMjY2NjY7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZy13ZWJjMTEyLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGxlZnQvY29udGFpbiBmaXhlZCwgI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmdwcm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZ3Byby5qcGdcIik7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmlsdGVyOiBibHVyKDBweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNDBweDtcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTg0cHg7XG4gIGJvcmRlcjogOHB4IHNvbGlkICM5RGM5MTI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAzMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTZweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSAucGxheWVybmFtZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMDM5NDA7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEgLmNvdW50cnkge1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICM5NDllYTY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubG9naW5CeCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAzNzRweDtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDI1MCwgMjUwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbkJ4IC5sb2dvbG9naW4ge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2dpbkJ4ID4gaDEge1xuICBtYXJnaW46IDIwcHggMCA0MHB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmxvZ2luQnggZm9ybSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmZvcm0gbGFiZWwge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjA7XG4gIGNvbG9yOiAjNTI1MjUyOTQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5sb2dpbkJ4IGZvcm0gdGV4dGFyZWEge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmYwO1xuICBjb2xvcjogIzUyNTI1Mjk0O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmYwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4uc2Vjb25kYXJ5LWxpbmsge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC40O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5zZWNvbmRhcnktbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubG9naW5CdG4ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVFOEYwRjtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbi5sb2dpbkJ4IGZvcm0gdGV4dGFyZWEge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9nX2luX2J0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6ICMxMjY2NjY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */";

/***/ }),

/***/ 4958:
/*!*****************************************************************!*\
  !*** ./src/app/forgetpass/forgetpass.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: url(\"/assets/images/bg-webc112.png\") no-repeat center left/contain fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.bgpro {\n  background-image: url(\"/assets/images/bgpro.jpg\");\n  height: auto;\n  background-size: cover;\n  filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 140px;\n}\n\n.card .header .avatar {\n  width: 160px;\n  height: 100px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -84px;\n  border: 8px solid #9Dc912;\n  background-color: #fff;\n}\n\n.card-body {\n  padding: 30px;\n  height: calc(100vh - 256px);\n  overflow: hidden;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 40px;\n  font-size: 1.3rem;\n}\n\n.loginBx form {\n  text-align: left;\n}\n\nform label {\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form textarea {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form ion-select {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: 0.4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: 0.9em;\n}\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1;\n}\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F;\n}\n\n.loginBx form input {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form textarea {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form ion-select {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.log_in_btn {\n  width: 100%;\n  margin: 0;\n  background: #126666;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldHBhc3MuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi95aWl1LWN1c3RvbWVyLWFuZHJpb2QtbWFpbiUyMDIvc3JjL2FwcC9mb3JnZXRwYXNzL2ZvcmdldHBhc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0RkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0k7RUFDSSxhQUFBO0FDQ1I7O0FEQ1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NaOztBRENZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ0NoQjs7QURLQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDRko7O0FESUk7RUFDSSxpQkFBQTtBQ0ZSOztBRElRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ZaOztBREtRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNIWjs7QURRQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRFFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksZ0JBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0FDTEo7O0FEUUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDTEo7O0FEUUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ0xKOztBRFFBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNMSjs7QURRQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDhFQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTEo7O0FEUUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4RUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDTEoiLCJmaWxlIjoiZm9yZ2V0cGFzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmctd2ViYzExMi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGxlZnQvY29udGFpbiBmaXhlZCwgI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYmdwcm8ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmdwcm8uanBnJyk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcblxuICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogY2FsYygtMSooODBweCArIDRweCkpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogOHB4IHNvbGlkICM5RGM5MTI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoMjAwcHggKyA1NnB4KSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC51c2VyLW1ldGEge1xuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcblxuICAgICAgICAucGxheWVybmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICMzMDM5NDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY291bnRyeSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDkwJTtcbiAgICAgICAgICAgIGNvbG9yOiAjOTQ5ZWE2O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubG9naW5CeCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogMzc0cHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMjUwLCAyNTAsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbkJ4IC5sb2dvbG9naW4ge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubG9naW5CeD5oMSB7XG4gICAgbWFyZ2luOiAyMHB4IDAgNDBweDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmxvZ2luQnggZm9ybSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuZm9ybSBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IC45cmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIGlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYwO1xuICAgIGNvbG9yOiAjNTI1MjUyOTQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIHRleHRhcmVhIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYwO1xuICAgIGNvbG9yOiAjNTI1MjUyOTQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzUpO1xufVxuXG4uc2Vjb25kYXJ5LWxpbmsge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eTogLjQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgZm9udC1zaXplOiAuOWVtO1xufVxuXG4uc2Vjb25kYXJ5LWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5sb2dpbkJ0biB7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RThGMEY7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW5wdXQge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpLCAwIDBweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTYlKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbi5sb2dpbkJ4IGZvcm0gdGV4dGFyZWEge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpLCAwIDBweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTYlKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW9uLXNlbGVjdCB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSksIDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuLmxvZ19pbl9idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kOiAjMTI2NjY2O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMTBweDtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmctd2ViYzExMi5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBsZWZ0L2NvbnRhaW4gZml4ZWQsICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJncHJvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmdwcm8uanBnXCIpO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGZpbHRlcjogYmx1cigwcHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNhcmQgLmhlYWRlciB7XG4gIGhlaWdodDogMTQwcHg7XG59XG4uY2FyZCAuaGVhZGVyIC5hdmF0YXIge1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIC5hdmF0YXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC04NHB4O1xuICBib3JkZXI6IDhweCBzb2xpZCAjOURjOTEyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMzBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjU2cHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEgLnBsYXllcm5hbWUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzAzOTQwO1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIC5jb3VudHJ5IHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiAjOTQ5ZWE2O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmxvZ2luQngge1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMzc0cHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUyLCAyNTAsIDI1MCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5CeCAubG9nb2xvZ2luIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubG9naW5CeCA+IGgxIHtcbiAgbWFyZ2luOiAyMHB4IDAgNDBweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5sb2dpbkJ4IGZvcm0ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5mb3JtIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmYwO1xuICBjb2xvcjogIzUyNTI1Mjk0O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIHRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgY29sb3I6ICM1MjUyNTI5NDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cblxuLmxvZ2luQnggZm9ybSBpb24tc2VsZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cblxuLnNlY29uZGFyeS1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDAuNDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4uc2Vjb25kYXJ5LWxpbms6aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmxvZ2luQnRuIHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1RThGMEY7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW5wdXQge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9naW5CeCBmb3JtIHRleHRhcmVhIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDBweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuLmxvZ2luQnggZm9ybSBpb24tc2VsZWN0IHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDBweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuLmxvZ19pbl9idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAjMTI2NjY2O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 3643:
/*!*******************************************************************!*\
  !*** ./src/app/forgetreset/forgetreset.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: url(\"/assets/images/bg-webc112.png\") no-repeat center left/contain fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.bgpro {\n  background-image: url(\"/assets/images/bgpro.jpg\");\n  height: auto;\n  background-size: cover;\n  filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 140px;\n}\n\n.card .header .avatar {\n  width: 160px;\n  height: 100px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -84px;\n  border: 8px solid #9Dc912;\n  background-color: #fff;\n}\n\n.card-body {\n  padding: 30px;\n  height: calc(100vh - 256px);\n  overflow: hidden;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 40px;\n  font-size: 1.3rem;\n}\n\n.loginBx form {\n  text-align: left;\n}\n\nform label {\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form textarea {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form ion-select {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: 0.4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: 0.9em;\n}\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1;\n}\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F;\n}\n\n.loginBx form input {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form textarea {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form ion-select {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.log_in_btn {\n  width: 100%;\n  margin: 0;\n  background: #126666;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldHJlc2V0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4veWlpdS1jdXN0b21lci1hbmRyaW9kLW1haW4lMjAyL3NyYy9hcHAvZm9yZ2V0cmVzZXQvZm9yZ2V0cmVzZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0RkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0k7RUFDSSxhQUFBO0FDQ1I7O0FEQ1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NaOztBRENZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ0NoQjs7QURLQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDRko7O0FESUk7RUFDSSxpQkFBQTtBQ0ZSOztBRElRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ZaOztBREtRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNIWjs7QURRQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRFFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksZ0JBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0FDTEo7O0FEUUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDTEo7O0FEUUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ0xKOztBRFFBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNMSjs7QURRQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDhFQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTEo7O0FEUUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4RUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDTEoiLCJmaWxlIjoiZm9yZ2V0cmVzZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnLXdlYmMxMTIucG5nJykgbm8tcmVwZWF0IGNlbnRlciBsZWZ0L2NvbnRhaW4gZml4ZWQsICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJncHJvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JncHJvLmpwZycpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmNhcmQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG5cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IGNhbGMoLTEqKDgwcHggKyA0cHgpKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDhweCBzb2xpZCAjOURjOTEyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDIwMHB4ICsgNTZweCkpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAudXNlci1tZXRhIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG5cbiAgICAgICAgLnBsYXllcm5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzAzOTQwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvdW50cnkge1xuICAgICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgICBjb2xvcjogIzk0OWVhNjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxvZ2luQngge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDM3NHB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDI1MCwgMjUwLCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5CeCAubG9nb2xvZ2luIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZ2luQng+aDEge1xuICAgIG1hcmdpbjogMjBweCAwIDQwcHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5sb2dpbkJ4IGZvcm0ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmZvcm0gbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBjb2xvcjogIzUyNTI1Mjk0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbn1cblxuLmxvZ2luQnggZm9ybSB0ZXh0YXJlYSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBjb2xvcjogIzUyNTI1Mjk0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbn1cblxuLmxvZ2luQnggZm9ybSBpb24tc2VsZWN0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbn1cblxuLnNlY29uZGFyeS1saW5rIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG9wYWNpdHk6IC40O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbn1cblxuLnNlY29uZGFyeS1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ubG9naW5CdG4ge1xuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU4RjBGO1xufVxuXG4ubG9naW5CeCBmb3JtIGlucHV0IHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTYlKSwgMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9naW5CeCBmb3JtIHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTYlKSwgMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpLCAwIDBweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTYlKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbi5sb2dfaW5fYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZDogIzEyNjY2NjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JnLXdlYmMxMTIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgbGVmdC9jb250YWluIGZpeGVkLCAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iZ3BybyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JncHJvLmpwZ1wiKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIge1xuICBoZWlnaHQ6IDE0MHB4O1xufVxuLmNhcmQgLmhlYWRlciAuYXZhdGFyIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNhcmQgLmhlYWRlciAuYXZhdGFyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtODRweDtcbiAgYm9yZGVyOiA4cHggc29saWQgIzlEYzkxMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDI1NnB4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIC5wbGF5ZXJuYW1lIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMwMzk0MDtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSAuY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBjb2xvcjogIzk0OWVhNjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5sb2dpbkJ4IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDM3NHB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMjUwLCAyNTAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luQnggLmxvZ29sb2dpbiB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZ2luQnggPiBoMSB7XG4gIG1hcmdpbjogMjBweCAwIDQwcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuZm9ybSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgY29sb3I6ICM1MjUyNTI5NDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cblxuLmxvZ2luQnggZm9ybSB0ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjA7XG4gIGNvbG9yOiAjNTI1MjUyOTQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW9uLXNlbGVjdCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5zZWNvbmRhcnktbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAwLjQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLnNlY29uZGFyeS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5sb2dpbkJ0biB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU4RjBGO1xufVxuXG4ubG9naW5CeCBmb3JtIGlucHV0IHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDBweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuLmxvZ2luQnggZm9ybSB0ZXh0YXJlYSB7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW9uLXNlbGVjdCB7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbi5sb2dfaW5fYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogIzEyNjY2NjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */";

/***/ }),

/***/ 900:
/*!***********************************************************************!*\
  !*** ./src/app/invitefriends/invitefriends.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: url(\"/assets/images/bg-webc112.png\") no-repeat center left/contain fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.bgpro {\n  background-image: url(\"/assets/images/bgpro.jpg\");\n  height: auto;\n  background-size: cover;\n  filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 140px;\n}\n\n.card .header .avatar {\n  width: 160px;\n  height: 100px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -84px;\n  border: 8px solid #9Dc912;\n  background-color: #fff;\n}\n\n.card-body {\n  height: calc(100vh - 256px);\n  overflow: hidden;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 40px;\n  font-size: 1.3rem;\n}\n\n.loginBx form {\n  text-align: left;\n}\n\nform label {\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form textarea {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form ion-select {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: 0.4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: 0.9em;\n}\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1;\n}\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F;\n}\n\n.loginBx form input {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form textarea {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form ion-select {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.log_in_btn {\n  width: 100%;\n  margin: 0;\n  background: #126666;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludml0ZWZyaWVuZHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi95aWl1LWN1c3RvbWVyLWFuZHJpb2QtbWFpbiUyMDIvc3JjL2FwcC9pbnZpdGVmcmllbmRzL2ludml0ZWZyaWVuZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0RkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0k7RUFDSSxhQUFBO0FDQ1I7O0FEQ1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NaOztBRENZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ0NoQjs7QURLQTtFQUVJLDJCQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURLSTtFQUNJLGlCQUFBO0FDSFI7O0FES1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSFo7O0FETVE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0paOztBRFNBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFNBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDTko7O0FEU0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FDTko7O0FEU0E7RUFDSSxnQkFBQTtBQ05KOztBRFNBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQ05KOztBRFNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQ05KOztBRFNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7QUNOSjs7QURTQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QURTQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FDTko7O0FEU0E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ05KOztBRFNBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURTQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDhFQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTko7O0FEU0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4RUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFNBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNOSiIsImZpbGUiOiJpbnZpdGVmcmllbmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZy13ZWJjMTEyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgbGVmdC9jb250YWluIGZpeGVkLCAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5iZ3BybyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZ3Byby5qcGcnKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIC5oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuXG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiBjYWxjKC0xKig4MHB4ICsgNHB4KSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiA4cHggc29saWQgIzlEYzkxMjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FyZC1ib2R5IHtcbiAgIFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgyMDBweCArIDU2cHgpKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLnVzZXItbWV0YSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuXG4gICAgICAgIC5wbGF5ZXJuYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogIzMwMzk0MDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudHJ5IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICAgICAgY29sb3I6ICM5NDllYTY7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5sb2dpbkJ4IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiAzNzRweDtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUyLCAyNTAsIDI1MCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luQnggLmxvZ29sb2dpbiB7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2dpbkJ4PmgxIHtcbiAgICBtYXJnaW46IDIwcHggMCA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5mb3JtIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XG4gICAgY29sb3I6ICM1MjUyNTI5NDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG59XG5cbi5sb2dpbkJ4IGZvcm0gdGV4dGFyZWEge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XG4gICAgY29sb3I6ICM1MjUyNTI5NDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW9uLXNlbGVjdCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG59XG5cbi5zZWNvbmRhcnktbGluayB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OiAuNDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICBmb250LXNpemU6IC45ZW07XG59XG5cbi5zZWNvbmRhcnktbGluazpob3ZlciB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmxvZ2luQnRuIHtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVFOEYwRjtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSksIDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuLmxvZ2luQnggZm9ybSB0ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSksIDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuLmxvZ2luQnggZm9ybSBpb24tc2VsZWN0IHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTYlKSwgMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9nX2luX2J0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQ6ICMxMjY2NjY7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZy13ZWJjMTEyLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGxlZnQvY29udGFpbiBmaXhlZCwgI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmdwcm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZ3Byby5qcGdcIik7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmlsdGVyOiBibHVyKDBweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNDBweDtcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTg0cHg7XG4gIGJvcmRlcjogOHB4IHNvbGlkICM5RGM5MTI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTZweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSAucGxheWVybmFtZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMDM5NDA7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEgLmNvdW50cnkge1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICM5NDllYTY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubG9naW5CeCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAzNzRweDtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDI1MCwgMjUwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbkJ4IC5sb2dvbG9naW4ge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2dpbkJ4ID4gaDEge1xuICBtYXJnaW46IDIwcHggMCA0MHB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmxvZ2luQnggZm9ybSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmZvcm0gbGFiZWwge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjA7XG4gIGNvbG9yOiAjNTI1MjUyOTQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5sb2dpbkJ4IGZvcm0gdGV4dGFyZWEge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmYwO1xuICBjb2xvcjogIzUyNTI1Mjk0O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmYwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4uc2Vjb25kYXJ5LWxpbmsge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC40O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5zZWNvbmRhcnktbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubG9naW5CdG4ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVFOEYwRjtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbi5sb2dpbkJ4IGZvcm0gdGV4dGFyZWEge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9nX2luX2J0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6ICMxMjY2NjY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */";

/***/ }),

/***/ 7005:
/*!***************************************************************************************!*\
  !*** ./src/app/liveperformanceorders/liveperformanceorders.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: url(\"/assets/images/bg-webc112.png\") no-repeat center left/contain fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.bgpro {\n  background-image: url(\"/assets/images/bgpro.jpg\");\n  height: auto;\n  background-size: cover;\n  filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 140px;\n}\n\n.card .header .avatar {\n  width: 160px;\n  height: 100px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -84px;\n  border: 8px solid #9Dc912;\n  background-color: #fff;\n}\n\n.card-body {\n  padding: 0px;\n  height: calc(100vh - 256px);\n  overflow: hidden;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 10px;\n  font-weight: 300;\n  color: #303940;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 40px;\n  font-size: 1.3rem;\n}\n\n.loginBx form {\n  text-align: left;\n}\n\nform label {\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form textarea {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form ion-select {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: 0.4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: 0.9em;\n}\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1;\n}\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F;\n}\n\n.lbstk {\n  color: #FFF;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 1px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 20px;\n  font-size: 1.3rem;\n}\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F;\n}\n\n.instk ion-button {\n  padding: 9px 3px;\n  margin-top: -8px;\n}\n\n.table-scroll {\n  position: relative;\n  max-width: 600px;\n  margin: auto;\n  overflow: hidden;\n  border: 1px solid #000;\n}\n\n.table-wrap {\n  width: 100%;\n  overflow: auto;\n}\n\n.table-scroll table {\n  width: 100%;\n  margin: auto;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n\n.table-scroll th,\n.table-scroll td {\n  padding: 5px 10px;\n  border: 1px solid #000;\n  white-space: nowrap;\n  vertical-align: top;\n}\n\n.table-scroll thead,\n.table-scroll tfoot {\n  background: linear-gradient(40deg, #4ea3a6, #106464) !important;\n  color: #fff;\n  text-align: center;\n}\n\n.clone {\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n\n.clone th,\n.clone td {\n  visibility: hidden;\n}\n\n.clone td,\n.clone th {\n  border-color: transparent;\n}\n\n.clone tbody th {\n  visibility: visible;\n  color: red;\n}\n\n.clone .fixed-side {\n  border: 1px solid #000;\n  background: #eee;\n  visibility: visible;\n}\n\n.clone thead,\n.clone tfoot {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpdmVwZXJmb3JtYW5jZW9yZGVycy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3lpaXUtY3VzdG9tZXItYW5kcmlvZC1tYWluJTIwMi9zcmMvYXBwL2xpdmVwZXJmb3JtYW5jZW9yZGVycy9saXZlcGVyZm9ybWFuY2VvcmRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0RkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0k7RUFDSSxhQUFBO0FDQ1I7O0FEQ1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NaOztBRENZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ0NoQjs7QURLQTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDRko7O0FESUk7RUFDSSxpQkFBQTtBQ0ZSOztBRElRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ZaOztBREtRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNIWjs7QURRQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRFFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksZ0JBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0FDTEo7O0FEUUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDTEo7O0FEUUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ0xKOztBRFFBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNMSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURTQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURTQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFNBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFNBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNOSjs7QURTQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QURVQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ1BKOztBRFVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUNQSjs7QURVQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFVBOztFQUVJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDUEo7O0FEVUE7O0VBRUksK0RBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNQSjs7QURVQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtBQ1BKOztBRFVBOztFQUVJLGtCQUFBO0FDUEo7O0FEVUE7O0VBRUkseUJBQUE7QUNQSjs7QURVQTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtBQ1BKOztBRFVBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDUEo7O0FEVUE7O0VBRUksdUJBQUE7QUNQSiIsImZpbGUiOiJsaXZlcGVyZm9ybWFuY2VvcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnLXdlYmMxMTIucG5nJykgbm8tcmVwZWF0IGNlbnRlciBsZWZ0L2NvbnRhaW4gZml4ZWQsICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJncHJvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JncHJvLmpwZycpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmNhcmQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG5cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IGNhbGMoLTEqKDgwcHggKyA0cHgpKTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDhweCBzb2xpZCAjOURjOTEyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoMjAwcHggKyA1NnB4KSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC51c2VyLW1ldGEge1xuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcblxuICAgICAgICAucGxheWVybmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgY29sb3I6ICMzMDM5NDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY291bnRyeSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDkwJTtcbiAgICAgICAgICAgIGNvbG9yOiAjOTQ5ZWE2O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubG9naW5CeCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogMzc0cHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMjUwLCAyNTAsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbkJ4IC5sb2dvbG9naW4ge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubG9naW5CeD5oMSB7XG4gICAgbWFyZ2luOiAyMHB4IDAgNDBweDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmxvZ2luQnggZm9ybSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuZm9ybSBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IC45cmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIGlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYwO1xuICAgIGNvbG9yOiAjNTI1MjUyOTQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIHRleHRhcmVhIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYwO1xuICAgIGNvbG9yOiAjNTI1MjUyOTQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzUpO1xufVxuXG4uc2Vjb25kYXJ5LWxpbmsge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eTogLjQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgZm9udC1zaXplOiAuOWVtO1xufVxuXG4uc2Vjb25kYXJ5LWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5sb2dpbkJ0biB7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RThGMEY7XG59XG5cbi5sYnN0ayB7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbn1cblxuLmxvZ2luQngge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDM3NHB4O1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMjUwLCAyNTAsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbkJ4IC5sb2dvbG9naW4ge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubG9naW5CeD5oMSB7XG4gICAgbWFyZ2luOiAyMHB4IDAgMjBweDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmxvZ2luQnRuIHtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVFOEYwRjtcbn1cblxuLmluc3RrIGlvbi1idXR0b24ge1xuICAgIHBhZGRpbmc6IDlweCAzcHg7XG4gICAgbWFyZ2luLXRvcDogLThweDtcbn1cblxuXG4udGFibGUtc2Nyb2xsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xufVxuXG4udGFibGUtd3JhcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50YWJsZS1zY3JvbGwgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4udGFibGUtc2Nyb2xsIHRoLFxuLnRhYmxlLXNjcm9sbCB0ZCB7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi50YWJsZS1zY3JvbGwgdGhlYWQsXG4udGFibGUtc2Nyb2xsIHRmb290IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICM0ZWEzYTYsICMxMDY0NjQpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2xvbmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNsb25lIHRoLFxuLmNsb25lIHRkIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW5cbn1cblxuLmNsb25lIHRkLFxuLmNsb25lIHRoIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50XG59XG5cbi5jbG9uZSB0Ym9keSB0aCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4uY2xvbmUgLmZpeGVkLXNpZGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uY2xvbmUgdGhlYWQsXG4uY2xvbmUgdGZvb3Qge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZy13ZWJjMTEyLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGxlZnQvY29udGFpbiBmaXhlZCwgI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmdwcm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZ3Byby5qcGdcIik7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmlsdGVyOiBibHVyKDBweCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNDBweDtcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTg0cHg7XG4gIGJvcmRlcjogOHB4IHNvbGlkICM5RGM5MTI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDI1NnB4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIC5wbGF5ZXJuYW1lIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzMwMzk0MDtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSAuY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBjb2xvcjogIzk0OWVhNjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5sb2dpbkJ4IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDM3NHB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMjUwLCAyNTAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luQnggLmxvZ29sb2dpbiB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZ2luQnggPiBoMSB7XG4gIG1hcmdpbjogMjBweCAwIDQwcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuZm9ybSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgY29sb3I6ICM1MjUyNTI5NDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cblxuLmxvZ2luQnggZm9ybSB0ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjA7XG4gIGNvbG9yOiAjNTI1MjUyOTQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW9uLXNlbGVjdCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5zZWNvbmRhcnktbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAwLjQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLnNlY29uZGFyeS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5sb2dpbkJ0biB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU4RjBGO1xufVxuXG4ubGJzdGsge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubG9naW5CeCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAzNzRweDtcbiAgcGFkZGluZzogMXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMjUwLCAyNTAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luQnggLmxvZ29sb2dpbiB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZ2luQnggPiBoMSB7XG4gIG1hcmdpbjogMjBweCAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubG9naW5CdG4ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVFOEYwRjtcbn1cblxuLmluc3RrIGlvbi1idXR0b24ge1xuICBwYWRkaW5nOiA5cHggM3B4O1xuICBtYXJnaW4tdG9wOiAtOHB4O1xufVxuXG4udGFibGUtc2Nyb2xsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbi50YWJsZS13cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGFibGUtc2Nyb2xsIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi50YWJsZS1zY3JvbGwgdGgsXG4udGFibGUtc2Nyb2xsIHRkIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi50YWJsZS1zY3JvbGwgdGhlYWQsXG4udGFibGUtc2Nyb2xsIHRmb290IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNGVhM2E2LCAjMTA2NDY0KSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2xvbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jbG9uZSB0aCxcbi5jbG9uZSB0ZCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNsb25lIHRkLFxuLmNsb25lIHRoIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmNsb25lIHRib2R5IHRoIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmNsb25lIC5maXhlZC1zaWRlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmNsb25lIHRoZWFkLFxuLmNsb25lIHRmb290IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59Il19 */";

/***/ }),

/***/ 276:
/*!*****************************************************************************!*\
  !*** ./src/app/liveperformances/liveperformances.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXZlcGVyZm9ybWFuY2VzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 4103:
/*!*******************************************************!*\
  !*** ./src/app/login/login.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".bg {\n  background-image: url(\"/assets/images/bg.jpg\");\n  height: auto;\n  background-size: cover;\n  filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\nion-content {\n  --background: url(\"/assets/images/bg-webc112.png\") no-repeat center left/contain fixed, #fff;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n  color: #000 !important;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 40px;\n  font-size: 1.3rem;\n}\n\n.loginBx form {\n  text-align: left;\n}\n\nform label {\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n  color: #000 !important;\n}\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: 0.4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: 0.9em;\n}\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1;\n}\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F;\n}\n\n.frmaxon {\n  margin-top: 20px;\n  overflow: hidden;\n  clear: both;\n}\n\n.frmaxon1 {\n  margin-top: 20px;\n  overflow: hidden;\n  clear: both;\n}\n\n.frmaxon1 .col {\n  display: inline-flex;\n}\n\n.frmaxon1 ion-button {\n  border: none;\n}\n\n.loginBx form input {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form .passeye {\n  position: absolute;\n  right: 12px;\n  top: 12px;\n}\n\n.log_in_btn {\n  width: 100%;\n  margin: 0;\n  background: #126666;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.password_reste a {\n  font-size: 14px;\n  font-weight: 500;\n  color: #126666;\n}\n\n.face_btn {\n  background: #4267b2;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 50px;\n  display: block;\n  width: 140px;\n  text-align: center;\n  margin: 0 5px;\n}\n\n.g_btn {\n  background: #db4437;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 50px;\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4veWlpdS1jdXN0b21lci1hbmRyaW9kLW1haW4lMjAyL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4Q0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtBQ0NKOztBRENBO0VBQ0ksNEZBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FDSUo7O0FEREE7RUFDSSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREhBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtBQ01KOztBREpBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ09KOztBRExBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUNRSjs7QUROQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDU0o7O0FEUEE7RUFBVSxnQkFBQTtFQUFrQixnQkFBQTtFQUFrQixXQUFBO0FDYTlDOztBRFpBO0VBQVcsZ0JBQUE7RUFBa0IsZ0JBQUE7RUFBa0IsV0FBQTtBQ2tCL0M7O0FEakJBO0VBQ0ksb0JBQUE7QUNvQko7O0FEakJBO0VBQ0ksWUFBQTtBQ29CSjs7QURqQkE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4RUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ29CSjs7QURsQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDcUJKOztBRGxCRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDcUJKOztBRG5CRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNzQko7O0FEcEJFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ3VCSjs7QURyQkU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ3dCSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnLmpwZycpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbmlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZy13ZWJjMTEyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgbGVmdC9jb250YWluIGZpeGVkLCAjZmZmO1xuICAgXG59XG4ubG9naW5CeHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiAzNzRweDtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJhY2tncm91bmQ6cmdiYSgyNTIsIDI1MCwgMjUwLCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4ubG9naW5CeCAubG9nb2xvZ2lue1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmxvZ2luQnggPiBoMXtcbiAgICBtYXJnaW46MjBweCAwIDQwcHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5sb2dpbkJ4IGZvcm17XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmZvcm0gbGFiZWx7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6LjlyZW07XG59XG4ubG9naW5CeCBmb3JtIGlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMzUpO1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4uc2Vjb25kYXJ5LWxpbmt7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OiAuNDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDoxM3B4O1xuICAgIGZvbnQtc2l6ZTouOWVtO1xufVxuLnNlY29uZGFyeS1saW5rOmhvdmVye1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG9wYWNpdHk6MTtcbn1cbi5sb2dpbkJ0biB7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzVFOEYwRjtcbn1cbi5mcm1heG9uIHttYXJnaW4tdG9wOiAyMHB4OyBvdmVyZmxvdzogaGlkZGVuOyBjbGVhcjpib3RoO31cbi5mcm1heG9uMSB7bWFyZ2luLXRvcDogMjBweDsgb3ZlcmZsb3c6IGhpZGRlbjsgY2xlYXI6Ym90aDt9XG4uZnJtYXhvbjEgLmNvbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5mcm1heG9uMSBpb24tYnV0dG9uIHtcbiAgICBib3JkZXI6bm9uZTtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTYlKSwgMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICB9XG4gIC5sb2dpbkJ4IGZvcm0gLnBhc3NleWV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIHRvcDogMTJweDtcbiAgfVxuXG4gIC5sb2dfaW5fYnRue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kOiAjMTI2NjY2O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAucGFzc3dvcmRfcmVzdGUgYXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzEyNjY2NjtcbiAgfVxuICAuZmFjZV9idG57XG4gICAgYmFja2dyb3VuZDogIzQyNjdiMjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOjAgNXB4O1xuICB9XG4gIC5nX2J0bntcbiAgICBiYWNrZ3JvdW5kOiAjZGI0NDM3O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9IiwiLmJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmcuanBnXCIpO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGZpbHRlcjogYmx1cigwcHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmctd2ViYzExMi5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBsZWZ0L2NvbnRhaW4gZml4ZWQsICNmZmY7XG59XG5cbi5sb2dpbkJ4IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDM3NHB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMjUwLCAyNTAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luQnggLmxvZ29sb2dpbiB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZ2luQnggPiBoMSB7XG4gIG1hcmdpbjogMjBweCAwIDQwcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuZm9ybSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuLnNlY29uZGFyeS1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDAuNDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4uc2Vjb25kYXJ5LWxpbms6aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmxvZ2luQnRuIHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1RThGMEY7XG59XG5cbi5mcm1heG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5mcm1heG9uMSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uZnJtYXhvbjEgLmNvbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uZnJtYXhvbjEgaW9uLWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbi5sb2dpbkJ4IGZvcm0gLnBhc3NleWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMnB4O1xuICB0b3A6IDEycHg7XG59XG5cbi5sb2dfaW5fYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogIzEyNjY2NjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnBhc3N3b3JkX3Jlc3RlIGEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMTI2NjY2O1xufVxuXG4uZmFjZV9idG4ge1xuICBiYWNrZ3JvdW5kOiAjNDI2N2IyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi5nX2J0biB7XG4gIGJhY2tncm91bmQ6ICNkYjQ0Mzc7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 6331:
/*!*********************************************************************************************!*\
  !*** ./src/app/privateperformanceorders/privateperformanceorders.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: url(\"/assets/images/bg-webc112.png\") no-repeat center left/contain fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.bgpro {\n  background-image: url(\"/assets/images/bgpro.jpg\");\n  height: auto;\n  background-size: cover;\n  filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 140px;\n}\n\n.card .header .avatar {\n  width: 160px;\n  height: 100px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -84px;\n  border: 8px solid #9Dc912;\n  background-color: #fff;\n}\n\n.card-body {\n  padding: 0px;\n  height: calc(100vh - 256px);\n  overflow: hidden;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 10px;\n  font-weight: 300;\n  color: #303940;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 40px;\n  font-size: 1.3rem;\n}\n\n.loginBx form {\n  text-align: left;\n}\n\nform label {\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.loginBx ion-select {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n  background: #fff !important;\n  color: #000 !important;\n  margin-bottom: 20px;\n}\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form textarea {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form ion-select {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: 0.4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: 0.9em;\n}\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1;\n}\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F;\n}\n\n.lbstk {\n  color: #FFF;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 1px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 20px;\n  font-size: 1.3rem;\n}\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F;\n}\n\n.instk ion-button {\n  padding: 9px 3px;\n  margin-top: -8px;\n}\n\n.table-scroll {\n  position: relative;\n  max-width: 600px;\n  margin: auto;\n  overflow: hidden;\n  border: 1px solid #000;\n}\n\n.table-wrap {\n  width: 100%;\n  overflow: auto;\n}\n\n.table-scroll table {\n  width: 100%;\n  margin: auto;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n\n.table-scroll th,\n.table-scroll td {\n  padding: 5px 10px;\n  border: 1px solid #000;\n  white-space: nowrap;\n  vertical-align: top;\n}\n\n.table-scroll thead,\n.table-scroll tfoot {\n  background: linear-gradient(40deg, #4ea3a6, #106464) !important;\n  color: #fff;\n  text-align: center;\n}\n\n.clone {\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n\n.clone th,\n.clone td {\n  visibility: hidden;\n}\n\n.clone td,\n.clone th {\n  border-color: transparent;\n}\n\n.clone tbody th {\n  visibility: visible;\n  color: red;\n}\n\n.clone .fixed-side {\n  border: 1px solid #000;\n  background: #eee;\n  visibility: visible;\n}\n\n.clone thead,\n.clone tfoot {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhdGVwZXJmb3JtYW5jZW9yZGVycy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3lpaXUtY3VzdG9tZXItYW5kcmlvZC1tYWluJTIwMi9zcmMvYXBwL3ByaXZhdGVwZXJmb3JtYW5jZW9yZGVycy9wcml2YXRlcGVyZm9ybWFuY2VvcmRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0RkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0k7RUFDSSxhQUFBO0FDQ1I7O0FEQ1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NaOztBRENZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ0NoQjs7QURLQTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDRko7O0FESUk7RUFDSSxpQkFBQTtBQ0ZSOztBRElRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ZaOztBREtRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNIWjs7QURRQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRFFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksZ0JBQUE7QUNMSjs7QURRQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURRQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDhFQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDTEo7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FDTEo7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FDTEo7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtBQ0xKOztBRFFBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRFFBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUNMSjs7QURRQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDTEo7O0FEUUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTEo7O0FEU0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTko7O0FEU0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNOSjs7QURTQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURTQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDTko7O0FEU0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDTko7O0FEVUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNQSjs7QURVQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDUEo7O0FEVUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURVQTs7RUFFSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1BKOztBRFVBOztFQUVJLCtEQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDUEo7O0FEVUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7QUNQSjs7QURVQTs7RUFFSSxrQkFBQTtBQ1BKOztBRFVBOztFQUVJLHlCQUFBO0FDUEo7O0FEVUE7RUFDSSxtQkFBQTtFQUNBLFVBQUE7QUNQSjs7QURVQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1BKOztBRFVBOztFQUVJLHVCQUFBO0FDUEoiLCJmaWxlIjoicHJpdmF0ZXBlcmZvcm1hbmNlb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZy13ZWJjMTEyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgbGVmdC9jb250YWluIGZpeGVkLCAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5iZ3BybyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZ3Byby5qcGcnKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIC5oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuXG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiBjYWxjKC0xKig4MHB4ICsgNHB4KSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiA4cHggc29saWQgIzlEYzkxMjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDIwMHB4ICsgNTZweCkpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAudXNlci1tZXRhIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG5cbiAgICAgICAgLnBsYXllcm5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzAzOTQwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvdW50cnkge1xuICAgICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgICBjb2xvcjogIzk0OWVhNjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxvZ2luQngge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDM3NHB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDI1MCwgMjUwLCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5CeCAubG9nb2xvZ2luIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZ2luQng+aDEge1xuICAgIG1hcmdpbjogMjBweCAwIDQwcHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5sb2dpbkJ4IGZvcm0ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmZvcm0gbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbn1cblxuLmxvZ2luQnggIGlvbi1zZWxlY3R7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSksIDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbi5sb2dpbkJ4IGZvcm0gaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XG4gICAgY29sb3I6ICM1MjUyNTI5NDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG59XG5cbi5sb2dpbkJ4IGZvcm0gdGV4dGFyZWEge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XG4gICAgY29sb3I6ICM1MjUyNTI5NDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW9uLXNlbGVjdCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG59XG5cbi5zZWNvbmRhcnktbGluayB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OiAuNDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICBmb250LXNpemU6IC45ZW07XG59XG5cbi5zZWNvbmRhcnktbGluazpob3ZlciB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmxvZ2luQnRuIHtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVFOEYwRjtcbn1cblxuLmxic3RrIHtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxufVxuXG4ubG9naW5CeCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogMzc0cHg7XG4gICAgcGFkZGluZzogMXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUyLCAyNTAsIDI1MCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luQnggLmxvZ29sb2dpbiB7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2dpbkJ4PmgxIHtcbiAgICBtYXJnaW46IDIwcHggMCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubG9naW5CdG4ge1xuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU4RjBGO1xufVxuXG4uaW5zdGsgaW9uLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogOXB4IDNweDtcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xufVxuXG5cbi50YWJsZS1zY3JvbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbi50YWJsZS13cmFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRhYmxlLXNjcm9sbCB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi50YWJsZS1zY3JvbGwgdGgsXG4udGFibGUtc2Nyb2xsIHRkIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnRhYmxlLXNjcm9sbCB0aGVhZCxcbi50YWJsZS1zY3JvbGwgdGZvb3Qge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgIzRlYTNhNiwgIzEwNjQ2NCkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jbG9uZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY2xvbmUgdGgsXG4uY2xvbmUgdGQge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlblxufVxuXG4uY2xvbmUgdGQsXG4uY2xvbmUgdGgge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnRcbn1cblxuLmNsb25lIHRib2R5IHRoIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5jbG9uZSAuZml4ZWQtc2lkZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5jbG9uZSB0aGVhZCxcbi5jbG9uZSB0Zm9vdCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JnLXdlYmMxMTIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgbGVmdC9jb250YWluIGZpeGVkLCAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iZ3BybyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JncHJvLmpwZ1wiKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIge1xuICBoZWlnaHQ6IDE0MHB4O1xufVxuLmNhcmQgLmhlYWRlciAuYXZhdGFyIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNhcmQgLmhlYWRlciAuYXZhdGFyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtODRweDtcbiAgYm9yZGVyOiA4cHggc29saWQgIzlEYzkxMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjU2cHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEgLnBsYXllcm5hbWUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMzAzOTQwO1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIC5jb3VudHJ5IHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiAjOTQ5ZWE2O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmxvZ2luQngge1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMzc0cHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUyLCAyNTAsIDI1MCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5CeCAubG9nb2xvZ2luIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubG9naW5CeCA+IGgxIHtcbiAgbWFyZ2luOiAyMHB4IDAgNDBweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5sb2dpbkJ4IGZvcm0ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5mb3JtIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5sb2dpbkJ4IGlvbi1zZWxlY3Qge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmYwO1xuICBjb2xvcjogIzUyNTI1Mjk0O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIHRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgY29sb3I6ICM1MjUyNTI5NDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cblxuLmxvZ2luQnggZm9ybSBpb24tc2VsZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cblxuLnNlY29uZGFyeS1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDAuNDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4uc2Vjb25kYXJ5LWxpbms6aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmxvZ2luQnRuIHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1RThGMEY7XG59XG5cbi5sYnN0ayB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5sb2dpbkJ4IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDM3NHB4O1xuICBwYWRkaW5nOiAxcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUyLCAyNTAsIDI1MCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5CeCAubG9nb2xvZ2luIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubG9naW5CeCA+IGgxIHtcbiAgbWFyZ2luOiAyMHB4IDAgMjBweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5sb2dpbkJ0biB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU4RjBGO1xufVxuXG4uaW5zdGsgaW9uLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDlweCAzcHg7XG4gIG1hcmdpbi10b3A6IC04cHg7XG59XG5cbi50YWJsZS1zY3JvbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbn1cblxuLnRhYmxlLXdyYXAge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50YWJsZS1zY3JvbGwgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLnRhYmxlLXNjcm9sbCB0aCxcbi50YWJsZS1zY3JvbGwgdGQge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnRhYmxlLXNjcm9sbCB0aGVhZCxcbi50YWJsZS1zY3JvbGwgdGZvb3Qge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICM0ZWEzYTYsICMxMDY0NjQpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jbG9uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNsb25lIHRoLFxuLmNsb25lIHRkIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY2xvbmUgdGQsXG4uY2xvbmUgdGgge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY2xvbmUgdGJvZHkgdGgge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBjb2xvcjogcmVkO1xufVxuXG4uY2xvbmUgLmZpeGVkLXNpZGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uY2xvbmUgdGhlYWQsXG4uY2xvbmUgdGZvb3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn0iXX0= */";

/***/ }),

/***/ 8178:
/*!***********************************************************!*\
  !*** ./src/app/profile/profile.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: url(\"/assets/images/bg-webc112.png\") no-repeat center left/contain fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.bgpro {\n  background-image: url(\"/assets/images/bgpro.jpg\");\n  height: auto;\n  background-size: cover;\n  filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 140px;\n}\n\n.card .header ion-fab {\n  width: 28px;\n  height: 28px;\n  position: absolute;\n  right: 140px;\n}\n\n.card .header ion-fab ion-fab-button {\n  width: 28px;\n  height: 28px;\n}\n\n.card .header .avatar {\n  width: 160px;\n  height: 100px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  /*bottom: calc(-1*(80px + 4px));*/\n  border: 3px solid #0f6464;\n  background-color: #fff;\n}\n\n.card-body {\n  margin-top: 20px;\n  padding: 30px;\n  height: calc(100vh - 256px);\n  text-align: center;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 40px;\n  font-size: 1.3rem;\n}\n\n.loginBx form {\n  text-align: left;\n}\n\nform label {\n  font-weight: 700;\n  font-size: 0.9rem;\n  display: block;\n  padding: 0 0 5px 5px;\n}\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form textarea {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form ion-select {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: 0.4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: 0.9em;\n}\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1;\n}\n\n.loginBtn {\n  width: 98%;\n  margin: 0;\n  background: #126666;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 14px;\n  padding: 12px;\n}\n\n.loginBx form .exp-area {\n  border: 1px solid #c8cccf;\n  padding: 1%;\n  margin-bottom: 15px;\n}\n\n.loginBx form .exp-area .form-group {\n  border-bottom: 1px solid #c8cccf;\n  margin-bottom: 5px;\n}\n\n.loginBx form p {\n  font-size: 14px;\n  color: #57595a;\n}\n\n.loginBx form .form-smlinput {\n  width: 87%;\n  margin-left: 10px;\n}\n\n.loginBx form input {\n  width: 100%;\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form textarea {\n  width: 100%;\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.loginBx form ion-select {\n  width: 100%;\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n}\n\n.log_in_btn {\n  width: 100%;\n  margin: 0;\n  background: #126666;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.face_btn {\n  background: #4267b2;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 50px;\n  display: block;\n  width: 140px;\n  text-align: center;\n  margin: 0 5px;\n}\n\n.g_btn {\n  background: #db4437;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 50px;\n  width: 120px;\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi95aWl1LWN1c3RvbWVyLWFuZHJpb2QtbWFpbiUyMDIvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0RkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0k7RUFDSSxhQUFBO0FDQ1I7O0FEQ1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NaOztBRENZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDaEI7O0FERVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FaOztBREVZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNBaEI7O0FETUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FES0k7RUFDSSxpQkFBQTtBQ0hSOztBREtRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0haOztBRE1RO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNKWjs7QURTQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURTQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFNBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFNBO0VBQ0ksZ0JBQUE7QUNOSjs7QURTQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNOSjs7QURTQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQ05KOztBRFNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FDTko7O0FEU0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0FDTko7O0FEU0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDTko7O0FEU0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ05KOztBRFNBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDTko7O0FEU0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFNBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNOSjs7QURTQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDhFQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTko7O0FEU0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURTQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4RUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFNBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNOSjs7QURTQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNOSjs7QURTQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ05KIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnLXdlYmMxMTIucG5nJykgbm8tcmVwZWF0IGNlbnRlciBsZWZ0L2NvbnRhaW4gZml4ZWQsICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJncHJvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JncHJvLmpwZycpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmNhcmQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG5cbiAgICAgICAgaW9uLWZhYntcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDE0MHB4O1xuXG4gICAgICAgICAgICBpb24tZmFiLWJ1dHRvbntcbiAgICAgICAgICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAvKmJvdHRvbTogY2FsYygtMSooODBweCArIDRweCkpOyovXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzBmNjQ2NDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDIwMHB4ICsgNTZweCkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC51c2VyLW1ldGEge1xuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcblxuICAgICAgICAucGxheWVybmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICMzMDM5NDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY291bnRyeSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDkwJTtcbiAgICAgICAgICAgIGNvbG9yOiAjOTQ5ZWE2O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubG9naW5CeCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogMzc0cHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMjUwLCAyNTAsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbkJ4IC5sb2dvbG9naW4ge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubG9naW5CeD5oMSB7XG4gICAgbWFyZ2luOiAyMHB4IDAgNDBweDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmxvZ2luQnggZm9ybSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuZm9ybSBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IC45cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAgMCA1cHggNXB4O1xufVxuXG4ubG9naW5CeCBmb3JtIGlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYwO1xuICAgIGNvbG9yOiAjNTI1MjUyOTQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIHRleHRhcmVhIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYwO1xuICAgIGNvbG9yOiAjNTI1MjUyOTQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzUpO1xufVxuXG4uc2Vjb25kYXJ5LWxpbmsge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eTogLjQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgZm9udC1zaXplOiAuOWVtO1xufVxuXG4uc2Vjb25kYXJ5LWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5sb2dpbkJ0biB7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZDogIzEyNjY2NjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xufVxuXG4ubG9naW5CeCBmb3JtIC5leHAtYXJlYSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4Y2NjZjtcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubG9naW5CeCBmb3JtIC5leHAtYXJlYSAuZm9ybS1ncm91cCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjOGNjY2Y7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubG9naW5CeCBmb3JtIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzU3NTk1YTtcbn1cblxuLmxvZ2luQnggZm9ybSAuZm9ybS1zbWxpbnB1dCB7XG4gICAgd2lkdGg6IDg3JTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSksIDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuLmxvZ2luQnggZm9ybSB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSksIDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuLmxvZ2luQnggZm9ybSBpb24tc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTYlKSwgMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9nX2luX2J0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQ6ICMxMjY2NjY7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZmFjZV9idG4ge1xuICAgIGJhY2tncm91bmQ6ICM0MjY3YjI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCA1cHg7XG59XG5cbi5nX2J0biB7XG4gICAgYmFja2dyb3VuZDogI2RiNDQzNztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JnLXdlYmMxMTIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgbGVmdC9jb250YWluIGZpeGVkLCAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iZ3BybyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JncHJvLmpwZ1wiKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIge1xuICBoZWlnaHQ6IDE0MHB4O1xufVxuLmNhcmQgLmhlYWRlciBpb24tZmFiIHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTQwcHg7XG59XG4uY2FyZCAuaGVhZGVyIGlvbi1mYWIgaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xufVxuLmNhcmQgLmhlYWRlciAuYXZhdGFyIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNhcmQgLmhlYWRlciAuYXZhdGFyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLypib3R0b206IGNhbGMoLTEqKDgwcHggKyA0cHgpKTsqL1xuICBib3JkZXI6IDNweCBzb2xpZCAjMGY2NDY0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMzBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjU2cHgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSAucGxheWVybmFtZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMDM5NDA7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEgLmNvdW50cnkge1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICM5NDllYTY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubG9naW5CeCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAzNzRweDtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDI1MCwgMjUwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbkJ4IC5sb2dvbG9naW4ge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2dpbkJ4ID4gaDEge1xuICBtYXJnaW46IDIwcHggMCA0MHB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmxvZ2luQnggZm9ybSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmZvcm0gbGFiZWwge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgMCA1cHggNXB4O1xufVxuXG4ubG9naW5CeCBmb3JtIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmYwO1xuICBjb2xvcjogIzUyNTI1Mjk0O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIHRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmYwO1xuICBjb2xvcjogIzUyNTI1Mjk0O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5zZWNvbmRhcnktbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAwLjQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLnNlY29uZGFyeS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5sb2dpbkJ0biB7XG4gIHdpZHRoOiA5OCU7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogIzEyNjY2NjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTJweDtcbn1cblxuLmxvZ2luQnggZm9ybSAuZXhwLWFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjY2NmO1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmxvZ2luQnggZm9ybSAuZXhwLWFyZWEgLmZvcm0tZ3JvdXAge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M4Y2NjZjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubG9naW5CeCBmb3JtIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNTc1OTVhO1xufVxuXG4ubG9naW5CeCBmb3JtIC5mb3JtLXNtbGlucHV0IHtcbiAgd2lkdGg6IDg3JTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDBweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuLmxvZ2luQnggZm9ybSB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuXG4ubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDBweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuLmxvZ19pbl9idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAjMTI2NjY2O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZmFjZV9idG4ge1xuICBiYWNrZ3JvdW5kOiAjNDI2N2IyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi5nX2J0biB7XG4gIGJhY2tncm91bmQ6ICNkYjQ0Mzc7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";

/***/ }),

/***/ 2121:
/*!*********************************************************************!*\
  !*** ./src/app/registration/registration.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".bg1 {\n  background-image: url(\"/assets/images/bg1.jpg\");\n  height: auto;\n  background-size: cover;\n  filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center;\n  background: #fff !important;\n  color: #000 !important;\n}\n\nion-content {\n  --background: url(\"/assets/images/bg-webc112.png\") no-repeat center left/contain fixed, #fff;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n  color: #000 !important;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 40px;\n  font-size: 1.3rem;\n}\n\n.loginBx form {\n  text-align: left;\n}\n\nform label {\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff !important;\n  color: #000 !important;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form ion-select {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.frmaxon {\n  margin-top: 0px;\n  overflow: hidden;\n}\n\n.frmaxon1 .col {\n  width: 48%;\n  display: inline-flex;\n}\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: 0.4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: 0.9em;\n}\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1;\n}\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F;\n}\n\n.loginBx form p {\n  font-size: 12px;\n}\n\n.loginBx form input, .loginBx form ion-select {\n  height: 45px;\n  border-radius: 50px;\n  border: none;\n  background: #fff;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.16), 0 0px 10px 0 rgba(0, 0, 0, 0.16);\n  font-size: 14px;\n  padding: 5px 20px;\n  background: #fff !important;\n  color: #000 !important;\n}\n\n.loginBx form ion-select {\n  margin-top: 15px;\n}\n\n.log_in_btn {\n  width: 100%;\n  margin: 0;\n  background: #126666;\n  border-radius: 50px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.face_btn {\n  background: #4267b2;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 50px;\n  display: block;\n  width: 140px;\n  text-align: center;\n  margin: 0 5px;\n}\n\n.g_btn {\n  background: #db4437;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 50px;\n  width: 120px;\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3lpaXUtY3VzdG9tZXItYW5kcmlvZC1tYWluJTIwMi9zcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDQTtFQUNJLDRGQUFBO0FDRUo7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0lKOztBRERBO0VBQ0ksZ0JBQUE7QUNJSjs7QURGQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUNBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0FDT0o7O0FETEE7RUFBUyxlQUFBO0VBQWlCLGdCQUFBO0FDVTFCOztBRFRBO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0FDWUo7O0FEVkE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDYUo7O0FEWEE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ2NKOztBRFpBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNlSjs7QURiQTtFQUNJLGVBQUE7QUNnQko7O0FEYkE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4RUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUNnQko7O0FEZEU7RUFFQSxnQkFBQTtBQ2dCRjs7QURkRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDaUJKOztBRGZFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ2tCSjs7QURoQkU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNtQkoiLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnMXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnMS5qcGcnKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmctd2ViYzExMi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGxlZnQvY29udGFpbiBmaXhlZCwgI2ZmZjtcbiAgIFxufVxuLmxvZ2luQnh7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogMzc0cHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMjUyLCAyNTAsIDI1MCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuLmxvZ2luQnggLmxvZ29sb2dpbntcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5sb2dpbkJ4ID4gaDF7XG4gICAgbWFyZ2luOjIwcHggMCA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubG9naW5CeCBmb3Jte1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5mb3JtIGxhYmVse1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOi45cmVtO1xufVxuLmxvZ2luQnggZm9ybSBpbnB1dHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjM1KTtcbn1cbi5sb2dpbkJ4IGZvcm0gaW9uLXNlbGVjdCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG59XG4uZnJtYXhvbnttYXJnaW4tdG9wOiAwcHg7IG92ZXJmbG93OiBoaWRkZW47fVxuLmZybWF4b24xIC5jb2wge1xuICAgIHdpZHRoOiA0OCU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4uc2Vjb25kYXJ5LWxpbmt7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OiAuNDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDoxM3B4O1xuICAgIGZvbnQtc2l6ZTouOWVtO1xufVxuLnNlY29uZGFyeS1saW5rOmhvdmVye1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG9wYWNpdHk6MTtcbn1cbi5sb2dpbkJ0biB7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzVFOEYwRjtcbn1cbi5sb2dpbkJ4IGZvcm0gcHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCwubG9naW5CeCBmb3JtIGlvbi1zZWxlY3R7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYigwIDAgMCAvIDE2JSksIDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxNiUpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgfVxuICAubG9naW5CeCBmb3JtIGlvbi1zZWxlY3R7XG5cbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuICAubG9nX2luX2J0bntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZDogIzEyNjY2NjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmZhY2VfYnRue1xuICAgIGJhY2tncm91bmQ6ICM0MjY3YjI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjowIDVweDtcbiAgfVxuICAuZ19idG57XG4gICAgYmFja2dyb3VuZDogI2RiNDQzNztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH0iLCIuYmcxIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmcxLmpwZ1wiKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmctd2ViYzExMi5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBsZWZ0L2NvbnRhaW4gZml4ZWQsICNmZmY7XG59XG5cbi5sb2dpbkJ4IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDM3NHB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMjUwLCAyNTAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luQnggLmxvZ29sb2dpbiB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZ2luQnggPiBoMSB7XG4gIG1hcmdpbjogMjBweCAwIDQwcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuZm9ybSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW9uLXNlbGVjdCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5mcm1heG9uIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZnJtYXhvbjEgLmNvbCB7XG4gIHdpZHRoOiA0OCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uc2Vjb25kYXJ5LWxpbmsge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC40O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5zZWNvbmRhcnktbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubG9naW5CdG4ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVFOEYwRjtcbn1cblxuLmxvZ2luQnggZm9ybSBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubG9naW5CeCBmb3JtIGlucHV0LCAubG9naW5CeCBmb3JtIGlvbi1zZWxlY3Qge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW9uLXNlbGVjdCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5sb2dfaW5fYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogIzEyNjY2NjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmZhY2VfYnRuIHtcbiAgYmFja2dyb3VuZDogIzQyNjdiMjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgNXB4O1xufVxuXG4uZ19idG4ge1xuICBiYWNrZ3JvdW5kOiAjZGI0NDM3O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 7190:
/*!*********************************************************************!*\
  !*** ./src/app/request-view/request-view.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: url(\"/assets/images/bg-webc112.png\") no-repeat center left/contain fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.bgpro {\n  background-image: url(\"/assets/images/bgpro.jpg\");\n  height: auto;\n  background-size: cover;\n  filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n/*==============Order Details=============*/\n\n.order-details-item {\n  border-bottom: 1px solid #065e5e;\n  padding: 15px 20px;\n  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.1);\n  margin-bottom: 25px;\n  border-radius: 5px;\n  background: #fff;\n}\n\n.order-details-item ul {\n  margin: 0;\n  padding: 0;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.order-details-item ul > li {\n  list-style: none;\n  font-size: 12px;\n  color: #000;\n  font-weight: 600;\n  line-height: 20px;\n}\n\n.order-status-show {\n  color: #065e5e;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.order-status-show i {\n  position: relative;\n  top: 1px;\n}\n\n.order-status-show:focus {\n  color: #065e5e;\n}\n\n.order-status-show:hover {\n  color: #57b1b7;\n}\n\n.timeline-steps {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.timeline-steps .timeline-content {\n  width: 18rem;\n  text-align: center;\n}\n\n.timeline-steps .timeline-step {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  margin: 0.5rem;\n}\n\n.timeline-content p {\n  font-size: 12px;\n  line-height: 12px;\n  font-weight: 500;\n  margin: 0;\n}\n\n.timeline-content span {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 10px;\n  font-weight: 600;\n}\n\n.disable-block .timeline-content .inner-circle {\n  background: #adadad !important;\n}\n\n.disable-block .timeline-content .inner-circle:before {\n  background: #a7a7a7 !important;\n}\n\n.disable-block .timeline-content p, .disable-block .timeline-content span {\n  color: #adadad;\n}\n\n@media (min-width: 575px) {\n  .timeline-steps {\n    justify-content: start;\n  }\n\n  .timeline-steps .timeline-content {\n    width: 6rem;\n    text-align: left;\n  }\n\n  .timeline-steps .timeline-step:not(:last-child):after {\n    content: \"\";\n    display: block;\n    /*border-top: .25rem dotted #3b82f6;*/\n    width: 3.46rem;\n    position: absolute;\n    left: 7.5rem;\n    top: 0.3125rem;\n  }\n\n  .timeline-steps .timeline-step:not(:first-child):before {\n    content: \"\";\n    display: block;\n    border-top: 0.15rem dotted #b1b1b1;\n    width: 6.2rem;\n    position: absolute;\n    right: 5.7rem;\n    top: 0.4125rem;\n  }\n}\n\n.timeline-steps .timeline-content .inner-circle {\n  border-radius: 1.5rem;\n  height: 10px;\n  width: 10px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #059510;\n}\n\n.timeline-steps .timeline-content .inner-circle:before {\n  content: \"\";\n  background-color: #62ff00;\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  min-width: 20px;\n  border-radius: 6.25rem;\n  opacity: 0.4;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 140px;\n}\n\n.card .header .avatar {\n  width: 160px;\n  height: 100px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -84px;\n  border: 8px solid #9Dc912;\n  background-color: #fff;\n}\n\n.card-body {\n  padding: 0px;\n  height: calc(100vh - 256px);\n  overflow: hidden;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 10px;\n  font-weight: 300;\n  color: #303940;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 40px;\n  font-size: 1.3rem;\n}\n\n.loginBx form {\n  text-align: left;\n}\n\nform label {\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form textarea {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form ion-select {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: 0.4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: 0.9em;\n}\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1;\n}\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F;\n}\n\n.lbstk {\n  color: #FFF;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 1px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 20px;\n  font-size: 1.3rem;\n}\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F;\n}\n\n.instk ion-button {\n  padding: 9px 3px;\n  margin-top: -8px;\n}\n\n.table-scroll {\n  position: relative;\n  max-width: 600px;\n  margin: auto;\n  overflow: hidden;\n  border: 1px solid #000;\n}\n\n.table-wrap {\n  width: 100%;\n  overflow: auto;\n}\n\n.table-scroll table {\n  width: 100%;\n  margin: auto;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n\n.table-scroll th,\n.table-scroll td {\n  padding: 5px 10px;\n  border: 1px solid #000;\n  white-space: nowrap;\n  vertical-align: top;\n}\n\n.table-scroll thead,\n.table-scroll tfoot {\n  background: linear-gradient(40deg, #4ea3a6, #106464) !important;\n  color: #fff;\n  text-align: center;\n}\n\n.clone {\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n\n.clone th,\n.clone td {\n  visibility: hidden;\n}\n\n.clone td,\n.clone th {\n  border-color: transparent;\n}\n\n.clone tbody th {\n  visibility: visible;\n  color: red;\n}\n\n.clone .fixed-side {\n  border: 1px solid #000;\n  background: #eee;\n  visibility: visible;\n}\n\n.clone thead,\n.clone tfoot {\n  background: transparent;\n}\n\n/* Put this code in your CSS file, e.g. app.component.css */\n\n/* The div container */\n\n.qrcodeImage {\n  display: flex;\n  flex: 1;\n}\n\n/* Add custom styles here */\n\n.center {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3lpaXUtY3VzdG9tZXItYW5kcmlvZC1tYWluJTIwMi9zcmMvYXBwL3JlcXVlc3Qtdmlldy9yZXF1ZXN0LXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0RkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURJQTtFQUNJLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDREo7O0FESUEsMkNBQUE7O0FBQ0E7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURHQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EscUNBQUE7QUNBRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQ0dGOztBRERBO0VBQ0UsY0FBQTtBQ0lGOztBREZBO0VBQ0UsY0FBQTtBQ0tGOztBREhBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ01GOztBREpBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDT0Y7O0FESkE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ09GOztBRExBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDUUY7O0FETkE7RUFDRSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1NGOztBRE5BO0VBQ0UsOEJBQUE7QUNTRjs7QURQQTtFQUNFLDhCQUFBO0FDVUY7O0FEUkE7RUFDRSxjQUFBO0FDV0Y7O0FEVEE7RUFDQTtJQUNFLHNCQUFBO0VDWUE7O0VEVkY7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUNhQTs7RURYRjtJQUNFLFdBQUE7SUFDQSxjQUFBO0lBQ0EscUNBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQ2NBOztFRFpGO0lBQ0UsV0FBQTtJQUNBLGNBQUE7SUFDQSxrQ0FBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0VDZUE7QUFDRjs7QURiQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ2VGOztBRGJBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNnQkY7O0FEYkE7RUFDSSxjQUFBO0FDZ0JKOztBRGRJO0VBQ0ksYUFBQTtBQ2dCUjs7QURkUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDZ0JaOztBRGRZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ2dCaEI7O0FEVkE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQ2FKOztBRFhJO0VBQ0ksaUJBQUE7QUNhUjs7QURYUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNhWjs7QURWUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDWVo7O0FEUEE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDVUo7O0FEUEE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNVSjs7QURQQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNVSjs7QURQQTtFQUNJLGdCQUFBO0FDVUo7O0FEUEE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDVUo7O0FEUEE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FDVUo7O0FEUEE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FDVUo7O0FEUEE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtBQ1VKOztBRFBBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1VKOztBRFBBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUNVSjs7QURQQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDVUo7O0FEUEE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVUo7O0FETkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDU0o7O0FETkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNTSjs7QUROQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNTSjs7QUROQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDU0o7O0FETkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDU0o7O0FETEE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNRSjs7QURMQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDUUo7O0FETEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNRSjs7QURMQTs7RUFFSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1FKOztBRExBOztFQUVJLCtEQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDUUo7O0FETEE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7QUNRSjs7QURMQTs7RUFFSSxrQkFBQTtBQ1FKOztBRExBOztFQUVJLHlCQUFBO0FDUUo7O0FETEE7RUFDSSxtQkFBQTtFQUNBLFVBQUE7QUNRSjs7QURMQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1FKOztBRExBOztFQUVJLHVCQUFBO0FDUUo7O0FETEEsMkRBQUE7O0FBRUEsc0JBQUE7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsT0FBQTtBQ09KOztBREpFLDJCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtBQ09KIiwiZmlsZSI6InJlcXVlc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmctd2ViYzExMi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGxlZnQvY29udGFpbiBmaXhlZCwgI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cblxuLmJncHJvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JncHJvLmpwZycpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLyo9PT09PT09PT09PT09PU9yZGVyIERldGFpbHM9PT09PT09PT09PT09Ki9cbi5vcmRlci1kZXRhaWxzLWl0ZW17XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY1ZTVlO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggMCByZ2IoMCAwIDAgLyAxMCUpLCAwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTAlKTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4OyAgXG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ub3JkZXItZGV0YWlscy1pdGVtIHVse1xuICBtYXJnaW46MDtcbiAgcGFkZGluZzowO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuLm9yZGVyLWRldGFpbHMtaXRlbSB1bD5saXtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ub3JkZXItc3RhdHVzLXNob3d7XG4gIGNvbG9yOiAjMDY1ZTVlO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ub3JkZXItc3RhdHVzLXNob3cgaXtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHRvcDoxcHg7XG59XG4ub3JkZXItc3RhdHVzLXNob3c6Zm9jdXN7XG4gIGNvbG9yOiMwNjVlNWU7XG59XG4ub3JkZXItc3RhdHVzLXNob3c6aG92ZXJ7XG4gIGNvbG9yOiM1N2IxYjc7XG59XG4udGltZWxpbmUtc3RlcHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwXG59XG4udGltZWxpbmUtc3RlcHMgLnRpbWVsaW5lLWNvbnRlbnQge1xuICB3aWR0aDogMThyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4udGltZWxpbmUtc3RlcHMgLnRpbWVsaW5lLXN0ZXAge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMC41cmVtO1xufVxuLnRpbWVsaW5lLWNvbnRlbnQgcHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xufVxuLnRpbWVsaW5lLWNvbnRlbnQgc3BhbntcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZGlzYWJsZS1ibG9jayAudGltZWxpbmUtY29udGVudCAuaW5uZXItY2lyY2xle1xuICBiYWNrZ3JvdW5kOiNhZGFkYWQgIWltcG9ydGFudDtcbn1cbi5kaXNhYmxlLWJsb2NrIC50aW1lbGluZS1jb250ZW50IC5pbm5lci1jaXJjbGU6YmVmb3Jle1xuICBiYWNrZ3JvdW5kOiNhN2E3YTcgIWltcG9ydGFudDtcbn1cbi5kaXNhYmxlLWJsb2NrIC50aW1lbGluZS1jb250ZW50IHAsIC5kaXNhYmxlLWJsb2NrIC50aW1lbGluZS1jb250ZW50IHNwYW57XG4gIGNvbG9yOiNhZGFkYWQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDo1NzVweCkge1xuLnRpbWVsaW5lLXN0ZXBzIHtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cbi50aW1lbGluZS1zdGVwcyAudGltZWxpbmUtY29udGVudCB7XG4gIHdpZHRoOiA2cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRpbWVsaW5lLXN0ZXBzIC50aW1lbGluZS1zdGVwOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLypib3JkZXItdG9wOiAuMjVyZW0gZG90dGVkICMzYjgyZjY7Ki9cbiAgd2lkdGg6IDMuNDZyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNy41cmVtO1xuICB0b3A6IC4zMTI1cmVtXG59XG4udGltZWxpbmUtc3RlcHMgLnRpbWVsaW5lLXN0ZXA6bm90KDpmaXJzdC1jaGlsZCk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci10b3A6IDAuMTVyZW0gZG90dGVkICNiMWIxYjE7XG4gIHdpZHRoOiA2LjJyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDUuN3JlbTtcbiAgdG9wOiAwLjQxMjVyZW07XG59XG59XG4udGltZWxpbmUtc3RlcHMgLnRpbWVsaW5lLWNvbnRlbnQgLmlubmVyLWNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU5NTEwO1xufVxuLnRpbWVsaW5lLXN0ZXBzIC50aW1lbGluZS1jb250ZW50IC5pbm5lci1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyZmYwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gIG9wYWNpdHk6IC40O1xufVxuXG4uY2FyZCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcblxuICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogY2FsYygtMSooODBweCArIDRweCkpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogOHB4IHNvbGlkICM5RGM5MTI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgyMDBweCArIDU2cHgpKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLnVzZXItbWV0YSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuXG4gICAgICAgIC5wbGF5ZXJuYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBjb2xvcjogIzMwMzk0MDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3VudHJ5IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICAgICAgY29sb3I6ICM5NDllYTY7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5sb2dpbkJ4IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiAzNzRweDtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUyLCAyNTAsIDI1MCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luQnggLmxvZ29sb2dpbiB7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2dpbkJ4PmgxIHtcbiAgICBtYXJnaW46IDIwcHggMCA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5mb3JtIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XG4gICAgY29sb3I6ICM1MjUyNTI5NDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG59XG5cbi5sb2dpbkJ4IGZvcm0gdGV4dGFyZWEge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XG4gICAgY29sb3I6ICM1MjUyNTI5NDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW9uLXNlbGVjdCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG59XG5cbi5zZWNvbmRhcnktbGluayB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OiAuNDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICBmb250LXNpemU6IC45ZW07XG59XG5cbi5zZWNvbmRhcnktbGluazpob3ZlciB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmxvZ2luQnRuIHtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVFOEYwRjtcbn1cblxuLmxic3RrIHtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxufVxuXG4ubG9naW5CeCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogMzc0cHg7XG4gICAgcGFkZGluZzogMXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUyLCAyNTAsIDI1MCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luQnggLmxvZ29sb2dpbiB7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2dpbkJ4PmgxIHtcbiAgICBtYXJnaW46IDIwcHggMCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubG9naW5CdG4ge1xuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU4RjBGO1xufVxuXG4uaW5zdGsgaW9uLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogOXB4IDNweDtcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xufVxuXG5cbi50YWJsZS1zY3JvbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbi50YWJsZS13cmFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRhYmxlLXNjcm9sbCB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi50YWJsZS1zY3JvbGwgdGgsXG4udGFibGUtc2Nyb2xsIHRkIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnRhYmxlLXNjcm9sbCB0aGVhZCxcbi50YWJsZS1zY3JvbGwgdGZvb3Qge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgIzRlYTNhNiwgIzEwNjQ2NCkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jbG9uZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY2xvbmUgdGgsXG4uY2xvbmUgdGQge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlblxufVxuXG4uY2xvbmUgdGQsXG4uY2xvbmUgdGgge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnRcbn1cblxuLmNsb25lIHRib2R5IHRoIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5jbG9uZSAuZml4ZWQtc2lkZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5jbG9uZSB0aGVhZCxcbi5jbG9uZSB0Zm9vdCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIFB1dCB0aGlzIGNvZGUgaW4geW91ciBDU1MgZmlsZSwgZS5nLiBhcHAuY29tcG9uZW50LmNzcyAqL1xuXG4vKiBUaGUgZGl2IGNvbnRhaW5lciAqL1xuLnFyY29kZUltYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gIH1cbiAgXG4gIC8qIEFkZCBjdXN0b20gc3R5bGVzIGhlcmUgKi9cbiAgLmNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JnLXdlYmMxMTIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgbGVmdC9jb250YWluIGZpeGVkLCAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iZ3BybyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JncHJvLmpwZ1wiKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLyo9PT09PT09PT09PT09PU9yZGVyIERldGFpbHM9PT09PT09PT09PT09Ki9cbi5vcmRlci1kZXRhaWxzLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NWU1ZTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBib3gtc2hhZG93OiAwIDBweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5vcmRlci1kZXRhaWxzLWl0ZW0gdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm9yZGVyLWRldGFpbHMtaXRlbSB1bCA+IGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5vcmRlci1zdGF0dXMtc2hvdyB7XG4gIGNvbG9yOiAjMDY1ZTVlO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm9yZGVyLXN0YXR1cy1zaG93IGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xufVxuXG4ub3JkZXItc3RhdHVzLXNob3c6Zm9jdXMge1xuICBjb2xvcjogIzA2NWU1ZTtcbn1cblxuLm9yZGVyLXN0YXR1cy1zaG93OmhvdmVyIHtcbiAgY29sb3I6ICM1N2IxYjc7XG59XG5cbi50aW1lbGluZS1zdGVwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi50aW1lbGluZS1zdGVwcyAudGltZWxpbmUtY29udGVudCB7XG4gIHdpZHRoOiAxOHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGltZWxpbmUtc3RlcHMgLnRpbWVsaW5lLXN0ZXAge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMC41cmVtO1xufVxuXG4udGltZWxpbmUtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGltZWxpbmUtY29udGVudCBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5kaXNhYmxlLWJsb2NrIC50aW1lbGluZS1jb250ZW50IC5pbm5lci1jaXJjbGUge1xuICBiYWNrZ3JvdW5kOiAjYWRhZGFkICFpbXBvcnRhbnQ7XG59XG5cbi5kaXNhYmxlLWJsb2NrIC50aW1lbGluZS1jb250ZW50IC5pbm5lci1jaXJjbGU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2E3YTdhNyAhaW1wb3J0YW50O1xufVxuXG4uZGlzYWJsZS1ibG9jayAudGltZWxpbmUtY29udGVudCBwLCAuZGlzYWJsZS1ibG9jayAudGltZWxpbmUtY29udGVudCBzcGFuIHtcbiAgY29sb3I6ICNhZGFkYWQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzVweCkge1xuICAudGltZWxpbmUtc3RlcHMge1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIH1cblxuICAudGltZWxpbmUtc3RlcHMgLnRpbWVsaW5lLWNvbnRlbnQge1xuICAgIHdpZHRoOiA2cmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAudGltZWxpbmUtc3RlcHMgLnRpbWVsaW5lLXN0ZXA6bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvKmJvcmRlci10b3A6IC4yNXJlbSBkb3R0ZWQgIzNiODJmNjsqL1xuICAgIHdpZHRoOiAzLjQ2cmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA3LjVyZW07XG4gICAgdG9wOiAwLjMxMjVyZW07XG4gIH1cblxuICAudGltZWxpbmUtc3RlcHMgLnRpbWVsaW5lLXN0ZXA6bm90KDpmaXJzdC1jaGlsZCk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci10b3A6IDAuMTVyZW0gZG90dGVkICNiMWIxYjE7XG4gICAgd2lkdGg6IDYuMnJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDUuN3JlbTtcbiAgICB0b3A6IDAuNDEyNXJlbTtcbiAgfVxufVxuLnRpbWVsaW5lLXN0ZXBzIC50aW1lbGluZS1jb250ZW50IC5pbm5lci1jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1OTUxMDtcbn1cblxuLnRpbWVsaW5lLXN0ZXBzIC50aW1lbGluZS1jb250ZW50IC5pbm5lci1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyZmYwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIge1xuICBoZWlnaHQ6IDE0MHB4O1xufVxuLmNhcmQgLmhlYWRlciAuYXZhdGFyIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNhcmQgLmhlYWRlciAuYXZhdGFyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtODRweDtcbiAgYm9yZGVyOiA4cHggc29saWQgIzlEYzkxMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjU2cHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEgLnBsYXllcm5hbWUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMzAzOTQwO1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIC5jb3VudHJ5IHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiAjOTQ5ZWE2O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmxvZ2luQngge1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMzc0cHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUyLCAyNTAsIDI1MCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5CeCAubG9nb2xvZ2luIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubG9naW5CeCA+IGgxIHtcbiAgbWFyZ2luOiAyMHB4IDAgNDBweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5sb2dpbkJ4IGZvcm0ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5mb3JtIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmYwO1xuICBjb2xvcjogIzUyNTI1Mjk0O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4ubG9naW5CeCBmb3JtIHRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgY29sb3I6ICM1MjUyNTI5NDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cblxuLmxvZ2luQnggZm9ybSBpb24tc2VsZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cblxuLnNlY29uZGFyeS1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDAuNDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4uc2Vjb25kYXJ5LWxpbms6aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmxvZ2luQnRuIHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1RThGMEY7XG59XG5cbi5sYnN0ayB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5sb2dpbkJ4IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDM3NHB4O1xuICBwYWRkaW5nOiAxcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUyLCAyNTAsIDI1MCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5CeCAubG9nb2xvZ2luIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubG9naW5CeCA+IGgxIHtcbiAgbWFyZ2luOiAyMHB4IDAgMjBweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5sb2dpbkJ0biB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU4RjBGO1xufVxuXG4uaW5zdGsgaW9uLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDlweCAzcHg7XG4gIG1hcmdpbi10b3A6IC04cHg7XG59XG5cbi50YWJsZS1zY3JvbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbn1cblxuLnRhYmxlLXdyYXAge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50YWJsZS1zY3JvbGwgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLnRhYmxlLXNjcm9sbCB0aCxcbi50YWJsZS1zY3JvbGwgdGQge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnRhYmxlLXNjcm9sbCB0aGVhZCxcbi50YWJsZS1zY3JvbGwgdGZvb3Qge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICM0ZWEzYTYsICMxMDY0NjQpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jbG9uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNsb25lIHRoLFxuLmNsb25lIHRkIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY2xvbmUgdGQsXG4uY2xvbmUgdGgge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY2xvbmUgdGJvZHkgdGgge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBjb2xvcjogcmVkO1xufVxuXG4uY2xvbmUgLmZpeGVkLXNpZGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uY2xvbmUgdGhlYWQsXG4uY2xvbmUgdGZvb3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLyogUHV0IHRoaXMgY29kZSBpbiB5b3VyIENTUyBmaWxlLCBlLmcuIGFwcC5jb21wb25lbnQuY3NzICovXG4vKiBUaGUgZGl2IGNvbnRhaW5lciAqL1xuLnFyY29kZUltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cblxuLyogQWRkIGN1c3RvbSBzdHlsZXMgaGVyZSAqL1xuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */";

/***/ }),

/***/ 5922:
/*!****************************************************!*\
  !*** ./src/app/stripe/stripe.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".form-row {\n  padding: 10px;\n}\n\n.StripeElement {\n  background-color: white;\n  padding: 8px 12px;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  transition: box-shadow 150ms ease;\n}\n\n.StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n\n.StripeElement--invalid {\n  border-color: #fa755a;\n}\n\nbutton {\n  opacity: 1;\n}\n\nbutton[disabled] {\n  opacity: 0.5;\n}\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important;\n}\n\n#payment-form {\n  text-align: center;\n}\n\nbutton {\n  background-color: limegreen;\n  padding: 10px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmlwZS5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi95aWl1LWN1c3RvbWVyLWFuZHJpb2QtbWFpbiUyMDIvc3JjL2FwcC9zdHJpcGUvc3RyaXBlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFFQSxpQ0FBQTtBQ0NKOztBREVFO0VBQ0UsK0JBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0FDQ0o7O0FEQ0U7RUFBUSxVQUFBO0FDR1Y7O0FERkU7RUFDRSxZQUFBO0FDS0o7O0FESEU7RUFDRSxvQ0FBQTtBQ01KOztBREpFO0VBQ0Usa0JBQUE7QUNPSjs7QURKRTtFQUNFLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNPSiIsImZpbGUiOiJzdHJpcGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tcm93e1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAuU3RyaXBlRWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNlNmViZjE7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlO1xuICB9XG5cbiAgLlN0cmlwZUVsZW1lbnQtLWZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjY2ZkN2RmO1xuICB9XG5cbiAgLlN0cmlwZUVsZW1lbnQtLWludmFsaWQge1xuICAgIGJvcmRlci1jb2xvcjogI2ZhNzU1YTtcbiAgfVxuICBidXR0b24ge29wYWNpdHk6IDE7fVxuICBidXR0b25bZGlzYWJsZWRdIHtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxuICAuU3RyaXBlRWxlbWVudC0td2Via2l0LWF1dG9maWxsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZGU1ICFpbXBvcnRhbnQ7XG4gIH1cbiAgI3BheW1lbnQtZm9ybSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIH1cbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcblxuICB9IiwiLmZvcm0tcm93IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLlN0cmlwZUVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNlNmViZjE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2U7XG59XG5cbi5TdHJpcGVFbGVtZW50LS1mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNjZmQ3ZGY7XG59XG5cbi5TdHJpcGVFbGVtZW50LS1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmE3NTVhO1xufVxuXG5idXR0b24ge1xuICBvcGFjaXR5OiAxO1xufVxuXG5idXR0b25bZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uU3RyaXBlRWxlbWVudC0td2Via2l0LWF1dG9maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmRlNSAhaW1wb3J0YW50O1xufVxuXG4jcGF5bWVudC1mb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */";

/***/ }),

/***/ 4587:
/*!***********************************************************!*\
  !*** ./src/app/tickets/tickets.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: url(\"/assets/images/bg-webc112.png\") no-repeat center left/contain fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.bgpro {\n  background-image: url(\"/assets/images/bgpro.jpg\");\n  height: auto;\n  background-size: cover;\n  filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.event-header {\n  margin: 20px 0;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #0f6464;\n}\n\n.event-header h3 {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n  text-transform: uppercase;\n  color: #0f6464;\n  margin: 0;\n}\n\n.event-bookticket {\n  background: #000;\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n\n.bookticket-left {\n  width: 70%;\n  background-repeat: no-repeat !important;\n  background-position: center center !important;\n  background-size: cover !important;\n  padding: 15px;\n  position: relative;\n}\n\n.bookticket-left::before {\n  background: -webkit-linear-gradient(359deg, #065e5eb8, #000000de);\n  opacity: 0.3;\n  content: \" \";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 0;\n}\n\n.event-name-print h1 {\n  font-size: 12px;\n  line-height: initial;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 800;\n  color: #fff;\n  margin: 0;\n}\n\n.event-name-print h5 {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #ffeb00;\n  text-transform: uppercase;\n  line-height: inherit;\n  margin: 0;\n}\n\n.event-name-print h4 {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 10px;\n  line-height: initial;\n  margin: 0;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #fff;\n  margin-top: 2px;\n}\n\n.event-name-print h4 span {\n  color: #fff;\n}\n\n.event-time-venu {\n  margin-top: 25px;\n}\n\n.event-time-venu h3 {\n  font-size: 12px;\n  line-height: initial;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 700;\n  color: #fff;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.event-time-venu p {\n  font-size: 12px;\n  font-weight: 600;\n  color: #fff;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.top-circle-area {\n  width: 30px;\n  height: 30px;\n  background: #fff;\n  border-radius: 50%;\n  top: -15px;\n  left: -17px;\n  position: absolute;\n}\n\n.top-circle-area-bottom {\n  width: 30px;\n  height: 30px;\n  background: #fff;\n  border-radius: 50%;\n  top: -15px;\n  right: -17px;\n  position: absolute;\n}\n\n.ticket-logo {\n  position: absolute;\n  z-index: 1;\n  width: 100px;\n  transform: rotate(270deg);\n  top: 80px;\n  right: -10px;\n}\n\n.bookticket-right {\n  width: 30%;\n  border-left: 3px dashed #fff;\n  background: linear-gradient(359deg, #065e5e, #000000);\n  padding: 15px;\n  position: relative;\n}\n\n.booking-right-text {\n  height: 150px;\n}\n\n.booking-right-text h1 {\n  font-size: 12px;\n  line-height: initial;\n  text-transform: uppercase;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 800;\n  color: #fff;\n  margin: 0;\n}\n\n.booking-right-text h5 {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 10px;\n  font-weight: 600;\n  color: #ffeb00;\n  text-transform: uppercase;\n  line-height: inherit;\n  margin: 0;\n}\n\n.booking-right-text p {\n  font-size: 10px;\n  color: #fff;\n  margin-right: 10px;\n}\n\n.event-bookticket .download-icon-pdf {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  background: #f00;\n  text-align: center;\n  font-size: 14px;\n  line-height: 30px;\n  border-radius: 50%;\n  color: #fff !important;\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  z-index: 1;\n  margin-left: auto;\n}\n\n@media (min-width: 320px) {\n  .event-bookticket {\n    display: block;\n  }\n\n  .bookticket-left {\n    width: 100%;\n  }\n\n  .bookticket-right {\n    width: 100%;\n    border-top: 3px dashed #fff;\n    border-left: none;\n  }\n\n  .booking-right-text {\n    height: auto;\n    text-align: center;\n  }\n}\n\n.event-bookticket {\n  display: flex;\n  justify-content: space-between;\n}\n\n.bookticket-left {\n  width: 70%;\n}\n\n.bookticket-right {\n  width: 30%;\n  border-left: 3px dashed #fff;\n  border-top: none;\n}\n\n.booking-right-text {\n  transform: rotate(90deg);\n  height: 74px;\n  width: 209px;\n  position: absolute;\n  top: 66px;\n  right: -50px;\n}\n\n.top-circle-area-bottom {\n  width: 30px;\n  height: 30px;\n  background: #fff;\n  border-radius: 50%;\n  top: auto;\n  bottom: -15px;\n  left: -17px;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi95aWl1LWN1c3RvbWVyLWFuZHJpb2QtbWFpbiUyMDIvc3JjL2FwcC90aWNrZXRzL3RpY2tldHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0RkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBRENFO0VBQ0UscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNFSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUU7RUFDRSxVQUFBO0VBQ0EsdUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREU7RUFDRSxpRUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0lKOztBREZFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDS0o7O0FESEU7RUFDRSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtBQ01KOztBREpFO0VBQ0UscUNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDT0o7O0FETEU7RUFDRSxXQUFBO0FDUUo7O0FETkU7RUFDRSxnQkFBQTtBQ1NKOztBRFBFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUNVSjs7QURSRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtBQ1dKOztBRFRFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1lKOztBRFZFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2FKOztBRFhFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNjSjs7QURaRTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLHFEQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDZUo7O0FEYkU7RUFDRSxhQUFBO0FDZ0JKOztBRGRFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNpQko7O0FEZkU7RUFDRSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtBQ2tCSjs7QURoQkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDbUJKOztBRGpCRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNvQko7O0FEakJFO0VBQ0E7SUFDRSxjQUFBO0VDb0JGOztFRGxCQTtJQUNFLFdBQUE7RUNxQkY7O0VEbkJBO0lBQ0UsV0FBQTtJQUNBLDJCQUFBO0lBQ0EsaUJBQUE7RUNzQkY7O0VEcEJBO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0VDdUJGO0FBQ0Y7O0FEckJFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDdUJKOztBRHJCRTtFQUNFLFVBQUE7QUN3Qko7O0FEdEJFO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUN5Qko7O0FEdkJFO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUMwQko7O0FEeEJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUMyQkoiLCJmaWxlIjoidGlja2V0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmctd2ViYzExMi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGxlZnQvY29udGFpbiBmaXhlZCwgI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYmdwcm8ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmdwcm8uanBnJyk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4uZXZlbnQtaGVhZGVyIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzBmNjQ2NDtcbiAgfVxuICAuZXZlbnQtaGVhZGVyIGgzIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjMGY2NDY0O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4uZXZlbnQtYm9va3RpY2tldHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgfVxuICAuYm9va3RpY2tldC1sZWZ0IHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gIH1cbiAgLmJvb2t0aWNrZXQtbGVmdDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzNTlkZWcsIzA2NWU1ZWI4LCMwMDAwMDBkZSk7XG4gICAgb3BhY2l0eTogLjM7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAwO1xuICB9XG4gIC5ldmVudC1uYW1lLXByaW50IGgxe1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmV2ZW50LW5hbWUtcHJpbnQgaDV7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZWIwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuZXZlbnQtbmFtZS1wcmludCBoNHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgfVxuICAuZXZlbnQtbmFtZS1wcmludCBoNCBzcGFue1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5ldmVudC10aW1lLXZlbnV7XG4gICAgbWFyZ2luLXRvcDoyNXB4O1xuICB9XG4gIC5ldmVudC10aW1lLXZlbnUgaDN7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjojZmZmO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5ldmVudC10aW1lLXZlbnUgcHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICB9XG4gIC50b3AtY2lyY2xlLWFyZWF7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRvcDogLTE1cHg7XG4gICAgbGVmdDogLTE3cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIC50b3AtY2lyY2xlLWFyZWEtYm90dG9te1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0b3A6IC0xNXB4O1xuICAgIHJpZ2h0OiAtMTdweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLnRpY2tldC1sb2dve1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgIHRvcDogODBweDtcbiAgICByaWdodDogLTEwcHg7XG4gIH1cbiAgLmJvb2t0aWNrZXQtcmlnaHR7XG4gICAgd2lkdGg6MzAlOyAgIFxuICAgIGJvcmRlci1sZWZ0OiAzcHggZGFzaGVkICNmZmY7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM1OWRlZywjMDY1ZTVlLCMwMDAwMDApO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gIH1cbiAgLmJvb2tpbmctcmlnaHQtdGV4dHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG4gIC5ib29raW5nLXJpZ2h0LXRleHQgaDF7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5ib29raW5nLXJpZ2h0LXRleHQgaDV7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZWIwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuYm9va2luZy1yaWdodC10ZXh0IHB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuZXZlbnQtYm9va3RpY2tldCAuZG93bmxvYWQtaWNvbi1wZGZ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBcbiAgfVxuICBAbWVkaWEobWluLXdpZHRoOjMyMHB4KXtcbiAgLmV2ZW50LWJvb2t0aWNrZXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5ib29rdGlja2V0LWxlZnR7XG4gICAgd2lkdGg6MTAwJTtcbiAgfVxuICAuYm9va3RpY2tldC1yaWdodCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogM3B4IGRhc2hlZCAjZmZmO1xuICAgIGJvcmRlci1sZWZ0Om5vbmU7XG4gIH1cbiAgLmJvb2tpbmctcmlnaHQtdGV4dCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICB9XG4gIC5ldmVudC1ib29rdGlja2V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAuYm9va3RpY2tldC1sZWZ0e1xuICAgIHdpZHRoOjcwJTtcbiAgfVxuICAuYm9va3RpY2tldC1yaWdodCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBib3JkZXItbGVmdDogM3B4IGRhc2hlZCAjZmZmO1xuICAgIGJvcmRlci10b3A6bm9uZTtcbiAgfVxuICAuYm9va2luZy1yaWdodC10ZXh0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgaGVpZ2h0OiA3NHB4O1xuICAgIHdpZHRoOiAyMDlweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2NnB4O1xuICAgIHJpZ2h0OiAtNTBweDtcbiAgfVxuICAudG9wLWNpcmNsZS1hcmVhLWJvdHRvbSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IC0xNXB4O1xuICAgIGxlZnQ6IC0xN3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAiLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmctd2ViYzExMi5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBsZWZ0L2NvbnRhaW4gZml4ZWQsICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJncHJvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmdwcm8uanBnXCIpO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGZpbHRlcjogYmx1cigwcHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4uZXZlbnQtaGVhZGVyIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzBmNjQ2NDtcbn1cblxuLmV2ZW50LWhlYWRlciBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMGY2NDY0O1xuICBtYXJnaW46IDA7XG59XG5cbi5ldmVudC1ib29rdGlja2V0IHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib29rdGlja2V0LWxlZnQge1xuICB3aWR0aDogNzAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib29rdGlja2V0LWxlZnQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDM1OWRlZywgIzA2NWU1ZWI4LCAjMDAwMDAwZGUpO1xuICBvcGFjaXR5OiAwLjM7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMDtcbn1cblxuLmV2ZW50LW5hbWUtcHJpbnQgaDEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG59XG5cbi5ldmVudC1uYW1lLXByaW50IGg1IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZmZlYjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZXZlbnQtbmFtZS1wcmludCBoNCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uZXZlbnQtbmFtZS1wcmludCBoNCBzcGFuIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5ldmVudC10aW1lLXZlbnUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uZXZlbnQtdGltZS12ZW51IGgzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZXZlbnQtdGltZS12ZW51IHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi50b3AtY2lyY2xlLWFyZWEge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogLTE1cHg7XG4gIGxlZnQ6IC0xN3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi50b3AtY2lyY2xlLWFyZWEtYm90dG9tIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IC0xNXB4O1xuICByaWdodDogLTE3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnRpY2tldC1sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIHRvcDogODBweDtcbiAgcmlnaHQ6IC0xMHB4O1xufVxuXG4uYm9va3RpY2tldC1yaWdodCB7XG4gIHdpZHRoOiAzMCU7XG4gIGJvcmRlci1sZWZ0OiAzcHggZGFzaGVkICNmZmY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNTlkZWcsICMwNjVlNWUsICMwMDAwMDApO1xuICBwYWRkaW5nOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib29raW5nLXJpZ2h0LXRleHQge1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uYm9va2luZy1yaWdodC10ZXh0IGgxIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYm9va2luZy1yaWdodC10ZXh0IGg1IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZmZlYjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYm9va2luZy1yaWdodC10ZXh0IHAge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5ldmVudC1ib29rdGlja2V0IC5kb3dubG9hZC1pY29uLXBkZiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogI2YwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLmV2ZW50LWJvb2t0aWNrZXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmJvb2t0aWNrZXQtbGVmdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuYm9va3RpY2tldC1yaWdodCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogM3B4IGRhc2hlZCAjZmZmO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICB9XG5cbiAgLmJvb2tpbmctcmlnaHQtdGV4dCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmV2ZW50LWJvb2t0aWNrZXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ib29rdGlja2V0LWxlZnQge1xuICB3aWR0aDogNzAlO1xufVxuXG4uYm9va3RpY2tldC1yaWdodCB7XG4gIHdpZHRoOiAzMCU7XG4gIGJvcmRlci1sZWZ0OiAzcHggZGFzaGVkICNmZmY7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5ib29raW5nLXJpZ2h0LXRleHQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIGhlaWdodDogNzRweDtcbiAgd2lkdGg6IDIwOXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjZweDtcbiAgcmlnaHQ6IC01MHB4O1xufVxuXG4udG9wLWNpcmNsZS1hcmVhLWJvdHRvbSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IC0xNXB4O1xuICBsZWZ0OiAtMTdweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufSJdfQ== */";

/***/ }),

/***/ 9466:
/*!***********************************************************************************!*\
  !*** ./src/app/transaction-history/transaction-history.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: url(\"/assets/images/bg-webc112.png\") no-repeat center left/contain fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.bgpro {\n  background-image: url(\"/assets/images/bgpro.jpg\");\n  height: auto;\n  background-size: cover;\n  filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 140px;\n}\n\n.card .header .avatar {\n  width: 160px;\n  height: 100px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -84px;\n  border: 8px solid #9Dc912;\n  background-color: #fff;\n}\n\n.card-body {\n  padding: 0px;\n  margin-bottom: 50px;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 10px;\n  font-weight: 300;\n  color: #303940;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 40px;\n  font-size: 1.3rem;\n}\n\n.loginBx form {\n  text-align: left;\n}\n\nform label {\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form textarea {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  color: #52525294;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.loginBx form ion-select {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n}\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: 0.4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: 0.9em;\n}\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1;\n}\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F;\n}\n\n.lbstk {\n  color: #FFF;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 1px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center;\n}\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto;\n}\n\n.loginBx > h1 {\n  margin: 20px 0 20px;\n  font-size: 1.3rem;\n}\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F;\n}\n\n.instk ion-button {\n  padding: 9px 3px;\n  margin-top: -8px;\n}\n\n.table-scroll {\n  position: relative;\n  max-width: 600px;\n  margin: auto;\n  overflow: hidden;\n  border: 1px solid #000;\n}\n\n.table-wrap {\n  width: 100%;\n  overflow: auto;\n}\n\n.table-scroll table {\n  width: 100%;\n  margin: auto;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n\n.table-scroll th,\n.table-scroll td {\n  padding: 5px 10px;\n  border: 1px solid #000;\n  white-space: nowrap;\n  vertical-align: top;\n}\n\n.table-scroll thead,\n.table-scroll tfoot {\n  background: linear-gradient(40deg, #4ea3a6, #106464) !important;\n  color: #fff;\n  text-align: center;\n}\n\n.clone {\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n\n.clone th,\n.clone td {\n  visibility: hidden;\n}\n\n.clone td,\n.clone th {\n  border-color: transparent;\n}\n\n.clone tbody th {\n  visibility: visible;\n  color: red;\n}\n\n.clone .fixed-side {\n  border: 1px solid #000;\n  background: #eee;\n  visibility: visible;\n}\n\n.clone thead,\n.clone tfoot {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi95aWl1LWN1c3RvbWVyLWFuZHJpb2QtbWFpbiUyMDIvc3JjL2FwcC90cmFuc2FjdGlvbi1oaXN0b3J5L3RyYW5zYWN0aW9uLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0RkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0k7RUFDSSxhQUFBO0FDQ1I7O0FEQ1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NaOztBRENZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ0NoQjs7QURLQTtFQUNJLFlBQUE7RUFFQSxtQkFBQTtBQ0hKOztBREtJO0VBQ0ksaUJBQUE7QUNIUjs7QURLUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNIWjs7QURNUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDSlo7O0FEU0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTko7O0FEU0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNOSjs7QURTQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURTQTtFQUNJLGdCQUFBO0FDTko7O0FEU0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDTko7O0FEU0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FDTko7O0FEU0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FDTko7O0FEU0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtBQ05KOztBRFNBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ05KOztBRFNBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUNOSjs7QURTQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDTko7O0FEU0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTko7O0FEVUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDUEo7O0FEVUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNQSjs7QURVQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURVQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDUEo7O0FEVUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDUEo7O0FEVUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNQSjs7QURVQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDUEo7O0FEVUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURVQTs7RUFFSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1BKOztBRFVBOztFQUVJLCtEQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDUEo7O0FEVUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7QUNQSjs7QURVQTs7RUFFSSxrQkFBQTtBQ1BKOztBRFVBOztFQUVJLHlCQUFBO0FDUEo7O0FEVUE7RUFDSSxtQkFBQTtFQUNBLFVBQUE7QUNQSjs7QURVQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1BKOztBRFVBOztFQUVJLHVCQUFBO0FDUEoiLCJmaWxlIjoidHJhbnNhY3Rpb24taGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmctd2ViYzExMi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGxlZnQvY29udGFpbiBmaXhlZCwgI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYmdwcm8ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmdwcm8uanBnJyk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcblxuICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogY2FsYygtMSooODBweCArIDRweCkpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogOHB4IHNvbGlkICM5RGM5MTI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG5cbiAgICAudXNlci1tZXRhIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG5cbiAgICAgICAgLnBsYXllcm5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzAzOTQwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvdW50cnkge1xuICAgICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgICBjb2xvcjogIzk0OWVhNjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxvZ2luQngge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDM3NHB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDI1MCwgMjUwLCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5CeCAubG9nb2xvZ2luIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZ2luQng+aDEge1xuICAgIG1hcmdpbjogMjBweCAwIDQwcHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5sb2dpbkJ4IGZvcm0ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmZvcm0gbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbn1cblxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBjb2xvcjogIzUyNTI1Mjk0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbn1cblxuLmxvZ2luQnggZm9ybSB0ZXh0YXJlYSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBjb2xvcjogIzUyNTI1Mjk0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbn1cblxuLmxvZ2luQnggZm9ybSBpb24tc2VsZWN0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbn1cblxuLnNlY29uZGFyeS1saW5rIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG9wYWNpdHk6IC40O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbn1cblxuLnNlY29uZGFyeS1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ubG9naW5CdG4ge1xuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU4RjBGO1xufVxuXG4ubGJzdGsge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuXG59XG5cbi5sb2dpbkJ4IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiAzNzRweDtcbiAgICBwYWRkaW5nOiAxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDI1MCwgMjUwLCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5CeCAubG9nb2xvZ2luIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZ2luQng+aDEge1xuICAgIG1hcmdpbjogMjBweCAwIDIwcHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5sb2dpbkJ0biB7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RThGMEY7XG59XG5cbi5pbnN0ayBpb24tYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA5cHggM3B4O1xuICAgIG1hcmdpbi10b3A6IC04cHg7XG59XG5cbi50YWJsZS1zY3JvbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbi50YWJsZS13cmFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRhYmxlLXNjcm9sbCB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi50YWJsZS1zY3JvbGwgdGgsXG4udGFibGUtc2Nyb2xsIHRkIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnRhYmxlLXNjcm9sbCB0aGVhZCxcbi50YWJsZS1zY3JvbGwgdGZvb3Qge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgIzRlYTNhNiwgIzEwNjQ2NCkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jbG9uZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY2xvbmUgdGgsXG4uY2xvbmUgdGQge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlblxufVxuXG4uY2xvbmUgdGQsXG4uY2xvbmUgdGgge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnRcbn1cblxuLmNsb25lIHRib2R5IHRoIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5jbG9uZSAuZml4ZWQtc2lkZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5jbG9uZSB0aGVhZCxcbi5jbG9uZSB0Zm9vdCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JnLXdlYmMxMTIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgbGVmdC9jb250YWluIGZpeGVkLCAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iZ3BybyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JncHJvLmpwZ1wiKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIge1xuICBoZWlnaHQ6IDE0MHB4O1xufVxuLmNhcmQgLmhlYWRlciAuYXZhdGFyIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNhcmQgLmhlYWRlciAuYXZhdGFyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtODRweDtcbiAgYm9yZGVyOiA4cHggc29saWQgIzlEYzkxMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIC5wbGF5ZXJuYW1lIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzMwMzk0MDtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSAuY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBjb2xvcjogIzk0OWVhNjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5sb2dpbkJ4IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDM3NHB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMjUwLCAyNTAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luQnggLmxvZ29sb2dpbiB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZ2luQnggPiBoMSB7XG4gIG1hcmdpbjogMjBweCAwIDQwcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuZm9ybSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgY29sb3I6ICM1MjUyNTI5NDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cblxuLmxvZ2luQnggZm9ybSB0ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjA7XG4gIGNvbG9yOiAjNTI1MjUyOTQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5sb2dpbkJ4IGZvcm0gaW9uLXNlbGVjdCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5zZWNvbmRhcnktbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAwLjQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLnNlY29uZGFyeS1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5sb2dpbkJ0biB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU4RjBGO1xufVxuXG4ubGJzdGsge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubG9naW5CeCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAzNzRweDtcbiAgcGFkZGluZzogMXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMjUwLCAyNTAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luQnggLmxvZ29sb2dpbiB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZ2luQnggPiBoMSB7XG4gIG1hcmdpbjogMjBweCAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubG9naW5CdG4ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVFOEYwRjtcbn1cblxuLmluc3RrIGlvbi1idXR0b24ge1xuICBwYWRkaW5nOiA5cHggM3B4O1xuICBtYXJnaW4tdG9wOiAtOHB4O1xufVxuXG4udGFibGUtc2Nyb2xsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbi50YWJsZS13cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGFibGUtc2Nyb2xsIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi50YWJsZS1zY3JvbGwgdGgsXG4udGFibGUtc2Nyb2xsIHRkIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi50YWJsZS1zY3JvbGwgdGhlYWQsXG4udGFibGUtc2Nyb2xsIHRmb290IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNGVhM2E2LCAjMTA2NDY0KSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2xvbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jbG9uZSB0aCxcbi5jbG9uZSB0ZCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNsb25lIHRkLFxuLmNsb25lIHRoIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmNsb25lIHRib2R5IHRoIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmNsb25lIC5maXhlZC1zaWRlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmNsb25lIHRoZWFkLFxuLmNsb25lIHRmb290IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59Il19 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n    <ion-split-pane contentId=\"main-content\">\n        <ion-menu *ngIf=\"authService.isLoggedIn()\" contentId=\"main-content\" type=\"overlay\">\n            <ion-content>\n                <ion-list id=\"inbox-list\">\n                    <ion-list-header><img src=\"/assets/images/logo.png\" alt=\"\" width=\"25%\" style=\"margin: 0 auto;\"></ion-list-header>\n                    <hr>\n                    <ion-menu-toggle auto-hide=\"false\">\n                        <ng-container *ngFor=\"let p of appPages;\">\n                            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n                                <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n                                <ion-label>{{ p.title }}</ion-label>\n                            </ion-item>\n                        </ng-container>\n                        <ng-container *ngFor=\"let p of profilePages;\">\n                            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n                                <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n                                <ion-label>{{ p.title }}</ion-label>\n                            </ion-item>\n                        </ng-container>\n                        <ion-item routerDirection=\"root\" (click)=\"logOut()\" lines=\"none\" detail=\"false\">\n                            <ion-icon slot=\"start\" [ios]=\"'exit-outline'\" [md]=\"'exit-sharp'\"></ion-icon>\n                            <ion-label>LOG OUT</ion-label>\n                        </ion-item>\n\n                    </ion-menu-toggle>\n                </ion-list>\n            </ion-content>\n        </ion-menu>\n        <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n    </ion-split-pane>\n</ion-app>";

/***/ }),

/***/ 3229:
/*!*********************************************************************!*\
  !*** ./src/app/bank-details/bank-details.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Bank Details</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" slot=\"fixed\" >\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        \n        <div class=\"card-body\">\n          <div class=\"loginPg\">\n          <div class=\"loginBx\">\n            <form>\n              <div class=\"form-group\">\n                <ion-lebel>PayPal Merchant ID</ion-lebel>\n                <input type=\"text\" class=\"form-control\" id=\"Merchant_ID\" placeholder=\"Enter PayPal Merchant ID*\" required>\n                <p>How do I find my Secure Merchant ID on my PayPal account?</p>\n              </div>\n              <div class=\"frmaxon\">\n                <div class=\"col text-right\">\n                  <ion-button routerLink=\"/home\" routerDirection=\"forward\" color=\"primary\" shape=\"round\" expand=\"block\">SAVE OR UPDATE</ion-button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 5289:
/*!*******************************************************************!*\
  !*** ./src/app/celebrities/celebrities.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"primary\">\n     <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n     </ion-buttons>\n     <ion-title>Search Celebrities</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" slot=\"fixed\">\n\n \n  \n  <ion-grid>\n     <ion-row>\n        <ion-col>\n           <div >\n              <div class=\"loginPg\">\n                 <div class=\"loginBx\">\n<div class=\"main-dashboard-area\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"celebriti-list-items\">\n            <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\" style=\"padding-left: 0px;\n            padding-bottom: 15px;\">\n                <li class=\"nav-item waves-effect waves-light\">\n                    <a class=\"nav-link active\" id=\"all-tab\" data-toggle=\"tab\" href=\"/celebrities#celeb-all\" role=\"tab\" aria-controls=\"all\" aria-selected=\"true\">All</a>\n                </li>\n                <li class=\"nav-item waves-effect waves-light\" *ngFor=\"let req of expertise; let i = index\">\n                    <a class=\"nav-link\" id=\"id_{{req.id}}\" data-toggle=\"tab\" href=\"/celebrities#celeb-{{req.id}}\" role=\"tab\" aria-controls=\"{{req.name}}\" aria-selected=\"false\">{{req.name}}</a>\n                </li>\n                \n            </ul>\n            <div class=\"tab-content\" id=\"myTabContent\">\n                <div class=\"tab-pane fade show active\" id=\"celeb-all\"  role=\"tabpanel\" aria-labelledby=\"all-tab\">\n                    <div class=\"row\">\n\n                        <div class=\"col-6\" *ngFor=\"let req of celebRequests; let i = index\">\n                            <div class=\"celebrity-item\">\n                                <div class=\"celebrity-img\">\n                                    <img src=\"https://yiiu.vip/{{req.profile_pic}}\" *ngIf=\"req.profile_pic\" alt=\"{{req.name}}\" class=\"image\"/>\n                                    <img src=\"https://yiiu.vip/logoYiiu.png\" *ngIf=\"!req.profile_pic\" alt=\"{{req.name}}\" class=\"image\"/>\n                                </div>\n                                <div class=\"cele-details\">\n                                    <h3>{{req.name}}</h3>\n                                    \n                                    <div class=\"star-rating\">\n                                      <ng-container *ngFor=\"let i of [1,2,3,4,5]\">\n                                          <ion-icon slot=\"icon-only\" *ngIf=\"i<=req.avg_rate\" style=\"font-size:23px; color: yellow; margin-top:8px;\" name=\"star\">\n                                          </ion-icon>\n                                          <ion-icon slot=\"icon-only\" *ngIf=\"i>req.avg_rate\" style=\"font-size:23px;  margin-top:8px;\" name=\"star-outline\">\n                                          </ion-icon>\n                                        \n                                      </ng-container>\n                                    </div>\n                                </div>\n                                <div class=\"overlay\">\n                                    <div class=\"text\">\n                                        <h3>{{req.name}}</h3>\n                                        <a routerLink=\"/occasion\" [queryParams]=\"{ id: req.id}\" class=\"book-btn\">Book Now</a>\n                                        <div class=\"star-rating\">\n                                          <ng-container *ngFor=\"let i of [1,2,3,4,5]\">\n                                            <ion-icon slot=\"icon-only\" *ngIf=\"i<=req.avg_rate\" style=\"font-size:23px; color: yellow; margin-top:8px;\" name=\"star\">\n                                            </ion-icon>\n                                            <ion-icon slot=\"icon-only\" *ngIf=\"i>req.avg_rate\" style=\"font-size:23px;  margin-top:8px;\" name=\"star-outline\">\n                                            </ion-icon>\n                                          \n                                        </ng-container>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div> \n                         \n                        \n                        \n                                                                            \n                    </div>\n                </div>\n                <ng-container *ngFor=\"let req of expertise; let i = index\">\n                  <div class=\"tab-pane fade\" id=\"celeb-{{req.id}}\" role=\"tabpanel\" aria-labelledby=\"celeb-{{req.id}}\">\n                    <div class=\"row\">\n                    \t<div class=\"col-6\" *ngFor=\"let industry of industries[req.id]; let i = index\">\n                            <div class=\"celebrity-item\">\n                                <div class=\"celebrity-img\">\n                                  <img src=\"https://yiiu.vip/{{industry.profile_pic}}\" *ngIf=\"industry.profile_pic\" alt=\"{{industry.name}}\" class=\"image\"/>\n                                  <img src=\"https://yiiu.vip/logoYiiu.png\" *ngIf=\"!industry.profile_pic\" alt=\"{{industry.name}}\" class=\"image\"/>\n                                </div>\n                                <div class=\"cele-details\">\n                                  <h3>{{industry.fullname}}</h3>\n                                  \n                                    <div class=\"star-rating\">\n                                      <ng-container *ngFor=\"let i of [1,2,3,4,5]\">\n                                        <ion-icon slot=\"icon-only\" *ngIf=\"i<=industry.avg_rate\" style=\"font-size:23px; color: yellow; margin-top:8px;\" name=\"star\">\n                                        </ion-icon>\n                                        <ion-icon slot=\"icon-only\" *ngIf=\"i>industry.avg_rate\" style=\"font-size:23px;  margin-top:8px;\" name=\"star-outline\">\n                                        </ion-icon>\n                                      \n                                    </ng-container>\n                                    </div>\n                                </div>\n                                <div class=\"overlay\">\n                                    <div class=\"text\">\n                                       <h3>{{industry.name}}</h3>\n                                        <a routerLink=\"/occasion\" [queryParams]=\"{ id: industry.id}\" class=\"book-btn\">Book Now</a>\n                                        <div class=\"star-rating\">\n                                          <ng-container *ngFor=\"let i of [1,2,3,4,5]\">\n                                            <ion-icon slot=\"icon-only\" *ngIf=\"i<=industry.avg_rate\" style=\"font-size:23px; color: yellow; margin-top:8px;\" name=\"star\">\n                                            </ion-icon>\n                                            <ion-icon slot=\"icon-only\" *ngIf=\"i>industry.avg_rate\" style=\"font-size:23px;  margin-top:8px;\" name=\"star-outline\">\n                                            </ion-icon>\n                                          \n                                        </ng-container>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div> \n                        \n                    </div>\n                </div>\n\n                \n                </ng-container>\n                                                               \n            </div>\n        </div>\n\t</div>\n</div>\n</div>\n</div>\n</div>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>";

/***/ }),

/***/ 3470:
/*!*************************************************************************************!*\
  !*** ./src/app/celebrity-onboarding/celebrity-onboarding.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Celebrity Form</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" slot=\"fixed\">\n  <ion-grid>\n      <ion-row>\n          <ion-col>\n              <div class=\"card-body\">\n                  <div class=\"loginPg\">\n                      <div class=\"loginBx\">\n                          <form>\n                              <div class=\"form-group\">\n                                  <ion-select class=\"selector\" name=\"industry\" placeholder=\"Select your industry\" required>\n                                      <ion-select-option value=\"\">Select your industry</ion-select-option>\n                                      <ion-select-option value=\"1\">Singer</ion-select-option>\n                                      <ion-select-option value=\"2\">Athlete</ion-select-option>\n                                      <ion-select-option value=\"3\">Entertainer</ion-select-option>\n                                  </ion-select>\n                              </div>\n                              <div class=\"form-group\">\n                                  <ion-select class=\"selector\" name=\"language\" placeholder=\"Select your language\" required>\n                                      <ion-select-option value=\"\">Select your language</ion-select-option>\n                                      <ion-select-option value=\"1\">English</ion-select-option>\n                                      <ion-select-option value=\"2\">French</ion-select-option>\n                                      <ion-select-option value=\"3\">Spanish</ion-select-option>\n                                  </ion-select>\n                              </div>\n                              <div class=\"exp-area\">\n                                  <ion-title size=\"small\" color=\"primary\">Select Your Expertise:</ion-title>\n                                  <div class=\"form-group\">\n                                      <p>Sing A Custom Song For Birthday, Anniversary, Or Any Occasion By User's Choice.</p>\n                                      <p>\n                                          <ion-checkbox color=\"primary\"></ion-checkbox>\n                                          <input type=\"text\" class=\"form-smlinput\" value=\"\" placeholder=\"Enter Your Price\" required>\n                                      </p>\n                                  </div>\n                                  <div class=\"form-group\">\n                                      <p>Sing A Song For Birthday, Anniversary, Or Any Occasion By Celebrity Choice.</p>\n                                      <p>\n                                          <ion-checkbox color=\"primary\"></ion-checkbox>\n                                          <input type=\"text\" class=\"form-smlinput\" value=\"\" placeholder=\"Enter Your Price\" required>\n                                      </p>\n                                  </div>\n                                  <div class=\"form-group\">\n                                      <p>Shoot A Custom Video Wish Message For Birthday, Anniversary, Or Any Occasion By User's Choice.</p>\n                                      <p>\n                                          <ion-checkbox color=\"primary\"></ion-checkbox>\n                                          <input type=\"text\" class=\"form-smlinput\" value=\"\" placeholder=\"Enter Your Price\" required>\n                                      </p>\n                                  </div>\n                                  <div class=\"form-group\">\n                                      <p>Shoot A Video Wish Message For Birthday, Anniversary, Or Any Occasion By Celebrity Choice.</p>\n                                      <p>\n                                          <ion-checkbox color=\"primary\"></ion-checkbox>\n                                          <input type=\"text\" class=\"form-smlinput\" value=\"\" placeholder=\"Enter Your Price\" required>\n                                      </p>\n                                  </div>\n                                  <div class=\"form-group\">\n                                      <p>Pay For Live Performance.</p>\n                                      <p>\n                                          <ion-checkbox color=\"primary\"></ion-checkbox>\n                                          <input type=\"text\" class=\"form-smlinput\" value=\"\" placeholder=\"Enter Your Price\" required>\n                                      </p>\n                                  </div>\n                                  <div class=\"form-group\">\n                                    <p><input type=\"text\" class=\"form-smlinput\" value=\"\" placeholder=\"Custom Expertise Area\" required></p>\n                                    <p>\n                                        <ion-checkbox color=\"primary\"></ion-checkbox>\n                                        <input type=\"text\" class=\"form-smlinput\" value=\"\" placeholder=\"Enter Your Price\" required>\n                                    </p>\n                                </div>\n                                </div>\n                                <div class=\"frmaxon\">\n                                  <div class=\"col text-right\">\n                                   <ion-button routerLink=\"/dashboard\" routerDirection=\"forward\" color=\"primary\" shape=\"round\" expand=\"block\">SAVE</ion-button>\n                                  </div>\n                                </div>\n                          </form>\n                      </div>\n                  </div>\n              </div>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ }),

/***/ 6589:
/*!*****************************************************************************!*\
  !*** ./src/app/celebrity-videos/celebrity-videos.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\n  celebrity-videos works!\n</p>\n";

/***/ }),

/***/ 3417:
/*!***************************************************************************!*\
  !*** ./src/app/change-password/change-password.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Change Password</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" slot=\"fixed\">\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <div class=\"card-body\">\n                    <div class=\"loginPg\">\n                        <div class=\"loginBx\">\n                            <form [formGroup]=\"changpassForm\" (ngSubmit)=\"submit()\">\n\n                                <div class=\"form-group\">\n                                 <input type=\"text\" class=\"form-control\" placeholder=\"Old Password *\" formControlName=\"oldpassword\">\n                                 <span class=\"danger\" *ngIf=\"changpassForm.controls['oldpassword'].errors?.required &&\n                                changpassForm.controls['oldpassword'].touched\">Old Password is required</span>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"New Password *\" formControlName=\"newpassword\">\n                                    <span class=\"danger\" *ngIf=\"changpassForm.controls['newpassword'].errors?.required &&\n                                   changpassForm.controls['newpassword'].touched\">New Password is required</span>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Confirm Password *\" formControlName=\"confpassword\">\n                                    <span class=\"danger\" *ngIf=\"changpassForm.controls['confpassword'].errors?.required &&\n                                     changpassForm.controls['confpassword'].touched\">Confirm password is required</span>\n                                     <span class=\"danger\" *ngIf=\"changpassForm.controls['confpassword'].errors?.confirmedValidator\">Password and Confirm Password must be match.</span>\n                                </div>\n\n                                <div class=\"text-center\">\n                                    <ion-button [disabled]=\"!changpassForm.valid\" type=\"submit\" color=\"primary\" shape=\"round\" expand=\"block\">CHANGE PASSWORD</ion-button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";

/***/ }),

/***/ 6762:
/*!*****************************************************************************!*\
  !*** ./src/app/customeroccasion/customeroccasion.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Customer booking occasion</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" slot=\"fixed\">\n  <ion-grid>\n      <ion-row>\n          <ion-col>\n              <div class=\"card-body\">\n                  <div class=\"loginPg\">\n                      <div class=\"loginBx\">\n                        <form [formGroup]=\"occasionForm\" (ngSubmit)=\"submit()\">\n                          <input type=\"hidden\" formControlName=\"celeb_id\"/>\n                          <div id=\"container\">\n                            <ion-list>\n                              <ion-item>\n                                <ion-label>Choose Occasion</ion-label>\n                                <ion-select formControlName=\"occation_type\">\n                                  <ion-select-option *ngFor=\"let item of occTypes\" value=\"{{item.oc_id}}\">{{item.oc_name}}</ion-select-option>\n                                  \n                                </ion-select>\n                              </ion-item>\n                              <!-- <div *ngFor=\"let error of errorMessages.name\">\n                                <ng-container *ngIf=\"name.hasError(error.type) && (name.dirty || name.touched)\">\n                                  <small class =\"error-mesaage\">{{error.message}}</small>\n                                </ng-container>\n                              </div> -->\n                      \n                              \n                                <br/>\n                                <ion-label style=\"margin-left: 20px;\">Date Of Occation</ion-label>\n                                <br/><br/>\n                                <ion-datetime presentation=\"date\" [min]=\"date\" style=\"width: 91%; margin: 0 auto;\" formControlName=\"occation_date\" displayFormat=\"YYYY-MM-DD\" placeholder=\"Select Date\"></ion-datetime>\n                              \n                              <br/>\n                              <ion-label style=\"margin-left: 20px;\">Search Celebrity</ion-label>\n                              <ion-searchbar formControlName=\"search\" type=\"text\" debounce=\"500\" (ionInput)=\"getItems($event)\"></ion-searchbar>\n                              <ion-list *ngIf=\"isItemAvailable\">\n                                <ion-item *ngFor=\"let item of itemsAfterFilter\" (click)=\"loadData(item)\">\n                                  <ion-avatar slot=\"start\">\n                                    <img *ngIf=\"item.profile_pic\" src=\"{{ item.profile_pic }}\">\n                                    <img *ngIf=\"!item.profile_pic\" src=\"https://yiiu.vip/front-end/assets/images/demo_yiiu_user.png\">\n                                    \n                                  </ion-avatar>\n                                  <ion-label>\n                                    {{ item.name }}\n                                  </ion-label>\n                                  \n                                </ion-item>\n                              </ion-list>\n                              <ion-item *ngIf=\"isExpAreasAvailable\">\n                                <ion-label>Choose Expertise Areas</ion-label>\n                                <ion-select formControlName=\"expertise_areas\">\n                                  <ion-select-option *ngFor=\"let item of expertiseAreas| keyvalue\" value=\"{{item.key}}\">{{item.value.name}} - ${{item.value.amount}}</ion-select-option>\n                                  \n                                </ion-select>\n                              </ion-item>\n                              <br/>\n                              <ion-card *ngIf=\"isExpAreasAvailable\">\n                                <video controls preload=\"auto\" style=\"width: 100%\" src=\"https://yiiu.vip/{{introVideo.cvideos}}\"></video>\n                              </ion-card>\n\n                              <ion-item>\n                                <ion-label>Purpose</ion-label>\n                                <ion-textarea formControlName=\"Purpose\" placeholder=\"Enter Purpose\"></ion-textarea>\n                              </ion-item>\n                      \n                      \n                      \n                              <ion-button type=\"submit\" expand=\"block\">\n                                Submit\n                                <ion-icon slot=\"end\" name=\"create\"></ion-icon>\n                              </ion-button>\n                            </ion-list>\n                          </div>\n                        </form>\n                      </div>\n                  </div>\n              </div>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 1029:
/*!***************************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Dashboard</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" slot=\"fixed\">\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"6\">\n                <a (click)=\"redirectTo('request-view')\">\n                    <div class=\"dashboard_item\">\n\t\t\t\t\t\t<div class=\"dshborad_item_icon\">\n\t\t\t\t\t\t\t<img src=\"assets/icon/fame.png\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"dashboard_item_name\">\n\t\t\t\t\t\t\t<h1>My Vehicles</h1>\n\t\t\t\t\t\t\t<p>List my vehicles!</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n                </a>\n            </ion-col>\n            <ion-col size=\"6\">\n                <a (click)=\"redirectTo('invitefriends')\">\n                    <div class=\"dashboard_item\">\n\t\t\t\t\t\t<div class=\"dshborad_item_icon\">\n\t\t\t\t\t\t\t<img src=\"assets/icon/my_request.png\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"dashboard_item_name\">\n\t\t\t\t\t\t\t<h1>Add New Vehicle</h1>\n\t\t\t\t\t\t\t<p>Add more vehicles (if you have)</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n                </a>\n            </ion-col>\n\n            <ion-col size=\"6\">\n                <a data-toggle=\"tab\">\n                    <div class=\"dashboard_item\">\n\t\t\t\t\t\t<div class=\"dshborad_item_icon\">\n\t\t\t\t\t\t\t<img src=\"assets/icon/report.png\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"dashboard_item_name\">\n\t\t\t\t\t\t\t<h1>Reports</h1>\n\t\t\t\t\t\t\t<p>Search vehicle District Wise</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n                </a>\n            </ion-col>\n            \n            <ion-col size=\"6\">\n                <a (click)=\"redirectTo('change-password')\" data-toggle=\"tab\">\n                    <div class=\"dashboard_item\">\n                        <div class=\"dshborad_item_icon\">\n                            <img src=\"assets/images/password_change.png\" alt=\"\" data-no-retina=\"\">\n                        </div>\n                        <div class=\"dashboard_item_name\">\n                            <h1>Change Password</h1>\n                            <p>Change your password regularly</p>\n                        </div>\n                    </div>\n                </a>\n            </ion-col>\n            <ion-col size=\"6\">\n                <a (click)=\"redirectTo('transaction-history')\" data-toggle=\"tab\">\n                    <div class=\"dashboard_item\">\n\t\t\t\t\t\t<div class=\"dshborad_item_icon\">\n\t\t\t\t\t\t\t<img src=\"assets/icon/transaction_history.png\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"dashboard_item_name\">\n\t\t\t\t\t\t\t<h1>Transaction History</h1>\n\t\t\t\t\t\t\t<p>See all transaction history</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n                </a>\n            </ion-col>\n            <ion-col size=\"6\">\n                <a (click)=\"redirectTo('events')\" data-toggle=\"tab\">\n                    <div class=\"dashboard_item\">\n\t\t\t\t\t\t<div class=\"dshborad_item_icon\">\n\t\t\t\t\t\t\t<img src=\"assets/icon/wallet_icon.png\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"dashboard_item_name\">\n\t\t\t\t\t\t\t<h1>Payments</h1>\n\t\t\t\t\t\t\t<p>Make payments for multiple events.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n                </a>\n            </ion-col>\n            <ion-col size=\"6\">\n                <a (click)=\"redirectTo('my-profile')\" data-toggle=\"tab\">\n                    <div class=\"dashboard_item\">\n\t\t\t\t\t\t<div class=\"dshborad_item_icon\">\n\t\t\t\t\t\t\t<img src=\"assets/icon/my-profile.png\" alt=\"\" data-no-retina=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"dashboard_item_name\">\n\t\t\t\t\t\t\t<h1>Profile Details</h1>\n\t\t\t\t\t\t\t<p>Change your profile details and password</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n                </a>\n            </ion-col>\n            \n        </ion-row>\n    </ion-grid>\n</ion-content>";

/***/ }),

/***/ 5222:
/*!*********************************************************************!*\
  !*** ./src/app/eventdetails/eventdetails.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>{{event.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" slot=\"fixed\" >\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <div >\n        <div class=\"loginPg\">\n            <div class=\"loginBx\">\n<div class=\"events-area-details\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"enent-details-inner\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"left-event-section\">\n                        <div class=\"image-left-enent\">\n                            <img src=\"https://www.yiiu.vip/{{event.event_pic}}\" class=\"img-fluid w-100\" alt=\"\"> \n                        </div>\n                        <div class=\"item-details\">\n                            <h3>{{event.title}}</h3>\n                            <p>{{event.event_time | date: 'EEEE, MMMM d, YYYY'}} | {{event.event_time | date:'h:mm a'}}<br>\n                              {{event.location}} - {{event.city}}</p>\n                        </div>\n                        <div class=\"share-item\">\n                            <p>Share</p>\n                            <a href=\"#!\"><i class=\"fab fa-facebook-f\"></i></a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12\">\n                    <div class=\"ticket-details\">\n                    \t<form class=\"form-validate frm-occation\" method=\"post\" action=\"\">\n\t                        <div class=\"note-section\">\n\t                            <p><i class=\"fas fa-exclamation-circle\"></i> There is a limit of 10 tickets per customer. Service charges are non-refundable. All sales are final.</p>\n\t                        </div>\n\t                        <div class=\"ticket-type\">\n\t                            <div class=\"row m-0\">\n\t                                <div class=\"col-sm-6 col-3 p-0\">\n\t                                    <div class=\"ticket-heading\">\n\t                                        <p>TICKET TYPE</p>\n\t                                    </div>\n\t                                </div>\n\t                                <div class=\"col-sm-2 col-3 p-0\">\n\t                                    <div class=\"ticket-heading\">\n\t                                        <p>PRICE</p>\n\t                                    </div>\n\t                                </div>\n\t                                <div class=\"col-sm-2 col-3 p-0\">\n\t                                    <div class=\"ticket-heading\">\n\t                                        <p>CHARGES</p>\n\t                                    </div>\n\t                                </div>\n\t                                <div class=\"col-sm-2 col-3 p-0\">\n\t                                    <div class=\"ticket-heading\">\n\t                                        <p>AMOUNT</p>\n\t                                    </div>\n\t                                </div>\n\t                            </div>\n\t                            <div class=\"row m-0\">\n\t                                <div class=\"col-sm-6 col-3 p-0\">\n\t                                    <div class=\"ticket-data-type\">\n\t                                        <p>General</p>\n\t                                    </div>\n\t                                </div>\n\t                                <div class=\"col-sm-2 col-3 p-0\">\n\t                                    <div class=\"ticket-data-type\">\n\t                                        <p><span>${{event.price}}</span></p>\n\t                                    </div>\n\t                                </div>\n\t                                <div class=\"col-sm-2 col-3 p-0\">\n\t                                    <div class=\"ticket-data-type\">\n\t                                        <p><span>${{event.commission}}</span></p>\n\t                                    </div>\n\t                                </div>\n\t                                <div class=\"col-sm-2 col-3 p-0\">\n\t                                    <div class=\"ticket-data-type\">\n\t                                        <select name=\"amount\" class=\"browser-default custom-select\">\n\t                                            <option value=\"1\" selected=\"\">1</option>\n\t                                            <option value=\"2\">2</option>\n\t                                            <option value=\"3\">3</option>\n\t                                            <option value=\"4\">4</option>\n\t                                            <option value=\"5\">5</option>\n\t                                            <option value=\"6\">6</option>\n\t                                            <option value=\"7\">7</option>\n\t                                            <option value=\"8\">8</option>\n\t                                            <option value=\"9\">9</option>\n\t                                            <option value=\"10\">10</option>\n\t                                        </select>\n\t                                    </div>\n\t                                    \n\t                                </div>\n\t                            </div>\n\t                        </div>\n\t                        <div class=\"event-details\">\n\t                            <h3 style=\"text-transform: capitalize\">{{event.title}}</h3>\n\t                            <ul> \n\t                            \t<li>Event Date:  <span>{{event.event_time | date: 'EEEE, MMMM d, YYYY'}} | {{event.event_time | date:'h:mm a'}}</span></li>\n\t                                <li>Venue Name:  <span>{{event.location}}</span></li>\n\t                                <li>Venue Address:  <span>{{event.city}}</span></li>\n\t                                \n\t                                <li>Celebrity Performing: <span>{{event.celebrity}}</span></li>\n\t                            </ul>\n\n\t                            <!-- Book Table-->\n\t                            <div class=\"book-yur-tbl\">\n                                    <div class=\"home-event-heading\">\n                                        <h1>Choose Your Table</h1>\n                                    </div>\n                                    <div class=\"select-table-area\">\n                                        <ul>\n\n                                            <li *ngFor=\"let table of event_tables; let i = index\">\n                                                <div class=\"table-type-area\">\n                                                    <div class=\"view-tble-name\">\n                                                        <h4>{{table.table_id}}</h4>  \n                                                    </div>\n                                                    <div class=\"view-table-others-details\">\n                                                        <p>Table Price: ${{table.table_price}}</p>\n                                                        <select class=\"browser-default custom-select\" name=\"table_qty[]\">\n                                                            <option value=\"\" selected=\"\">Select Number of Table </option>\n                                                            <option value=\"1\">1</option>\n                                                            <option value=\"2\">2</option>\n                                                            <option value=\"3\">3</option>\n                                                            <option value=\"4\">4</option>\n                                                            <option value=\"5\">5</option>\n                                                            <option value=\"6\">6</option>\n                                                        </select>\n                                                        <p class=\"ticket-indi\">Available Ticket: {{table.table_qty}}</p>\n                                                    </div>\n                                                </div>\n                                            </li>\n                                            \n                                        </ul>\n                                    </div>\n                                </div>\n\t                            <button class=\"buy-ticket-btn ml-auto\" type=\"\">Buy Ticket</button>\n\t                        </div>\n                        </form>\n                    </div>\n                </div>\n                <div class=\"col-12\">\n                    <div class=\"details-event-area\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"details-event-area-left\">\n                                    <h3>DESCRIPTION</h3>\n                                    <p>{{event.description}}</p>\n                                </div>\n                            </div>\n                            <div class=\"col-12\">\n                                <div class=\"location-right\">\n                                 \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <br/><br/>\n            </div>\n        </div>\n\t</div>\n</div>\n</div>\n</div>\n</div>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>";

/***/ }),

/***/ 6606:
/*!*********************************************************!*\
  !*** ./src/app/events/events.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Payments</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" slot=\"fixed\">\n  <ion-grid>\n      <ion-row>\n          <ion-col>\n              <div class=\"card-body\">\n                  <div class=\"loginPg\">\n                      <div class=\"loginBx\">\n                        <h1>Other Yearly <span class=\"instk\">Payments</span></h1>\n                          <form [formGroup]=\"paymentFrm\" (ngSubmit)=\"submit()\">\n                            <div class=\"form-group\">\n                                <ion-select  formControlName=\"eventName\" placeholder=\"Select any event\" (ionChange)=\"triggerEvent($event)\">\n                                  <ion-select-option value=\"\" >Select any event</ion-select-option>\n                                    <ion-select-option value=\"{{res.title}}#{{res.price}}\" *ngFor=\"let res of celebEvents; let i = index\">{{res.title}}</ion-select-option>\n                                    \n                                </ion-select>\n                              <div class=\"error\" *ngIf=\"paymentFrm.controls['eventName'].errors?.required &&\n                              paymentFrm.controls['eventName'].touched\">Select Any Payment type</div>\n                          </div>\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" formControlName=\"amount\" placeholder=\"Amount\" disabled>\n                               \n                          </div>\n                          \n                              <div class=\"text-center\">\n                                  <ion-button [disabled]=\"!paymentFrm.valid\" type=\"submit\" color=\"primary\" shape=\"round\" expand=\"block\">PAY NOW</ion-button>\n                              </div>\n                          </form>\n                      </div>\n                  </div>\n              </div>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ }),

/***/ 3083:
/*!***************************************************************!*\
  !*** ./src/app/forgetotp/forgetotp.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Enter OTP</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" slot=\"fixed\">\n  <ion-grid>\n      <ion-row>\n          <ion-col>\n              <div class=\"card-body\">\n                  <div class=\"loginPg\">\n                      <div class=\"loginBx\">\n                          <form [formGroup]=\"forgetotpForm\" (ngSubmit)=\"submit()\">\n\n                            <p>Please enter the OTP sent to your Email ID</p>\n\n                            <div class=\"form-group\">\n                              <input type=\"text\" class=\"form-control\" formControlName=\"forgetotp\" placeholder=\"OTP\">\n                              <div class=\"error\" *ngIf=\"forgetotpForm.controls['forgetotp'].errors?.required &&\n                              forgetotpForm.controls['forgetotp'].touched\">OTP is required</div>\n                            </div>\n\n                              <div class=\"text-center\">\n                                  <ion-button [disabled]=\"!forgetotpForm.valid\" type=\"submit\" color=\"primary\" shape=\"round\" expand=\"block\">NEXT</ion-button>\n                              </div>\n                          </form>\n                      </div>\n                  </div>\n              </div>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ }),

/***/ 1051:
/*!*****************************************************************!*\
  !*** ./src/app/forgetpass/forgetpass.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Forget Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" slot=\"fixed\">\n  <ion-grid>\n      <ion-row>\n          <ion-col>\n              <div class=\"card-body\">\n                  <div class=\"loginPg\">\n                      <div class=\"loginBx\">\n                          <form [formGroup]=\"forgetpassForm\" (ngSubmit)=\"submit()\">\n\n                            <p>Forgot your password? Please enter your Email ID\n                              We'll b sending an OTP to your Email ID</p>\n\n                            <div class=\"form-group\">\n                              <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\">\n                              <div class=\"error\" *ngIf=\"forgetpassForm.controls['email'].errors?.required &&\n                              forgetpassForm.controls['email'].touched\">Email is required</div>\n                            </div>\n\n                              <div class=\"text-center\">\n                                  <ion-button [disabled]=\"!forgetpassForm.valid\" type=\"submit\" color=\"primary\" shape=\"round\" expand=\"block\">NEXT</ion-button>\n                              </div>\n                          </form>\n                      </div>\n                  </div>\n              </div>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ }),

/***/ 9511:
/*!*******************************************************************!*\
  !*** ./src/app/forgetreset/forgetreset.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Reset Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" slot=\"fixed\">\n  <ion-grid>\n      <ion-row>\n          <ion-col>\n              <div class=\"card-body\">\n                  <div class=\"loginPg\">\n                      <div class=\"loginBx\">\n                          <form [formGroup]=\"forgetresetForm\" (ngSubmit)=\"submit()\">\n\n                              <div class=\"form-group\">\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"New Password *\" formControlName=\"newpassword\">\n                                  <div class=\"error\" *ngIf=\"forgetresetForm.controls['newpassword'].errors?.required &&\n                                  forgetresetForm.controls['newpassword'].touched\">New Password is required</div>\n                              </div>\n                              <div class=\"form-group\">\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Confirm Password *\" formControlName=\"confpassword\">\n                                  <div class=\"error\" *ngIf=\"forgetresetForm.controls['confpassword'].errors?.required &&\n                                  forgetresetForm.controls['confpassword'].touched\">Confirm password is required</div>\n                               <mat-error *ngIf=\"forgetresetForm.hasError('notSame')\">\n                                Passwords do not match\n                              </mat-error> \n                              </div>\n\n                              <div class=\"text-center\">\n                                  <ion-button [disabled]=\"!forgetresetForm.valid\" type=\"submit\" color=\"primary\" shape=\"round\" expand=\"block\">RESET PASSWORD</ion-button>\n                              </div>\n                          </form>\n                      </div>\n                  </div>\n              </div>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ }),

/***/ 2414:
/*!***********************************************************************!*\
  !*** ./src/app/invitefriends/invitefriends.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Add New Vehicle</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" slot=\"fixed\">\n  <ion-grid>\n      <ion-row>\n          <ion-col>\n              <div class=\"card-body\">\n                  <div class=\"loginPg\">\n                      <div class=\"loginBx\">\n                        <h1>Add New <span class=\"instk\">Vehicle</span></h1>\n                          <form [formGroup]=\"invitefrndForm\" (ngSubmit)=\"submit()\">\n                            <div class=\"form-group\">\n                                <ion-select  formControlName=\"district\" placeholder=\"Select a District\">\n                                    <ion-select-option value=\"\">--Select District--</ion-select-option>\n                                    <ion-select-option value=\"ALIPURDUAR\">ALIPURDUAR</ion-select-option>\n                                    <ion-select-option value=\"BANKURA\">BANKURA</ion-select-option>\n                                    <ion-select-option value=\"BIRBHUM\">BIRBHUM</ion-select-option>\n                                    <ion-select-option value=\"COOCHBEHAR\">COOCHBEHAR</ion-select-option>\n                                    <ion-select-option value=\"DAKSHIN DINAJPUR\">DAKSHIN DINAJPUR</ion-select-option>\n                                    <ion-select-option value=\"DARJEELING\">DARJEELING</ion-select-option>\n                                    <ion-select-option value=\"HOOGHLY\">HOOGHLY</ion-select-option>\n                                    <ion-select-option value=\"HOWRAH\">HOWRAH</ion-select-option>\n                                    <ion-select-option value=\"JALPAIGURI\">JALPAIGURI</ion-select-option>\n                                    <ion-select-option value=\"JHARGRAM\">JHARGRAM</ion-select-option>\n                                    <ion-select-option value=\"KALIMPONG\">KALIMPONG</ion-select-option>\n                                    <ion-select-option value=\"MALDA\">MALDA</ion-select-option>\n                                    <ion-select-option value=\"MURSHIDABAD\">MURSHIDABAD</ion-select-option>\n                                    <ion-select-option value=\"NADIA\">NADIA</ion-select-option>\n                                    <ion-select-option value=\"NORTH 24 PARGANAS\">NORTH 24 PARGANAS</ion-select-option>\n                                    <ion-select-option value=\"PASCHIM BARDHAMAN\">PASCHIM BARDHAMAN</ion-select-option>\n                                    <ion-select-option value=\"PASCHIM MEDINIPUR\">PASCHIM MEDINIPUR</ion-select-option>\n                                    <ion-select-option value=\"PURBA BARDHAMAN\">PURBA BARDHAMAN</ion-select-option>\n                                    <ion-select-option value=\"PURBA MEDINIPUR\">PURBA MEDINIPUR</ion-select-option>\n                                    <ion-select-option value=\"PURULIA\">PURULIA</ion-select-option>\n                                    <ion-select-option value=\"SOUTH 24 PARGANAS\">SOUTH 24 PARGANAS</ion-select-option>\n                                    <ion-select-option value=\"UTTAR DINAJPUR\">UTTAR DINAJPUR</ion-select-option>\n                                </ion-select>\n                              <div class=\"error\" *ngIf=\"invitefrndForm.controls['district'].errors?.required &&\n                              invitefrndForm.controls['district'].touched\">District is required</div>\n                          </div>\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" formControlName=\"vehicleNo\" placeholder=\"Vehicle No\">\n                                <div class=\"error\" *ngIf=\"invitefrndForm.controls['vehicleNo'].errors?.required &&\n                                invitefrndForm.controls['vehicleNo'].touched\">Vehicle No is required</div>\n                          </div>\n                          \n                              <div class=\"text-center\">\n                                  <ion-button [disabled]=\"!invitefrndForm.valid\" type=\"submit\" color=\"primary\" shape=\"round\" expand=\"block\">ADD NEW</ion-button>\n                              </div>\n                          </form>\n                      </div>\n                  </div>\n              </div>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ }),

/***/ 8036:
/*!***************************************************************************************!*\
  !*** ./src/app/liveperformanceorders/liveperformanceorders.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Live Performance Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" slot=\"fixed\">\n<ion-grid>\n  <ion-row>\n      <ion-col>\n          <div >\n              <div class=\"loginPg\">\n                  <div class=\"loginBx\">\n                      <h1>Live Performance <span class=\"instk\">Orders</span></h1>\n\n                      <ng-container *ngIf=\"celebRequests\">\n                        <div *ngFor=\"let req of celebRequests; let i = index\">\n                          <ion-card *ngIf=\"req.expertise_id == 4\">\n                              \n                            \n                            <ion-card-content>\n                              \n                              <p><b>Occation Type : </b>{{req.oc_name}}</p>\n                              <p><b>{{req.oc_name}} Date : </b>{{req.occ_date}}</p>\n                              <p><b>Amount : </b>${{req.reqAmount}}</p>\n                              <p><b>Expertise Area Requested : </b>{{req.expertise_area_requested}}</p>\n                              <p><b>Purpose : </b>{{req.purpose}}</p>\n                              <p><b>Celebrity : </b>{{req.celeb_nm}}</p>\n                              <ion-card style=\"margin: 0px;margin-top: 15px;\" *ngIf=\"req.cvideos\">\n                                <video controls preload=\"auto\" style=\"width: 100%\" src=\"https://yiiu.vip/{{req.cvideos}}\"></video>\n                              </ion-card>\n                              <br style=\"clear: both;\"/>\n                              <div *ngIf=\"req.oc_status == 0\" style=\" background: red; padding: 5px; color: #fff; font-weight: bold; width: 80%;margin: 0 auto; \" >Waiting for confirmation</div>\n                              <div *ngIf=\"req.oc_status == 1\" style=\" background: green; padding: 5px; color: #fff; font-weight: bold; width: 80%;margin: 0 auto;\" >Completed</div>\n                              <br style=\"clear: both;\"/>\n                              <div *ngIf=\"req.cvideos\"  style=\" background: green; padding: 5px; color: #fff; font-weight: bold; width: 80%;margin: 0 auto; border-radius: 10px; cursor: pointer;\" (click)=\"downloadFile('https://yiiu.vip/'+req.cvideos)\" >Download</div>\n                              <br *ngIf=\"req.cvideos\" style=\"clear: both;\"/>\n                            \n                            </ion-card-content>\n                          </ion-card>\n                        </div>\n                          \n                    </ng-container>\n\n                    <ng-container *ngIf=\"!celebRequests\">No Orders Found.</ng-container>\n\n                      \n                  </div>\n              </div>\n          </div>\n      </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 869:
/*!*****************************************************************************!*\
  !*** ./src/app/liveperformances/liveperformances.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\n  liveperformances works!\n</p>\n";

/***/ }),

/***/ 2010:
/*!*******************************************************!*\
  !*** ./src/app/login/login.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <div class=\"loginPg\">\n                    <div class=\"loginBx\">\n                        <div class=\"logologin\">\n                            <ion-img src=\"/assets/images/logo.png\"></ion-img>\n                        </div>\n                        <h1>Sign in to Continue</h1>\n                        <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit()\">\n                            \n                            <div class=\"form-group\">\n                                <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\">\n                                <span class=\"danger\" *ngIf=\"loginForm.controls['email'].errors?.required &&\n                        loginForm.controls['email'].touched\">Email is required</span>\n                            </div>\n                            <div class=\"form-group\" style=\"position: relative;\">\n                                <input [type]=\"isTextFieldType ? 'text' : 'password'\" class=\"form-control passinput\" placeholder=\"Password\" formControlName=\"password\">\n                                \n                                <ion-icon [name]=\"isTextFieldType ? 'eye-off' : 'eye'\" class=\"passeye\" (click)=\"togglePasswordFieldType()\"></ion-icon>\n                                <span class=\"danger\" *ngIf=\"loginForm.controls['password'].errors?.required &&\n                        loginForm.controls['password'].touched\">Password is required</span>\n                            </div>\n                            <div class=\"frmaxon text-center\">\n                                <div class=\"col\">\n                                    <ion-button [disabled]=\"!loginForm.valid\" type=\"submit\" color=\"primary\" shape=\"round\" expand=\"block\">Login</ion-button>\n                                </div>\n                            </div>\n                        </form>\n                        <!--<p>Or connect with</p>\n                        <div class=\"frmaxon1\">\n                            <div class=\"col\">\n                                <ion-button [routerLink]=\"['/login']\" routerDirection=\"forward\" color=\"light\" expand=\"block\" fill=\"clear\" class=\"g_btn\">Sign In With Google  <ion-icon name=\"logo-google\" item-left></ion-icon>\n                                </ion-button>\n                            </div>\n                        </div>-->\n                        <div class=\"forget_pass_block\">\n                            <div class=\"password_reste text-center p-2\">\n                                <!-- Forgot password -->\n                                <a [routerLink]=\"['/forgetpass']\">Forgot password?</a>\n                            </div>\n                        </div>\n\n                        <p>Dont have any account? <a [routerLink]=\"['/register']\">Sign Up</a></p>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";

/***/ }),

/***/ 154:
/*!*********************************************************************************************!*\
  !*** ./src/app/privateperformanceorders/privateperformanceorders.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Reports</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" slot=\"fixed\">\n<ion-grid>\n  <ion-row>\n      <ion-col>\n          <div >\n              <div class=\"loginPg\">\n                  <div class=\"loginBx\">\n                      <h1><span class=\"instk\">Reports</span></h1>\n                      <div class=\"form-group\">\n                        <ion-select placeholder=\"Select a District\" (ionChange)=\"triggerEvent($event)\">\n                            <ion-select-option value=\"\">--Select District--</ion-select-option>\n                            <ion-select-option value=\"ALIPURDUAR\">ALIPURDUAR</ion-select-option>\n                            <ion-select-option value=\"BANKURA\">BANKURA</ion-select-option>\n                            <ion-select-option value=\"BIRBHUM\">BIRBHUM</ion-select-option>\n                            <ion-select-option value=\"COOCHBEHAR\">COOCHBEHAR</ion-select-option>\n                            <ion-select-option value=\"DAKSHIN DINAJPUR\">DAKSHIN DINAJPUR</ion-select-option>\n                            <ion-select-option value=\"DARJEELING\">DARJEELING</ion-select-option>\n                            <ion-select-option value=\"HOOGHLY\">HOOGHLY</ion-select-option>\n                            <ion-select-option value=\"HOWRAH\">HOWRAH</ion-select-option>\n                            <ion-select-option value=\"JALPAIGURI\">JALPAIGURI</ion-select-option>\n                            <ion-select-option value=\"JHARGRAM\">JHARGRAM</ion-select-option>\n                            <ion-select-option value=\"KALIMPONG\">KALIMPONG</ion-select-option>\n                            <ion-select-option value=\"MALDA\">MALDA</ion-select-option>\n                            <ion-select-option value=\"MURSHIDABAD\">MURSHIDABAD</ion-select-option>\n                            <ion-select-option value=\"NADIA\">NADIA</ion-select-option>\n                            <ion-select-option value=\"NORTH 24 PARGANAS\">NORTH 24 PARGANAS</ion-select-option>\n                            <ion-select-option value=\"PASCHIM BARDHAMAN\">PASCHIM BARDHAMAN</ion-select-option>\n                            <ion-select-option value=\"PASCHIM MEDINIPUR\">PASCHIM MEDINIPUR</ion-select-option>\n                            <ion-select-option value=\"PURBA BARDHAMAN\">PURBA BARDHAMAN</ion-select-option>\n                            <ion-select-option value=\"PURBA MEDINIPUR\">PURBA MEDINIPUR</ion-select-option>\n                            <ion-select-option value=\"PURULIA\">PURULIA</ion-select-option>\n                            <ion-select-option value=\"SOUTH 24 PARGANAS\">SOUTH 24 PARGANAS</ion-select-option>\n                            <ion-select-option value=\"UTTAR DINAJPUR\">UTTAR DINAJPUR</ion-select-option>\n                        </ion-select>\n                         </div>\n                    \n                      <ng-container *ngIf=\"celebRequests\">\n                        <div *ngFor=\"let req of celebRequests; let i = index\">\n                            <ion-card>\n                                \n                              \n                              <ion-card-content>\n                                \n                                <p><b>Registration No : </b>{{req.vehicle_no}}</p>\n                                <p><b>Reg Date : </b>{{req.reg_date}}</p>\n                                <p><b>District : </b>{{req.district}}</p>\n                                <p><b>Owner : </b>{{req.owner}}</p>\n                                \n                              </ion-card-content>\n                            </ion-card>\n                          </div>\n                  </ng-container>\n                    <ng-container *ngIf=\"celebRequests.length <= 0\">No Vehicle Found.</ng-container>\n\n                      \n                  </div>\n              </div>\n          </div>\n      </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 6038:
/*!***********************************************************!*\
  !*** ./src/app/profile/profile.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Profile</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" slot=\"fixed\">\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <div class=\"card\" style=\"display: none;\">\n                    <div class=\"header proimg\" >\n                        <div class=\"avatar\"> <img [src]=\"profilePic\" alt=\"\"> </div>\n                        <ion-fab *ngIf=\"editing\" (click)=\"selectImage()\" slot=\"fixed\">\n                            <ion-fab-button>\n                                <ion-icon name=\"camera\"></ion-icon>\n                            </ion-fab-button>\n                        </ion-fab>\n                    </div>\n\n                </div>\n                <div class=\"card-body\">\n                    <div *ngIf=\"!editing\">\n                        <ng-container *ngIf=\"profileToShow\">\n                            <div class=\"loginPg\">\n                                <div class=\"loginBx\">\n                                    <form>\n                                        <div class=\"form-group\">\n                                            <label>Name</label>\n                                            <input type=\"text\" class=\"form-control\" value=\"{{profileToShow.fullname}}\" disabled>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label>Email</label>\n                                            <input type=\"text\" class=\"form-control\" value=\"{{profileToShow.email}}\" disabled>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label>Phone</label>\n                                            <input type=\"text\" class=\"form-control\" value=\"{{profileToShow.mobilenumber}}\" disabled>\n                                        </div>\n                                        \n                                    </form>\n                                </div>\n                            </div>\n                        </ng-container>\n                        <!-- fab placed to the top end -->\n                        <ion-fab (click)=\"toogleEditing(true)\" vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n                            <ion-fab-button>\n                                <ion-icon name=\"create\"></ion-icon>\n                            </ion-fab-button>\n                        </ion-fab>\n                    </div>\n                    <div *ngIf=\"editing\" class=\"loginPg\">\n                        <div class=\"loginBx\">\n                            <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\">\n                                <div class=\"form-group\">\n                                    <label>Name</label>\n                                    <input type=\"text\" name=\"fullname\" class=\"form-control\" [(ngModel)]=\"profileObjToUpdate.fullname\" #fullname=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && fullname.invalid }\" required>\n                                    <div *ngIf=\"f.submitted && fullname.invalid\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"fullname.errors.required\">Name is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Email</label>\n                                    <input type=\"text\" name=\"email\" class=\"form-control\" [(ngModel)]=\"profileObjToUpdate.email\" #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required>\n                                    <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"email.errors.required\">Email is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Phone</label>\n                                    <input type=\"text\" name=\"phone\" class=\"form-control\" [(ngModel)]=\"profileObjToUpdate.phone\" #phone=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && phone.invalid }\" required>\n                                    <div *ngIf=\"f.submitted && phone.invalid\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"phone.errors.required\">Phone no is required</div>\n                                    </div>\n                                </div>\n                               <br/><br/>\n                                <div class=\"text-center\">\n                                    <button class=\"btn btn-primary loginBtn\">UPDATE</button>\n                                </div>\n                            </form>\n                            \n                        </div>\n                        <ion-fab (click)=\"toogleEditing(false)\" vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n                            <ion-fab-button>\n                                <ion-icon name=\"close\"></ion-icon>\n                            </ion-fab-button>\n                        </ion-fab>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";

/***/ }),

/***/ 9756:
/*!*********************************************************************!*\
  !*** ./src/app/registration/registration.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <div class=\"loginPg\">\n                    <div class=\"loginBx\">\n                        <div class=\"logologin\">\n                            <ion-img src=\"/assets/images/logo.png\"></ion-img>\n                        </div>\n                        <h1>Create an account</h1>\n                        <form [formGroup]=\"registrationForm\" (ngSubmit)=\"submit()\">\n\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" formControlName=\"fullname\" placeholder=\"Owner Name\">\n                                <div class=\"error\" *ngIf=\"registrationForm.controls['fullname'].errors?.required &&\n                                registrationForm.controls['fullname'].touched\">Name is required</div>\n                            </div>\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" formControlName=\"vehicleNo\" placeholder=\"Vehicle No\">\n                                <div class=\"error\" *ngIf=\"registrationForm.controls['vehicleNo'].errors?.required &&\n                                registrationForm.controls['vehicleNo'].touched\">Vehicle No is required</div>\n                            </div>\n                            <div class=\"form-group\">\n                                <input type=\"email\" class=\"form-control\" autocomplete=\"off\" formControlName=\"email\" placeholder=\"Email\"/>\n                                <div class=\"error\" *ngIf=\"registrationForm.controls['email'].errors?.required &&\n                                registrationForm.controls['email'].touched\">Email is required</div>\n                            </div>\n                            <div class=\"form-group\">\n                                <input type=\"password\" class=\"form-control\" autocomplete=\"off\" formControlName=\"password\" placeholder=\"Password\">\n                                <div class=\"error\" *ngIf=\"registrationForm.controls['password'].errors?.required &&\n                                registrationForm.controls['password'].touched\">Password is required</div>\n                            </div>\n                            <div class=\"form-group\">\n                                <ion-intl-tel-input \n                                id=\"phone\"\n                                formControlName=\"phone\"\n                                [preferredCountries]=\"['in']\"\n                                \n                                class=\"form-control\"\n                                name=\"phone\" style=\"height: 45px;\n                                border-radius: 50px;\n                                border: none;\n                                background: #fff;\n                                box-shadow: 0 0px 10px 0 rgb(0 0 0 / 16%), 0 0px 10px 0 rgb(0 0 0 / 16%);\n                                font-size: 14px;\n                                padding: 5px 20px;\n                                color: #000000;\"\n                                >\n                                </ion-intl-tel-input>\n                            </div>\n                            <div class=\"form-group\">\n                                <ion-select  formControlName=\"district\" placeholder=\"Select a District\">\n                                    <ion-select-option value=\"\">--Select District--</ion-select-option>\n                                    <ion-select-option value=\"ALIPURDUAR\">ALIPURDUAR</ion-select-option>\n                                    <ion-select-option value=\"BANKURA\">BANKURA</ion-select-option>\n                                    <ion-select-option value=\"BIRBHUM\">BIRBHUM</ion-select-option>\n                                    <ion-select-option value=\"COOCHBEHAR\">COOCHBEHAR</ion-select-option>\n                                    <ion-select-option value=\"DAKSHIN DINAJPUR\">DAKSHIN DINAJPUR</ion-select-option>\n                                    <ion-select-option value=\"DARJEELING\">DARJEELING</ion-select-option>\n                                    <ion-select-option value=\"HOOGHLY\">HOOGHLY</ion-select-option>\n                                    <ion-select-option value=\"HOWRAH\">HOWRAH</ion-select-option>\n                                    <ion-select-option value=\"JALPAIGURI\">JALPAIGURI</ion-select-option>\n                                    <ion-select-option value=\"JHARGRAM\">JHARGRAM</ion-select-option>\n                                    <ion-select-option value=\"KALIMPONG\">KALIMPONG</ion-select-option>\n                                    <ion-select-option value=\"MALDA\">MALDA</ion-select-option>\n                                    <ion-select-option value=\"MURSHIDABAD\">MURSHIDABAD</ion-select-option>\n                                    <ion-select-option value=\"NADIA\">NADIA</ion-select-option>\n                                    <ion-select-option value=\"NORTH 24 PARGANAS\">NORTH 24 PARGANAS</ion-select-option>\n                                    <ion-select-option value=\"PASCHIM BARDHAMAN\">PASCHIM BARDHAMAN</ion-select-option>\n                                    <ion-select-option value=\"PASCHIM MEDINIPUR\">PASCHIM MEDINIPUR</ion-select-option>\n                                    <ion-select-option value=\"PURBA BARDHAMAN\">PURBA BARDHAMAN</ion-select-option>\n                                    <ion-select-option value=\"PURBA MEDINIPUR\">PURBA MEDINIPUR</ion-select-option>\n                                    <ion-select-option value=\"PURULIA\">PURULIA</ion-select-option>\n                                    <ion-select-option value=\"SOUTH 24 PARGANAS\">SOUTH 24 PARGANAS</ion-select-option>\n                                    <ion-select-option value=\"UTTAR DINAJPUR\">UTTAR DINAJPUR</ion-select-option>\n                                </ion-select>\n                                 </div>\n                            \n                            <br/>\n                            <div class=\"frmaxon\">\n                                <div class=\"col\">\n                                    <ion-button [disabled]=\"!registrationForm.valid\" type=\"submit\" color=\"primary\" shape=\"round\" expand=\"block\">Sign Up</ion-button>\n                                </div>\n                            </div>\n                        </form>\n                        \n                        <p>Already have an account? <a [routerLink]=\"['/login']\">Login Here</a></p>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";

/***/ }),

/***/ 4615:
/*!*********************************************************************!*\
  !*** ./src/app/request-view/request-view.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>My Vehicles</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" slot=\"fixed\">\n  <ion-grid>\n    <ion-row>\n        <ion-col>\n            <div >\n                <div class=\"loginPg\">\n                  \n                    <div class=\"loginBx\">\n                      <h1>My <span class=\"instk\">Vehicles</span></h1>\n                       <ng-container *ngIf=\"celebRequests\">\n                            <div *ngFor=\"let req of celebRequests; let i = index\">\n                                <ion-card>\n                                    \n                                  \n                                  <ion-card-content>\n                                    \n                                    <p><b>Registration No : </b>{{req.vehicle_no}}</p>\n                                    <p><b>Reg Date : </b>{{req.reg_date}}</p>\n                                    <p><b>District : </b>{{req.district}}</p>\n                                    <ngx-qrcode \n  [value]=\"req.vehicle_no\"\n  cssClass=\"aclass\"\n  [width]=\"400\"\n  ariaLabel=\"Scan me for more information\"\n  [version]=\"2\"\n  [level]=\"'M'\"\n  errorCorrectionLevel=\"L\">\n</ngx-qrcode>\n<ion-button expand=\"full\" (click)=\"downloadQrCode()\">Download QR Code</ion-button>\n                              \n                                    \n                                  \n                                  </ion-card-content>\n                                </ion-card>\n                              </div>\n                      </ng-container>\n\n                        \n                    </div>\n                </div>\n            </div>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 6210:
/*!****************************************************!*\
  !*** ./src/app/stripe/stripe.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Stripe</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"occDet\">\n    <ion-card >\n        \n      \n        <ion-card-content >\n          \n          <p><b>Occation Type : </b>{{occDet.oc_name}}</p>\n          <p><b>Date : </b>{{occDet.occ_date}}</p>\n          <p><b>Amount : </b>${{occDet.reqAmount}}</p>\n          <p><b>Expertise Area Requested : </b>{{occDet.expertise_area_requested}}</p>\n          <p><b>Purpose : </b>{{occDet.purpose}}</p>\n          <p><b>Celebrity : </b>{{occDet.celeb_nm}}</p>\n          \n        </ion-card-content>\n      </ion-card>\n</ng-container>\n\n  <form action=\"/\" method=\"post\" id=\"payment-form\">\n    \n    <div class=\"form-row\">\n      <div id=\"card-element\">\n        <!-- a Stripe Element will be inserted here. -->\n      </div>\n\n      <!-- Used to display Element errors -->\n      <div id=\"card-errors\" role=\"alert\"></div>\n    </div>\n\n  <button ion-button [disabled]=\"disabled\" block large style=\"float: left; margin-left: 10px; margin-top: 20px\">Pay Now</button>\n\n  <button ion-button  style=\"float: right; background-color: #fff; color: #000; border: 1px solid #000; margin-right: 20px; margin-top: 20px \" (click)=\"backtoForm();\">Cancel</button>\n\n    \n  </form>\n</ion-content>\n";

/***/ }),

/***/ 4693:
/*!***********************************************************!*\
  !*** ./src/app/tickets/tickets.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n    <ion-toolbar color=\"primary\">\n       <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n       </ion-buttons>\n       <ion-title>My Tickets</ion-title>\n    </ion-toolbar>\n </ion-header>\n <ion-content fullscreen=\"true\" slot=\"fixed\">\n    <ion-grid>\n       <ion-row>\n          <ion-col>\n             <div >\n                <div class=\"loginPg\">\n                   <div class=\"loginBx\">\n                      <ng-container *ngIf=\"celebRequests\">\n                         <div class=\"events-area-details\" *ngFor=\"let req of celebRequests; let i = index\">\n                            <div class=\"container-fluid\" *ngIf=\"req.has_book[0]=='Y'\">\n                               <div class=\"user-ticket-list ticketList\">\n                                  <div class=\"event-header\">\n                                     <h3>{{req.event_date | date:'EEEE, MMMM d, y'}}</h3>\n                                  </div>\n                                  <ng-container  *ngFor=\"let booking of req.event_details[0].bookings; let j = index\">\n\n                                  \n                                  <div class=\"row\" *ngFor=\"let _ of [].constructor(booking.amount); let k = index\">\n                                     <div class=\"col-12 mb-2 mb-sm-4\" style=\"margin-bottom: 20px;\">\n                                        <div class=\"event-bookticket\">\n                                           <div class=\"bookticket-left\" style=\"background:url('/assets/images/user-ticket-bg.jpeg')\">\n                                              <div class=\"ticket-logo\">\n                                                 <img src=\"/assets/images/logoYiiu-ticket.png\" class=\"img-fluid\">\n                                              </div>\n                                              <div class=\"event-name-print position-relative\">\n                                                 <h1 style=\"color: white;\">{{req.event_details[0].title}}</h1>\n                                                \n                                                 <h4>Purchased by: <br><span>{{user.fullname}}</span></h4>\n                                              </div>\n                                              <div class=\"event-time-venu position-relative\">\n                                                 <h3>{{req.event_details[0].event_time | date:'d MMMM'}} | {{req.event_details[0].event_time | date:'h:mm a'}}</h3>\n                                                 <p>{{req.event_details[0].location}}</p>\n                                                 <p>Ticket No.: {{booking.ticket_id}}/{{k+1}}</p>\n                                              </div>\n                                           </div>\n                                           <div class=\"bookticket-right\">\n                                              <div class=\"top-circle-area\"></div>\n                                              <div class=\"top-circle-area-bottom\"></div>\n                                              <div class=\"booking-right-text\">\n                                                 <p>{{booking.ticket_id}}/1</p>\n                                                 \n                                                 <h1>{{req.event_details[0].title}}</h1>\n                                              </div>\n                                           </div>\n                                           <div onclick=\"PrintDiv('book_YIIU-1677915802-1_1')\" class=\"download-icon-pdf\"><i class=\"fas fa-file-download\"></i></div>\n                                        </div>\n                                     </div>\n                                  </div>\n                                </ng-container>\n                               </div>\n                            </div>\n                         </div>\n                      </ng-container>\n                   </div>\n                </div>\n             </div>\n          </ion-col>\n       </ion-row>\n    </ion-grid>\n </ion-content>";

/***/ }),

/***/ 5469:
/*!***********************************************************************************!*\
  !*** ./src/app/transaction-history/transaction-history.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header no-border>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Transaction History</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\" slot=\"fixed\">\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <div class=\"card-body\">\n                    <div class=\"loginPg\">\n                        <div class=\"loginBx\">\n                            <h1>Your <span class=\"instk\">Trasaction Details</span></h1>\n                            \n                            <ng-container *ngIf=\"transactionHistory\">\n                              <div *ngFor=\"let req of transactionHistory; let i = index\">\n                                  <ion-card>\n                                      \n                                    \n                                    <ion-card-content>\n                                      \n                                      <p><b>TXN # : </b>{{req.payment_details}}</p>\n                                      <p><b>TXN Date : </b>{{req.cpay_date}}</p>\n                                      <p><b>Amount : </b>{{req.camount}}</p>\n                                      <p><b>Status : </b>SUCCESS</p>\n                                      \n                                    </ion-card-content>\n                                  </ion-card>\n                                </div>\n                        </ng-container>\n                          <ng-container *ngIf=\"transactionHistory.length <= 0\">No Transaction Found.</ng-container>\n      \n                        </div>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map