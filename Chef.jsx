import React from 'react'
import {SubHeading} from '../../components'
import { images} from '../../constants'
import './Chef.css'
const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding' >
        <div className='app__wrapper_img app__wrapper_img-reverse'>
            <img src={images.chef} alt="chef" />
        </div>
        <div className='app__wrapper_info'>
            <SubHeading title="Chef Word" />
            <h1 className='headtext__cormorant'>What we believe in</h1>
            <div className='app__chef-content'>
                <div className='app__chef-content_quot'>
                    <img src={images.quote} alt='quot' />
                    <p className='p__opensans'>lorm ipsom hsdfhsdfk</p>
                </div>
                <p className='p__opensans'> autcor lorem ipsoum</p>
            </div>
            <div className='app__chef-sign'>
                <p >Kevin</p>
                <p className='p__opensans'>chef & foundef</p>
                <img src={images.sign} alt='s' />
            </div>
        
        </div>
    </div>
  )
}

export default Chef