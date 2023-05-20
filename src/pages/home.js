import main_banner from './../images/main-banner.jpg'
import icon_photo_album from './../images/01-icon-photo-album.png'
import img_photo_album from './../images/01-img-photo-album.jpg' 
import icon_forest from './../images/01-icon-forest.png'
import img_forest from './../images/01-img-forest.jpg'
import icon_funny from './../images/01-icon-funny.png'
import img_funny from './../images/01-img-funny.jpg'
import icon_kitchen from './../images/01-icon-kitchen.png'
import img_kitchen from './../images/01-img-kitchen.jpg'
import icon_souvenirs from './../images/01-icon-souvenirs.png'
import img_suvernirs from './../images/01-img-suvernirs.jpg'
import icon_nature from './../images/01-icon-nature.png'
import img_nature from './../images/01-img-nature.jpg'

function Home () {
    return (
        <main>
            <section className="main-banner">
                <img src={main_banner} alt="" />
            </section>
            <section className="main-content">
                <div className="main-content-h1 container d-flex">
                    <h1>Город Ухта!</h1>
                </div>
                <div className="main-content-info container d-grid">
                    <div className="main-content-info__modul">
                        <div className="d-flex flex-sb">
                            <img src={icon_photo_album} alt="" />
                            <h2>Фотоальбомы</h2>
                        </div>
                        <p>Ухты, его видов, домов и достопримечательностей, которые сделаны местными жителями, туристами и фотографами . . .</p>
                        <img src={img_photo_album} alt="" />
                    </div>
                    <div className="main-content-info__modul">
                        <div className="d-flex flex-sb">
                            <img src={icon_forest} alt="" />
                            <h2>Заповедники</h2>
                        </div>
                        <p>На территории МОГО «Ухта» расположены особо охраняемые природные территории «Белая Кедва», «Вежавожский», «Вымский», «Мураснюр», «Нефть . . .</p>
                        <img src={img_forest} alt="" />
                    </div>
                    <div className="main-content-info__modul">
                        <div className="d-flex flex-sb">
                            <img src={icon_funny} alt="" />
                            <h2>Развлечения</h2>
                        </div>                        
                        <p>Ухта – город нефти и газа, но славится он не только промышленностью. Здесь много памятников природы и естественной истории . . .</p>
                        <img src={img_funny} alt="" />
                    </div>
                    <div className="main-content-info__modul">
                        <div className="d-flex flex-sb">
                            <img src={icon_kitchen} alt="" />
                            <h2>Кухня</h2> 
                        </div>                        
                        <p>В Ухте есть вполне достойные заведения с русской и интернациональной кухней  . . .</p>
                        <img src={img_kitchen} alt="" />
                    </div>
                    <div className="main-content-info__modul">
                        <div className="d-flex flex-sb">
                            <img src={icon_souvenirs} alt="" />
                            <h2>Что привезти из Ухты</h2>
                        </div>                        
                        <p>В Ухте много магазинов, во многих из них работают сувенирные отделы, где можно приобрести магнитики, фигурки, сделанные из меха в традициях народов  . . .</p>
                        <img src={img_suvernirs} alt="" />
                    </div>
                    <div className="main-content-info__modul">
                        <div className="d-flex flex-sb">
                            <img src={icon_nature} alt="" />
                            <h2>География и природа</h2>
                        </div>
                        <p>Климат в Ухте не слишком комфортный. Город находится под влиянием арктических, атлантических и континентальных воздушных масс. Зимой здесь дуют северные  . . .</p>
                        <img src={img_nature} alt="" />
                    </div>                
                </div>
            </section>
            <section className="weather container d-flex">
                <h1>Погода в Ухте сейчас</h1>
            </section>
        </main>
    )
}

export default Home;