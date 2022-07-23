import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const Login = () => {
    return(
        <>

    <h2 className="text-center text-info mb-5"> This is log in page </h2>

<form className='w-50 m-auto was-validated'>

<FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com"  required/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" required/>
      </FloatingLabel>
<br/>
  <input className='btn btn-primary w-25 m-2 m-auto' type="submit" value="Log in"/>
  <input className='btn btn-danger w-25  m-2' type="reset" value="Clear form"/>
  <br/><br/>
  <h3 className='btn btn-success w-50 m-auto'> Create an account </h3>
</form>
    </>
    )
}
export default Login ;