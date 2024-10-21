import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import {auth, db,googleSignIn} from '../Firebase/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, doc, getDocs, query, serverTimestamp, updateDoc, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = ({setLogin, login}) => {
  useEffect(() => {
    document?.title = `Friend Flow || Post Login`
  }, []);
  const [isLoad, setIsLoad] = useState(false)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = ({ email, password}) => {
    setLogin(true)
    signInWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user?.uid);
    
    console.log(user);
    
    const q = query(collection(db, 'users'), where('uid', '==', user?.uid))
    const snapShot = await getDocs(q);
    console.log(snapShot);

    if (!snapShot.empty) {
      const userDoc = snapShot.docs[0];
      const userRef = doc(db, 'users', userDoc.id);

      await updateDoc(userRef, {
          isActive: true,
          lastSeen: serverTimestamp(),
      });
    setLogin(!true)
      console.log('Document updated successfully');
      reset()
      navigate('/up')
  } else {
      console.log('No user found');
  }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setLogin(!true)
    toast.error(errorMessage, {
      autoClose: 500
    })
  });
  }
  return (
    <>
    <div className="w-full min-h-screen flex justify-center items-center">
        <div className="relative max-w-[500px] w-full p-6 rounded-md flex flex-col items-center gap-4" style={{boxShadow: '1px 1px 5px #aaa'}}>
        {isLoad&&<div className="loader2" style={{color: '#3b82f6'}}></div>}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-3 w-full">
          <h1 className='text-4xl font-bold text-blue-500'>LOGIN</h1>
            <div className="w-full">
            <input {...register("email", {
          required: "Email is required", 
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address"
          }
        })} type="email" className='text-lg w-full bg-transparent text-blue-500 focus:placeholder:text-blue-500 font-semibold border-2 focus:border-blue-500 p-2 h-[50px] outline-none' placeholder='example@gmail.com' />
            {errors.email && <span className='text-xs font-bold text-red-500'>{errors.email.message}</span>}
            </div>
            <div className="w-full">
            <input {...register("password", {
          required: "This field is required",
          minLength: { value: 8, message: "Minimum length is 8" }
        })} type="password" className='text-lg w-full bg-transparent text-blue-500 focus:placeholder:text-blue-500 font-semibold border-2 focus:border-blue-500 p-2 h-[50px] outline-none' placeholder='********' />
            {errors.password && <span className='text-xs font-bold text-red-500'>{errors.password.message}</span>}
            </div>
            <button disabled={isLoad} className={`${isLoad && 'cursor-not-allowed'} flex justify-center items-center font-semibold text-xl w-full h-[50px] bg-blue-500 rounded-md hover:bg-blue-600 text-white`}>Submit</button>
          </form>
            <p>Don't have an <strong onClick={() => setLogin(!login)} className='text-blue-500 cursor-pointer'>Account?</strong></p>
            <button disabled={isLoad} onClick={() => {
              googleSignIn(navigate)
            }} className={`${isLoad && 'cursor-not-allowed'} flex justify-center items-center font-semibold text-xl w-full h-[50px] bg-transparent rounded-md hover:bg-gray-100 text-blue-500 border-2 border-blue-500 gap-2`}><img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-64.png" width="20" />Continue with Google</button>
        </div>
    </div>
    </>

  )
}

export default Login