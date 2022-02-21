package net.wohlfart.forms.repository

import com.vladmihalcea.hibernate.type.json.JsonBinaryType
import org.hibernate.annotations.Type
import org.hibernate.annotations.TypeDef
import org.hibernate.annotations.TypeDefs
import javax.persistence.Basic
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "process_data")
@TypeDefs(TypeDef(name = "jsonb", typeClass = JsonBinaryType::class))
data class ProcessDataEntity(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id", unique = true, nullable = false)
    val id: Long? = null,

    @Column(name = "process_id", nullable = false, unique = true)
    val processId: String,

    @Column(name = "process_name", nullable = true, unique = false)
    val processName: String? = null,

    @Column(name = "process_revision", nullable = true, unique = false)
    val processRevision: String? = null,

    @Column(name = "process_description", nullable = true, unique = false)
    val processDescription: String? = null,

    @Type(type = "jsonb")
    @Column(columnDefinition = "jsonb", name = "process_details", nullable = true, unique = false)
    val processDetails: String? = null,
)
