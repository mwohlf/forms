package net.wohlfart.forms.repository


import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


typealias  ProcessId = String

@Repository
interface ProcessRepository : JpaRepository<ProcessDataEntity, ProcessId> {

    /*
    // should not be used
    fun ProcessConfiguration.toEntity(): ProcessDataEntity {
        return ProcessDataEntity(
            id = "null",
            processId = this.processId,
            processName = this.processName,
            processRevision = this.processRevision,
            processDescription = this.processDescription,
            processDetails = MODEL_MAPPER.map(this.processDetails, ProcessDetails::class.java),
        )
    }

    fun ProcessDataEntity.toProcessData(): ProcessConfiguration {
        return ProcessConfiguration(
            processId = this.processId,
            processName = this.processName,
            processRevision = this.processRevision,
            processDescription = this.processDescription,
            processDetails = MODEL_MAPPER.map(this.processDetails, ObjectNode::class.java),
        )
    }

     */
}
