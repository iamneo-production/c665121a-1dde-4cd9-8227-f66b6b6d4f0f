package com.examly.springapp.service;
import com.examly.springapp.dao.UserDao;
import com.examly.springapp.dao.AppointmentDao;
import com.examly.springapp.entity.Appointment;
import com.examly.springapp.entity.Users;
import com.examly.springapp.config.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class AppointmentServiceimpl implements AppointmentService{
    @Autowired
    private AppointmentDao appointmentDao;

    @Autowired
    private UserDao dao;

    @Override
    public Appointment addAppointment(Appointment appointment) {
        return this.appointmentDao.save(appointment);
    }

    @Override
    public List<Appointment> allAppointments() {
        return this.appointmentDao.findAll();
    }

    @Override
    public List<Appointment>getUserAppointments(){
        Users user = dao.findByUsername(SecurityUtils.getCurrentUserLogin().get());
        List<Appointment> temp = allAppointments();
        List<Appointment> result = new ArrayList<>();
        for(Appointment A:temp){
            if(A.getU_id()==(user.getId())){
                result.add(A);
            }
        }
        return result;
    }

    @Override
    public Appointment editAppointment(Appointment appointment) {
        this.appointmentDao.save(appointment);
        return appointment;
    }

    @Override
    public Appointment deleteAppointment(long id) {
        List<Appointment> appointments = allAppointments();
        Appointment appointment = new Appointment();
        for(Appointment a:appointments){
            if(a.getBook_id()==id){
                appointment = a;
                this.appointmentDao.delete(appointment);
            }
        }
        return appointment;
    }
}
