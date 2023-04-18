package com.demo.springboot.webapp.hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class sayHelloController {
	
	@RequestMapping("/say-hello")
	@ResponseBody    //to print the output as it is
	public String res() {
		return "Hello...How are you?";
	}
	
	@RequestMapping("/say-hello-html")
	@ResponseBody
	public String res_html() {
		StringBuffer sb=new StringBuffer();
		sb.append("<html>");
		sb.append("<head>");
		sb.append("<title>My first web page</title>");
		sb.append("</head>");
		sb.append("<body>");
		sb.append("<h1>first heading of web page</h1>");
		sb.append("<p>first paragraph</p>");
		sb.append("</body>");
		sb.append("</html>");
		return sb.toString();
	}
	
	    // "say-hello-jsp" => sayHello.jsp 
		// /src/main/resources/META-INF/resources/WEB-INF/jsp/sayHello.jsp
		// /src/main/resources/META-INF/resources/WEB-INF/jsp/welcome.jsp
		// /src/main/resources/META-INF/resources/WEB-INF/jsp/login.jsp
		// /src/main/resources/META-INF/resources/WEB-INF/jsp/todos.jsp
	@RequestMapping("say-hello-jsp")
	public String res_jsp() {
		return "sayHello";
	}
}
