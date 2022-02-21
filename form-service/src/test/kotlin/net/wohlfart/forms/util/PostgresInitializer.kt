package net.wohlfart.forms.util

import org.springframework.boot.test.util.TestPropertyValues
import org.springframework.context.ApplicationContextInitializer
import org.springframework.context.ConfigurableApplicationContext
import org.springframework.context.event.ContextClosedEvent
import org.testcontainers.containers.PostgreSQLContainer
import org.testcontainers.junit.jupiter.Container

/**
 * this boots up a postgres container and patches the datasource properties in the spring context for tests,
 * include this for a test with:
 *
 * @Testcontainers(disabledWithoutDocker = true)
 * @ContextConfiguration(
 * initializers = [
 *   PostgresInitializer::class,
 * ]
 */
class PostgresInitializer : ApplicationContextInitializer<ConfigurableApplicationContext> {

    companion object {
        @Container
        val container = PostgreSQLContainer<Nothing>("postgres:14").apply {
            withDatabaseName("testdb")
            withUsername("postgres")
            withPassword("postgres")
        }
    }

    override fun initialize(applicationContext: ConfigurableApplicationContext) {

        container.start()

        applicationContext.addApplicationListener {
            if (it is ContextClosedEvent) {
                container.stop()
            }
        }

        TestPropertyValues
            .of("spring.datasource.url=${container.jdbcUrl}")
            .and("spring.datasource.password=${container.password}")
            .and("spring.datasource.username=${container.username}")
            .applyTo(applicationContext)
    }

}
