System.register(['angular2/core', 'angular2/common', 'angular2/router', '../shared/basicValidators', './users.service', './users'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, basicValidators_1, users_service_1, users_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (basicValidators_1_1) {
                basicValidators_1 = basicValidators_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (users_1_1) {
                users_1 = users_1_1;
            }],
        execute: function() {
            UserFormComponent = (function () {
                function UserFormComponent(fb, router, routeParams, userService) {
                    this.router = router;
                    this.routeParams = routeParams;
                    this.userService = userService;
                    this.user = new users_1.Users();
                    this.form = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', basicValidators_1.BasicValidators.email],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                UserFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this.routeParams.get("id");
                    this.title = id ? "Edit User" : "New User";
                    if (!id)
                        return;
                    this.userService.getUser(id)
                        .subscribe(function (user) { return _this.user = user; }, function (response) {
                        if (response.status == 404) {
                            _this.router.navigate(['NotFound']);
                        }
                    });
                };
                UserFormComponent.prototype.routerCanDeactivate = function () {
                    if (this.form.dirty)
                        return confirm('You have unsaved changes. Are you sure you want to navigate away?');
                    return true;
                };
                UserFormComponent.prototype.save = function () {
                    var _this = this;
                    var result;
                    if (this.user.id)
                        result = this.userService.updateUser(this.user);
                    else
                        result = this.userService.addUser(this.user);
                    result.subscribe(function (x) {
                        // Ideally, here we'd want:
                        // this.form.markAsPristine();
                        _this.router.navigate(['Users']);
                    });
                };
                UserFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/users/user-form.component.html',
                        providers: [users_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, router_1.RouteParams, users_service_1.UserService])
                ], UserFormComponent);
                return UserFormComponent;
            }());
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});
//# sourceMappingURL=user-form.component.js.map