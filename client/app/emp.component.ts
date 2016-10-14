import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Emp } from './emp';

import {EmpService} from './emp.service';

import { Observable }     from 'rxjs/Observable';


 import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Component({
    // moduleId:module.id,
    selector: 'emp-elem',
    templateUrl: 'emp.template.html'
    
})
export class EmpComponent implements OnInit  {

constructor (private  empService : EmpService) {}
ngOnInit() { this.getEmps(); }

emps : Emp [] = [];
errorMessage : string;
mode = 'Observable';

 getEmps() {
    this.empService.getEmployees()
                     .subscribe( 
                       emps => {this.emps = emps; console.log(this.emps); },
                       error =>  this.errorMessage = <any>error);
  }
length = this.emps.length;
    selectedEmp = Emp
  //   this.emps[0];
    submitted = false;
    onSubmit() { this.submitted = true; }

    GenderOptions = ["Male", "Female"];
    onEmpSelect(emp) {
        this.selectedEmp = emp;
        // alert(emp.Name);
    }

}