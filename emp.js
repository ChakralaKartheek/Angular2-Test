﻿"use strict";
module.exports = (function () {
    function Emp(ID, Name, Gender, MaleText, FemaleText, Address, Salary) {
        this.ID = ID;
        this.Name = Name;
        this.Gender = Gender;
        this.MaleText = MaleText;
        this.FemaleText = FemaleText;
        this.Address = Address;
        this.Salary = Salary;
    }
    return Emp;
} ());
