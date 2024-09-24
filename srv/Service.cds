using { EmployeeApplication as emp} from '../db/Schema';

service EmployeeServices { 
  // @odata.draft.enabled
  entity EmpData as projection on emp.EmpMaster; 
  
  entity EduData as projection on emp.Edu;
}