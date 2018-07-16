package team.putinpurin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@Controller
public class AngularBootApplication {
	public static void main(String[] args) {
		SpringApplication.run(AngularBootApplication.class, args);
	}

	// if the path is not static page, foward to root!
	@RequestMapping(value = "/**/{path:[^\\.]*}")
	public String redirect(@PathVariable String path) {
		return "forward:/";
	}
}
