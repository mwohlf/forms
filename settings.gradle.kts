//
//  The settings file is executed during the initialization phase, defines which projects are taking part
//  in the multi-project build and add libraries to the build script classpath
//
//  https://docs.gradle.org/current/userguide/build_lifecycle.html#sec:settings_file
//
rootProject.name = "the-peng"

// https://handstandsam.com/2018/02/11/kotlin-buildsrc-for-better-gradle-dependency-management/
// https://proandroiddev.com/gradle-dependency-management-with-kotlin-94eed4df9a28

include(":form-service")
include(":form-reactive")
include(":admin-console")
include(":nginx")

project(":form-service").projectDir = file("form-service")
project(":form-reactive").projectDir = file("form-reactive")
project(":admin-console").projectDir = file("admin-console")
project(":nginx").projectDir = file("nginx")

println("Finished evaluating settings.")
