package net.wohlfart.forms.config

import org.modelmapper.ModelMapper
import org.modelmapper.config.Configuration.AccessLevel
import org.modelmapper.convention.MatchingStrategies
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration




object CaptureModelMapper {

    val MODEL_MAPPER = ModelMapper()
    init {
        MODEL_MAPPER.configuration.matchingStrategy = MatchingStrategies.STANDARD
        MODEL_MAPPER.configuration.fieldAccessLevel = AccessLevel.PRIVATE
        MODEL_MAPPER.configuration.isFieldMatchingEnabled = true
        MODEL_MAPPER.configuration.isSkipNullEnabled = true
    }

}
