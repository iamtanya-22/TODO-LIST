package com.demo.springboot.webapp.login;

import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

	public boolean authenticateService(String name,String password) {
		if(name.equalsIgnoreCase("tanya")&&password.equalsIgnoreCase("12345"))
			return true;
		else
			return false;
	}
	
}
