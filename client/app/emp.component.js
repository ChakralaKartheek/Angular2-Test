"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var emp_1 = require("./emp");
var emp_service_1 = require("./emp.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/share");
var EmpComponent = /** @class */ (function () {
    function EmpComponent(empService) {
        this.empService = empService;
        this.emps = [];
        this.selectedEmp = new emp_1.Emp(5, "Laura", "Female", "", "I am Actress", "US", 1700);
        this.mode = 'Observable';
        this.submitted = false;
        this.GenderOptions = ["Male", "Female"];
    }
    EmpComponent.prototype.ngOnInit = function () { this.getEmps(); };
    EmpComponent.prototype.getEmps = function () {
        var _this = this;
        this.empService.getEmployees()
            .subscribe(function (emps) {
            _this.emps = emps;
            debugger;
            _this.selectedEmp = _this.emps[0];
            //    var semp = this.selectedEmp;
            console.log(_this.selectedEmp);
        }, function (error) { return _this.errorMessage = error; });
    };
    EmpComponent.prototype.onSubmit = function () { this.submitted = true; };
    EmpComponent.prototype.onEmpSelect = function (emp) {
        this.selectedEmp = emp;
        // alert(emp.Name);
    };
    EmpComponent = __decorate([
        core_1.Component({
            // moduleId:module.id,
            selector: 'emp-elem',
            templateUrl: 'emp.template.html'
        }),
        __metadata("design:paramtypes", [emp_service_1.EmpService])
    ], EmpComponent);
    return EmpComponent;
}());
exports.EmpComponent = EmpComponent;
//# sourceMappingURL=emp.component.js.map