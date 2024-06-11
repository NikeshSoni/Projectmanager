
import { useContext, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import JobPost from './JobPost';
import CheckboxInput from '../components/Dummy';
import { UserContext } from '../Provider/UserContext';

const EmployerDashBord = (props) => {
    const userForm = useContext(UserContext);
    const [formstore, setFormStore] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const [isTitle, setIsTitle] = useState(false);
    const [titleVal, setTitleVal] = useState('');

    const [isRoles, setIsRoles] = useState(false);
    const [rolesVal, setRolesVal] = useState('');

    const [isQualification, setIsQualification] = useState(false);
    const [checkQualification, setCheckQualification] = useState('');

    const [isStatement, setIsStatement] = useState(false);
    const [checkStatement, setCheckStatement] = useState('');

    const [inputVal, setInputVal] = useState('');
    const [location, setLocation] = useState('');
    const [select, setSelect] = useState('Full Time');



    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // start job title here

    const handleTitle = (event) => {
        setIsTitle(event.target.checked)
    }

    const handleInputVal = (event) => {
        setTitleVal(event.target.value)
    }

    //  Roles & Responsibility

    const handleResponsibilites = (event) => {
        setIsRoles(event.target.checked)
    }

    const handleRoles = (event) => {
        setRolesVal(event.target.value)
    }

    // handle Qualification 

    const handleQualification = (event) => {
        setIsQualification(event.target.checked);
    }

    const handleInputQualification = (event) => {
        setCheckQualification(event.target.value)
    }

    //  statement are here 

    const handleStatement = (e) => {
        setIsStatement(e.target.checked)
    }

    const statementVal = (e) => {
        setCheckStatement(e.target.value)
    }

    const [checkExperience, setCheckExperience] = useState(true)
    const [experienceMin, setExperienceMin] = useState('0')
    const [experienceMax, setExperienceMax] = useState('3')

    const handleExperince = (e) => {
        setExperienceMin(e.target.value)
    }

    const handleExperinceMax = (e) => {
        setExperienceMax(e.target.value)
    }

    const checkExperienceval = (e) => {
        setCheckExperience(e.target.checked)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue && !titleVal && !rolesVal &&
            !checkQualification && !checkStatement
            && !checkStatement && !location) {
            alert('please fill input field')
        } else {
            setFormStore(prev => [...prev, { title: e.target.JobPostTitle.value }])
            userForm.setUser(prev => prev.includes(e.target.JobPostTitle.value) ? prev : [...prev,
            {
                jobtitle: titleVal,
                jobintro: inputValue,
                jobrnr: rolesVal,
                jobexprange: experienceMin,
                jobexprangeMax: experienceMax,
                jobqual: checkQualification,
                // jobsalrange: "",
                jobcta: checkStatement,
                // jobcomp: checkStatement,
                jobloc: location,
                jobfull: select,
                // joblabel: ""
            }
            ])
        }
    }

    return (
        <div className='d-flex'>
            <div className="webpack p-4 mainnWapper mx-auto  border border-1 position-relative">
                <div className=''>
                    <button className='w-100 p-1 border-0'>
                        New Job +
                    </button>
                </div>
                <div className='job-post-wrapper'>
                    {formstore.map((items, index) => {
                        return (
                            <div key={index} className='job-post-item'>
                                <JobPost title={items.title} />
                            </div>
                        )
                    })}
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-between">
                        <div className='mt-3 d-flex gap-3'>
                            <div>
                                <Form.Check
                                    checked={isTitle}
                                    onChange={handleTitle}
                                    aria-label="option 1" />
                            </div>
                            <div>
                                <div className="alert p-0 d-none alert-danger" role="alert">
                                    A simple danger alert—check it out!
                                </div>
                                <Form.Control
                                    value={titleVal}
                                    onChange={handleInputVal}
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    placeholder='Job Post Title'
                                    className='experienceWidth w-100'
                                    name="JobPostTitle"
                                    require
                                />
                            </div>
                        </div>
                        <div className="toggleWapper align-items-center gap-4 d-flex">
                            <div>
                                <span> Active ?</span>
                            </div>
                            <input id="checkbox" className='toggleInput' type="checkbox" />
                            <label className="moon-sun" htmlFor="checkbox"></label>
                        </div>
                    </div>

                    <div className='mt-3'>
                        <div className='d-flex gap-3'>
                            <div className=''>
                                <Form.Check
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    aria-label="option 1" />
                            </div>
                            <label>
                                Introduction
                            </label>
                        </div>
                        <FloatingLabel className='col-8' controlId="floatingTextarea2" label="Introductionn">
                            <Form.Control className='mt-2'
                                value={inputValue}
                                onChange={handleInputChange}
                                as="textarea"
                                placeholder="Introduction"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </div>

                    <div className='mt-3'>
                        <div className='d-flex gap-3'>
                            <div className=''>
                                <Form.Check
                                    checked={isRoles}
                                    onChange={handleResponsibilites}
                                    aria-label="option 1" />
                            </div>
                            <label>
                                Roles & Responsibilites
                            </label>
                        </div>
                        <FloatingLabel controlId="floatingTextarea2" label="Roles & Responsibilites">
                            <Form.Control className='mt-2'
                                value={rolesVal}
                                onChange={handleRoles}
                                as="textarea"
                                placeholder="Introduction"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </div>

                    <div className='d-flex gap-4 mt-3'>
                        <div className='d-flex gap-3'>
                            <div>
                                <Form.Check
                                    checked={checkExperience}
                                    onChange={checkExperienceval}
                                    aria-label="option 1" />
                            </div>
                            <label>
                                Experience Range (years)
                            </label>
                        </div>
                        <Form.Select
                            // checked={checkExperience}
                            value={experienceMin}
                            onChange={handleExperince}
                            className='experienceWidth'
                            aria-label="Default select example">
                            <option>Min</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </Form.Select>

                        <Form.Select
                            value={experienceMax}
                            onChange={handleExperinceMax}
                            className='experienceWidth'
                            aria-label="Default select example">
                            <option>Max</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                    </div>


                    <div className='mt-3 d-flex gap-3 align-items-center'>
                        <div className=''>
                            <Form.Check
                                checked={isQualification}
                                onChange={handleQualification}
                                aria-label="option 1" />
                        </div>
                        <Form.Control
                            value={checkQualification}
                            onChange={handleInputQualification}
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder='Qualifications'
                        />
                    </div>

                    <div className='mt-3 d-flex gap-3 align-items-center'>
                        <div className=''>
                            <Form.Check aria-label="option 1" />
                        </div>
                        <Form.Control
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder='Salary Range'
                            className='experienceWidth'
                        />
                    </div>

                    <div className='mt-3 d-flex  gap-3 align-items-center'>
                        <div className=''>
                            <Form.Check
                                checked={isStatement}
                                onChange={handleStatement}
                                aria-label="option 1" />
                        </div>
                        <FloatingLabel className='col-10' controlId="floatingTextarea2" label="Call to Action">
                            <Form.Control className='mt-2'
                                value={checkStatement}
                                onChange={statementVal}
                                as="textarea"
                                placeholder="Introduction"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </div>

                    <div className='mt-4'>
                        <Form.Control
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder='Company'
                            className='experienceWidth'
                        />
                    </div>

                    <div className='mt-4'>
                        <Form.Control
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder='Job Location (Map Search)'
                            className='searchWidth'
                        />
                    </div>

                    <div className='mt-4 d-flex my-5 gap-5 '>
                        <Form.Select fsetSelect
                            value={select}
                            onChange={(e) => setSelect(e.target.value)}
                            aria-label="Default select example">
                            <option>Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                        </Form.Select>
                        <Form.Select

                            aria-label="Default select example">
                            <option>Lables</option>
                            <option value="Is Remote">Is Remote</option>
                            <option value="5 Day Week">5 Day Week </option>
                        </Form.Select>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

            <div className='previewWapper col-5 text-center mx-auto'>
                <CheckboxInput
                    jobTitle={isTitle && <p>{titleVal}</p>}
                    main={isChecked && <p>{inputValue}</p>}
                    responsibility={isRoles && <p>{rolesVal}</p>}
                    qualification={isQualification && <p>{checkQualification}</p>}
                    checkStatement={isStatement && <p>{checkStatement}</p>}
                    inputVal={inputVal}
                    location={location}
                    select={select}
                    setTitleVal={setTitleVal}
                    experienceMax={checkExperience && experienceMax}
                    experienceMin={checkExperience && experienceMin}

                />
            </div>

        </div>
    )


}

export default EmployerDashBord;