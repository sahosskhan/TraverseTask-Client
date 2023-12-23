import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import Googlebtn from './Googlebtn';
import { MutatingDots } from 'react-loader-spinner';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  if (loading) {
    return (
      <div>
        <div className="bg-black min-h-screen flex flex-col gap-10 justify-center items-center">
          <MutatingDots
            height="100"
            width="100"
            color="#9523EA"
            secondaryColor='#E04DCF'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    );
  }

  const onSubmit = data => {
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Successfully!",
          text: "You login with account ",
          icon: "success",
          confirmButtonText: "Done",
        });
        navigate(location?.state ? location?.state : "/dashboard/profile");
      })
      .catch((err) => {
        console.log(err);
        setError("Oops! Password is not correct please try again.");
      });
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-black'>
       <Helmet>
        <title>Login | TraverseTask | Online Task Management Platform</title>
      </Helmet>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-black'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Log In</h1>
          <p className='text-xl text-gray-400'>
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                {...register("email", { required: true })}
                name="email"
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-fuchsia-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
              {errors.email && <span className="text-red-600">Email is required</span>}
            </div>
            <div>
              <label htmlFor='password' className='text-sm mb-2'>
                Password
              </label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'} // Toggle password visibility based on state
                  {...register("password", { required: true })}
                  name="password"
                  autoComplete='current-password'
                  id='password'
                  required
                  placeholder='*******'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-fuchsia-500 bg-gray-200 text-gray-900 pr-10' // Added padding for the button
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-2 text-fuchsia-500 hover:text-fuchsia-700 focus:outline-none'
                >
                  {showPassword ? <FaEyeSlash className='text-2xl' /> : <FaEye className='text-2xl'/>}
                </button>
              </div>
              {errors.password && <span className="text-red-600">Password is required</span>}
              {error && (
                <p className="text-red-700 font-bold mt-5  ">
                  <i className="fa-solid fa-triangle-exclamation"></i> {error}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-fuchsia-500 w-full rounded-md py-3 text-white'
            >
              Log In
            </button>
          </div>
        </form>
        <div className='space-y-1'>
          <button className='text-xs hover:underline hover:text-fuchsia-500 text-gray-400'>
            Forgot password?
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <Googlebtn />
        <p className='px-6 text-sm text-center text-gray-400'>
          Don&apos;t have an account yet?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-fuchsia-500 text-gray-600'
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
