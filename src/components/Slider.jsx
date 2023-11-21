import { useEffect, useState } from "react";
import { FcPrevious,FcNext } from "react-icons/fc";
import {MdOutlineArrowBackIos, MdOutlineArrowForwardIos} from 'react-icons/md'

export default function Slider(){
    const imgList = ['1.jpg', '2.webp', '3.webp', '4.webp', '5.jpg', '6.jpg']
    const [activeImg, setActiveImg] = useState(0);
    const [disablePrevButton, setDisablePrevButton] = useState(true);
    const [disableNextButton, setDisableNextButton] = useState(false);
    const [zoomPrevIcon, setZoomPrevIcon] = useState(false);
    const [zoomNextIcon, setZoomNextIcon] = useState(false);

    function renderPrevImg(){
        setActiveImg(activeImg-1);
    }

    function renderNextImg(){
        setActiveImg(activeImg+1)
    }

    useEffect(()=>{
        if(activeImg === 0)
            setDisablePrevButton(true);
        else if(activeImg === imgList.length-1)
            setDisableNextButton(true);
        else {
            setDisablePrevButton(false);
            setDisableNextButton(false);
        }
    },[activeImg])

    return(
        <div className="w-[1500px] h-[680px] bg-white px-[2rem] pt-[2rem] drop-shadow-lg">
            <div className=" h-[85%] outline outline-1 outline-gray-200 relative">
                <img
                    src={`/images/${imgList[activeImg]}`}
                    alt={"img"}
                    className="w-full h-full"
                />
                 <div className="absolute top-[40%]">
                    <button className="bg-gray-200 w-[90px] h-[100px] rounded-r-full text-[1.5rem] font-bold flex items-center justify-center opacity-50" 
                        disabled={disablePrevButton}
                        onClick={renderPrevImg}
                        onMouseOver={()=>{if(!disablePrevButton)setZoomPrevIcon(true)}}
                        onMouseLeave={()=>{setZoomPrevIcon(false)}}
                        title={disablePrevButton? 'disabled' : 'prev'}
                    >
                        <MdOutlineArrowBackIos size={zoomPrevIcon ? '3.5rem':'2.5rem'}/>
                    </button>
                </div>
                <div className="absolute top-[40%] right-0">
                    <button className="bg-gray-200 w-[90px] h-[100px] rounded-l-full text-[1.5rem] font-bold flex items-center justify-center opacity-50"
                        disabled={disableNextButton}
                        onClick={renderNextImg}
                        onMouseOver={()=>{if(!disableNextButton)setZoomNextIcon(true)}}
                        onMouseLeave={()=>{setZoomNextIcon(false)}}
                        title={disableNextButton? 'disabled':'next'}
                    >
                        <MdOutlineArrowForwardIos size={zoomNextIcon ? '3.5rem':'2.5rem'}/>
                    </button>
                </div>
            </div>
            <div className="h-[15%] ">
               <div className="h-[30%] flex items-center justify-center">
                    {
                        imgList.map((item,index)=>{
                            return(
                                <div key={index} className={`w-[10px] h-[10px] rounded-full mx-[0.2rem] ${activeImg === index ? 'bg-gray-500':'bg-gray-300'}`}>
                                </div>
                            )
                        })
                    }
                   
               </div>
               <div className="h-[70%]  flex items-center justify-center">
                    <div className="w-[150px] h-full flex justify-around items-center ">
                        <button className="bg-gray-200 w-[50px] h-[72%] rounded-full text-[1.5rem] font-bold flex items-center justify-center" 
                            disabled={disablePrevButton}
                            onClick={renderPrevImg}
                            onMouseOver={()=>{if(!disablePrevButton)setZoomPrevIcon(true)}}
                            onMouseLeave={()=>{setZoomPrevIcon(false)}}
                            title={disablePrevButton? 'disabled' : 'prev'}
                        >
                            <FcPrevious size={zoomPrevIcon ? '1.5rem':'1rem'}/>
                        </button>
                        <button className="bg-gray-200 w-[50px] h-[72%] rounded-full text-[1.5rem] font-bold flex items-center justify-center"
                            disabled={disableNextButton}
                            onClick={renderNextImg}
                            onMouseOver={()=>{if(!disableNextButton)setZoomNextIcon(true)}}
                            onMouseLeave={()=>{setZoomNextIcon(false)}}
                            title={disableNextButton? 'disabled':'next'}
                        >
                            <FcNext size={zoomNextIcon ? '1.5rem':'1rem'}/>
                        </button>
                    </div>
               </div>
            </div>
        </div>
    )
}