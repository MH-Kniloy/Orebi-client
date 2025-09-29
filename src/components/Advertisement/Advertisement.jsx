import React from 'react'
import Container from '../Layouts/Container/Container'
import ad1 from '../../assets/ad1.png'
import ad2 from '../../assets/ad2.png'
import ad3 from '../../assets/ad3.png'
const Advertisement = () => {
  return (
    <section className='pt-[175px] pb-[130px]'>
        <Container>
            <div className='flex justify-between'>
                <div>
                    <img src={ad1} alt="" />
                </div>
                <div>
                    <img className='mb-10' src={ad2} alt="" />
                    <img src={ad3} alt="" />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Advertisement