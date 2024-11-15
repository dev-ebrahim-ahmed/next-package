
import { useFormik } from 'formik';


const SignUp = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: (values, {resetForm})=>{
            console.log(values);
            resetForm({values: ""})
        },
    })

  return (
    <div className="container-fluid p-4 m-4 border border-primary text-center">
        <h2 className='text-info'> 
            User Sign Up
        </h2>
        <form action="" onSubmit={formik.handleSubmit}>
            <div className="mb-3">
                <input type="text" name="name" id="name" placeholder="Name: " value={formik.values.name} onChange={formik.handleChange} required/>
            </div>
            <div className="mb-3">
                <input type="text" name="email" id="email" placeholder="Email: " value={formik.values.email} onChange={formik.handleChange} required/>
            </div>
            <div className="mb-3">
                <input type="text" name="password" id="password" placeholder="Password: " value={formik.values.password} onChange={formik.handleChange} required/>
            </div>
            <button className="btn btn-primary" type="submit">Sign UP</button>
        </form>
    </div>
  )
}

export default SignUp