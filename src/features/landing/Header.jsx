import React from 'react'
import { siteLogo, userIcon } from '../../../constants/assets';

const Header = () => {
    return (
        <section id='header'>

            <div className='top'>
                <div className='brand'>
                    <img 
                        src={siteLogo}
                        alt={"Miro"}
                    />
                </div>


                <div className='user'>
                    <img 
                        src={userIcon}
                        alt={"Icona utente"}
                    />
                </div>
            </div>


            <h1 className='grand'>
                Il tuo assistente digitale
            </h1>

            <div className='tags'>
                <span>100% Gratuito</span>
                <span>Risponde in 1 secondo</span>
                <span>Disponibile 24/7</span>
                <span>100% Gratuito</span>
            </div>

            <button>
                inizia
            </button>
        </section>
    )
}

export default Header;
