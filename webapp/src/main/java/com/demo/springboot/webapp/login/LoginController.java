package com.demo.springboot.webapp.login;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@SessionAttributes("name")
public class LoginController {

	private AuthenticationService authenticate;
	
	public LoginController(AuthenticationService authenticate) {
		super();
		this.authenticate = authenticate;
	}

	//http://localhost:8080//login?name=Tanya
	@RequestMapping(value="/login", method=RequestMethod.GET)
	public String gotologin() 
	{
		return "login";
	}
	
	//@RequestMapping(value="/login", method=RequestMethod.POST)
	@PostMapping(value= "/login")
	public String gotowelcome(@RequestParam String name, @RequestParam String password,ModelMap model) 
	{
		model.put("name", name);
		if(authenticate.authenticateService(name, password))
			return "welcome";
		else {
			model.put("errormessage", "Invalid credentials.Please try again");
			return "login";
		}
	}
	
	
}