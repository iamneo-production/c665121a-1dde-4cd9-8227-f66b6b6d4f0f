package com.examly.springapp.controller;

import com.examly.springapp.config.JwtUtility;
import com.examly.springapp.config.SecurityUtils;
import com.examly.springapp.dao.UserDao;
import com.examly.springapp.entity.Users;
import com.examly.springapp.model.JwtRequest;
import com.examly.springapp.model.JwtResponse;
import com.examly.springapp.service.JwtUserDetailsService;
import com.examly.springapp.service.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class AuthController {

  @Autowired
  private UserServices User;


  @Autowired
  public UserDao dao;

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private JwtUtility jwtTokenUtil;

  @Autowired
  private JwtUserDetailsService userDetailsService;

  @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
  public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

    authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

    final UserDetails userDetails = userDetailsService
        .loadUserByUsername(authenticationRequest.getUsername());
    System.out.println(userDetails.toString());

    final String token = jwtTokenUtil.generateToken(userDetails);

    return ResponseEntity.ok(new JwtResponse(token));
  }

  @RequestMapping(value = "/mydetails", method = RequestMethod.GET)
  public ResponseEntity<?> getMyDetails() throws Exception {
    Users user = dao.findByUsername(SecurityUtils.getCurrentUserLogin().get());
    return ResponseEntity.ok(user);
  }



  @RequestMapping(value = "/register", method = RequestMethod.POST)
  public ResponseEntity<?> addUser(@RequestBody Users user) throws Exception {
    return ResponseEntity.ok(User.addUser(user));
  }

  private void authenticate(String username, String password) throws Exception {
    try {
      authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
    } catch (DisabledException e) {
      throw new Exception("USER_DISABLED", e);
    } catch (BadCredentialsException e) {
      throw new Exception("INVALID_CREDENTIALS", e);
    }
  }

}
