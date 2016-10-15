
// interface IEmp {

//     ID: number;
//     Name: string;
//     Gender: string;
//     MaleText: string;
//     FemaleText: string;
//     Address: string;
//     Salary: number;

// }




// export class Emp {
//     public ID: number;
//     public Name: string;
//     public Gender: string;
//     public MaleText: string;
//     public FemaleText: string;
//     public Address: string;
//     public Salary: number;

//     constructor();
//     constructor(obj : IEmp);
//     constructor(obj?:any)
//      {

//         this.ID = obj.ID;
//         this.Name =  obj.Name;
//         this.Gender =  obj.Gender;
//         this.MaleText =  obj.MaleText;
//         this.FemaleText =  obj.FemaleText;
//         this.Address =  obj.Address;
//         this.Salary =  obj.Salary;
//     }

// }






export class Emp {

    constructor(
        public ID: number,
        public Name: string,
        public Gender: string,
        public MaleText: string,
        public FemaleText: string,
        public Address: string,
        public Salary: number
    ) { }

}