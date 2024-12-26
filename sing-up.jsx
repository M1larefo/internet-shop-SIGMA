import React from 'react'
import { useState, useEffect } from 'react';
import {Header} from './Header'
import { Footer } from './Footer';
import Link from 'next/link';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import { getFirestore, setDoc,doc } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAGFrnfR5XYdsWnKf6QsKU1vjE7_SioqyE",
  authDomain: "sigma-electricity-shop.firebaseapp.com",
  databaseURL: "https://sigma-electricity-shop-default-rtdb.firebaseio.com",
  projectId: "sigma-electricity-shop",
  storageBucket: "sigma-electricity-shop.appspot.com",
  messagingSenderId: "89506601147",
  appId: "1:89506601147:web:c035b60739d4861bf8b19e",
  measurementId: "G-HWQYRWL3Q6"
};

const app = initializeApp(firebaseConfig);


export default function SingUpPage(){


  let Counter;
  let isThemeCh;
  const Copy25A_ArrayOfCounters=Array(98).fill(0);  
  if (typeof window !== 'undefined') {


if(localStorage.getItem('theme')){
   Counter=parseInt(localStorage.getItem('theme'))
   if(Counter % 2 === 0){
    isThemeCh=true;
   }else{
    isThemeCh=false;
   }
}else{
   Counter=1;
   isThemeCh=false;
}
console.log(Counter)
  }


 const [email, setemail]=useState('')
 const [password, setpassword]=useState('')
 const [password2, setpassword2]=useState('')
 const [passwordMatch, setpasswordMatch]=useState('')
 const auth = getAuth();
const db=getFirestore()
  const SingUping = () => {
    console.log(email, password,password2)
 if(password === password2){
  setpasswordMatch('right')

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up  
    Counter=parseInt(Counter)+2;
    const user = userCredential.user;
    const userData={email:email, password: password}
   


    localStorage.setItem('theme', Counter + 2);
    const docRef=doc(db,"users", user.uid);
    setDoc(docRef, userData)
    .then(()=>{
     window.location.href='/'
    })
    .catch((error) => {

     console.error("error writing document", error)
     
    })
    window.location.href='/login'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorCode === "auth/email-already-in-use"){
      alert("Email Address Already Exists!")
    }
  });
  
 }else{

if(password !== password2){
  setpasswordMatch('wrong')
alert("passwords don't match!")
}else{
  alert("Incorrect Email")
}

 }

  }
 
               
  const [isThemeChanged,setisThemeChanged]= useState(isThemeCh ? true : false)

  const [themeChanger,setthemeChanger] = useState(isThemeChanged ? 'left-[54.2%]' : `left-[52.2%]`)
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

  const isWide=(width > 1050) ? true : false
  
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  
    useEffect(() => {
      // component is mounted and window is available
      
      
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      // unsubscribe from the event on component unmount
      
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

   

    const  themeChange = () => {
      localStorage.setItem('theme', Counter + 1);

   setisThemeChanged(!isThemeChanged)
    if(  (themeChanger===`left-[52.2%]`)){
     
        setthemeChanger(`left-[54.2%]`);
          }else if( (themeChanger===`left-[54.2%]`)){
            setthemeChanger(`left-[52.2%]`);
           
          }
          else if( (themeChanger===`left-[61.2%]`) && width > 630){
            setthemeChanger(`left-[64.6%]`);   
            
          }
          else if( (themeChanger===`left-[64.6%]`)){
            setthemeChanger(`left-[61.2%]`);     
            
          }        
          else if( (themeChanger===`left-[61.2%]`) && width < 630){
            setthemeChanger(`left-[67%]`);
            
          }
          else if( (themeChanger===`left-[67%]`)){
            setthemeChanger(`left-[61.2%]`);
          
          }

          Counter=parseInt(Counter)+1;
        }
            
       
              if(isWide && ( themeChanger===`left-[64.6%]`)){
                  setthemeChanger(`left-[54.2%]`);
                 
                }else if(isWide && ( themeChanger===`left-[61.2%]`)){
                  setthemeChanger(`left-[52.2%]`);
                }else if(!isWide && ( themeChanger===`left-[54.2%]`)){
                  setthemeChanger(`left-[64.6%]`);
                }else if(!isWide && ( themeChanger===`left-[52.2%]`)){
                  setthemeChanger(`left-[61.2%]`);
                }
                else if(width < 630 && ( themeChanger===`left-[64.6%]`)){
                  setthemeChanger(`left-[67%]`);
                }
                else if(width > 630 && ( themeChanger===`left-[67%]`)){
                  setthemeChanger(`left-[64.6%]`);
                }
                
                
    return(
      <>
      <title>SIGMA electricity shop</title>
       <div className="w-12/12 h-full ">
<Header/>
<button className={`${isThemeChanged ? 'bg-gray-700' : 'bg-zinc-200'} z-50 w-[4%] h-[30px] fixed top-[13px] outline-none rounded-xl ${isWide ? 'min-w-14' : 'min-w-[58px]'} ${isWide ? 'left-[52%]' : 'left-[61%]'}`} suppressHydrationWarning={true} onClick={themeChange}></button>
<button className={` ${isThemeChanged ? 'bg-zinc-200' : 'bg-black'} z-50 w-[1.4%] h-[25px] fixed top-[15px]  rounded-[50px] ${themeChanger} min-w-6`} suppressHydrationWarning={true}  onClick={themeChange}></button>
<div className={`w-12/12 h-[1000px] ${isThemeChanged ? 'bg-gray-900' : 'bg-gradient-to-tr from-blue-500 to-purple-900'} flex flex-row justify-center `}>

<div className={`${isThemeChanged ? 'bg-slate-700' : 'bg-slate-200'} h-[710px] flex flex-row z-0 w-[360px] min-w-[355px] relative top-14 rounded-lg`}>
<div className={`w-[5%] h-[20px] z-40 relative top-[180px] left-[7%] `}></div> 
<div className={`${isThemeChanged ? 'text-slate-200' : 'text-slate-700'} text-6xl font-bold h-2 w-48 relative left-[20%] top-12`}>Sing</div>
<div className={`${isThemeChanged ? 'text-slate-200' : 'text-slate-700'} text-6xl font-bold h-2 w-48 relative left-[24%] top-12`}> Up</div>

<div className='block'>
  
<input type="email" className={`bg-transparent z-0 text-2xl pl-[10px] w-2/4 ${isThemeChanged ? 'text-slate-100' : 'text-slate-700'} mx-1 min-w-[320px] relative top-48 h-14 right-[56%] border-[5px] border-t-0 border-r-0 border-l-0 border-b-lime-600 outline-none rounded-lg`}  name="email"  value={email} onChange={e => { setemail(e.currentTarget.value); }} ></input>
<label className='text-3xl text-lime-600 z-0 relative top-[100px] h-2 right-[56%]'>Email</label>
<input type="password" className={`bg-transparent z-0 text-2xl pl-[10px] w-2/4 ${isThemeChanged ? 'text-slate-100' : 'text-slate-700'} mx-1 min-w-[320px] relative top-[215px] h-14 right-[56%] border-[5px] border-t-0 border-r-0 border-l-0 border-b-lime-600 outline-none rounded-lg`}  name="password"  value={password} onChange={e => { setpassword(e.currentTarget.value); }}></input>
<label className='text-3xl text-lime-600 z-0 relative top-[132px] h-2 right-[56%]'>Password</label>
<input type="password" className={`bg-transparent z-0 pl-[10px] text-2xl w-[27%] ${isThemeChanged ? 'text-slate-100' : 'text-slate-700'} mx-1 min-w-[320px] relative top-60 h-14 right-[56%] border-[5px] border-t-0 border-r-0 border-l-0 border-b-lime-600 outline-none rounded-lg `} name='password2' value={password2} onChange={e => { setpassword2(e.currentTarget.value); }}></input>
<label className='text-3xl text-lime-600 z-0 relative top-[155px] h-2 right-[56%] '>Confirm password</label>
<button className={` ${isThemeChanged ? 'text-slate-200' : 'text-slate-700'} w-[320px] bg-amber-500 h-[50px] relative text-2xl right-[56%] top-[260px] rounded-2xl text-black`} onClick={() =>  SingUping()}>Sign Up</button>
<p className={`text-2xl ${isThemeChanged ? 'text-slate-200' : 'text-slate-700'} relative right-[49%] top-[335px] `}> Have an account?</p>
<Link href="/login"><div className='relative left-[10%] top-[302px] text-2xl text-blue-600 hover:border-[2px] border-b-blue-600 hover:border-l-0 hover:border-t-0 hover:border-r-0    hover:rounded-md w-[62px]'>Login </div> </Link>
</div>
</div>
</div>
       </div>
       <Footer/>
       </>
    )
}