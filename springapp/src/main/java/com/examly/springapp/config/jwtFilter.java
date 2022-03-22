package com.examly.springapp.config;

import com.examly.springapp.service.JwtUserDetailsService;
import com.examly.springapp.service.UserServiceimpl;
import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

@Component
public class jwtFilter extends GenericFilterBean {

  @Autowired
  private JwtUtility jwtUtility;

  @Autowired
  private JwtUserDetailsService userService;

  @Override
  public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws ServletException, IOException {
    HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
    String authorization = httpServletRequest.getHeader("Authorization");
    String token = null;
    String userName = null;

    if(null != authorization && authorization.startsWith("Bearer ")) {
      token = authorization.substring(7);
      userName = jwtUtility.getUsernameFromToken(token);
    }

    if(null != userName && SecurityContextHolder.getContext().getAuthentication() == null) {
      UserDetails userDetails
          = userService.loadUserByUsername(userName);

      if(jwtUtility.validateToken(token,userDetails)) {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken
            = new UsernamePasswordAuthenticationToken(userDetails,
            null, userDetails.getAuthorities());

        usernamePasswordAuthenticationToken.setDetails(
            new WebAuthenticationDetailsSource().buildDetails(httpServletRequest)
        );

        SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
      }

    }
    filterChain.doFilter(httpServletRequest, servletResponse);
  }

}
