description = "root modules for forms"
//
//
// this section is used to set up the plugin versions to have consistency across modules
// without applying them to the root module
plugins {
    base
    idea
    val kotlinVersion = "1.6.10"
    val springBootVersion = "2.6.3"
    // all the kotlin plugins
    kotlin("jvm").version(kotlinVersion).apply(false)
    kotlin("plugin.spring").version(kotlinVersion).apply(false)
    kotlin("plugin.allopen").version(kotlinVersion).apply(false)
    kotlin("plugin.jpa").version(kotlinVersion).apply(false)
    kotlin("plugin.noarg").version(kotlinVersion).apply(false)
    // the spring framework plugin and its dependency management
    id("org.springframework.boot").version(springBootVersion).apply(false)
    id("io.spring.dependency-management").version("1.0.11.RELEASE").apply(false)
    // swagger codegen https://openapi-generator.tech/docs/swagger-codegen-migration/#new-maven-coordinates
    // https://github.com/OpenAPITools/openapi-generator/blob/master/modules/openapi-generator-gradle-plugin/README.adoc
    id("org.openapi.generator").version("5.4.0").apply(false)
    // this is based on gradle-node-plugin and comes with node config:
    // https://github.com/coditory/gradle-webjar-plugin
    id("com.coditory.webjar").version("1.2.0").apply(false)
    // we need to create and run docekr images
    id("com.palantir.docker-run").version("0.32.0").apply(false)
    // todo: push our stuff into the repo
    id("com.jfrog.artifactory").version("4.27.0").apply(false)
}


allprojects {

    repositories {
        mavenLocal()
        mavenCentral()
        gradlePluginPortal()
        maven { url = uri("https://plugins.gradle.org/m2/") }
        maven { url = uri("https://repo.spring.io/release") }
        maven { url = uri("https://repository.jboss.org/maven2") }
    }

    // a task to reset the project to its initial state after checkout
    tasks.register<Delete>("mrproper") {
        tasks.findByName("clean")?.let {
            this.dependsOn(it)
        }
        description = """
            Cleanup anything that might be downloaded or created, trying to reset the project to the checkout state,
            this task is shared with every module
        """.trimIndent()
        delete = setOf(
            ".node", ".angular", "node_modules", "target", "build", "yarn.lock", "yarn-error.log",
            "src/generated", "out", "dist",
            // "package-lock.json"
        )
    }

}


// integrity check for the sub-modules configured in settings.gradle.kts
tasks.findByName("check")?.doLast {
    for ((name, project) in rootProject.childProjects) {
        project.apply {
            val projectDir = file(project.projectDir)
            require(projectDir.isDirectory) {
                "Project '$name' must have a ${project.projectDir} directory, please add the directory."
            }
            val buildFile = File(projectDir, "build.gradle.kts")
            require(buildFile.isFile) {
                "Project '$name' must have a $buildFile build script, please create the file."
            }
        }
    }
}

