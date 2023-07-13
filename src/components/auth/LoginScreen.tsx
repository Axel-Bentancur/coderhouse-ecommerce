import { Link } from 'react-router-dom';
//Context
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
//Others
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const LoginScreen = () => {
  const user = useContext(AuthContext)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
      .required('Required'),
    }),

    onSubmit: async (values, { resetForm }) => {
      user?.login(values);
      resetForm();
    }

  });

  return (
    <div className='flex flex-grow bg-purple-100 items-center'>
      <div className="flex flex-grow flex-col items-center">
        <div className="bg-purple-100 p-8 rounded-lg m-4 ">
          <div className='flex justify-center'>
            <div className="flex items-center justify-center w-24 h-24 bg-purple-200 rounded-full mb-6">
            <FontAwesomeIcon icon={faUser} size="3x" className="text-purple-600" />
            </div>
          </div>
          <h2 className="text-3xl text-purple-800 mb-4 text-center">Login</h2>
          <form className="flex flex-col items-center" onSubmit={formik.handleSubmit}>
            <input type="email" autoComplete="email" {...formik.getFieldProps('email')} className="bg-white border border-purple-300 rounded-lg px-4 py-2 mb-4 w-full" placeholder="Email"/>
            {formik.touched.email && formik.errors.email ? (
                <div className='text-red-600'>{formik.errors.email}</div>
              ) : null}
            <input type="password" autoComplete="password" {...formik.getFieldProps('password')} className="bg-white border border-purple-300 rounded-lg px-4 py-2 mb-4 w-full" placeholder="Password"/>
            {formik.touched.password && formik.errors.password ? (
                <div className='text-red-600'>{formik.errors.password}</div>
              ) : null}
            <button
              type="submit"
              className="bg-purple-600 text-white rounded-lg px-4 py-2 w-full mb-2"
            >
              Login
            </button>
              <Link to={'/register'}>
                Don't have an account? <span className='text-purple-800 text-lg'> Create</span>
              </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;