import React, { useEffect } from 'react'
import gsap from 'gsap';

function Intro() {
  
    useEffect(() => {
        gsap.to('.intro', {
            delay: .5,
            duration: 1,
            opacity: 0,
            onComplete: () => {
                document.querySelector('.layout__container').removeChild(document.querySelector('.intro'))
              },
        })
    }, [])

    return (
        <div className='intro'>
            <p className='a'>Intro</p>
        </div>
    )
}

export default Intro
