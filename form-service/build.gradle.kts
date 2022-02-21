import org.jetbrains.kotlin.gradle.tasks.KotlinCompile
import org.jetbrains.kotlin.kapt3.base.Kapt.kapt
import org.openapitools.generator.gradle.plugin.tasks.GenerateTask

description = "tracking backend services"

plugins {
    base
    idea
    kotlin("jvm")
    kotlin("plugin.spring")
    kotlin("plugin.allopen")
    kotlin("plugin.jpa")
    kotlin("plugin.noarg")
    id("org.springframework.boot")
    id("io.spring.dependency-management")
    id("org.openapi.generator")
}

kotlin {
    sourceSets["main"].apply {
        kotlin.srcDir("$buildDir/generated-sources/src/main/kotlin")
    }
}

springBoot {
    buildInfo()  // to create the buildInfo object
}

val openApiGenerate = tasks.withType<GenerateTask> {
    val generatedSourcesDir = project.layout.buildDirectory.dir("generated-sources").get()
    val ignoreOverride = project.layout.projectDirectory.file(".openapi-generator-ignore").asFile
    outputDir.set(generatedSourcesDir.asFile.path)
    inputSpec.set(rootProject.layout.projectDirectory.file("etc/api/forms-service.yml").asFile.path)
    ignoreFileOverride.set(ignoreOverride.path)
    modelPackage.set("net.wohlfart.forms.model")
    apiPackage.set("net.wohlfart.forms.api")
    packageName.set("net.wohlfart.forms")
    // generators:
    //   - kotlin-server: uses Ktor,
    //   - kotlin-spring: create a full spring based project
    //   - kotlin-vertx: io.vertx
    generatorName.set("kotlin-spring")
    configOptions.set(
        mapOf( // see: https://openapi-generator.tech/docs/generators/kotlin-spring/
            "dateLibrary" to "java8",
            "interfaceOnly" to "true",
            "useTags" to "true",
            "enumPropertyNaming" to "UPPERCASE",
            "serializationLibrary" to "jackson",
        )
    )
}


// TODO: move this up into the main module
tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "11"
    }
    dependsOn(openApiGenerate)
}

tasks.withType<Test> {
    useJUnitPlatform()
}

dependencies {
    implementation("com.fasterxml.jackson.core:jackson-annotations:2.13.1")
    implementation("com.fasterxml.jackson.core:jackson-core:2.13.1")
    implementation("com.fasterxml.jackson.core:jackson-databind:2.13.1")
    implementation("com.fasterxml.jackson.datatype:jackson-datatype-jsr310:2.13.1")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin:2.13.1")

    implementation("com.vladmihalcea:hibernate-types-55:2.14.0")
    implementation("io.github.microutils:kotlin-logging-jvm:2.1.21")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("org.modelmapper.extensions:modelmapper-spring:2.4.4")
    implementation("org.postgresql:postgresql:42.3.2")
    //
    implementation("org.springframework.boot:spring-boot-starter-actuator")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springframework.boot:spring-boot-starter-validation")
    implementation("org.springframework.boot:spring-boot-starter-web")

    // peer module as webjar
    implementation(project(":form-reactive"))
    implementation(project(":admin-console"))

    implementation("com.google.devtools.ksp:com.google.devtools.ksp.gradle.plugin:1.6.10-1.0.2")
    annotationProcessor("org.springframework.boot:spring-boot-configuration-processor")

    developmentOnly("org.springframework.boot:spring-boot-devtools")

    testImplementation("com.ninja-squad:springmockk:3.1.0")
    testImplementation("org.junit.jupiter:junit-jupiter-api")
    testImplementation("org.junit.jupiter:junit-jupiter:5.7.2")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("org.testcontainers:junit-jupiter:1.16.3")
    testImplementation("org.testcontainers:postgresql:1.16.3")

    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine")

}
repositories {
    mavenCentral()
}


tasks.findByName("test")?.enabled = false

