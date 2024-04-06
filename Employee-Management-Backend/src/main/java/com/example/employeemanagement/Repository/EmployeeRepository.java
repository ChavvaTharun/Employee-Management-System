package com.example.employeemanagement.Repository;

import com.example.employeemanagement.Model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository <Employee, Long> {
  // All crud database method
}
