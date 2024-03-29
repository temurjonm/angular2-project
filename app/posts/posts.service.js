System.register(['angular2/http', 'rxjs/add/operator/map', 'angular2/core'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var PostService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PostService = (function () {
                function PostService(http) {
                    this.http = http;
                    this.url = "http://jsonplaceholder.typicode.com/posts";
                }
                PostService.prototype.getPosts = function (filter) {
                    var url = this.url;
                    if (filter && filter.userId)
                        url += "?userId=" + filter.userId;
                    return this.http.get(url)
                        .map(function (res) { return res.json(); });
                };
                PostService.prototype.getComments = function (postId) {
                    return this.http.get(this.url + "/" + postId + "/comments")
                        .map(function (res) { return res.json(); });
                };
                PostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostService);
                return PostService;
            }());
            exports_1("PostService", PostService);
        }
    }
});
//# sourceMappingURL=posts.service.js.map