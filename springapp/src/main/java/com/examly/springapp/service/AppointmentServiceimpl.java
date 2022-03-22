package com.examly.springapp.service;
import com.examly.springapp.dao.ServiceCenterDao;
import com.examly.springapp.dao.UserDao;
import com.examly.springapp.dao.AppointmentDao;
import com.examly.springapp.entity.Appointment;
import com.examly.springapp.entity.ServiceCenter;
import com.examly.springapp.entity.Users;
import com.examly.springapp.config.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class AppointmentServiceimpl implements AppointmentService{
    @Autowired
    private AppointmentDao appointmentDao;

    @Autowired
    private UserDao dao;

    @Autowired
    private ServiceCenterDao centerDao;

    @Override
    public Appointment addAppointment(Appointment appointment) {

        this.appointmentDao.save(appointment);
        //adding to center
        List<ServiceCenter> centers = this.centerDao.findAll();
        for(ServiceCenter x:centers){
            if(Objects.equals(x.getId(),appointment.getSc_id())){
                x.getAppointments().add(appointment);
                this.centerDao.save(x);
            }
        }
        //adding to user
        List<Users> users = this.dao.findAll();
        for(Users y:users){
            if(Objects.equals(y.getId(),appointment.getU_id())){
                y.getAppointments().add(appointment);
                this.dao.save(y);
            }
        }
        return appointment;
    }

    @Override
    public List<Appointment> allAppointments() {
        return this.appointmentDao.findAll();
    }

    @Override
    public List<Appointment>getUserAppointments(){
        Users user = dao.findByUsername(SecurityUtils.getCurrentUserLogin().get());
//        List<Appointment> temp = allAppointments();
        List<Appointment> result = user.getAppointments();
//        for(Appointment A:temp){
//            if(A.getU_id()==(user.getId())){
//                result.add(A);
//            }
//        }

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
