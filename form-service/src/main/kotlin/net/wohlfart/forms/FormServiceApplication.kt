package net.wohlfart.forms

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.boot.runApplication

@SpringBootApplication
@EnableConfigurationProperties(FormServiceProperties::class)
class CaptureApplication

fun main(args: Array<String>) {
	runApplication<CaptureApplication>(*args)
}
