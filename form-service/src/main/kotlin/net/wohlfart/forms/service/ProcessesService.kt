package net.wohlfart.forms.service

import net.wohlfart.forms.model.ProcessData
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class ProcessesService {

    fun getProcess(plantId: String, processId: String): ResponseEntity<ProcessData> {
        TODO("Not yet implemented")
    }

}
