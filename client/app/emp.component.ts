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
selectedEmp :  Emp = new Emp(5, "Laura", "Female", "", "I am Actress", "US", 1700);
mode = 'Observable';

 getEmps() {
    this.empService.getEmployees()
                     .subscribe( 
                       emps => {this.emps = emps; 
                           debugger;
                            this.selectedEmp =  this.emps[0]; 
                        //    var semp = this.selectedEmp;
                        console.log(this.selectedEmp); 
                    },
                       error =>  this.errorMessage = <any>error);
  }

  
  
    submitted = false;
    onSubmit() { this.submitted = true; }

    GenderOptions = ["Male", "Female"];
    onEmpSelect(emp) {
        this.selectedEmp = emp;
        // alert(emp.Name);
    }

}