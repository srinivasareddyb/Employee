namespace EmployeeApplication;

using { managed } from '@sap/cds/common';

entity EmpMaster : managed{
 key Eid : String;
     Name : String;
     Phone : Integer
}

entity Edu {
    Key Eid : String;   
    key Edu : String;
        Col : String;
        Percentage : String;
}
