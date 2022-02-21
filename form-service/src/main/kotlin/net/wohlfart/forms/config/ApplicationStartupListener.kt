package net.wohlfart.forms.config

import net.wohlfart.forms.FormServiceProperties
import net.wohlfart.forms.repository.ProcessDataEntity
import net.wohlfart.forms.repository.ProcessRepository
import mu.KotlinLogging
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.boot.info.BuildProperties
import org.springframework.context.ApplicationListener
import org.springframework.core.io.ClassPathResource
import org.springframework.stereotype.Component

private val logger = KotlinLogging.logger {}


@Component
class ApplicationStartupListener(
    val buildProperties: BuildProperties,
    val formServiceProperties: FormServiceProperties,
    val dataSourceProperties: DataSourceProperties,
    val processRepository: ProcessRepository,
) : ApplicationListener<ApplicationReadyEvent> {

    override fun onApplicationEvent(event: ApplicationReadyEvent) {
        logger.info { "" }
        logger.info { "Application Config" }
        logger.info { "------------------" }
        logger.info { "buildProperties.time: ${buildProperties.time}" }
        logger.info { "buildProperties.version: ${buildProperties.version}" }
        logger.info { "processDataFormDir: ${formServiceProperties.processDataFormDir}" }
        logger.info { "dataSourceProperties.username: ${dataSourceProperties.username}" }
        logger.info { "dataSourceProperties.url: ${dataSourceProperties.url}" }
        logger.info { "--------------------------------------------" }


        ClassPathResource(formServiceProperties.processDataFormDir).file.listFiles()?.forEach {
            processRepository.save(
                ProcessDataEntity(
                processId = it.name,
                processName = it.name,
                processRevision = "A",
                processDetails = it.readText(Charsets.UTF_8)
            )
            )
        }

    }

}

