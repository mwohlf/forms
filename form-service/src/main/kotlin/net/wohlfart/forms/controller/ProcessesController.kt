package net.wohlfart.forms.controller

import net.wohlfart.forms.api.ProcessesApi
import net.wohlfart.forms.model.ProcessData
import net.wohlfart.forms.service.ProcessesService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RestController

@RestController
class ProcessesController(
    private val processesService: ProcessesService,
) : ProcessesApi {

    override fun getProcess(
        plantId: String, processId: String,
    ): ResponseEntity<ProcessData> {
        return processesService.getProcess(plantId, processId)
    }
}
