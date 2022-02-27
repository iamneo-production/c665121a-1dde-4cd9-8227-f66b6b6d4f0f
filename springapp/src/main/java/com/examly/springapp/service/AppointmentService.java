package com.examly.springapp.service;

import com.examly.springapp.entity.Appointment;

import java.util.List;

public interface AppointmentService {
    Appointment addAppointment(Appointment appointment);

    List<Appointment> allAppointments();

    Appointment editAppointment(Appointment appointment);

    Appointment deleteAppointment(long id);
}
