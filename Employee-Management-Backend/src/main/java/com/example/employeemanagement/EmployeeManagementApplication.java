package com.example.employeemanagement;

import com.example.employeemanagement.Model.Employee;
import com.example.employeemanagement.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmployeeManagementApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagementApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	// anything want to create data from backend we use this method
	@Override
	public void run(String... args) throws Exception {
		//creating employee object and assign some values to it
//		Employee employee1 = new Employee();
//		employee1.setFirstName("Pavan");
//		employee1.setLastName("ediga");
//		employee1.setEmail("pavan123@gmail.com");
//		employee1.setNumber(987654321);
//		employee1.setCollageName("pplcollage");
//		employeeRepository.save(employee1);
//
//		Employee employee2 = new Employee();
//		employee2.setFirstName("Shyam");
//		employee2.setLastName("Kuntala");
//		employee2.setEmail("Shyam123@gmail.com");
//		employee2.setNumber(987644321);
//		employee2.setCollageName("pplcollage");
//		employeeRepository.save(employee2);

	}
}
