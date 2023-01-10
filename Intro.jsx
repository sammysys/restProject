import React from 'react'
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';



const Intro = () => {
    const [playVideo, setPlayVideo] = React.useState(false);
    const VidRef = React.useRef();

    const handleVideo = () => {
        setPlayVideo((prePlayVideo) => !prePlayVideo )
        if (playVideo) {
            VidRef.current.pause(); 
        } else {
            VidRef.current.play();
        }
    }
  return (
    <div className='app__video'>
        <video src={meal} ref={VidRef} type='video/mp4'loop controls={false} muted 

        />
        <div className='app__video-overlay flex__center'>
            <div className='app__video-overlay_circle flex__center'
            onClick={handleVideo}
            
            >
            {playVideo ? 
                <BsPauseFill color='#fff' fontsize='30'/>
                : <BsFillPlayFill color='#fff' fontsize='30'/> }

            </div>
        </div>
    </div>
  )
}

export default Intro