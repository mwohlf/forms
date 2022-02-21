package net.wohlfart.forms.config

import org.springframework.stereotype.Component
import java.io.IOException
import javax.servlet.*
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletRequestWrapper
import javax.servlet.http.HttpServletResponse

const val BASE_URL = "/admin-console/"
const val INDEX_HTML = "index.html"

@Component
class SimpleFilter : Filter {

    @Throws(ServletException::class)
    override fun init(filterconfig: FilterConfig?) {
    }

    @Throws(IOException::class, ServletException::class)
    override fun doFilter(servletRequest: ServletRequest, servletResponse: ServletResponse?, filterChain: FilterChain) {
        var request = servletRequest as HttpServletRequest
        val response = servletResponse as HttpServletResponse

        if (isAngularRoutingPath(request)) {
            request = object : HttpServletRequestWrapper(request) {
                override fun getRequestURI(): String {
                    return BASE_URL + INDEX_HTML
                }
            }
        }
        filterChain.doFilter(request, response)
    }

    override fun destroy() {
    }

    fun isAngularRoutingPath(request: HttpServletRequest): Boolean {
        val path = request.servletPath
        return (path.startsWith(BASE_URL) && !path.contains("."))
    }

}
