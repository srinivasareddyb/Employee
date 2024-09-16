using { EmployeeApplication as emp} from '../db/Schema';

service EmployeeServices { 
  entity EmpData as projection on emp.EmpMaster; 
  entity EduData as projection on emp.Edu;
}