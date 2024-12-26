import React from 'react'
import { useState, useEffect, useRef } from 'react';
import {Header} from './Header'
import { useSiteState } from './Header';
import { Footer } from './Footer';
import { Link, animateScroll as scroll } from "react-scroll";



export default function SearchPage(){
  let Counter;
  let isThemeCh;
  let SearchReq;
  let k=0;
  const Copy25A_ArrayOfCounters=Array(98).fill(0);  
 


  if (typeof window !== 'undefined') {
    if(localStorage.getItem('Search')){
      SearchReq=''
  }else{
      SearchReq=localStorage.getItem('SearchReq')
  }
  
    for(let i=0; i < 98; i++){
      if(localStorage.getItem(`${i}`)){
   Copy25A_ArrayOfCounters[i]=parseInt(localStorage.getItem(`${i}`))
      }
  }

     
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
const [totalCounterSearch, settotalCounterSearch] = useState(0)
const [totalCounter, settotalCounter] = useState(0)
const [productsCounters, setproductsCounters] = useState(JSON.parse(JSON.stringify(Copy25A_ArrayOfCounters)))
 const {
    BurgerDisplay,
    setBurgerDisplay
  } = useSiteState()
  
  const [isActive, setIsActive] = useState(isThemeCh);
const className = isActive ? 'bg-gray-700' : 'bg-zinc-200';

  const [isThemeChanged,setisThemeChanged]= useState(className)
 const Products=Array(98).fill(1);
 const ProductsNames=['Smartphone Samsung Galaxy A15 8GB/256GB',
  'Smartphone Xiaomi Redmi 13C 8GB/256GB ',
  'Smartphone Honor 200 Lite',
   'Smartphone APPLE iPhone 14 128GB', 
   'Smartphone HONOR X5 plus 2GB/32GB', 
   'Smartphone Vivo V25 8GB/256GB',
   'Smartphone POCO X6 5G 8GB/256GB' ,
   'Smartphone Huawei nova 12  8GB/256GB',
   'Smartphone Samsung Galaxy S24 Ultra 512GB',
   'Smartphone APPLE iPhone 11 Pro Max 64GB',
   'TV Samsung QE55Q70CAUXRU',
   'TV Vityaz 5028ALULF1204',
   'TV Horizont 50LE7513DFG',
   'TV KIVI MR3286FD706BHT' ,
   'TV Sony Bravia A80L XR-55A80L', 
   'TV LG B60L OLED77C4RLAL',
   'TV Harper 65QR850TS/RU',
   'TV IFFALCON iFFR55Q73TG',
   'Laptop ASUS Vivobook Go 15 E1504FA-BQ831W',
   'Laptop Apple MacBook Air 15 M2 2023 8/256',
   'Laptop Lenovo LOQ 15APH8 82XTE1ES',
   'Laptop Acer Aspire 3 A315-58G-5683',
  'Laptop Huawei MateBook D 16 MCLG-X',
   'Laptop MSI Prestige 13 AI Evo MS-13Q2',
   'Laptop Tecno Megabook S1 i5/16/512/Grey/W',
   'Wireless Dreame Vacuum Cleaner H12S',
   'Vacuum Cleaner KARCHER WD 3 V-17/20',
   'Xiaomi Robot Vacuum S10 BHR5988EU',
   'Robot for cleaning windows Dadget W120',
  'Wiper KARCHER WV 2 Premium (1.633-425.0)',
   'Smart-watch Xiaomi Redmi Watch 3 Black',
   'Smart-watch Huawei Watch FIT 3  Green',
   'Smart-watch APPLE Watch S9 41mm',
   'Smart-watch Samsung Galaxy Watch 5 44 mm',
   'Smart-watch Honor Watch 4 (TMA-B19)',
   'Smart-watch Canyon Maverick SW-83',
   'Smart-watch Haylou RS4 Plus LS11',
   'Smart-watch Amazfit Pop 3R (A2319)',
   'Smart-watch APPLE Watch Series 8 41mm',
   'Fridge LG GC B4598SMUM',
   'Fridge Haier C4F740CDBGU1',
   'Fridge Samsung RB33A3240WW/WT',
  'Fridge ATLANT MXM-2835-90',
   'Fridge Hitachi R-W660PUC7 GBE',
   'Electric kettle SCARLETT SC-EK21S25',
   'Electric kettle Xiaomi 2 MJDSH04YM',
   'Electric kettle MAUNFELD MGK-616D',
   'Electric kettle Braun WK1500BK',
   'Washing machine ATLANT СМА-60Y1010',
  'Washing machine LG F2J3HS4L',
   'Washing machine Samsung WW60AG4S0',
   'Washing machine Bosch Serie 4 WAN2410KPL',
   'Washing machine Haier HW60-BP12919B',
   'Headphones Apple Airpods 2  (MV7N2/A)',
   'Headphones JBL Tune 720BT Black',
   'Headphones Sony WH 1000XM4',
   'Headphones HUAWEI FreeBuds 6i T0019',
   'Headphones MARSHALL MAJOR V',
   'Headphones Panasonic RB-HX220BEES',
   'Headphones Samsung Galaxy Buds FE SM-R400',
   'Headphones Niceboy HIVE PINS',
   'Headphones Xiaomi Redmi Buds 4 Black',
   'Headphones SOUNDCORE Q45 A3040',
   'Microwave BEKO MGC20130BFB',
   'Microwave Hyundai HYM-M2038',
   'Microwave Samsung MG23F302TQS/BW',
   'Microwave LG MW23R35GIH',
   'Microwave Bosch FEL023MS2',
   'Hairdryer POLARIS PHD 2289AC',
   'Hairdryer Philips DryCare Pro BHD272/00',
   'Hairdryer Vitek VT 1324LP5',
   'Hairdryer ROWENTA CV7461F',
   'Hairdryer Panasonic EH-NE83-K865',
   'Blender Polaris PHB 0848L',
   'Blender BRAUN MQ55307MBK',
   'Blender Galaxy Line GL2133',
   'Blender BQ HB1234SSH368',
   'Blender Gorenje HBX603RL',
   'Iron Polaris PIR 2481KL23',
   'Iron Braun TexStyle 7 SI 7042GR',
   'Smart speaker Yandex Station Midi Black',
   '3D Printer Creality CRK10L',
   'Lawn mower ECO LG-43589',
   'Electric scooter Ninebot Kickscooter F2 Plus',
   'Electric shaver Braun Series 5 50-M1000s Mint',
   'Air conditioner LG Eco Smart 2021 PC09SQR',
   'Navigator NAVITEL E777 Truck',
   'Ventilator HOLT HT-FN-002L',
   'Сonvector Electrolux ECH/B-2000 E',
   'Game console Sony PlayStation 5 (PS5) Slim',
  'Gamepad Sony PS5 DualSense CFI-ZCT1J',
   'Game console  Xbox Series X 1TB 1882',
   'Gamepad Microsoft Xbox Series X',
   'Night Light Yeelight Motion Sensor YLYD01YL',
   'Coffee machine KRUPS ESSENTIAL EA810870',
   'Web camera Razer Kiyo X RZ19-04170100-R3M1',
   'Electric stove GEFEST EP N D 6140-02',
   'Microphone MIRU MIC002']
  const [themeChanger,setthemeChanger] = useState(isThemeChanged ? 'left-[54.2%]' : `left-[52.2%]`)
  const [ProductsQuantity, setProductsQuantity]=useState(Array(98).fill(0))
    const [width, setWidth] = useState(0)
    const [scrollPosition, setScrollPosition] = useState(0);
  const isWide=(width > 1050) ? true : false
  const Divider=((width < 700 && width > 500) || (width < 1400 && width > 1100)) ? 610 : 430
  const CopySearchReq=SearchReq;
  const [IsInformWindowClicked, setIsInformWindowClicked]=useState(Array(98).fill(0));
  const [InfoWindowCounter , setInfoWindowCounter]=useState(0);

  const SettingProducts = () => {

    
    for(let i=0; i < 98; i++){
      for(let j=0; j < 98; j++){
      if(CopySearchReq && CopySearchReq[j] !== undefined && SearchReq[j] !== null && ProductsNames[i][j] != null && SearchReq[j] !== ProductsNames[i][j]){
        Products[i]=0;
    
      }
      }
      
     }
     if(SearchReq==='Samsung' || SearchReq==='samsung'){
      Products[0]=1; Products[8]=1; Products[10]=1; Products[33]=1; Products[41]=1; Products[59]=1; Products[65]=1;
    }
    if(SearchReq==='Xiaomi' || SearchReq==='xiaomi'){
      Products[1]=1; Products[27]=1; Products[30]=1; Products[61]=1; Products[45]=1; 
    }
    if(SearchReq==='Apple' || SearchReq==='apple' ){
      Products[9]=1; Products[3]=1; Products[19]=1; Products[32]=1; Products[38]=1; Products[53]=1; 
    }
    if(SearchReq==='LG' || SearchReq==='lg' ){
      Products[15]=1; Products[39]=1; Products[49]=1; Products[66]=1; Products[82]=1; Products[85]=1; 
    }
    if(SearchReq==='Honor' || SearchReq==='honor' ){
      Products[2]=1; Products[4]=1; Products[34]=1;
    }
    if(SearchReq==='Huawei' || SearchReq==='huawei' ){
      Products[7]=1; Products[22]=1; Products[31]=1; Products[56]=1;
    }
    if(SearchReq==='Sony' || SearchReq==='sony' ){
      Products[14]=1; Products[55]=1; Products[89]=1; Products[90]=1;
    }
    if(SearchReq==='Xbox' || SearchReq==='xbox' ){
      Products[91]=1; Products[92]=1; 
    }
    let CopyCounter=totalCounterSearch;
    for(let i=0; i < 98; i++){
      if(Products[i] === 1){
        CopyCounter=CopyCounter+1;
      }
    }
    settotalCounterSearch(CopyCounter);
  }


  useEffect(() => {
    SettingProducts()
    setSearchProductsArray(Products);
  }, [])



 const [SearchProductsArray, setSearchProductsArray]=useState(Products)

  

  
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

        const OpenInfoWindow = (key) => {
          const InformArray=IsInformWindowClicked.slice()
          const CounterCopy=InfoWindowCounter;
          if(InfoWindowCounter === 0){
            InformArray[key]=1;
            setInfoWindowCounter(CounterCopy+1);
          }
       
          setIsInformWindowClicked(InformArray)
        }
        const CloseInfoWindow = (key) => {
          const InformArray=IsInformWindowClicked.slice()
          const CounterCopy=InfoWindowCounter;
          if(InfoWindowCounter === 1){
            InformArray[key]=0;
            setInfoWindowCounter(CounterCopy-1);
          }
          setIsInformWindowClicked(InformArray)
        }

        const changeProductsCounter = (key,number) => {
          if (typeof window !== 'undefined') {
            localStorage.setItem(`${key}`, productsCounters[key] + number )
          }
          const CopyArrayOfCounters=productsCounters.slice()
          const CopytotalCounter=totalCounter;
           if(productsCounters[key] > 1){
            CopyArrayOfCounters[key]=productsCounters[key] + number;
            settotalCounter(CopytotalCounter + number)
           }else if((productsCounters[key] === 1 || productsCounters[key] === 0) && (number > 0)){
            CopyArrayOfCounters[key]=productsCounters[key] + number;
            settotalCounter(CopytotalCounter + number)
           }

           setproductsCounters(CopyArrayOfCounters);
           
        }

        const deleteCounter=(key)=>{
          localStorage.setItem(`${key}`, 0)
          const CopyArrayOfCounters=productsCounters.slice()
          const CopytotalCounter=totalCounter;
          CopyArrayOfCounters[key]=productsCounters[key] - productsCounters[key];
          settotalCounter(CopytotalCounter - productsCounters[key])

          setproductsCounters(CopyArrayOfCounters);
          
        }
       

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    
  }
  useEffect(() => {
    // component is mounted and window is available
 
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

 
const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);



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
              function InformWindow({key1 , price1, imgRef, productName, charas1, charas2, charas3, charas4, charas5,charas6,charas7, charas8, charas9, charas10 , datas1, datas2,datas3,datas4,datas5,datas6,datas7,datas8,datas9,datas10}){
          
                const key=parseInt(key1)
                  const price = parseInt(price1)
               
                 
                return(
                <>
                <div className={`${IsInformWindowClicked[key] > 0 ? 'block' : 'hidden'} relative bottom-[80px] min-w-[750px] `}>
          <div className={`w-[26px] h-[26px] bg-lime-600 rounded-xl z-50 fixed top-[175px] ${totalCounter > 0 ? 'block' : 'hidden' } ${BurgerDisplay  ? '' : 'block' } left-[88.8%] text-center text-zinc-200 ${isWide ? 'hidden' : 'block' }`}>{totalCounter}</div>
          <div className={` w-[45%] h-[1020px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} relative left-[25%] top-[100px] ${InfoWindowCounter > 0 ? 'drop-shadow-[1010px_1455px_555px_rgba(0,0,0,0.25)]' : ''} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  `}>
          <img src={imgRef} className={`bg-transparent h-[255px] w-[280px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`}></img>
          <div className={`relative bottom-[190px] left-[260px] text-2xl mx-10 font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`}>{productName}</div>
          <div  className={`${width > 540 ? 'block' : 'hidden'} z-10 cursor-pointer ${width > 800 ? 'w-14' : 'w-10'}  bg-gray-400 ${width > 800 ? 'h-[8px]' : 'h-[6px]'} rotate-[315deg] relative ${width > 800 ? 'bottom-[259px]' : 'bottom-[249px]'} ${width > 900 ? 'left-[93%]' : 'left-[88%]'}  rounded-xl  ` } onClick={ () =>  CloseInfoWindow(key)}></div>
          <div   className={`${width > 540 ? 'block' : 'hidden'} z-10 cursor-pointer ${width > 800 ? 'w-14' : 'w-10'}  bg-gray-400 ${width > 800 ? 'h-[8px]' : 'h-[6px]'}  rotate-[45deg] relative ${width > 800 ? 'bottom-[266px]' : 'bottom-[252px]'} ${width > 900 ? 'left-[93%]' : 'left-[88%]'} rounded-xl  `} onClick={ () =>  CloseInfoWindow(key)}></div>
          <p  className={` z-10 cursor-pointer w-10 text-4xl h-2 font-semibold  ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} relative bottom-[185px] left-[320px]  rounded-xl  ` }>Total:</p>      
                               <div className={`relative bottom-[193px] left-[380px] text-4xl   mx-10 font-bold ${productsCounters[key] > 1 ? 'hidden ' : 'block'} font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} `}>{price}$</div>
                               <div  className={`relative  text-4xl bottom-[193px] left-[380px] ${productsCounters[key] > 1 ? 'block ' : 'hidden'} mx-10 font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} `}>{price*productsCounters[key]}$</div> 
                       <button className={` z-10 relative bottom-[160px] left-[340px] bg-red-500 ${productsCounters[key] > 0 ? 'hidden' : 'block' } text-xl font-serif font-extrabold w-[360px] h-[50px] rounded-xl  text-slate-100 ` } onClick={() => changeProductsCounter(key,1)} >Add to cart</button>
                       <p  className={` z-10 cursor-pointer w-40 text-xl h-2 ${productsCounters[key] > 0 ? 'block ' : 'hidden'} relative bottom-[200px] left-[650px] ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}   rounded-xl  ` }>*Already in cart</p>
                       <div  className={` z-10 cursor-pointer w-11  bg-red-500 h-2 ${productsCounters[key] > 0 ? 'block ' : 'hidden'} rotate-[315deg] relative  bottom-[153px] left-[350px]  rounded-xl  ` }  onClick={() => deleteCounter(key)}></div>
                          <div   className={`z-10 cursor-pointer w-11  bg-red-500 h-2 ${productsCounters[key] > 0 ? 'block ' : 'hidden'} rotate-[45deg] relative  bottom-[161px] left-[350px] rounded-xl  `} onClick={() => deleteCounter(key)} ></div>
                       <button  className={` relative  bottom-[190px] left-[340px]  ${productsCounters[key] > 0 ? 'block ' : 'hidden'} text-xl font-serif font-extrabold w-[220px] right-[15px] ${isThemeChanged ? 'bg-gray-900' : 'bg-gray-100'} h-[50px] border-[3px] border-red-500 rounded-xl text-red-500 `} onClick={() => deleteCounter(key)}>Decline</button>
                       <div  className={` relative  bottom-[240px] left-[580px]  ${isThemeChanged ? 'bg-gray-900' : 'bg-gray-200'}   font-sans ${productsCounters[key] > 0 ? 'block ' : 'hidden'} font-bold w-[125px] left-[190px] h-[50px] border-[2px] border-gray-600 rounded-xl ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}  text-4xl text-center pl-px ` }>{productsCounters[key]}</div>
                       <button  className={` relative bottom-[289px] left-[580px] ${isThemeChanged ? 'bg-gray-900' : 'bg-gray-200'}  ${productsCounters[key] > 0 ? 'block ' : 'hidden'} text-4xl font-serif font-extrabold w-[40px] border-[2px] border-gray-600 h-[48px] ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} rounded-xl ${productsCounters[0] > 1 ? 'text-gray-900 ' : 'text-gray-400'} ` } onClick={() => changeProductsCounter(key,-1)}>-</button>
                       <button className={` relative  bottom-[337px] left-[667px] ${isThemeChanged ? 'bg-gray-900' : 'bg-gray-200'}  ${productsCounters[key] > 0 ? 'block ' : 'hidden'} text-4xl font-serif font-extrabold w-[40px] border-[2px] border-gray-600 h-[48px] ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} rounded-xl text-gray-900 ` } onClick={() => changeProductsCounter(key,1)}>+</button>
                       <div  className={` relative   left-[50px] ${isThemeChanged ? 'bg-gray-900' : 'bg-gray-200'}   font-sans ${productsCounters[key] > 0 ? 'bottom-[280px] ' : 'bottom-[110px]'} font-bold w-[85%]  h-[50px] border-[2px] border-gray-600 rounded-xl ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}  text-4xl text-center pl-px  ` }>  Сharacteristics</div>
                      
                       <div className={`flex flex-col`}>
                       <div  className={` relative  left-[50px] border border-b-gray-400 border-l-transparent border-r-transparent border-t-transparent    font-sans ${productsCounters[key] > 0 ? 'bottom-[280px] ' : 'bottom-[110px]'} font-bold  truncate h-[65px] w-[500px] rounded-xl ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}  text-4xl text-center pr-[85%] pt-[10px] ` }>{`${charas1}:`} <div className='relative left-[510px] bottom-[40px]'> {`${datas1}`}</div></div>
                     <div  className={` relative   left-[50px] border border-b-gray-400 border-l-transparent border-r-transparent border-t-transparent   font-sans ${productsCounters[key] > 0 ? 'bottom-[280px] ' : 'bottom-[110px]'} font-bold  truncate h-[65px] w-[500px] rounded-xl ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}  text-4xl text-center pr-[85%] pt-[10px] ` }> {`${charas2}:`} <div className='relative left-[510px] bottom-[40px]'> {`${datas1}`}</div></div>
                     <div  className={` relative   left-[50px] border border-b-gray-400 border-l-transparent border-r-transparent border-t-transparent   font-sans ${productsCounters[key] > 0 ? 'bottom-[280px] ' : 'bottom-[110px]'} font-bold  truncate h-[65px] w-[500px] rounded-xl ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}  text-4xl text-center pr-[85%] pt-[10px] ` }> {`${charas3}:`} <div className='relative left-[510px] bottom-[40px]'> {`${datas1}`}</div></div>
                     <div  className={` relative   left-[50px]  border border-b-gray-400 border-l-transparent border-r-transparent border-t-transparent  font-sans ${productsCounters[key] > 0 ? 'bottom-[280px] ' : 'bottom-[110px]'} font-bold  truncate h-[65px] w-[500px] rounded-xl ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}  text-4xl text-center pr-[85%] pt-[10px] ` }> {`${charas4}:`} <div className='relative left-[510px] bottom-[40px]'> {`${datas1}`}</div></div>
                     <div  className={` relative   left-[50px]  border border-b-gray-400 border-l-transparent border-r-transparent border-t-transparent  font-sans ${productsCounters[key] > 0 ? 'bottom-[280px] ' : 'bottom-[110px]'} font-bold  truncate  h-[65px] w-[500px] rounded-xl ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}  text-4xl text-center pr-[85%] pt-[10px] ` }> {`${charas5}:`} <div className='relative left-[510px] bottom-[40px]'> {`${datas1}`}</div></div>
                     <div  className={` relative   left-[50px] border border-b-gray-400 border-l-transparent border-r-transparent border-t-transparent   font-sans ${productsCounters[key] > 0 ? 'bottom-[280px] ' : 'bottom-[110px]'} font-bold  truncate  h-[65px] w-[500px] rounded-xl ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}  text-4xl text-center pr-[85%] pt-[10px] ` }> {`${charas6}:`} <div className='relative left-[510px] bottom-[40px]'> {`${datas1}`}</div></div>
                     <div  className={` relative   left-[50px]  border border-b-gray-400 border-l-transparent border-r-transparent border-t-transparent  font-sans ${productsCounters[key] > 0 ? 'bottom-[280px] ' : 'bottom-[110px]'} font-bold  truncate  h-[65px] w-[500px] rounded-xl ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}  text-4xl text-center pr-[85%] pt-[10px] ` }> {`${charas7}:`}<div className='relative left-[510px] bottom-[40px]'> {`${datas1}`}</div></div>
                     <div  className={` relative   left-[50px] border border-b-gray-400 border-l-transparent border-r-transparent border-t-transparent   font-sans ${productsCounters[key] > 0 ? 'bottom-[280px] ' : 'bottom-[110px]'} font-bold  truncate  h-[65px] w-[500px] rounded-xl ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}  text-4xl text-center pr-[85%] pt-[10px] ` }> {`${charas8}:`}<div className='relative left-[510px] bottom-[40px]'> {`${datas1}`}</div></div>
                     <div  className={` relative   left-[50px] border border-b-gray-400 border-l-transparent border-r-transparent border-t-transparent   font-sans ${productsCounters[key] > 0 ? 'bottom-[280px] ' : 'bottom-[110px]'} font-bold   truncate h-[65px] w-[500px] rounded-xl ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}  text-4xl text-center pr-[85%] pt-[10px] ` }> {`${charas9}:`}<div className='relative left-[510px] bottom-[40px]'> {`${datas1}`}</div></div>
                     <div  className={` relative   left-[50px] border border-b-gray-400 border-l-transparent border-r-transparent border-t-transparent   font-sans ${productsCounters[key] > 0 ? 'bottom-[280px] ' : 'bottom-[110px]'} font-bold  truncate  h-[65px] w-[500px] rounded-xl ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}  text-4xl text-center pr-[85%] pt-[10px] ` }> {`${charas10}:`}<div className='relative left-[510px] bottom-[40px]'> {`${datas1}`}</div></div>
  
                       </div>
          </div>
          </div>
          </>
                )
               }

              function CartOperation ({key1 , price1}){
                const key=parseInt(key1)
                const price = parseInt(price1)
                return(
                  <>
                  <div className={`${SearchProductsArray[key] > 0 ? 'block' : 'hidden'} relative bottom-[430px]`}>
                      <p  className={` z-10 cursor-pointer w-10 text-3xl h-2 font-semibold ${productsCounters[key] > 1 ? 'block ' : 'hidden'} ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} relative left-[22px] top-[57px]  rounded-xl  ` }>Total:</p>      
                      <div className={`relative top-[50px] text-3xl   mx-10 font-bold ${productsCounters[key] > 1 ? 'hidden ' : 'block'} font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} `}>{price}$</div>
                      <div  className={`relative top-[50px] text-3xl left-[60px] ${productsCounters[key] > 1 ? 'block ' : 'hidden'} mx-10 font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} `}>{price*productsCounters[key]}$</div> 
              <button className={` z-10 relative top-[75px] left-7 bg-red-500 ${productsCounters[key] > 0 ? 'hidden' : 'block' } text-xl font-serif font-extrabold w-[260px] h-[50px] rounded-xl  text-slate-100 ` } onClick={() => changeProductsCounter(key,1)} >Add to cart</button>
              <p  className={` z-10 cursor-pointer w-40 text-xl h-2 ${productsCounters[key] > 0 ? 'block ' : 'hidden'} relative left-[180px] ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} top-[53px]  rounded-xl  ` }>*Already in cart</p>
              <div  className={` z-10 cursor-pointer w-10  bg-red-500 h-2 ${productsCounters[key] > 0 ? 'block ' : 'hidden'} rotate-[315deg] relative left-[30px] top-[94px]  rounded-xl  ` }  onClick={() => deleteCounter(key)}></div>
                 <div   className={`z-10 cursor-pointer w-10  bg-red-500 h-2 ${productsCounters[key] > 0 ? 'block ' : 'hidden'} rotate-[45deg] relative left-[30px] top-[86px] rounded-xl  `} onClick={() => deleteCounter(key)} ></div>
              <button  className={` relative top-[58px] left-7  ${productsCounters[key] > 0 ? 'block ' : 'hidden'} text-xl font-serif font-extrabold w-[155px] right-[15px] ${isThemeChanged ? 'bg-gray-900' : 'bg-gray-100'} h-[50px] border-[3px] border-red-500 rounded-xl text-red-500 pl-[20px]`} onClick={() => deleteCounter(key)}>Decline</button>
              <div  className={` relative top-[8px]  ${isThemeChanged ? 'bg-gray-900' : 'bg-gray-200'}   font-sans ${productsCounters[key] > 0 ? 'block ' : 'hidden'} font-bold w-[125px] left-[190px] h-[50px] border-[2px] border-gray-600 rounded-xl ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}  text-4xl text-center pl-px ` }>{productsCounters[key]}</div>
              <button  className={` relative bottom-[41px] left-[190px] ${isThemeChanged ? 'bg-gray-900' : 'bg-gray-200'}  ${productsCounters[key] > 0 ? 'block ' : 'hidden'} text-4xl font-serif font-extrabold w-[40px] border-[2px] border-gray-600 h-[48px] ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} rounded-xl ${productsCounters[key] > 1 ? 'text-gray-900 ' : 'text-gray-400'} ` } onClick={() => changeProductsCounter(key,-1)}>-</button>
              <button className={` relative bottom-[89px] left-[276px] ${isThemeChanged ? 'bg-gray-900' : 'bg-gray-200'}  ${productsCounters[key] > 0 ? 'block ' : 'hidden'} text-4xl font-serif font-extrabold w-[40px] border-[2px] border-gray-600 h-[48px] ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'} rounded-xl text-gray-900 ` } onClick={() => changeProductsCounter(key,1)}>+</button>
              </div>
              </>
            )
              }
              
  return (
    <>
  < div className='h-full min-h-[1000px]'>
                <meta charSet="utf-8" />
                <title>SIGMA electricity shop</title>
                <link rel="icon" href="/favicon.ico" sizes="any" />   
  <link rel="canonical" href="https://play-lh.googleusercontent.com/ZRwzMtXLgV5DaK_ExooQTxfXgg3UeK_e9xWmOjSUq6kyedjHk2NMk1zNRRdwqgCI8Kk=w240-h480-rw" />
<Header />
<button className={`${isThemeChanged ? 'bg-gray-700' : 'bg-zinc-200'} z-50 w-[4%] h-[30px] fixed top-[13px] outline-none rounded-xl ${isWide ? 'min-w-14' : 'min-w-[58px]'} ${isWide ? 'left-[52%]' : 'left-[61%]'}`}  onClick={themeChange}></button>
<button className={` ${isThemeChanged ? 'bg-zinc-200' : 'bg-black'} z-50 w-[1.4%] h-[25px] fixed top-[15px]  rounded-[50px] ${themeChanger} min-w-6`}  onClick={themeChange}></button>
<div className={`w-[26px] h-[26px] bg-lime-600 rounded-xl z-50 fixed top-[5px] left-[85.8%] ${totalCounter > 0 ? 'block' : 'hidden' } text-center text-zinc-200 ${isWide ? 'block' : ' hidden' }`}>{totalCounter}</div>
<div className={`${isThemeChanged ? 'bg-gray-900' : 'bg-gray-300'} w-12/12 bg-no-repeat bg-cover scroll-smooth relative h-full  ${InfoWindowCounter > 0 ? 'min-h-[1150px]' : 'min-h-[1000px]'}  `}>


        <div className={`w-[26px] h-[26px] bg-lime-600 rounded-xl z-50 fixed top-[175px] ${totalCounter > 0 ? 'block' : 'hidden' } ${BurgerDisplay  ? '' : 'block' } left-[88.8%] text-center text-zinc-200 ${isWide ? 'hidden' : 'block' }`}>{totalCounter}</div>

        <div className={`${width > 1000 ? 'text-5xl' : 'text-4xl'} ${isThemeChanged ? 'text-slate-100' : 'text-gray-900'} font-bold font-sans italic relative ${width > 800 ? 'left-[8%]' : 'left-[10%]'} w-[85%] top-[10px] break-all`} suppressHydrationWarning={true}>{`Your searched request: ${CopySearchReq}`}</div>
        <InformWindow key1="0" price1="209" charas1='brend' charas2='diagonal' charas3='year of production' charas4='operation system' charas5='screen resolution' charas6='screen refresh rate' charas7='processor' charas8='CPU frequency' charas9='built-in memory capacity' charas10='RAM capacity' productName="Smartphone Samsung Galaxy A15 8GB/256GB" imgRef='https://img.5element.by/import/images/ut/goods/good_c21e7d2e-ae25-11ee-8db3-005056012b6d/sm-a155-goluboy-128gb-telefon-gsm-samsung-galaxy-a15-1_600.jpg'  />
<InformWindow key1="1" price1="149" charas1='brend' charas2='diagonal' charas3='year of production' charas4='operation system' charas5='screen resolution' charas6='screen refresh rate' charas7='processor' charas8='CPU frequency' charas9='built-in memory capacity' charas10='RAM capacity' productName="Smartphone Xiaomi Redmi 13C 8GB/256GB " imgRef='https://img.5element.by/import/images/ut/goods/good_f858c95e-dc5d-11ee-8db3-005056012b6d/-1_600.jpg'/>
<InformWindow key1="2" price1="304" charas1='brend' charas2='diagonal' charas3='year of production' charas4='operation system' charas5='screen resolution' charas6='screen refresh rate' charas7='processor' charas8='CPU frequency' charas9='built-in memory capacity' charas10='RAM capacity' productName="Smartphone Honor 200 Lite" imgRef='https://img.5element.by/import/images/ut/goods/good_2460e313-2964-11ef-8db4-005056012b6d/-1_600.jpg'/>
<InformWindow key1="3" price1="899" charas1='brend' charas2='diagonal' charas3='year of production' charas4='operation system' charas5='screen resolution' charas6='screen refresh rate' charas7='processor' charas8='CPU frequency' charas9='built-in memory capacity' charas10='RAM capacity' productName="Smartphone APPLE iPhone 14 128GB " imgRef='https://img.5element.by/import/images/ut/goods/good_b1710876-9442-11ee-8db3-005056012b6d/iphone-14-128gb-midnight-telefon-gsm-apple-mvup3ch-a-1_600.jpg'/>
<InformWindow key1="4" price1="79" charas1='brend' charas2='diagonal' charas3='year of production' charas4='operation system' charas5='screen resolution' charas6='screen refresh rate' charas7='processor' charas8='CPU frequency' charas9='built-in memory capacity' charas10='RAM capacity' productName="Smartphone HONOR X5 plus 2GB/32GB " imgRef='https://img.5element.by/import/images/ut/goods/good_2a03a205-4e30-11ee-bb94-005056012465/x5-plus-wod-lx1-4gb-64gb-cyan-lake-telefon-gsm-honor-1_600.jpg'/>
<InformWindow key1="5" price1="299" charas1='brend' charas2='diagonal' charas3='year of production' charas4='operation system' charas5='screen resolution' charas6='screen refresh rate' charas7='processor' charas8='CPU frequency' charas9='built-in memory capacity' charas10='RAM capacity' productName="Smartphone Vivo V25 8GB/256GB" imgRef='https://img.5element.by/import/images/ut/goods/good_5f4ef522-3852-11ed-bb95-0050560120e8/v25-8gb-256gb-aquamarine-blue-telefon-gsm-vivo-1_600.jpg'/>
<InformWindow key1="6" price1="329" charas1='brend' charas2='diagonal' charas3='year of production' charas4='operation system' charas5='screen resolution' charas6='screen refresh rate' charas7='processor' charas8='CPU frequency' charas9='built-in memory capacity' charas10='RAM capacity' productName="Smartphone POCO X6 5G 8GB/256GB " imgRef='https://img.5element.by/import/images/ut/goods/good_9175e137-3303-11ef-8db4-005056012b6d/-1_600.jpg'/>
<InformWindow key1="7" price1="239" charas1='brend' charas2='diagonal' charas3='year of production' charas4='operation system' charas5='screen resolution' charas6='screen refresh rate' charas7='processor' charas8='CPU frequency' charas9='built-in memory capacity' charas10='RAM capacity' productName="Smartphone Huawei nova 12  8GB/256GB  " imgRef='https://img.5element.by/import/images/ut/goods/good_7e6666a9-f286-11ee-8db3-005056012b6d/nova-12-se-256gb-bne-lx1-black-telefon-gsm-huawei-1_600.jpg'/>
<InformWindow key1="8" price1="1659" charas1='brend' charas2='diagonal' charas3='year of production' charas4='operation system' charas5='screen resolution' charas6='screen refresh rate' charas7='processor' charas8='CPU frequency' charas9='built-in memory capacity' charas10='RAM capacity' productName="Smartphone Samsung Galaxy S24 Ultra 512GB" imgRef='https://img.5element.by/import/images/ut/goods/good_f2a2981e-b474-11ee-8db3-005056012b6d/sm-s928-zheltyy-titan-512gb-telefon-gsm-samsung-galaxy-s24-ultra-1_600.jpg'/>
<InformWindow key1="9" price1="579" charas1='brend' charas2='diagonal' charas3='year of production' charas4='operation system' charas5='screen resolution' charas6='screen refresh rate' charas7='processor' charas8='CPU frequency' charas9='built-in memory capacity' charas10='RAM capacity' productName="Smartphone APPLE iPhone 11 Pro Max 64GB" imgRef='https://img.5element.by/import/images/ut/goods/good_b58146cd-828d-11ed-bb97-0050560120e8/-1_600.jpg'/>
<InformWindow key1="10" price1="1249" charas1='brend' charas2='diagonal' charas3='year of production' charas4='Matrix frequency' charas5='screen resolution' charas6='operation system' charas7='width' charas8='height' charas9='Wi-Fi' charas10='Bluetooth ' productName="TV Samsung QE55Q70CAUXRU" imgRef='https://img.5element.by/import/images/ut/goods/good_ad7bd4f2-2ae4-11ee-bb93-005056012465/qe55q70cauxru-televizor-samsung-1_600.jpg'/>
<InformWindow key1="11" price1="379" charas1='brend' charas2='diagonal' charas3='year of production' charas4='Matrix frequency' charas5='screen resolution' charas6='operation system' charas7='width' charas8='height' charas9='Wi-Fi' charas10='Bluetooth ' productName="TV Vityaz 5028ALULF1204 " imgRef='https://img.5element.by/import/images/ut/goods/good_355bf48e-f096-11ec-bb95-0050560120e8/32lh0212-televizor-vityaz-1_600.jpg'/>
<InformWindow key1="12" price1="345" charas1='brend' charas2='diagonal' charas3='year of production' charas4='Matrix frequency' charas5='screen resolution' charas6='operation system' charas7='width' charas8='height' charas9='Wi-Fi' charas10='Bluetooth ' productName="ТV Horizont 50LE7513DFG" imgRef='https://img.5element.by/import/images/ut/goods/good_265a403c-16a1-11ea-80c7-005056840c70/good_img_5ef54fd5-172c-11ea-80c7-005056840c70_600.jpg'/>
<InformWindow key1="13" price1="239" charas1='brend' charas2='diagonal' charas3='year of production' charas4='Matrix frequency' charas5='screen resolution' charas6='operation system' charas7='width' charas8='height' charas9='Wi-Fi' charas10='Bluetooth ' productName="ТV KIVI MR3286FD706BHT " imgRef='https://img.5element.by/import/images/ut/goods/good_4825c6ec-44cf-11ef-8db4-005056012b6d/m32fd70b-televizor-kivi-1_600.jpg'/>
<InformWindow key1="14" price1="2429" charas1='brend' charas2='diagonal' charas3='year of production' charas4='Matrix frequency' charas5='screen resolution' charas6='operation system' charas7='width' charas8='height' charas9='Wi-Fi' charas10='Bluetooth ' productName="ТV Sony Bravia A80L XR-55A80L " imgRef='https://img.5element.by/import/images/ut/goods/good_f8f46b33-2759-11ef-8db4-005056012b6d/-1_600.jpg'/>
<InformWindow key1="15" price1="4499" charas1='brend' charas2='diagonal' charas3='year of production' charas4='Matrix frequency' charas5='screen resolution' charas6='operation system' charas7='width' charas8='height' charas9='Wi-Fi' charas10='Bluetooth ' productName="ТV LG B60L OLED77C4RLAL" imgRef='https://img.5element.by/import/images/ut/goods/good_22a1d6e5-f74e-11ee-8db4-005056012b6d/-1_600.jpg'/>
<InformWindow key1="16" price1="859" charas1='brend' charas2='diagonal' charas3='year of production' charas4='Matrix frequency' charas5='screen resolution' charas6='operation system' charas7='width' charas8='height' charas9='Wi-Fi' charas10='Bluetooth ' productName="ТV Harper 65QR850TS/RU" imgRef='https://img.5element.by/import/images/ut/goods/good_60ad82fa-3858-11ef-8db4-005056012b6d/-1_600.jpg'/>
<InformWindow key1="17" price1="609" charas1='brend' charas2='diagonal' charas3='year of production' charas4='Matrix frequency' charas5='screen resolution' charas6='operation system' charas7='width' charas8='height' charas9='Wi-Fi' charas10='Bluetooth ' productName="ТV IFFALCON iFFR55Q73TG" imgRef='https://img.5element.by/import/images/ut/goods/good_e2ecc293-2bc3-11ee-bb91-005056012464/iff55q73-televizor-iffalcon-1_600.jpg'/>
<InformWindow key1="18" price1="644" charas1='brend' charas2='diagonal' charas3='year of production' charas4='Matrix frequency' charas5='screen resolution' charas6='Video card' charas7='processor' charas8='CPU frequency' charas9='built-in memory capacity' charas10='RAM capacity' productName="Laptop ASUS Vivobook Go 15 E1504FA-BQ831W" imgRef='https://img.5element.by/import/images/ut/goods/good_f19c2733-e135-11ee-8db3-005056012b6d/-1_600.jpg'/>
<InformWindow key1="19" price1="1739" charas1='brend' charas2='diagonal' charas3='year of production' charas4='Matrix frequency' charas5='screen resolution' charas6='Video card' charas7='processor' charas8='CPU frequency' charas9='built-in memory capacity' charas10='RAM capacity' productName="Laptop Apple MacBook Air 15 M2 2023 8/256" imgRef='https://img.5element.by/import/images/ut/goods/good_ef15f590-4d49-11ee-bb92-005056012464/-1_600.jpg'/>
<InformWindow key1="20" price1="1329" charas1='brend' charas2='diagonal' charas3='year of production' charas4='Matrix frequency' charas5='screen resolution' charas6='Video card' charas7='processor' charas8='CPU frequency' charas9='built-in memory capacity' charas10='RAM capacity' productName="Laptop Lenovo LOQ 15APH8 82XTE1ES" imgRef='https://img.5element.by/import/images/ut/goods/good_64072d2e-025e-11ef-8db4-005056012b6d/-1_200.jpg'/>
<InformWindow key1="21" price1="774" charas1='brend' charas2='diagonal' charas3='year of production' charas4='Matrix frequency' charas5='screen resolution' charas6='Video card' charas7='processor' charas8='CPU frequency' charas9='built-in memory capacity' charas10='RAM capacity' productName="Laptop Acer Aspire 3 A315-58G-5683" imgRef='https://img.5element.by/import/images/ut/goods/good_f4973714-3046-11ee-bb93-005056012465/nx-aduel-003-noutbuk-aspire-3-acer-1_600.jpg'/>
<InformWindow key1="22" price1="1029" charas1='brend' charas2='diagonal' charas3='year of production' charas4='Matrix frequency' charas5='screen resolution' charas6='Video card' charas7='processor' charas8='CPU frequency' charas9='built-in memory capacity' charas10='RAM capacity' productName="Laptop Huawei MateBook D 16 MCLG-X" imgRef='https://img.5element.by/import/images/ut/goods/good_1e138c3f-a588-11ee-8db3-005056012b6d/mclg-x-53013wxa-matebook-d16-noutbuk-huawei-1_600.jpg'/>
<InformWindow key1="23" price1="1451" charas1='brend' charas2='diagonal' charas3='year of production' charas4='Matrix frequency' charas5='screen resolution' charas6='Video card' charas7='processor' charas8='CPU frequency' charas9='built-in memory capacity' charas10='RAM capacity' productName="Laptop MSI Prestige 13 AI Evo MS-13Q2" imgRef='https://img.5element.by/import/images/ut/goods/good_1b2c8b51-2e15-11ef-8db4-005056012b6d/-1_600.jpg'/>
<InformWindow key1="24" price1="959" charas1='brend' charas2='diagonal' charas3='year of production' charas4='Matrix frequency' charas5='screen resolution' charas6='Video card' charas7='processor' charas8='CPU frequency' charas9='built-in memory capacity' charas10='RAM capacity' productName="Laptop Tecno Megabook S1 i5/16/512/Grey/W<" imgRef='https://img.5element.by/import/images/ut/goods/good_6dec0c31-8a00-11ee-8db3-005056012b6d/-1_600.jpg'/>
<InformWindow key1="25" price1="450" charas1='Vacuum cleaner type' charas2='Cleaning type' charas3='Dust container type' charas4='Power type' charas5='Dust container capacity' charas6='Filter type' charas7='Suction pipe type  ' charas8='Liquid collection function' charas9='Guarantee ' charas10='Country of origin' productName="Wireless Dreame Vacuum Cleaner H12S" imgRef='https://img.5element.by/import/images/ut/goods/good_ac31eb0a-be95-11ee-8db3-005056012b6d/hhr30b-h12s-wet-and-dry-vacuum-cleaner-besprovodnoy-pylesos-dreame-1_600.jpg'/>
<InformWindow key1="26" price1="108" charas1='Vacuum cleaner type' charas2='Cleaning type' charas3='Dust container type' charas4='Power type' charas5='Dust container capacity' charas6='Filter type' charas7='Suction pipe type  ' charas8='Liquid collection function' charas9='Guarantee ' charas10='Country of origin' productName="Vacuum Cleaner KARCHER WD 3 V-17/20" imgRef='https://img.5element.by/import/images/ut/goods/good_8a15861d-0c41-11ef-8db4-005056012b6d/-2_600.jpg'/>
<InformWindow key1="27" price1="224" charas1='Vacuum cleaner type' charas2='Cleaning type' charas3='Dust container type' charas4='Power type' charas5='Dust container capacity' charas6='Filter type' charas7='Suction pipe type  ' charas8='Liquid collection function' charas9='Guarantee ' charas10='Country of origin' productName="Xiaomi Robot Vacuum S10 BHR5988EU " imgRef='https://img.5element.by/import/images/ut/goods/good_2adf8d9b-038d-11ee-bb91-005056012464/-1_600.jpg'/>
<InformWindow key1="28" price1="122" charas1='Vacuum cleaner type' charas2='Cleaning type' charas3='Dust container type' charas4='Power type' charas5='Dust container capacity' charas6='Filter type' charas7='Suction pipe type  ' charas8='Liquid collection function' charas9='Guarantee ' charas10='Country of origin' productName="Robot for cleaning windows Dadget W120" imgRef='https://img.5element.by/import/images/ut/goods/good_f1e2d64a-db72-11ec-bb95-0050560120e8/kit-fb0318-robot-moyschik-okon-dadzhet-w120-1_600.jpg'/>
<InformWindow key1="29" price1="102" charas1='Vacuum cleaner type' charas2='Cleaning type' charas3='Dust container type' charas4='Power type' charas5='Dust container capacity' charas6='Filter type' charas7='Suction pipe type  ' charas8='Liquid collection function' charas9='Guarantee ' charas10='Country of origin' productName="Wiper KARCHER WV 2 Premium (1.633-425.0)" imgRef='https://img.5element.by/import/images/ut/goods/good_d7c9a182-ec2f-11ea-80c1-005056844aec/wv-2-premium-1-633-425-0-stekloochistitel-karcher-1_600.jpg'/>
<InformWindow key1="30" price1="45" charas1='brend' charas2='diagonal' charas3='support platform' charas4='display' charas5='display resolution' charas6='sensor screen ' charas7='Wi-Fi' charas8='Bluetooth'  charas9='Guarantee ' charas10='Country of origin'  productName="Smart watch Xiaomi Redmi Watch 3 Black" imgRef='https://img.5element.by/import/images/ut/goods/good_ff523d57-31d7-11ee-bb93-005056012465/-1_600.jpg'/>
<InformWindow key1="31" price1="94" charas1='brend' charas2='diagonal' charas3='support platform' charas4='display' charas5='display resolution' charas6='sensor screen ' charas7='Wi-Fi' charas8='Bluetooth'  charas9='Guarantee ' charas10='Country of origin' productName="Smart watch Huawei Watch FIT 3  Green" imgRef='https://img.5element.by/import/images/ut/goods/good_0d2f90fd-14fa-11ef-8db4-005056012b6d/-1_600.jpg'/>
<InformWindow key1="32" price1="516" charas1='brend' charas2='diagonal' charas3='support platform' charas4='display' charas5='display resolution' charas6='sensor screen ' charas7='Wi-Fi' charas8='Bluetooth'  charas9='Guarantee ' charas10='Country of origin' productName="Smart watch APPLE Watch S9 41mm" imgRef='https://img.5element.by/import/images/ut/goods/good_350f1d6d-2032-11ef-8db4-005056012b6d/mr8u3lw-a-smart-chasy-apple-watch-series-9-gps-41mm-starlight-aluminum-case-with-starlight-sport-band-silicone-1_600.jpg'/>
<InformWindow key1="33" price1="225" charas1='brend' charas2='diagonal' charas3='support platform' charas4='display' charas5='display resolution' charas6='sensor screen ' charas7='Wi-Fi' charas8='Bluetooth'  charas9='Guarantee ' charas10='Country of origin' productName="Smart watch Samsung Galaxy Watch 5 44 mm" imgRef='https://img.5element.by/import/images/ut/goods/good_39525f09-e044-11ed-bb92-005056012465/sm-r910nzbamea-smart-chasy-samsung-galaxy-watch-5-classic-44-mm-r910-sapphire-1_600.jpg'/>
<InformWindow key1="34" price1="161" charas1='brend' charas2='diagonal' charas3='support platform' charas4='display' charas5='display resolution' charas6='sensor screen ' charas7='Wi-Fi' charas8='Bluetooth'  charas9='Guarantee ' charas10='Country of origin' productName="Smart watch Honor Watch 4 (TMA-B19)" imgRef='https://img.5element.by/import/images/ut/goods/good_322b5e42-ed01-11ee-8db3-005056012b6d/tma-b19-gold-smart-chasy-honor-watch-4-1_600.jpg'/>
<InformWindow key1="35" price1="64" charas1='brend' charas2='diagonal' charas3='support platform' charas4='display' charas5='display resolution' charas6='sensor screen ' charas7='Wi-Fi' charas8='Bluetooth'  charas9='Guarantee ' charas10='Country of origin' productName="Smart watch Canyon Maverick SW-83" imgRef='https://img.5element.by/import/images/ut/goods/good_2154e1ae-12c3-11ef-8db4-005056012b6d/cns-sw83ss-siniy-umnye-chasy-canyon-1_600.jpg'/>
<InformWindow key1="36" price1="60" charas1='brend' charas2='diagonal' charas3='support platform' charas4='display' charas5='display resolution' charas6='sensor screen ' charas7='Wi-Fi' charas8='Bluetooth'  charas9='Guarantee ' charas10='Country of origin' productName="Smart watch Haylou RS4 Plus LS11" imgRef='https://img.5element.by/import/images/ut/goods/good_d4805c4f-f78f-11ec-bb95-0050560120e8/rs4-plus-black-magnetic-strap-ls11-umnye-chasy-haylou-1_600.jpg'/>
<InformWindow key1="37" price1="68" charas1='brend' charas2='diagonal' charas3='support platform' charas4='display' charas5='display resolution' charas6='sensor screen ' charas7='Wi-Fi' charas8='Bluetooth'  charas9='Guarantee ' charas10='Country of origin' productName="Smart watch Amazfit Pop 3R (A2319)" imgRef='https://img.5element.by/import/images/ut/goods/good_fd106abb-4cc1-11ee-bb95-005056012463/a2319-chernyy-umnye-chasy-amazfit-pop-3r-1_600.jpg'/>
<InformWindow key1="38" price1="468" charas1='brend' charas2='diagonal' charas3='support platform' charas4='display' charas5='display resolution' charas6='sensor screen ' charas7='Wi-Fi' charas8='Bluetooth'  charas9='Guarantee ' charas10='Country of origin' productName="Smart watch APPLE Watch Series 8 41mm" imgRef='https://img.5element.by/import/images/ut/goods/good_708e3489-84e8-11ed-bb97-0050560120e8/skit-aw841-nu83-komplekt-apple-watch-series-8-41mm-midnight-mnu83-a2770--plus-podpiska-ivi-3-mes-1_200.jpg'/>
<InformWindow key1="39" price1="900" charas1='brend' charas2='No Frost ' charas3='Total usable volume' charas4='Freshness zone' charas5='Noise level' charas6='Color ' charas7='Control type' charas8='Display'  charas9='Guarantee ' charas10='Country of origin' productName="Fridge LG GC B4598SMUM" imgRef='https://img.5element.by/import/images/ut/goods/good_c24069e6-719c-11ee-8db3-005056012b6d/gc-b459smum-holodilnik-morozilnik-lg-1_600.jpg'/>
<InformWindow key1="40" price1="1049" charas1='brend' charas2='No Frost ' charas3='Total usable volume' charas4='Freshness zone' charas5='Noise level' charas6='Color ' charas7='Control type' charas8='Display'  charas9='Guarantee ' charas10='Country of origin' productName="Fridge Haier C4F740CDBGU1" imgRef='https://img.5element.by/import/images/ut/goods/good_f288727c-bf0a-11ed-bb90-005056012464/c4f740cdbgu1-holodilnik-haier-1_600.jpg'/>
<InformWindow key1="41" price1="645" charas1='brend' charas2='No Frost ' charas3='Total usable volume' charas4='Freshness zone' charas5='Noise level' charas6='Color ' charas7='Control type' charas8='Display'  charas9='Guarantee ' charas10='Country of origin' productName="Fridge Samsung RB33A3240WW/WT" imgRef='https://img.5element.by/import/images/ut/goods/good_6879e454-a2a5-11eb-bb92-0050560120e8/rb33a3240ww-wt-holodilnik-samsung-1_600.jpg'/>
<InformWindow key1="42" price1="294" charas1='brend' charas2='No Frost ' charas3='Total usable volume' charas4='Freshness zone' charas5='Noise level' charas6='Color ' charas7='Control type' charas8='Display'  charas9='Guarantee ' charas10='Country of origin' productName="Fridge ATLANT MXM-2835-90" imgRef='https://img.5element.by/import/images/ut/goods/good_e3b9cbe4-047c-4e02-8d07-59d3567066d8/mxm-2835-90-holodilnik-atlant-1_600.jpg'/>
<InformWindow key1="43" price1="2670" charas1='brend' charas2='No Frost ' charas3='Total usable volume' charas4='Freshness zone' charas5='Noise level' charas6='Color ' charas7='Control type' charas8='Display'  charas9='Guarantee ' charas10='Country of origin' productName="Fridge Hitachi R-W660PUC7 GBE" imgRef='https://img.5element.by/import/images/ut/goods/good_6b792b69-1db7-11ef-8db4-005056012b6d/r-w660puc7-gbe-holodilnik-hitachi-1_600.jpg'/>
<InformWindow key1="44" price1="10" charas1='brend' charas2='power ' charas3='Water volume' charas4='Material' charas5='backlight' charas6='Color ' charas7='Heating' charas8='Display'  charas9='Guarantee ' charas10='Country of origin' productName="Electric kettle SCARLETT SC-EK21S25" imgRef='https://img.5element.by/import/images/ut/goods/good_4c7d0a09-857f-11e6-80df-005056842056/sc-ek21s25-elektrochaynik-scarlett-1_600.jpg'/>
<InformWindow key1="45" price1="35" charas1='brend' charas2='power ' charas3='Water volume' charas4='Material' charas5='backlight' charas6='Color ' charas7='Heating' charas8='Display'  charas9='Guarantee ' charas10='Country of origin' productName=" Electric kettle Xiaomi 2 MJDSH04YM" imgRef='https://img.5element.by/import/images/ut/goods/good_d0485e2b-670a-11ed-bb95-0050560120e8/bhr5927eu-elektrochaynik-mjdsh04ym-xiaomi-1_600.jpg'/>
<InformWindow key1="46" price1="29" charas1='brend' charas2='power ' charas3='Water volume' charas4='Material' charas5='backlight' charas6='Color ' charas7='Heating' charas8='Display'  charas9='Guarantee ' charas10='Country of origin' productName="Electric kettle MAUNFELD MGK-616D" imgRef='https://img.5element.by/import/images/ut/goods/good_11b02f13-ac68-11ed-bb90-005056012464/mgk-616dbk-chaynik-maunfeld-1_600.jpg'/>
<InformWindow key1="47" price1="106" charas1='brend' charas2='power ' charas3='Water volume' charas4='Material' charas5='backlight' charas6='Color ' charas7='Heating' charas8='Display'  charas9='Guarantee ' charas10='Country of origin' productName="Electric kettle Braun WK1500BK" imgRef='https://img.5element.by/import/images/ut/goods/good_f79d09d8-3f0b-11ef-8db4-005056012b6d/-1_600.jpg'/>
<InformWindow key1="48" price1="312" charas1='brend' charas2='Motor type' charas3='Drying type' charas4='Noise level' charas5='Water consumption per wash' charas6='Color ' charas7='Control type' charas8='Display'  charas9='Guarantee ' charas10='Country of origin' productName="Washing machine ATLANT СМА-60Y1010" imgRef='https://img.5element.by/import/images/ut/goods/good_fc8a84b6-7030-11e4-811b-00505684b891/sma-60u1010-00-stiralnaya-mashina-atlant-1_600.jpg'/>
<InformWindow key1="49" price1="503" charas1='brend' charas2='Motor type' charas3='Drying type' charas4='Noise level' charas5='Water consumption per wash' charas6='Color ' charas7='Control type' charas8='Display'  charas9='Guarantee ' charas10='Country of origin' productName="Washing machine LG F2J3HS4L" imgRef='https://img.5element.by/import/images/ut/goods/good_1e7eacf1-bdd3-11e9-80c7-005056840c70/f2j3hs4l-stiralnaya-mashina-lg-1_600.jpg'/>
<InformWindow key1="50" price1="449" charas1='brend' charas2='Motor type' charas3='Drying type' charas4='Noise level' charas5='Water consumption per wash' charas6='Color ' charas7='Control type' charas8='Display'  charas9='Guarantee ' charas10='Country of origin' productName="Washing machine Samsung WW60AG4S0" imgRef='https://img.5element.by/import/images/ut/goods/good_2e15ab02-806f-11ee-8db3-005056012b6d/-1_600.jpg'/>
<InformWindow key1="51" price1="646" charas1='brend' charas2='Motor type' charas3='Drying type' charas4='Noise level' charas5='Water consumption per wash' charas6='Color ' charas7='Control type' charas8='Display'  charas9='Guarantee ' charas10='Country of origin' productName="Washing machine Bosch Serie 4 WAN2410KPL" imgRef='https://img.5element.by/import/images/ut/goods/good_343e78e9-3c24-11ee-bb93-005056012465/wan2410kpl-stiralnaya-mashina-bosch-1_600.jpg'/>
<InformWindow key1="52" price1="420" charas1='brend' charas2='Motor type' charas3='Drying type' charas4='Noise level' charas5='Water consumption per wash' charas6='Color ' charas7='Control type' charas8='Display'  charas9='Guarantee ' charas10='Country of origin' productName="Washing machine Haier HW60-BP12919B" imgRef='https://img.5element.by/import/images/ut/goods/good_cad36be7-2aa6-11ed-bb95-0050560120e8/hw60-bp12919b-stiralnaya-mashina-haier-1_600.jpg'/>
<InformWindow key1="53" price1="169" charas1='brend' charas2='сonnection type' charas3='connector type' charas4='Battery life' charas5='Battery capacity' charas6='Color ' charas7='Charging case capacity' charas8='noise reduction'  charas9='Guarantee ' charas10='Country of origin' productName="Headphones Apple Airpods 2  (MV7N2/A)" imgRef='https://img.5element.by/import/images/ut/goods/good_e3433405-86b1-11ed-bb97-0050560120e8/-1_600.jpg'/>
<InformWindow key1="54" price1="79" charas1='brend' charas2='сonnection type' charas3='connector type' charas4='Battery life' charas5='Battery capacity' charas6='Color ' charas7='Charging case capacity' charas8='noise reduction'  charas9='Guarantee ' charas10='Country of origin' productName="Headphones JBL Tune 720BT Black" imgRef='https://img.5element.by/import/images/ut/goods/good_c6c37768-d0c3-11ee-8db3-005056012b6d/tune-720bt-blk-naushniki-besprovodnye-jbl-1_600.jpg'/>
<InformWindow key1="55" price1="322" charas1='brend' charas2='сonnection type' charas3='connector type' charas4='Battery life' charas5='Battery capacity' charas6='Color ' charas7='Charging case capacity' charas8='noise reduction'  charas9='Guarantee ' charas10='Country of origin' productName="Headphones Sony WH 1000XM4" imgRef='https://img.5element.by/import/images/ut/goods/good_4927a4f4-ec26-11ea-80c1-005056844aec/wh-1000xm4-chernyy-besprovodnye-naushniki-sony-1_600.jpg'/>
<InformWindow key1="56" price1="82" charas1='brend' charas2='сonnection type' charas3='connector type' charas4='Battery life' charas5='Battery capacity' charas6='Color ' charas7='Charging case capacity' charas8='noise reduction'  charas9='Guarantee ' charas10='Country of origin' productName="Headphones HUAWEI FreeBuds 6i T0019" imgRef='https://img.5element.by/import/images/ut/goods/good_b958a32d-32ba-11ef-8db4-005056012b6d/t0019-chernyy-besprovodnye-naushniki-huawei-freebuds-6i-1_600.jpg'/>
<InformWindow key1="57" price1="210" charas1='brend' charas2='сonnection type' charas3='connector type' charas4='Battery life' charas5='Battery capacity' charas6='Color ' charas7='Charging case capacity' charas8='noise reduction'  charas9='Guarantee ' charas10='Country of origin' productName="Headphones MARSHALL MAJOR V" imgRef='https://img.5element.by/import/images/ut/goods/good_20dfd866-4356-11ef-8db4-005056012b6d/-1_600.jpg'/>
<InformWindow key1="58" price1="39" charas1='brend' charas2='сonnection type' charas3='connector type' charas4='Battery life' charas5='Battery capacity' charas6='Color ' charas7='Charging case capacity' charas8='noise reduction'  charas9='Guarantee ' charas10='Country of origin' productName="Headphones Panasonic RB-HX220BEES" imgRef='https://img.5element.by/import/images/ut/goods/good_7d8b57eb-0e23-11eb-80c1-005056844aec/rb-hx220beek-naushniki-panasonic-1_600.jpg'/>
<InformWindow key1="59" price1="102" charas1='brend' charas2='сonnection type' charas3='connector type' charas4='Battery life' charas5='Battery capacity' charas6='Color ' charas7='Charging case capacity' charas8='noise reduction'  charas9='Guarantee ' charas10='Country of origin' productName="Headphones Samsung Galaxy Buds FE SM-R400" imgRef='https://img.5element.by/import/images/ut/goods/good_1634bbc7-62a5-11ee-8db3-005056012b6d/sm-r400nzaacis-naushniki-samsung-galaxy-fe-r400n-gray-1_600.jpg'/>
<InformWindow key1="60" price1="24" charas1='brend' charas2='сonnection type' charas3='connector type' charas4='Battery life' charas5='Battery capacity' charas6='Color ' charas7='Charging case capacity' charas8='noise reduction'  charas9='Guarantee ' charas10='Country of origin' productName="Headphones Niceboy HIVE PINS" imgRef='https://img.5element.by/import/images/ut/goods/good_710787c0-2a9f-11ec-bb96-00505683f369/hive-pins-naushniki-besprovodnye-niceboy-1_600.jpg'/>
<InformWindow key1="61" price1="43" charas1='brend' charas2='сonnection type' charas3='connector type' charas4='Battery life' charas5='Battery capacity' charas6='Color ' charas7='Charging case capacity' charas8='noise reduction'  charas9='Guarantee ' charas10='Country of origin' productName="Headphones Xiaomi Redmi Buds 4 Black" imgRef='https://img.5element.by/import/images/ut/goods/good_52481e0b-31d7-11ee-bb93-005056012465/-1_600.jpg'/>
<InformWindow key1="62" price1="162" charas1='brend' charas2='сonnection type' charas3='connector type' charas4='Battery life' charas5='Battery capacity' charas6='Color ' charas7='Charging case capacity' charas8='noise reduction'  charas9='Guarantee ' charas10='Country of origin' productName="Headphones SOUNDCORE Q45 A3040" imgRef='https://img.5element.by/import/images/ut/goods/good_8b8dad2c-ca4b-11ed-bb92-005056012465/sdc-a3040g11-bk-chernyy-naushniki-besprovodnye-soundcore-q45-2_600.jpg'/>
<InformWindow key1="63" price1="96" charas1='brend' charas2='Type ' charas3='Volume' charas4='Power' charas5='Control type' charas6='Color ' charas7='length' charas8='width'  charas9='Guarantee ' charas10='Country of origin' productName="Microwave BEKO MGC20130BFB" imgRef='https://img.5element.by/import/images/ut/goods/good_00dcc9bb-fbe9-11ee-8db4-005056012b6d/mgc20130bfb-mikrovolnovaya-pech-beko-1_600.jpg'/>
<InformWindow key1="64" price1="70" charas1='brend' charas2='Type ' charas3='Volume' charas4='Power' charas5='Control type' charas6='Color ' charas7='length' charas8='width'  charas9='Guarantee ' charas10='Country of origin' productName="Microwave Hyundai HYM-M2038" imgRef='https://img.5element.by/import/images/ut/goods/good_796d4be8-505b-11ed-bb95-0050560120e8/hym-m2038-belyy-mikrovolnovaya-pech-hyundai-1_600.jpg'/>
<InformWindow key1="65" price1="169" charas1='brend' charas2='Type ' charas3='Volume' charas4='Power' charas5='Control type' charas6='Color ' charas7='length' charas8='width'  charas9='Guarantee ' charas10='Country of origin' productName="Microwave Samsung MG23F302TQS/BW" imgRef='https://img.5element.by/import/images/ut/goods/good_ae7f9fcb-352a-11e5-813c-00505684b891/good_img_47a6f382-779f-11e7-80eb-005056842056_600.jpg'/>
<InformWindow key1="66" price1="142" charas1='brend' charas2='Type ' charas3='Volume' charas4='Power' charas5='Control type' charas6='Color ' charas7='length' charas8='width'  charas9='Guarantee ' charas10='Country of origin' productName="Microwave LG MW23R35GIH" imgRef='https://img.5element.by/import/images/ut/goods/good_672253eb-d5ff-11e9-80c7-005056840c70/good_img_a6bd30ce-d84e-11e9-80c7-005056840c70_600.jpg'/>
<InformWindow key1="67" price1="345" charas1='brend' charas2='Type ' charas3='Volume' charas4='Power' charas5='Control type' charas6='Color ' charas7='length' charas8='width'  charas9='Guarantee ' charas10='Country of origin' productName="Microwave Bosch FEL023MS2" imgRef='https://img.5element.by/import/images/ut/goods/good_918b492f-406c-11ec-bb94-0050560120e8/fel023ms2-mikrovolnovaya-pech-s-grilem-bosch-1_600.jpg'/>
<InformWindow key1="68" price1="48" charas1='brend' charas2='Type ' charas3='Power' charas4='temperature regulation' charas5='Cold air' charas6='Color ' charas7='Number of nozzles' charas8='weight'  charas9='Guarantee ' charas10='Country of origin' productName="Hairdryer POLARIS PHD 2289AC" imgRef='https://img.5element.by/import/images/ut/goods/good_ec14b8fd-d6c1-11e8-80c4-005056840c70/phd-2289ac-temno-seryy-fen-polaris-2_600.jpg'/>
<InformWindow key1="69" price1="65" charas1='brend' charas2='Type ' charas3='Power' charas4='temperature regulation' charas5='Cold air' charas6='Color ' charas7='Number of nozzles' charas8='weight'  charas9='Guarantee ' charas10='Country of origin' productName="Hairdryer Philips DryCare Pro BHD272/00" imgRef='https://img.5element.by/import/images/ut/goods/good_b308cbb8-ce2f-11e9-80c7-005056840c70/bhd272-00-fen-philips-1_600.jpg'/>
<InformWindow key1="70" price1="31" charas1='brend' charas2='Type ' charas3='Power' charas4='temperature regulation' charas5='Cold air' charas6='Color ' charas7='Number of nozzles' charas8='weight'  charas9='Guarantee ' charas10='Country of origin' productName="Hairdryer Vitek VT 1324LP5" imgRef='https://img.5element.by/import/images/ut/goods/good_73e489ce-ef05-11ed-bb90-005056012464/vt-1324-fen-aquamarine-vitek-1_600.jpg'/>
<InformWindow key1="71" price1="89" charas1='brend' charas2='Type ' charas3='Power' charas4='temperature regulation' charas5='Cold air' charas6='Color ' charas7='Number of nozzles' charas8='weight'  charas9='Guarantee ' charas10='Country of origin' productName="Hairdryer ROWENTA CV7461F" imgRef='https://img.5element.by/import/images/ut/goods/good_a2279203-6302-11e7-80eb-005056842056/cv7461f0-fen-rowenta-1_600.jpg'/>
<InformWindow key1="72" price1="68" charas1='brend' charas2='Type ' charas3='Power' charas4='temperature regulation' charas5='Cold air' charas6='Color ' charas7='Number of nozzles' charas8='weight'  charas9='Guarantee ' charas10='Country of origin' productName="Hairdryer Panasonic EH-NE83-K865" imgRef='https://img.5element.by/import/images/ut/goods/good_f4f6f632-754d-11e9-80c7-005056840c70/eh-ne83-k865-fen-panasonic-2_600.jpg'/>
<InformWindow key1="73" price1="46" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin'  productName="Blender Polaris PHB 0848L" imgRef='https://img.5element.by/import/images/ut/goods/good_9ba00a2d-96ed-11ec-bb94-0050560120e8/phb-0848-ruchnoy-blender-polaris-1_600.jpg'/>
<InformWindow key1="74" price1="105" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Blender BRAUN MQ55307MBK" imgRef='https://img.5element.by/import/images/ut/goods/good_f903dae7-1831-11ef-8db4-005056012b6d/-1_600.jpg'/>
<InformWindow key1="75" price1="27" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Blender Galaxy Line GL2133" imgRef='https://img.5element.by/import/images/ut/goods/good_01fb5ec2-fb36-11ee-8db4-005056012b6d/gl2133-blender-galaxy-line-1_600.jpg'/>
<InformWindow key1="76" price1="49" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Blender BQ HB1234SSH368" imgRef='https://img.5element.by/import/images/ut/goods/good_aeb797cc-b035-11ec-bb95-0050560120e8/bq-hb1234ss-black-steel-ruchnoy-blender-bq-1_600.jpg'/>
<InformWindow key1="77" price1="54" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Blender Gorenje HBX603RL" imgRef='https://img.5element.by/import/images/ut/goods/good_ab6e73e5-a533-11ec-bb95-0050560120e8/hbx603rl-pogruzhnoy-blender-gorenje-2_600.jpg'/>
<InformWindow key1="78" price1="30" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Iron Polaris PIR 2481KL23" imgRef='https://img.5element.by/import/images/ut/goods/good_eef69780-63a7-11ea-80c7-005056840c70/good_img_61d2b99a-644c-11ea-80c7-005056840c70_600.jpg'/>
<InformWindow key1="79" price1="92" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Iron Braun TexStyle 7 SI 7042GR" imgRef='https://img.5element.by/import/images/ut/goods/good_ab558af7-2fb9-11eb-bb92-0050560120e8/si5078gy-utyug-braun-1_600.jpg'/>
<InformWindow key1="80" price1="176" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Smart speaker Yandex Station Midi Black" imgRef='https://img.5element.by/import/images/ut/goods/good_69673106-7949-11ee-8db3-005056012b6d/yndx-00054blk-chernyy-umnaya-kolonka-yandeks-stanciya-midi-s-alisoy-s-zigbee-1_600.jpg'/>
<InformWindow key1="81" price1="702" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="3D Printer Creality CRK10L" imgRef='https://img.5element.by/import/images/ut/goods/good_9a765ba7-62a5-11ee-8db3-005056012b6d/cr-k1-3d-printer-creality-1_600.jpg'/>
<InformWindow key1="82" price1="186" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Lawn mower ECO LG-43589" imgRef='https://img.5element.by/import/images/ut/goods/good_2c6d4a88-ae62-11eb-bb92-0050560120e8/lg-435-gazonokosilka-benzinovaya-eco-1_600.jpg'/>
<InformWindow key1="83" price1="805" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Electric scooter Ninebot Kickscooter F2 Plus" imgRef='https://img.5element.by/import/images/ut/goods/good_c922a17f-f036-11ee-8db3-005056012b6d/-1_600.jpg'/>
<InformWindow key1="84" price1="93" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Electric shaver Braun Series 5 50-M1000s Mint" imgRef='https://img.5element.by/import/images/ut/goods/good_f0fd8648-55a9-11eb-bb92-0050560120e8/50-m1000s-elektricheskaya-britva-braun-1_600.jpg'/>
<InformWindow key1="85" price1="929" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Air conditioner LG Eco Smart 2021 PC09SQR" imgRef='https://img.5element.by/import/images/ut/goods/good_2ca8f269-a4a5-11ee-8db3-005056012b6d/-1_600.jpg'/>
<InformWindow key1="86" price1="137" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Navigator NAVITEL E777 Truck" imgRef='https://img.5element.by/import/images/ut/goods/good_62c91dcb-a3cd-11ed-bb92-005056012465/-1_600.jpg'/>
<InformWindow key1="87" price1="28" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Ventilator HOLT HT-FN-002L" imgRef='https://img.5element.by/import/images/ut/goods/good_73d6da85-f134-11ec-bb95-0050560120e8/ht-fn-002-ventilyator-holt-1_600.jpg'/>
<InformWindow key1="88" price1="138" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Сonvector Electrolux ECH/B-2000 E" imgRef='https://img.5element.by/import/images/ut/goods/good_9866c035-531f-11ee-bb92-005056012464/-1_600.jpg'/>
<InformWindow key1="89" price1="562" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Game console Sony PlayStation 5 (PS5) Slim" imgRef='https://360shop.by/upload/cssinliner_webp/resize_cache/iblock/e11/500_500_140cd750bba9870f18aada2478b24840a/lxg3pu8uswheoy0ptbb1xz9nsgg8l0u8.webp'/>
<InformWindow key1="90" price1="94" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Gamepad Sony PS5 DualSense CFI-ZCT1J" imgRef='https://shop.mts.by/upload/resize_cache/webp/iblock/7c9/xyjsvwi7zmq7bs585qwfw3ecfo6mn8v3/270_500_1/DualSense_1.webp'/>
<InformWindow key1="91" price1="709" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Game console  Xbox Series X 1TB 1882" imgRef='https://cdn21vek.by/img/galleries/7600/835/preview_b/xboxseriesx1tb1882_microsoft_62c54c3f3def6.jpeg'/>
<InformWindow key1="92" price1="84" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Gamepad Microsoft Xbox Series X" imgRef='https://cdn21vek.by/img/galleries/8787/287/preview_b/xboxseriescarbonqat00005_microsoft_65c463f067401.jpeg'/>
<InformWindow key1="93" price1="15" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Night Light Yeelight Motion Sensor YLYD01YL" imgRef='https://img.5element.by/import/images/ut/goods/good_48ca0112-bf9a-11ea-80c8-005056840c70/good_img_838fb797-cb26-11ea-80c8-005056840c70_600.jpg'/>
<InformWindow key1="94" price1="420" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Coffee machine KRUPS ESSENTIAL EA810870" imgRef='https://img.5element.by/import/images/ut/goods/good_ababaf2c-9dba-11e5-813c-00505684b891/ea810870-kofemashina-krups-1_600.jpg'/>
<InformWindow key1="95" price1="97" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Web camera Razer Kiyo X RZ19-04170100-R3M1" imgRef='https://img.5element.by/import/images/ut/goods/good_8fafb4cf-8a5c-11ec-bb94-0050560120e8/rz19-04170100-r3m1-veb-kamera-razer-kiyo-x-1_600.jpg'/>
<InformWindow key1="96" price1="263" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Electric stove GEFEST EP N D 6140-02" imgRef='https://img.5element.by/import/images/ut/goods/good_2d19f60b-afa1-11e1-b8a5-005056af0003/ep-n-d-6140-02-elektroplity-bytovye-gefest-1_600.jpg'/>
<InformWindow key1="97" price1="12" charas1='brend' charas2='Type ' charas3='Power' charas4='Rotation speed' charas5='Chopper bowl capacity' charas6='Color ' charas7='Bowl material' charas8='body material'  charas9='Guarantee ' charas10='Country of origin' productName="Microphone MIRU MIC002" imgRef='https://img.5element.by/import/images/ut/goods/good_ee3770b3-2f0e-11ef-8db4-005056012b6d/-1_600.jpg'/>


        <div className={`${InfoWindowCounter > 0 ? 'hidden' : 'block'}  flex flex-row justify-center flex-wrap  bg-no-repeat bg-cover scroll-smooth relative top-[10px]`}>

  <div className={` ${SearchProductsArray[0] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(0)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_c21e7d2e-ae25-11ee-8db3-005056012b6d/sm-a155-goluboy-128gb-telefon-gsm-samsung-galaxy-a15-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(0)}></img>
    <div className={`relative bottom-[404px]  text-xl mx-10 font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(0)}>Smartphone Samsung Galaxy A15 8GB/256GB</div>
    <CartOperation key1="0" price1="209"/>
  </div>
 
  <div className={`${SearchProductsArray[1] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(1)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_f858c95e-dc5d-11ee-8db3-005056012b6d/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(1)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(1)}>Smartphone Xiaomi Redmi 13C 8GB/256GB </div>
    <CartOperation key1="1" price1="149" />
  </div>
  
  <div className={`${SearchProductsArray[2] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(2)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_2460e313-2964-11ef-8db4-005056012b6d/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(2)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(2)}>Smartphone Honor 200 Lite </div>
    <CartOperation key1="2" price1="304" />
  </div>
 
  <div className={`${SearchProductsArray[3] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer `}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(3)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_b1710876-9442-11ee-8db3-005056012b6d/iphone-14-128gb-midnight-telefon-gsm-apple-mvup3ch-a-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(3)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(3)}>Smartphone APPLE iPhone 14 128GB </div>
    <CartOperation key1="3" price1="899" />
  </div>
 
  <div className={`${SearchProductsArray[4] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(4)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_2a03a205-4e30-11ee-bb94-005056012465/x5-plus-wod-lx1-4gb-64gb-cyan-lake-telefon-gsm-honor-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(4)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(4)}>Smartphone HONOR X5 plus 2GB/32GB </div>
    <CartOperation key1="4" price1="79"/>
  </div>

  <div className={`${SearchProductsArray[5] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(5)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_5f4ef522-3852-11ed-bb95-0050560120e8/v25-8gb-256gb-aquamarine-blue-telefon-gsm-vivo-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(5)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(5)}> Smartphone Vivo V25 8GB/256GB </div>
    <CartOperation key1="5" price1="299"/>
  </div>

  <div className={`${SearchProductsArray[6] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(6)}></div>
    <img src=' https://img.5element.by/import/images/ut/goods/good_9175e137-3303-11ef-8db4-005056012b6d/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(6)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(6)}>  Smartphone POCO X6 5G 8GB/256GB</div>
    <CartOperation key1="6" price1="329"/>
  </div>

  <div className={`${SearchProductsArray[7] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(7)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_7e6666a9-f286-11ee-8db3-005056012b6d/nova-12-se-256gb-bne-lx1-black-telefon-gsm-huawei-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(7)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(7)}> Smartphone Huawei nova 12  8GB/256GB</div>
    <CartOperation key1="7" price1="239"/>
  </div>

  <div className={`${SearchProductsArray[8] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(8)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_f2a2981e-b474-11ee-8db3-005056012b6d/sm-s928-zheltyy-titan-512gb-telefon-gsm-samsung-galaxy-s24-ultra-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(8)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(8)}> Smartphone Samsung Galaxy S24 Ultra 512GB</div>
    <CartOperation key1="8" price1="1659"/>
  </div>

  <div  className={`${SearchProductsArray[9] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(9)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_b58146cd-828d-11ed-bb97-0050560120e8/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(9)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(9)}> Smartphone APPLE iPhone 11 Pro Max 64GB</div>
    <CartOperation key1="9" price1="579"/>
  </div>

  
  <div className={`${SearchProductsArray[10] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(10)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_ad7bd4f2-2ae4-11ee-bb93-005056012465/qe55q70cauxru-televizor-samsung-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(10)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(10)}> TV Samsung QE55Q70CAUXRU</div>
    <CartOperation key1="10" price1="1249"/>
  </div>
  <div className={`${SearchProductsArray[11] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(11)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_355bf48e-f096-11ec-bb95-0050560120e8/32lh0212-televizor-vityaz-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(11)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(11)}> TV Vityaz 5028ALULF1204 </div>
    <CartOperation key1="11" price1="379"/>
  </div>
  <div className={`${SearchProductsArray[12] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(12)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_265a403c-16a1-11ea-80c7-005056840c70/good_img_5ef54fd5-172c-11ea-80c7-005056840c70_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(12)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(12)}>ТV Horizont 50LE7513DFG</div>
    <CartOperation key1="12" price1="345"/>
  </div>
  <div className={`${SearchProductsArray[13] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer `}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(13)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_4825c6ec-44cf-11ef-8db4-005056012b6d/m32fd70b-televizor-kivi-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(13)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(13)}> ТV KIVI MR3286FD706BHT</div>
    <CartOperation key1="13" price1="239"/>
  </div>
  <div className={`${SearchProductsArray[14] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(14)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_f8f46b33-2759-11ef-8db4-005056012b6d/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(14)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(14)}> ТV Sony Bravia A80L XR-55A80L </div>
    <CartOperation key1="14" price1="2429"/>
  </div>
  <div className={`${SearchProductsArray[15] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(15)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_22a1d6e5-f74e-11ee-8db4-005056012b6d/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(15)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(15)}> ТV LG B60L OLED77C4RLAL</div>
    <CartOperation key1="15" price1="4499"/>
  </div>
  <div className={`${SearchProductsArray[16] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(16)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_60ad82fa-3858-11ef-8db4-005056012b6d/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(16)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(16)}> ТV Harper 65QR850TS/RU</div>
    <CartOperation key1="16" price1="859"/>
  </div>
  <div className={`${SearchProductsArray[17] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(17)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_e2ecc293-2bc3-11ee-bb91-005056012464/iff55q73-televizor-iffalcon-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(17)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(17)}> ТV IFFALCON iFFR55Q73TG</div>
    <CartOperation key1="17" price1="609"/>
  </div>
  <div className={`${SearchProductsArray[18] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(18)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_f19c2733-e135-11ee-8db3-005056012b6d/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(18)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(18)}> Laptop ASUS Vivobook Go 15 E1504FA-BQ831W</div>
    <CartOperation key1="18" price1="644"/>
  </div>
  <div className={`${SearchProductsArray[19] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(19)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_ef15f590-4d49-11ee-bb92-005056012464/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(19)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(19)}> Laptop Apple MacBook Air 15 M2 2023 8/256</div>
    <CartOperation key1="19" price1="1739"/>
  </div>
  <div className={`${SearchProductsArray[20] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(20)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_64072d2e-025e-11ef-8db4-005056012b6d/-1_200.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(20)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(20)}> Laptop Lenovo LOQ 15APH8 82XTE1ES</div>
    <CartOperation key1="20" price1="1329"/>
  </div>
  <div className={`${SearchProductsArray[21] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(21)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_f4973714-3046-11ee-bb93-005056012465/nx-aduel-003-noutbuk-aspire-3-acer-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(21)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(21)}> Laptop Acer Aspire 3 A315-58G-5683</div>
    <CartOperation key1="21" price1="774"/>
  </div>
  <div className={`${SearchProductsArray[22] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(22)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_1e138c3f-a588-11ee-8db3-005056012b6d/mclg-x-53013wxa-matebook-d16-noutbuk-huawei-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(22)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(22)}> Laptop Huawei MateBook D 16 MCLG-X</div>
    <CartOperation key1="22" price1="1029"/>
  </div>
  <div className={`${SearchProductsArray[23] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(23)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_1b2c8b51-2e15-11ef-8db4-005056012b6d/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(23)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(23)}> Laptop MSI Prestige 13 AI Evo MS-13Q2</div>
    <CartOperation key1="23" price1="1451"/>
  </div>

  <div className={`${SearchProductsArray[24] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(24)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_6dec0c31-8a00-11ee-8db3-005056012b6d/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(24)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(24)}>Laptop Tecno Megabook S1 i5/16/512/Grey/W</div>
    <CartOperation key1="24" price1="959"/>
  </div>


<div className={`${SearchProductsArray[25] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
<div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(25)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_ac31eb0a-be95-11ee-8db3-005056012b6d/hhr30b-h12s-wet-and-dry-vacuum-cleaner-besprovodnoy-pylesos-dreame-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(25)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(25)}> Wireless Dreame Vacuum Cleaner H12S</div>
    <CartOperation key1="25" price1="450"/>
  </div>
  <div className={`${SearchProductsArray[26] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(26)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_8a15861d-0c41-11ef-8db4-005056012b6d/-2_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(26)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(26)}> Vacuum Cleaner KARCHER WD 3 V-17/20</div>
    <CartOperation key1="26" price1="108"/>
  </div>
  <div className={`${SearchProductsArray[27] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(27)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_2adf8d9b-038d-11ee-bb91-005056012464/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(27)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(27)}> Xiaomi Robot Vacuum S10 BHR5988EU</div>
    <CartOperation key1="27" price1="224"/>
  </div>
  <div className={`${SearchProductsArray[28] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(28)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_f1e2d64a-db72-11ec-bb95-0050560120e8/kit-fb0318-robot-moyschik-okon-dadzhet-w120-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(28)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(28)}>  Robot for cleaning windows Dadget W120</div>
    <CartOperation key1="28" price1="122"/>
  </div>
  <div className={`${SearchProductsArray[29] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(29)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_d7c9a182-ec2f-11ea-80c1-005056844aec/wv-2-premium-1-633-425-0-stekloochistitel-karcher-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(29)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(29)}>  Wiper KARCHER WV 2 Premium (1.633-425.0)</div>
    <CartOperation key1="29" price1="102"/>
  </div>


<div className={`${SearchProductsArray[30] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
<div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(30)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_ff523d57-31d7-11ee-bb93-005056012465/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(30)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(30)}>  Smart-watch Xiaomi Redmi Watch 3 Black</div>
    <CartOperation key1="30" price1="45"/>
  </div>
  <div className={`${SearchProductsArray[31] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(31)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_0d2f90fd-14fa-11ef-8db4-005056012b6d/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(31)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(31)}> Smart-watch Huawei Watch FIT 3  Green</div>
    <CartOperation key1="31" price1="94"/>
  </div>
  <div className={`${SearchProductsArray[32] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(32)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_350f1d6d-2032-11ef-8db4-005056012b6d/mr8u3lw-a-smart-chasy-apple-watch-series-9-gps-41mm-starlight-aluminum-case-with-starlight-sport-band-silicone-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(32)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(32)}>  Smart-watch APPLE Watch S9 41mm</div>
    <CartOperation key1="32" price1="516"/>
  </div>
  <div className={`${SearchProductsArray[33] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(33)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_39525f09-e044-11ed-bb92-005056012465/sm-r910nzbamea-smart-chasy-samsung-galaxy-watch-5-classic-44-mm-r910-sapphire-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(33)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(33)}>  Smart-watch Samsung Galaxy Watch 5 44 mm</div>
    <CartOperation key1="33" price1="225"/>
  </div>
  <div className={`${SearchProductsArray[34] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(34)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_322b5e42-ed01-11ee-8db3-005056012b6d/tma-b19-gold-smart-chasy-honor-watch-4-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(34)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(34)}> Smart-watch Honor Watch 4 (TMA-B19)</div>
    <CartOperation key1="34" price1="161"/>
  </div>
  <div className={`${SearchProductsArray[35] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(35)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_2154e1ae-12c3-11ef-8db4-005056012b6d/cns-sw83ss-siniy-umnye-chasy-canyon-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(35)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(35)}>  Smart-watch Canyon Maverick SW-83</div>
    <CartOperation key1="35" price1="64"/>
  </div>
  <div className={`${SearchProductsArray[36] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(36)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_d4805c4f-f78f-11ec-bb95-0050560120e8/rs4-plus-black-magnetic-strap-ls11-umnye-chasy-haylou-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(36)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(36)}>  Smart-watch Haylou RS4 Plus LS11</div>
    <CartOperation key1="36" price1="60"/>
  </div>

  <div className={`${SearchProductsArray[37] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(37)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_fd106abb-4cc1-11ee-bb95-005056012463/a2319-chernyy-umnye-chasy-amazfit-pop-3r-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(37)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(37)}> Smart-watch Amazfit Pop 3R (A2319)</div>
    <CartOperation key1="37" price1="68"/>
  </div>
  <div className={`${SearchProductsArray[38] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(38)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_708e3489-84e8-11ed-bb97-0050560120e8/skit-aw841-nu83-komplekt-apple-watch-series-8-41mm-midnight-mnu83-a2770--plus-podpiska-ivi-3-mes-1_200.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(38)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(38)}>  Smart-watch APPLE Watch Series 8 41mm</div>
    <CartOperation key1="38" price1="468"/>
  </div>
 


<div className={`${SearchProductsArray[39] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
<div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(39)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_c24069e6-719c-11ee-8db3-005056012b6d/gc-b459smum-holodilnik-morozilnik-lg-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(39)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(39)}> Fridge LG GC B4598SMUM</div>
    <CartOperation key1="39" price1="900"/>
  </div>
  <div className={`${SearchProductsArray[40] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(40)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_f288727c-bf0a-11ed-bb90-005056012464/c4f740cdbgu1-holodilnik-haier-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(40)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(40)}>  Fridge Haier C4F740CDBGU1</div>
    <CartOperation key1="40" price1="1049"/>
  </div>
  <div className={`${SearchProductsArray[41] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(41)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_6879e454-a2a5-11eb-bb92-0050560120e8/rb33a3240ww-wt-holodilnik-samsung-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(41)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(41)}> Fridge Samsung RB33A3240WW/WT</div>
    <CartOperation key1="41" price1="645"/>
  </div>
  <div className={`${SearchProductsArray[42] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(42)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_e3b9cbe4-047c-4e02-8d07-59d3567066d8/mxm-2835-90-holodilnik-atlant-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(42)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(42)}> Fridge ATLANT MXM-2835-90</div>
    <CartOperation key1="42" price1="294"/>
  </div>
  <div className={`${SearchProductsArray[43] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(43)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_6b792b69-1db7-11ef-8db4-005056012b6d/r-w660puc7-gbe-holodilnik-hitachi-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(43)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(43)}> Fridge Hitachi R-W660PUC7 GBE</div>
    <CartOperation key1="43" price1="2670"/>
  </div>



<div className={`${SearchProductsArray[44] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
<div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(44)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_4c7d0a09-857f-11e6-80df-005056842056/sc-ek21s25-elektrochaynik-scarlett-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(44)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(44)}> Electric kettle SCARLETT SC-EK21S25</div>
    <CartOperation key1="44" price1="10"/>
  </div>
  <div className={`${SearchProductsArray[45] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(45)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_d0485e2b-670a-11ed-bb95-0050560120e8/bhr5927eu-elektrochaynik-mjdsh04ym-xiaomi-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(45)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(45)}> Electric kettle Xiaomi 2 MJDSH04YM</div>
    <CartOperation key1="45" price1="35"/>
  </div>
  <div className={`${SearchProductsArray[46] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(46)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_11b02f13-ac68-11ed-bb90-005056012464/mgk-616dbk-chaynik-maunfeld-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(46)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(46)}>  Electric kettle MAUNFELD MGK-616D</div>
    <CartOperation key1="46" price1="29"/>
  </div>
  <div className={`${SearchProductsArray[47] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(47)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_f79d09d8-3f0b-11ef-8db4-005056012b6d/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(47)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(47)}> Electric kettle Braun WK1500BK</div>
    <CartOperation key1="47" price1="106"/>
  </div>



<div className={`${SearchProductsArray[48] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
<div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(48)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_fc8a84b6-7030-11e4-811b-00505684b891/sma-60u1010-00-stiralnaya-mashina-atlant-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(48)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(48)}>  Washing machine ATLANT СМА-60Y1010</div>
    <CartOperation key1="48" price1="312"/>
  </div>
  <div className={`${SearchProductsArray[49] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(49)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_1e7eacf1-bdd3-11e9-80c7-005056840c70/f2j3hs4l-stiralnaya-mashina-lg-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(49)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(49)}> Washing machine LG F2J3HS4L</div>
    <CartOperation key1="49" price1="503"/>
  </div>
  <div className={`${SearchProductsArray[50] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(50)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_2e15ab02-806f-11ee-8db3-005056012b6d/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(50)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(50)}>  Washing machine Samsung WW60AG4S0</div>
    <CartOperation key1="50" price1="449"/>
  </div>
  <div className={`${SearchProductsArray[51] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(51)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_343e78e9-3c24-11ee-bb93-005056012465/wan2410kpl-stiralnaya-mashina-bosch-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(51)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(51)}>  Washing machine Bosch Serie 4 WAN2410KPL</div>
    <CartOperation key1="51" price1="646"/>
  </div>

  <div className={`${SearchProductsArray[52] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(52)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_cad36be7-2aa6-11ed-bb95-0050560120e8/hw60-bp12919b-stiralnaya-mashina-haier-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(52)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(52)}>Washing machine Haier HW60-BP12919B</div>
    <CartOperation key1="52" price1="420"/>
  </div>
 

<div className={`${SearchProductsArray[53] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
<div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(53)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_e3433405-86b1-11ed-bb97-0050560120e8/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(53)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(53)}>Headphones Apple Airpods 2  (MV7N2/A)</div>
    <CartOperation key1="53" price1="169"/>
  </div>
  <div className={`${SearchProductsArray[54] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(54)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_c6c37768-d0c3-11ee-8db3-005056012b6d/tune-720bt-blk-naushniki-besprovodnye-jbl-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(54)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(54)}>Headphones JBL Tune 720BT Black</div>
    <CartOperation key1="54" price1="79"/>
  </div>
  <div className={`${SearchProductsArray[55] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(55)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_4927a4f4-ec26-11ea-80c1-005056844aec/wh-1000xm4-chernyy-besprovodnye-naushniki-sony-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(55)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(55)}> Headphones Sony WH 1000XM4</div>
    <CartOperation key1="55" price1="322"/>
  </div>
  <div className={`${SearchProductsArray[56] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(56)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_b958a32d-32ba-11ef-8db4-005056012b6d/t0019-chernyy-besprovodnye-naushniki-huawei-freebuds-6i-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(56)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(56)}> Headphones HUAWEI FreeBuds 6i T0019</div>
    <CartOperation key1="56" price1="82"/>
  </div>
  <div className={`${SearchProductsArray[57] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(57)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_20dfd866-4356-11ef-8db4-005056012b6d/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(57)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(57)}> Headphones MARSHALL MAJOR V</div>
    <CartOperation key1="57" price1="210"/>
  </div>
  <div className={`${SearchProductsArray[58] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(58)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_7d8b57eb-0e23-11eb-80c1-005056844aec/rb-hx220beek-naushniki-panasonic-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(58)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(58)}> Headphones Panasonic RB-HX220BEES</div>
    <CartOperation key1="58" price1="39"/>
  </div>
  <div className={`${SearchProductsArray[59] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(59)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_1634bbc7-62a5-11ee-8db3-005056012b6d/sm-r400nzaacis-naushniki-samsung-galaxy-fe-r400n-gray-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(59)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(59)}>  Headphones Samsung Galaxy Buds FE SM-R400</div>
    <CartOperation key1="59" price1="102"/>
  </div>

  <div className={`${SearchProductsArray[60] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(60)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_710787c0-2a9f-11ec-bb96-00505683f369/hive-pins-naushniki-besprovodnye-niceboy-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(60)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(60)}> Headphones Niceboy HIVE PINS</div>
    <CartOperation key1="60" price1="24"/>
  </div>
  <div className={`${SearchProductsArray[61] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(61)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_52481e0b-31d7-11ee-bb93-005056012465/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(61)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(61)}> Headphones Xiaomi Redmi Buds 4 Black</div>
    <CartOperation key1="61" price1="43"/>
  </div>
  <div className={`${SearchProductsArray[62] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(62)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_8b8dad2c-ca4b-11ed-bb92-005056012465/sdc-a3040g11-bk-chernyy-naushniki-besprovodnye-soundcore-q45-2_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(62)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(62)}> Headphones SOUNDCORE Q45 A3040</div>
    <CartOperation key1="62" price1="162"/>
  </div>


<div className={`${SearchProductsArray[63] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
<div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(63)}></div>
    <img src=  'https://img.5element.by/import/images/ut/goods/good_00dcc9bb-fbe9-11ee-8db4-005056012b6d/mgc20130bfb-mikrovolnovaya-pech-beko-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(63)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(63)}>  Microwave BEKO MGC20130BFB</div>
    <CartOperation key1="63" price1="96"/>
  </div>
  <div className={`${SearchProductsArray[64] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(64)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_796d4be8-505b-11ed-bb95-0050560120e8/hym-m2038-belyy-mikrovolnovaya-pech-hyundai-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(64)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(64)}>Microwave Hyundai HYM-M2038</div>
    <CartOperation key1="64" price1="70"/>
  </div>
  <div className={`${SearchProductsArray[65] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(65)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_ae7f9fcb-352a-11e5-813c-00505684b891/good_img_47a6f382-779f-11e7-80eb-005056842056_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(65)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(65)}> Microwave Samsung MG23F302TQS/BW</div>
    <CartOperation key1="65" price1="169"/>
  </div>
  <div className={`${SearchProductsArray[66] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(66)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_672253eb-d5ff-11e9-80c7-005056840c70/good_img_a6bd30ce-d84e-11e9-80c7-005056840c70_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(66)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(66)}>Microwave LG MW23R35GIH</div>
    <CartOperation key1="66" price1="142"/>
  </div>
  <div className={`${SearchProductsArray[67] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(67)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_918b492f-406c-11ec-bb94-0050560120e8/fel023ms2-mikrovolnovaya-pech-s-grilem-bosch-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(67)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(67)}>  Microwave Bosch FEL023MS2</div>
    <CartOperation key1="67" price1="345"/>
  </div>
 

<div className={`${SearchProductsArray[68] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
<div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(68)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_ec14b8fd-d6c1-11e8-80c4-005056840c70/phd-2289ac-temno-seryy-fen-polaris-2_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(68)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(68)}> Hairdryer POLARIS PHD 2289AC</div>
    <CartOperation key1="68" price1="48"/>
  </div>
  <div className={`${SearchProductsArray[69] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(69)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_b308cbb8-ce2f-11e9-80c7-005056840c70/bhd272-00-fen-philips-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(69)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(69)}> Hairdryer Philips DryCare Pro BHD272/00</div>
    <CartOperation key1="69" price1="65"/>
  </div>
  <div className={`${SearchProductsArray[70] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(70)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_73e489ce-ef05-11ed-bb90-005056012464/vt-1324-fen-aquamarine-vitek-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(70)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(70)}> Hairdryer Vitek VT 1324LP5</div>
    <CartOperation key1="70" price1="31"/>
  </div>
  <div className={`${SearchProductsArray[71] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(71)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_a2279203-6302-11e7-80eb-005056842056/cv7461f0-fen-rowenta-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(71)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(71)}> Hairdryer ROWENTA CV7461F</div>
    <CartOperation key1="71" price1="89"/>
  </div>
  <div className={`${SearchProductsArray[72] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(72)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_f4f6f632-754d-11e9-80c7-005056840c70/eh-ne83-k865-fen-panasonic-2_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(72)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(72)}> Hairdryer Panasonic EH-NE83-K865</div>
    <CartOperation key1="72" price1="68"/>
  </div>
  

<div className={`${SearchProductsArray[73] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
<div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(73)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_9ba00a2d-96ed-11ec-bb94-0050560120e8/phb-0848-ruchnoy-blender-polaris-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(73)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(73)}> Blender Polaris PHB 0848L</div>
    <CartOperation key1="73" price1="46"/>
  </div>
  <div className={`${SearchProductsArray[74] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(74)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_f903dae7-1831-11ef-8db4-005056012b6d/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(74)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(74)}>  Blender BRAUN MQ55307MBK</div>
    <CartOperation key1="74" price1="105"/>
  </div>
  <div className={`${SearchProductsArray[75] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(75)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_01fb5ec2-fb36-11ee-8db4-005056012b6d/gl2133-blender-galaxy-line-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(75)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(75)}> Blender Galaxy Line GL2133</div>
    <CartOperation key1="75" price1="27"/>
  </div>
  <div className={`${SearchProductsArray[76] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(76)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_aeb797cc-b035-11ec-bb95-0050560120e8/bq-hb1234ss-black-steel-ruchnoy-blender-bq-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(76)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(76)}>Blender BQ HB1234SSH368</div>
    <CartOperation key1="76" price1="49"/>
  </div>

  <div className={`${SearchProductsArray[77] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(77)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_ab6e73e5-a533-11ec-bb95-0050560120e8/hbx603rl-pogruzhnoy-blender-gorenje-2_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(77)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(77)}> Blender Gorenje HBX603RL</div>
    <CartOperation key1="77" price1="54"/>
  </div>

<div className={`${SearchProductsArray[78] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
<div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(78)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_eef69780-63a7-11ea-80c7-005056840c70/good_img_61d2b99a-644c-11ea-80c7-005056840c70_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(78)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(78)}> Iron Polaris PIR 2481KL23</div>
    <CartOperation key1="78" price1="30"/>
  </div>
  <div className={`${SearchProductsArray[79] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(79)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_ab558af7-2fb9-11eb-bb92-0050560120e8/si5078gy-utyug-braun-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(79)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(79)}> Iron Braun TexStyle 7 SI 7042GR</div>
    <CartOperation key1="79" price1="92"/>
  </div>
  <div className={`${SearchProductsArray[80] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(80)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_69673106-7949-11ee-8db3-005056012b6d/yndx-00054blk-chernyy-umnaya-kolonka-yandeks-stanciya-midi-s-alisoy-s-zigbee-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(80)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(80)}> Smart speaker Yandex Station Midi Black</div>
    <CartOperation key1="80" price1="176"/>
  </div>
  <div className={`${SearchProductsArray[81] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(81)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_9a765ba7-62a5-11ee-8db3-005056012b6d/cr-k1-3d-printer-creality-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(81)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(81)}>  3D Printer Creality CRK10L</div>
    <CartOperation key1="81" price1="702"/>
  </div>
  <div className={`${SearchProductsArray[82] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(82)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_2c6d4a88-ae62-11eb-bb92-0050560120e8/lg-435-gazonokosilka-benzinovaya-eco-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(82)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(82)}> Lawn mower ECO LG-43589</div>
    <CartOperation key1="82" price1="186"/>
  </div>
  <div className={`${SearchProductsArray[83] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(83)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_c922a17f-f036-11ee-8db3-005056012b6d/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(83)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(83)}>  Electric scooter Ninebot Kickscooter F2 Plus</div>
    <CartOperation key1="83" price1="805"/>
  </div>
  <div className={`${SearchProductsArray[84] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(84)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_f0fd8648-55a9-11eb-bb92-0050560120e8/50-m1000s-elektricheskaya-britva-braun-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(84)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(84)}> Electric shaver Braun Series 5 50-M1000s Mint</div>
    <CartOperation key1="84" price1="93"/>
  </div>
  <div className={`${SearchProductsArray[85] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(85)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_2ca8f269-a4a5-11ee-8db3-005056012b6d/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(85)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(85)}>  Air conditioner LG Eco Smart 2021 PC09SQR</div>
    <CartOperation key1="85" price1="929"/>
  </div>
  <div className={`${SearchProductsArray[86] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(86)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_62c91dcb-a3cd-11ed-bb92-005056012465/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(86)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(86)}> Navigator NAVITEL E777 Truck</div>
    <CartOperation key1="86" price1="137"/>
  </div>
  <div className={`${SearchProductsArray[87] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(87)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_73d6da85-f134-11ec-bb95-0050560120e8/ht-fn-002-ventilyator-holt-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(87)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(87)}>Ventilator HOLT HT-FN-002L</div>
    <CartOperation key1="87" price1="28"/>
  </div>
  <div className={`${SearchProductsArray[88] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(88)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_9866c035-531f-11ee-bb92-005056012464/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(88)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(88)}> Сonvector Electrolux ECH/B-2000 E</div>
    <CartOperation key1="88" price1="138"/>
  </div>
  <div className={`${SearchProductsArray[89] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(89)}></div>
    <img src='https://360shop.by/upload/cssinliner_webp/resize_cache/iblock/e11/500_500_140cd750bba9870f18aada2478b24840a/lxg3pu8uswheoy0ptbb1xz9nsgg8l0u8.webp' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(89)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(89)}> Game console Sony PlayStation 5 (PS5) Slim</div>
    <CartOperation key1="89" price1="562"/>
  </div>
  <div className={`${SearchProductsArray[90] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(90)}></div>
    <img src='https://shop.mts.by/upload/resize_cache/webp/iblock/7c9/xyjsvwi7zmq7bs585qwfw3ecfo6mn8v3/270_500_1/DualSense_1.webp' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(90)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(90)}>Gamepad Sony PS5 DualSense CFI-ZCT1J</div>
    <CartOperation key1="90" price1="94"/>
  </div>
  <div className={`${SearchProductsArray[91] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(91)}></div>
    <img src='https://cdn21vek.by/img/galleries/7600/835/preview_b/xboxseriesx1tb1882_microsoft_62c54c3f3def6.jpeg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(91)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(91)}> Game console  Xbox Series X 1TB 1882</div>
    <CartOperation key1="91" price1="709"/>
  </div>
  <div className={`${SearchProductsArray[92] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(92)}></div>
    <img src='https://cdn21vek.by/img/galleries/8787/287/preview_b/xboxseriescarbonqat00005_microsoft_65c463f067401.jpeg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(92)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(92)}> Gamepad Microsoft Xbox Series X</div>
    <CartOperation key1="92" price1="84"/>
  </div>
  <div className={`${SearchProductsArray[93] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(93)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_48ca0112-bf9a-11ea-80c8-005056840c70/good_img_838fb797-cb26-11ea-80c8-005056840c70_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(93)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(93)}>  Night Light Yeelight Motion Sensor YLYD01YL</div>
    <CartOperation key1="93" price1="15"/>
  </div>
  <div className={`${SearchProductsArray[94] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(94)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_ababaf2c-9dba-11e5-813c-00505684b891/ea810870-kofemashina-krups-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(94)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(94)}> Coffee machine KRUPS ESSENTIAL EA810870</div>
    <CartOperation key1="94" price1="420"/>
  </div>
  <div className={`${SearchProductsArray[95] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(95)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_8fafb4cf-8a5c-11ec-bb94-0050560120e8/rz19-04170100-r3m1-veb-kamera-razer-kiyo-x-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(95)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(95)}> Web camera Razer Kiyo X RZ19-04170100-R3M1</div>
    <CartOperation key1="95" price1="97"/>
  </div>
  <div className={`${SearchProductsArray[96] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(96)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_2d19f60b-afa1-11e1-b8a5-005056af0003/ep-n-d-6140-02-elektroplity-bytovye-gefest-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(96)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(96)}>  Electric stove GEFEST EP N D 6140-02</div>
    <CartOperation key1="96" price1="263"/>
  </div>
  <div className={`${SearchProductsArray[97] > 0 ? 'block' : 'hidden'} w-[320px] h-[500px] ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'} rounded-2xl mx-3 my-5 ${isThemeChanged ? 'hover:drop-shadow-[10px_55px_55px_rgba(220,220,220,0.25)]' : 'hover:drop-shadow-[10px_55px_55px_rgba(0,0,0,0.25)]'}  hover:cursor-pointer`}>
  <div className={` z-20 w-[320px] h-[428px] bg-transparent inline-block`}  onClick={() =>  OpenInfoWindow(97)}></div>
    <img src='https://img.5element.by/import/images/ut/goods/good_ee3770b3-2f0e-11ef-8db4-005056012b6d/-1_600.jpg' className={`bg-transparent relative bottom-[425px] h-[255px] w-[500px] rounded-2xl ${isThemeChanged ? 'bg-gray-800' : 'bg-slate-100'}`} onClick={() => OpenInfoWindow(97)}></img>
    <div className={`relative bottom-[404px] text-xl mx-10  font-bold font-sans ${isThemeChanged ? 'text-slate-100' : 'text-gray-800'}`} onClick={() =>  OpenInfoWindow(97)}>Microphone MIRU MIC002</div>
    <CartOperation key1="97" price1="12"/>
  </div>
  <p className={` ${isThemeChanged ? 'text-slate-100' : 'text-gray-900'} ${width > 750 ? 'text-7xl' : 'text-5xl'} font-bold font-serif italic relative top-[60px]  ${totalCounterSearch > 0 ? 'hidden' : 'block'} `}>Nothing isn't searched </p>
  </div>
  </div>
</div>
<div className=" bg-slate-800 w-12/12 h-[130px] ">
    <div className='relative top-[40px] left-[60px] text-4xl text-slate-100 font-sans font-semibold'>© SIGMA electicity company</div>
    </div>

</>
)
}

