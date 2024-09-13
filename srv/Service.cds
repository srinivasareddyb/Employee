using { EmployeeApplication as emp} from '../db/Schema';

service EmployeeServices { 
  entity EmpData as projection on emp.EmpMaster; 
}