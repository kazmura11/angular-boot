package team.putinpurin.controllers.frontend.api;

import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import team.putinpurin.models.entities.Hero;

@RestController
@RequestMapping("/api/frontend/heroes")
public class HeroController {
	public static final List<Hero> HEROES;
	static {
		final String[] NAMES = {
				"Mr. Nice",
				"Narco",
				"Bombasto",
				"Celeritas",
				"Magneta",
				"RubberMan",
				"Dynama",
				"Dr IQ",
				"Magma",
				"Tornado" };
		HEROES = Arrays.stream(NAMES).map(name -> new Hero(new Random().ints(0, 20).findFirst().getAsInt(), name))
				.collect(Collectors.toList());
	}

	@GetMapping
	public List<Hero> getHeroes() {
		return HEROES;
	}
}
