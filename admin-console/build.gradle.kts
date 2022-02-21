description = "the tracking web-component"

plugins {
  base
  idea
  id("com.coditory.webjar")
}

webjar {
    cache {
        enabled = true
    }
}

// configure com.coditory.webjar, it's based on gradle-node-plugin
// which needs to be applied in order to do its job
node {
    version.set("16.13.2")  // node version
    npmVersion.set("8.1.2") // npm version to use, we can also use yarn
}

tasks.findByName("webjarTest")?.enabled = false
tasks.findByName("webjarLint")?.enabled = false
tasks.findByName("webjarClean")?.enabled = false

// tasks.findByName("webjarBuild")?.dependsOn("build:component")
