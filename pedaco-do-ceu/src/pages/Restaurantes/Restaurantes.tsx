import {  ArrowDown, MapPin, Phone } from 'phosphor-react';
import Page from '../Main/Index';
import styles from './RestaurantePage.module.css'
import { useState } from 'react';
import { SideBar } from '../../components/SideBar/Sidebar';

export function Restaurantes() {
    const [showHours, setShowHours] = useState({
        'Campo Grande 1': false,
        'Campo Grande 2': false,
        'Campo Grande 3': false,
        'Campo Grande 4': false,
        'Campo Grande 5': false,
    });

    const toggleHours = (restaurante) => {
        setShowHours(prevState => ({
            ...prevState,
            [restaurante]: !prevState[restaurante]
        }));
    };

    return (
        <>
        <Page.Header/>

        <SideBar/>
        <div className={styles.container}>
        <div className={styles.grid}>
            <div className={styles.card}>
                <div className={styles.header}><h1>Campo Grande</h1></div>
                <MapPin className={styles.MapPin}/>
                <hr className={styles.underline}></hr>
                <p>Estrada das Capoeiras, xxx, Loja z, Campo Grande,
                     Rio de Janeiro - RJ - CEP: XXXXX-XXX
                </p>
                <div className={styles.telefone}>
                <Phone className={styles.Phone}/>
                <h3>Telefone:</h3>
                <p>(21) XXXX-XXXX</p>
                </div>
                <a className={styles.label} onClick={() => toggleHours('Campo Grande 1')}>
                        Horario de Funcionamento 
                        <ArrowDown className={styles.ArrowDown}/> 
                    </a>
                    {showHours['Campo Grande 1'] && (
                        <div className={styles.horarios}>
                            <p><strong>Segunda a Sexta:</strong> 10:00 - 22:00</p>
                            <p><strong>Sábado:</strong> 12:00 - 20:00</p>
                            <p><strong>Domingo:</strong> Fechado</p>
                        </div>
                    )}

                <button><p> Ver No Mapa</p></button>
            </div>
        </div>

        <div className={styles.grid}>
            <div className={styles.card}>
                <div className={styles.header}><h1>Campo Grande</h1></div>
                <MapPin className={styles.MapPin}/>
                <hr className={styles.underline}></hr>
                <p>Estrada das Capoeiras, xxx, Loja z, Campo Grande,
                     Rio de Janeiro - RJ - CEP: XXXXX-XXX
                </p>
                <div className={styles.telefone}>
                <Phone className={styles.Phone}/>
                <h3>Telefone:</h3>
                <p>(21) XXXX-XXXX</p>
                </div>
                <a className={styles.label} onClick={() => toggleHours('Campo Grande 2')}>
                        Horario de Funcionamento 
                        <ArrowDown className={styles.ArrowDown}/> 
                    </a>
                    {showHours['Campo Grande 2'] && (
                        <div className={styles.horarios}>
                            <p><strong>Segunda a Sexta:</strong> 10:00 - 22:00</p>
                            <p><strong>Sábado:</strong> 12:00 - 20:00</p>
                            <p><strong>Domingo:</strong> Fechado</p>
                        </div>
                    )}    

                <button><p> Ver No Mapa</p></button>
            </div>
        </div>

        <div className={styles.grid}>
            <div className={styles.card}>
                <div className={styles.header}><h1>Campo Grande</h1></div>
                <MapPin className={styles.MapPin}/>
                <hr className={styles.underline}></hr>
                <p>Estrada das Capoeiras, xxx, Loja z, Campo Grande,
                     Rio de Janeiro - RJ - CEP: XXXXX-XXX
                </p>
                <div className={styles.telefone}>
                <Phone className={styles.Phone}/>
                <h3>Telefone:</h3>
                <p>(21) XXXX-XXXX</p>
                </div>
                <a className={styles.label} onClick={() => toggleHours('Campo Grande 3')}>
                        Horario de Funcionamento 
                        <ArrowDown className={styles.ArrowDown}/> 
                    </a>
                    {showHours['Campo Grande 3'] && (
                        <div className={styles.horarios}>
                            <p><strong>Segunda a Sexta:</strong> 10:00 - 22:00</p>
                            <p><strong>Sábado:</strong> 12:00 - 20:00</p>
                            <p><strong>Domingo:</strong> Fechado</p>
                        </div>
                    )}  

                <button><p> Ver No Mapa</p></button>
            </div>
        </div>

        <div className={styles.grid}>
            <div className={styles.card}>
                <div className={styles.header}><h1>Campo Grande</h1></div>
                <MapPin className={styles.MapPin}/>
                <hr className={styles.underline}></hr>
                <p>Estrada das Capoeiras, xxx, Loja z, Campo Grande,
                     Rio de Janeiro - RJ - CEP: XXXXX-XXX
                </p>
                <div className={styles.telefone}>
                <Phone className={styles.Phone}/>
                <h3>Telefone:</h3>
                <p>(21) XXXX-XXXX</p>
                </div>
                <a className={styles.label} onClick={() => toggleHours('Campo Grande 4')}>
                        Horario de Funcionamento 
                        <ArrowDown className={styles.ArrowDown}/> 
                    </a>
                    {showHours['Campo Grande 4'] && (
                        <div className={styles.horarios}>
                            <p><strong>Segunda a Sexta:</strong> 10:00 - 22:00</p>
                            <p><strong>Sábado:</strong> 12:00 - 20:00</p>
                            <p><strong>Domingo:</strong> Fechado</p>
                        </div>
                    )}     

                <button><p> Ver No Mapa</p></button>
            </div>
        </div>   

        <div className={styles.grid}>
            <div className={styles.card}>
                <div className={styles.header}><h1>Campo Grande</h1></div>
                <MapPin className={styles.MapPin}/>
                <hr className={styles.underline}></hr>
                <p>Estrada das Capoeiras, xxx, Loja z, Campo Grande,
                     Rio de Janeiro - RJ - CEP: XXXXX-XXX
                </p>
                <div className={styles.telefone}>
                <Phone className={styles.Phone}/>
                <h3>Telefone:</h3>
                <p>(21) XXXX-XXXX</p>
                </div>
                <a className={styles.label} onClick={() => toggleHours('Campo Grande 5')}>
                        Horario de Funcionamento 
                        <ArrowDown className={styles.ArrowDown}/> 
                    </a>
                    {showHours['Campo Grande 5'] && (
                        <div className={styles.horarios}>
                            <p><strong>Segunda a Sexta:</strong> 10:00 - 22:00</p>
                            <p><strong>Sábado:</strong> 12:00 - 20:00</p>
                            <p><strong>Domingo:</strong> Fechado</p>
                        </div>
                    )}  

                <button><p> Ver No Mapa</p></button>
            </div>
        </div> 
        
        </div>
        <Page.Footer/>
    </>
    );
}