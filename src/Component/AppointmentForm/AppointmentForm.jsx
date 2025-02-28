import React from 'react';
import { Container } from 'react-bootstrap';
import './AppointmentForm.css';
import { useNavigate } from 'react-router-dom';

function AppointmentForm({ formInput, handleForm, handleSubmit }) {

    const navigate = useNavigate();

    const goToPending = () => {
        navigate('/pending'); 
    };

    const goToConfirmed = () => {
        navigate('/confirmed'); 
    };

    const goToApproved = () => {
        navigate('/approved'); 
    };


    return (
        <>

            <Container>
                <h1 className='text-center fw-bold py-4'>Appointment Form</h1>

                <div className='text-center my-2'>
                    <button className='btn btn-secondary' onClick={goToPending}><i class="fa-solid fa-hourglass-half"></i><br/> Pending</button>&nbsp;
                    <button className='btn btn-secondary' onClick={goToConfirmed}><i class="fa-regular fa-circle-check"></i><br/> Confirmed</button>&nbsp;
                    <button className='btn btn-secondary' onClick={goToApproved}><i class="fa-solid fa-thumbs-up"></i><br/> Approved</button>
                </div>

                <form className="row g-3 mt-4" onSubmit={handleSubmit}>
                    <input type="number" name="id" id="id" value={formInput.id} onChange={handleForm} hidden />
                    <div className="col-6">
                        <label htmlFor="pname" className="form-label">Patient Name</label>
                        <input type="text" className="form-control" id="pname" name='pname' value={formInput.pname} onChange={handleForm} placeholder="Name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" name='email' value={formInput.email} onChange={handleForm} placeholder='Email' />
                    </div>
                    <div className="col-6">
                        <label htmlFor="contact" className="form-label">Contact</label>
                        <input type="number" className="form-control" id="contact" name='contact' value={formInput.contact} onChange={handleForm} placeholder="Contact" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="date" className="form-label">Date</label>
                        <input type="date" className="form-control" id="date" name='date' value={formInput.date} onChange={handleForm} placeholder="Date" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="time" className="form-label">Time</label>
                        <input type="time" className="form-control" id="time" name='time' value={formInput.time} onChange={handleForm} placeholder="Time" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="address" className="form-label">Address</label>
                        <textarea id="address" className="form-control" name='address' value={formInput.address} onChange={handleForm} placeholder="1234 Main St"></textarea>
                    </div>
                    <div className='col-6 d-flex'>
                        <label >Gender: &nbsp;</label>
                        <div>
                            <input type="radio" id="male" name="gender" value="male" onChange={handleForm} />
                            &nbsp;&nbsp;
                            <label htmlFor="male">Male</label>
                            <br />
                            <input type="radio" id="female" name="gender" value="female" onChange={handleForm} />
                            &nbsp;&nbsp;
                            <label htmlFor="female">Female</label>
                            <br />
                            <input type="radio" id="other" name="gender" value="other" onChange={handleForm} />
                            &nbsp;&nbsp;
                            <label htmlFor="other">child</label>
                        </div>
                    </div>
                    <div className='col-6 d-flex'>
                        <label className='d-flex'>Status : &nbsp;</label>
                        <div>
                            <input type="radio" id="pending" name="status" value="pending" checked={formInput.status === 'pending'} onChange={handleForm} />
                            &nbsp;&nbsp;
                            <label htmlFor="pending">Pending</label>
                            <br />
                            <input type="radio" id="confirmed" name="status" value="confirmed" checked={formInput.status === 'confirmed'} onChange={handleForm} />
                            &nbsp;&nbsp;
                            <label htmlFor="confirmed">Confirmed</label>
                            <br />
                            <input type="radio" id="approved" name="status" value="approved" checked={formInput.status === 'approved'} onChange={handleForm} />
                            &nbsp;&nbsp;
                            <label htmlFor="approved">Approved</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Add Appointment</button>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default AppointmentForm;
