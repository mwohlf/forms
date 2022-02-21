
plugins {
    id("com.palantir.docker-run")
}


dependencies {
    project(":form-reactive")
}

dockerRun {
    name = "nginx"
    image = "nginx:1.21.6"
    daemonize = false // don't set -d, so we can see the console output
    clean = true // remove the image afterwards
    volumes(mapOf( // volumes are a map
        "htdocs" to "/usr/share/nginx/html-8080",
        "port-8080.conf" to "/etc/nginx/conf.d/port-8080.conf"
    ))
    ports("8080:8080")
}
