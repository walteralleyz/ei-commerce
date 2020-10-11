import { IEntity, Template } from './template';
import { Employees } from '../models/employees';

export class EmployeesController extends Template {
    constructor() {
        super();

        this.loadRepository(Employees);
    }

    fillObj(body: any): IEntity {
        const employees = new Employees();
        const { name, email, password, position, status, salary } = body;

        employees.name = name;
        employees.email = email;
        employees.password = password;
        employees.position = position;
        employees.status = status;
        employees.salary = salary;

        employees.createdat = new Date().getTime();
        employees.updatedat = new Date().getTime();

        return employees;
    }
}