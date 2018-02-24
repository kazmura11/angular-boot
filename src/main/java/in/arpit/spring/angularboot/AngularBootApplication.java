package in.arpit.spring.angularboot;

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

	// URLが何か入っているときにブラウザからリロードしたときにエラーにならないようにする対策
	@RequestMapping(value = "/{path:[^\\.]*}")
	public String redirect(@PathVariable String path) {
		// Forward to home page so that route is preserved.
		return "forward:/";
	}
}
