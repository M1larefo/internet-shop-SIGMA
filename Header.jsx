import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';

 export function useSiteState(){
 
  
  const[ BlockDisplay, setBlockDisplay] = useState(true);
  const[BurgerDisplay, setBurgerDisplay] = useState(true);
   
  const [themeChanger,setthemeChanger] = useState(`left-[52.2%]`)

 //window resize
     const [width, setWidth] = useState(0)
     const [height, setHeight] = useState(0)
     
 const isWide=(width >= 1050) ? true : false

 return{
  BlockDisplay,
  setBlockDisplay,
  BurgerDisplay,
  setBurgerDisplay,
  width,
  setWidth,
  height,
  setHeight,
  isWide, 
  themeChanger,
  setthemeChanger,
 }
}




export function Header(){
     const {
      BlockDisplay,
      setBlockDisplay,
  BurgerDisplay,
  setBurgerDisplay,
  width,
  setWidth,
  height,
  setHeight,
  isWide,
  themeChanger,
  setthemeChanger,
     } = useSiteState()

     
    
     let IsBurgerClicked=false;
    const [SearchVal, setSearchVal]=useState('')
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

      const MenuBurgerClick = () => {
        if (IsBurgerClicked === false){
          IsBurgerClicked=true
        }else{
          IsBurgerClicked=false
        }
  
  
      if (isWide === true){
        setBurgerDisplay(false);
      }
      else if((isWide === false) && (IsBurgerClicked=== true) && (BurgerDisplay === false)) {
        setBurgerDisplay(true);
      }else if((isWide === false) && (IsBurgerClicked=== false)){
      setBurgerDisplay(true);
      }else if((isWide === false) && (IsBurgerClicked=== true)) {
        setBurgerDisplay(false);
      }
      else if((isWide === false) && (IsBurgerClicked=== true)) {
        setBurgerDisplay(false);
      }
  
  
      if(BurgerDisplay === true){
        setBlockDisplay(false);
      }else if(BurgerDisplay === false){
        setBlockDisplay(true);
      }
     
      }
    

      const Searching = () => {
        if(typeof window !== undefined){
          localStorage.setItem('SearchReq', SearchVal)
        
        }
        window.location.href='/search';
      }
 
      const  themeChange = () => {

        if(  (themeChanger===`left-[52.2%]`)){
            setthemeChanger(`left-[54.2%]`);
            setisThemeChanged(true);
              }else if( (themeChanger===`left-[54.2%]`)){
                setthemeChanger(`left-[52.2%]`);
                setisThemeChanged(false)
              }
              else if( (themeChanger===`left-[61.2%]`) && width > 630){
                setthemeChanger(`left-[64.6%]`);
                setisThemeChanged(true)
              }
              else if( (themeChanger===`left-[64.6%]`)){
                setthemeChanger(`left-[61.2%]`);
                setisThemeChanged(false)
              }
            
              else if( (themeChanger===`left-[61.2%]`) && width < 630){
                setthemeChanger(`left-[67%]`);
                setisThemeChanged(true)
              }
              else if( (themeChanger===`left-[67%]`)){
                setthemeChanger(`left-[61.2%]`);
                setisThemeChanged(false)
              }
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
 
  

    return (
  
      <>
      <header  className={` flex flex-row   bg-gradient-to-r from-sky-800 to-indigo-800 w-12/12 h-[58px] sticky top-0 z-40 `}>
            
      <input placeholder="Search..." className={` bg-gray-500  relative left-[19.6%] h-[34px] min-w-[120px] top-[10px] w-[27.1%] rounded-xl rounded-r-none outline-none p-3 text-white `} name="SearchVal"  value={SearchVal} onChange={e => { setSearchVal(e.currentTarget.value); }}></input>
     
     
       <button className={` cursor-pointer relative mx-0 left-[31%] text-xl  bg-emerald-500 text-zinc-50 h-[40px] w-[8%] top-[8px] font-bold italic font-sans  rounded-xl ${isWide ? "block" : 'hidden' } `}><Link href="/login"><div className=" h-10 pt-[5px] rounded-xl"> Login </div></Link></button> 
       
        <div className="bg-[url('./img/wired-outline-19-magnifier-zoom-search (1).png')] z-0 w-[20px]"></div>
        <button className={` cursor-pointer relative mx-0 left-[31%] text-xl  bg-zinc-50 text-emerald-500 h-[40px] w-[8%] top-[8px] font-bold italic font-sans  rounded-xl ${isWide ? "block" : 'hidden' } `}><Link href="/sing-up"><div className=" h-10 pt-[5px] rounded-xl"> Sing Up </div></Link></button> 
        
        <button className={`z-40 cursor-pointer  relative left-[34%] text-xl mx-1 bg-teal-700 text-zinc-50  h-[40px] w-[8%] top-[8px] font-bold italic font-sans rounded-xl ${isWide ? 'block' : ' hidden' } `}><Link href="/cart"><div className=" h-10 pt-[5px] rounded-xl">Cart</div></Link></button>
      
        <button className={`z-40 cursor-pointer  relative left-[36%] mx-1 bg-zinc-500 text-zinc-50 text-xl h-[40px] w-[8%] text-clip  top-[8px] font-bold italic font-sans rounded-xl ${isWide ? 'block' : ' hidden' } `}><Link href="/profile"><div className=" h-10 pt-[5px] rounded-xl">Profile</div></Link></button>
        <div className={`cursor-pointer relative left-[47%]  w-12 h-[40px] top-2  `} onClick={MenuBurgerClick}>
  
        <div className={`cursor-pointer w-12 my-1 bg-gray-500 h-2 rounded-xl ${BurgerDisplay && (isWide=== false) ? 'block' : 'hidden'}` } ></div>
        <div className={`cursor-pointer w-12 my-1 bg-gray-500 h-2 rounded-xl ${BurgerDisplay && (isWide=== false) ? 'block' : 'hidden'} `} ></div>
       <div  className={`cursor-pointer w-12 my-1 bg-gray-500 h-2 rounded-xl ${BurgerDisplay && (isWide=== false) ? 'block' : 'hidden'} `}></div>
  
       <div className={`cursor-pointer w-12  bg-gray-500 h-2 rotate-[315deg] relative top-5  rounded-xl ${(BurgerDisplay=== false)&& (isWide=== false)  ? 'block' : 'hidden'} ` } ></div>
       <div  className={`cursor-pointer w-12  bg-gray-500 h-2 rotate-[45deg] relative top-3 rounded-xl ${(BurgerDisplay=== false)  && (isWide=== false)   ? 'block' : 'hidden'} `}></div>
         </div>
         <div className={` z-40  bg-slate-600 w-2/5 h-60  absolute top-14 left-[61%] flex flex-col rounded-xl ${(BlockDisplay === false) && (isWide=== false)  ? 'block' : 'hidden' } `}>
         <button className={` z-40 cursor-pointer   relative left-[25%] my-2 bg-emerald-500 text-zinc-50 text-xl h-[40px] w-[50%] top-[8px] font-bold italic font-sans rounded-xl ${(BlockDisplay === false) && (isWide=== false)  ? 'block' : 'hidden' }   `} ><Link href="/login"><div className=" h-10 pt-[5px] rounded-xl"> Login </div></Link></button>  
         <button className={` z-40 cursor-pointer  relative left-[25%] my-2 bg-zinc-200 text-emerald-500 text-xl h-[40px] w-[50%] top-[8px] font-bold italic font-sans rounded-xl ${(BlockDisplay === false) && (isWide=== false)  ? 'block' : 'hidden' }  `}><Link href="/sing-up"><div className=" h-10 pt-[5px] rounded-xl"> Sing Up </div></Link></button>
         <button className={`z-40 cursor-pointer  relative left-[25%] my-2 bg-teal-800 text-zinc-50 text-xl h-[40px] w-[50%] top-[8px] font-bold italic font-sans rounded-xl ${(BlockDisplay === false) && (isWide=== false)  ? 'block' : 'hidden' } `}><Link href="/cart"><div className=" h-10 pt-[5px] rounded-xl">Cart</div></Link></button>
         <button className={`z-40 cursor-pointer  relative left-[25%] my-2 bg-zinc-500 text-zinc-50 text-xl h-[40px] w-[50%] top-[8px] font-bold italic font-sans  rounded-xl ${(BlockDisplay === false) && (isWide=== false)  ? 'block' : 'hidden' } `}><Link href="/profile"><div className=" h-10 pt-[5px] rounded-xl">Profile</div></Link></button>
         </div> 
         <div>
          
         </div>
        
         <img src='https://cdn-icons-png.flaticon.com/512/428/428556.png' className={`z-50 bg-black w-8 h-[34px] absolute left-[47.6%] ${(width > 600) && (width < 1100) ? 'left-[46.5%]' : 'left-[47.6%]'} top-[10px] rounded-2xl hover:cursor-pointer`} onClick={() => Searching()} ></img>
         <Link href="/cart"><div className=" h-10 pt-[5px] rounded-xl"> <img src='https://cdn-icons-png.freepik.com/512/8847/8847249.png' className={` z-50 bg-black w-8 h-8 absolute left-[78.7%] ${width > 1500 ? "block" : 'hidden' } top-3 rounded-2xl hover:cursor-pointer`}></img></div></Link>
         <Link href="/profile"><div className=" h-10 pt-[5px] rounded-xl"><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' className={`z-50 bg-black  ${width  > 1500 ? "block" : 'hidden' } w-8 h-8 absolute left-[89.1%] top-3 rounded-2xl hover:cursor-pointer`}></img></div></Link>
         <Link href="/cart"><div className=" h-10 pt-[5px] rounded-xl"><img src='https://cdn-icons-png.freepik.com/512/8847/8847249.png' className={` z-50 bg-black w-8 h-8 absolute left-[71.7%] ${((width < 1050) && (width > 710)) && (BurgerDisplay=== false)? "block" : 'hidden' } top-[187px] rounded-2xl hover:cursor-pointer`}></img></div></Link>
         <Link href="/profile"><div className=" h-10 pt-[5px] rounded-xl"><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' className={`z-50 bg-black  ${((width < 1050) && (width > 710)) && (BurgerDisplay=== false) ? "block" : 'hidden' } w-8 h-8 absolute left-[71.7%] top-[243px] rounded-2xl hover:cursor-pointer`}></img></div></Link>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8AhcexJzdsr9r-ux1wCC7KEl6j_HbDYCFUQ&s' className={`z-50 bg-black ${ (width >= 900) || (width < 640) ? 'w-12' : 'w-10'} h-11 absolute ${ width >= 900 ? 'left-[20px]' : 'left-[5px]'}  top-[6px] rounded-2xl `}></img>
         <p className={`z-50  absolute ${ width >= 900 ? 'left-[76px]' : 'left-[51px]'} font-bold top-0 ${ width >= 640 ? 'block' : 'hidden'}  ${ width >= 720 ? 'text-2xl' : 'text-xl'} text-zinc-200 `}>SIGMA</p>
         <p className={`z-50  absolute ${ width >= 900 ? 'left-[76px]' : 'left-[51px]'} font-bold top-[25px] ${ width >= 640 ? 'block' : 'hidden'} ${ width >= 720 ? 'text-sm' : 'text-xs'} font-serif italic text-zinc-200 `}>electricity </p>
         <p className={`z-50  absolute ${ width >= 900 ? 'left-[92px]' : 'left-[72px]'} font-bold top-[37px] ${ width >= 640 ? 'block' : 'hidden'} ${ width >= 720 ? 'text-sm' : 'text-xs'}  font-serif italic text-zinc-200 `}>shop</p>
         <button className='bg-orange-400 w-[4.3%] h-[34px] absolute top-[10px] left-[46.5%] rounded-r-xl min-w-10 ' onClick={() => Searching()}></button>
      </header>
      </>
  )
}