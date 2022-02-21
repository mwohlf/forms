package net.wohlfart.forms

import net.wohlfart.forms.util.PostgresInitializer
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.ContextConfiguration
import org.testcontainers.junit.jupiter.Testcontainers

@Testcontainers(disabledWithoutDocker = true)
@ContextConfiguration(
    initializers = [
        // this is not needed if we run with the docker-compose image
        // PostgresInitializer::class,
    ]
)
@ActiveProfiles("test")
@SpringBootTest
class CaptureServiceApplicationSmokeTest {

	@Test
	fun contextLoads() {
        // this is a check for context initialization including the test container
	}

}
