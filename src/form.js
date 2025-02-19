import './form.css';
import img_2 from './utills/img_2.png'
function Form() {
    return (
        <div className='container'>
            <div class="card" className='sub-container'>
                <div className='header-container'>
                    <span>
                        <img src={img_2} className='img-container'></img>
                    </span>
                    <div className='header-subcontainer'>
                        <div className='primary-Centerstyle'>
                            <span><h2>HEALTH CITY</h2></span>
                            <span><h1>HOSPITAL</h1></span>
                        </div>
                    </div>
                </div>


                <div className="card-body card-container">
                    <div className='card-Subcontainer'>
                        <div className='primary-Centerstyle'>
                            <h5>Vaccination Consent Form</h5>
                        </div>
                        <div className='primary-Centerstyle'>
                            Patient Information
                        </div>
                    </div>

                    <div className='line-textfield-container'>
                        <div className='line-textfield-subcontainer'>
                            <span>Full Legal Name</span><span>*</span>
                        </div>

                        <input
                            type="text"
                            className='line-textfield'
                        />
                    </div>

                    <div className='dob-medical-row'>
                        <span className='dob-medical-container'>
                            <span> Date of Birth*</span>
                            <input
                                type="text"
                                className='primary-line-textfield'
                            />
                        </span>
                        <span className='medical-container'>
                            <span>Medical number(if known)</span>
                            <input
                                type="text"
                                className='secondary-line-textfield'
                            />
                        </span>
                    </div>
                    <div className='ph-email-row'>
                        <span className='ph-container'>
                            <span> PhoneNumber*</span>
                            <input
                                type="text"
                                className='primary-line-textfield'
                            />
                        </span>
                        <span className='email-container'>
                            <span>EmailAddress*</span>
                            <input
                                type="text"
                                className='secondary-line-textfield'
                            />
                        </span>
                    </div>
                    <span>
                        <span>Address*</span>
                    </span>

                    <div className='street-city-row'>
                        <span className='street-container'>
                            <span>Street*</span>
                            <input
                                type="text"
                                className='primary-line-textfield'
                            />
                        </span>
                        <span className='city-container'>
                            <span>City/Suburb</span>
                            <input
                                type="text"
                                className='secondary-line-textfield'
                            />
                        </span>
                    </div>
                    <div className='state-zip-row'>
                        <span className='state-container'>
                            <span>State*</span>
                            <input
                                type="text"
                                className='primary-line-textfield'
                            />
                        </span>
                        <span className='zip-container'>
                            <span>Zip/PostCode*</span>
                            <input
                                type="text"
                                className='secondary-line-textfield'
                            />
                        </span>
                    </div>
                    <span>
                        <span>Country</span><span>*</span>
                        <input
                            type="text"
                            className='line-textfield'
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Form