package com.examly.springapp.service;

import com.examly.springapp.dao.AppointmentDao;
import com.examly.springapp.entity.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentServiceimpl implements AppointmentService{
    @Autowired
    private AppointmentDao appointmentDao;

    @Override
    public Appointment addAppointment(Appointment appointment) {
        return this.appointmentDao.save(appointment);
    }

    @Override
    public List<Appointment> allAppointments() {
        return this.appointmentDao.findAll();
    }
}
