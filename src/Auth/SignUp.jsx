import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Googlebtn from './Googlebtn';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);

    // imageBB
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBBAPI}`;

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const image = imageData?.data?.url;
          console.log(image);

          createUser(data.email, data.password).then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);

            updateUserProfile(data.name, image).then(() => {
              const userInfo = {
                name: data.name,
                email: data.email,
                image: image,
                role: 'Admin',
              };
              console.log(userInfo);
              axiosPublic
                .post('/app-users', userInfo)
                .then((res) => {
                  if (res.data.insertedId) {
                    console.log('user created successfully');
                    reset();
                    Swal.fire({
                      title: 'Wow!',
                      text: 'Sign Up Successfully',
                      icon: 'success',
                      confirmButtonText: 'Okay',
                    });
                    navigate('/dashboard/profile');
                  }
                })
                .catch((error) => console.log(error));
            });
          });
        }
      });
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-black'>
       <Helmet>
        <title>Signup | TraverseTask | Online Task Management Platform</title>
      </Helmet>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-black'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-xl text-gray-400'>
            Welcome to <span className='text-fuchsia-500'>TraverseTask</span>
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
                Name
              </label>
              <input
                type='text'
                {...register('name', { required: true })}
                name='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-fuchsia-500 bg-gray-200 text-gray-900'
              />
              {errors.name && (
                <span className='text-red-600'>Name is required</span>
              )}
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
                {...register('image')}
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                {...register('email', { required: true })}
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-fuchsia-500 bg-gray-200 text-gray-900'
              />
              {errors.email && (
                <span className='text-red-600'>Email is required</span>
              )}
            </div>
            <div>
              <label htmlFor='password' className='text-sm mb-2'>
                Password
              </label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  autoComplete='new-password'
                  id='password'
                  required
                  placeholder='*******'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-fuchsia-500 bg-gray-200 text-gray-900 pr-10'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-2 text-fuchsia-500 hover:text-fuchsia-700 focus:outline-none'
                >
                  {showPassword ? <FaEyeSlash className='text-2xl' /> : <FaEye className='text-2xl'/>}
                </button>
              </div>
              {errors.password?.type === 'required' && (
                <p className='text-red-600'>Password is required</p>
              )}
              {errors.password?.type === 'minLength' && (
                <p className='text-red-600'>Password must be 6 characters</p>
              )}
              {errors.password?.type === 'maxLength' && (
                <p className='text-red-600'>
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === 'pattern' && (
                <p className='text-red-600'>
                  Password must have one Uppercase, one lowercase, one number, and one special character.
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-fuchsia-500 w-full rounded-md py-3 text-white'
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Sign Up with social media
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <Googlebtn />
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-fuchsia-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
