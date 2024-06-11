
const CheckboxInput = (
  { main, jobTitle, responsibility,
    qualification, checkStatement, inputVal,
    location, select, experienceMax, experienceMin }) => {

  return (
    <div>
      <div data-aos="fade-left" className='border shadow border-dark m-5'>
        <form className='p-3'>
          <div className='d-flex gap-4 justify-content-between'>
            <div >
              {jobTitle} 
            </div>
            <div className='gap-4 d-flex'>
              <button type="button" className="btn btn-primary">Remote</button>
              <button type="button" className="btn btn-primary">5 Days Work</button>
            </div>
          </div>

          <div className='intro mt-4 d-flex gap-3'>
            <strong>Introduction -</strong>
            <div>
              <p>{main}</p>
            </div>
          </div>

          <div className='intro mt-4 d-flex gap-3'>
            <strong>Roles & Responsibility -</strong>
            <div>
              <p>{responsibility}</p>
            </div>
          </div>

          <div className="text-start d-flex gap-3 mt-3">
            <h6>Preferred Experience : 0 to 3 yrs - </h6>
            <p> {experienceMin} To {experienceMax} </p>
          </div>

          <div className='intro mt-2 d-flex gap-3'>
            <strong>Qualification -</strong>
            <div>
              <p>{qualification}</p>
            </div>
          </div>


          <div className='intro mt-2 d-flex gap-3'>
            <strong>Concluding Statement -</strong>
            <div>
              <p>{checkStatement}</p>
            </div>
          </div>

          <div className='intro mt-2 d-flex gap-3'>
            <strong>Company -</strong>
            <div>
              <p>{inputVal}</p>
            </div>
          </div>

          <div className='intro mt-2 d-flex gap-3'>
            <strong>Location -</strong>
            <div>
              <p>{location}</p>
            </div>
          </div>

          <div className='intro mt-2 d-flex gap-3'>
            <strong>Job Type -</strong>
            <div>
              <p>{select}</p>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}

export default CheckboxInput;