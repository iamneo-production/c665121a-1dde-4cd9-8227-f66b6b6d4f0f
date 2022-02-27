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

    @GetMapping("/getAppointments/{id}")
    public List<Appointment> getUserAppointments(@PathVariable String id){
        List<Appointment> temp = getAppointments();
        List<Appointment> result = new ArrayList<>();
        for(Appointment A:temp){
            if(A.getU_id()==(Long.parseLong(id))){
                result.add(A);
            }
        }
        return result;
    }
    @PutMapping("/editAppointment")
    public Appointment editAppointment(@RequestBody Appointment appointment){
        return this.Appointments.editAppointment(appointment);
    }

    @DeleteMapping("/deleteAppointment/{id}")
    public Appointment deleteAppointment(@PathVariable String id){
        return this.Appointments.deleteAppointment(Long.parseLong(id));
    }
}
