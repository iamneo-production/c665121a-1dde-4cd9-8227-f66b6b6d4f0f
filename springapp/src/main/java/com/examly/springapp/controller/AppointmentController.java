package com.examly.springapp.controller;

import com.examly.springapp.entity.Appointment;
import com.examly.springapp.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController {
    @Autowired
    private AppointmentService Appointments;
    

    @PostMapping("/appointment")
    public Appointment addAppointment(@RequestBody Appointment appointment){
        return this.Appointments.addAppointment(appointment);
    }
    @GetMapping("/getAppointments")
    public List<Appointment> getAppointments(){
        return this.Appointments.allAppointments();
    }

    @GetMapping("/getAppointments/user")
    public List<Appointment> getUserAppointments(){
        return this.Appointments.getUserAppointments();
    }

    @PutMapping("/editAppointment")
    public Appointment editAppointment(@RequestBody Appointment appointment){
        return this.Appointments.editAppointment(appointment);
    }

    @PutMapping("/payment/{id}")
    public Appointment editPayment(@PathVariable String id){
        return this.Appointments.editPayment(Long.parseLong(id));
    }
    @DeleteMapping("/deleteAppointment/{id}")
    public Appointment deleteAppointment(@PathVariable String id){
        return this.Appointments.deleteAppointment(Long.parseLong(id));
    }
}
