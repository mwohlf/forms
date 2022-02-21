package net.wohlfart.forms

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.ConstructorBinding


@ConstructorBinding
@ConfigurationProperties(prefix = "net.wohlfart.forms")
class FormServiceProperties(

    val processDataFormDir: String,
)
