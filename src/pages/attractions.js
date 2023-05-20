import img_attractions_muzey from './../images/03-img-attractions-muzey.jpg';
import img_attractions_muzey2 from './../images/03-img-attractions-muzey2.jpg';
import img_attractions_vechnyiogon from './../images/03-img-attractions-vechnyiogon.jpg';
import img_attractions_detskiypark from './../images/03-img-detskiypark.jpg';
import img_attractions_detskiypark2 from './../images/03-img-detskiypark2.jpg';
import img_attractions_hram from './../images/03-img-attractions-hram.jpg';

function Attractions () {
    return (
        <main>
            <h1 className="container">Достопримечательности в Ухте</h1>
            <section className="attractions container">
                <h2>1. Ухтинский историко-краеведческий музей</h2>
                <div className="d-flex">
                    <img src={img_attractions_muzey} alt="" />
                    <p>Историко-краеведческий музей расположен в одном из старейших зданий города, памятнике истории. 
                        Открыт в 1981 году. В этом доме с 1935 по 1950 года проживал почётный буровой мастер, один из первопроходцев Севера, 
                        «Ухтинец века» - Иван Ильич Косолапкин. В объединённых фондах музея более 55 тысяч экспонатов.
                        <br />
                        Историко-краеведческий музей расположен в одном из старейших зданий города, памятнике истории. Открыт в 1981 году. В этом доме с 1935 по 1950 года проживал почётный буровой мастер, один из первопроходцев Севера, «Ухтинец века» - Иван Ильич Косолапкин. 
                        В объединённых фондах музея более 55 тысяч экспонатов.
                    </p>
                </div>
                <div className="muzey-bottom d-flex">
                    <p>
                        В строительстве первых экспозиций принимали участие краеведы, почётные граждане Ухты. Они предлагали свои идеи для оформления музейных залов и делились личными материалами, которые положили начало формированию музейного фонда. 
                        <br />
                        В настоящий момент в структуру учреждения входят 5 музеев: историко-краеведческий музей с кабинетом-музеем А.Я. Кремса, музей геологической коллекции, музей природы Земли, музей истории поселка Водный, музей Ярегских шахт. 
                        <br />
                        Фонды музея включают в себя обширный документальный материал по истории города, истории развития нефтяной и газовой отраслей региона, предметы традиционного быта народа коми, предметы археологической, естественно-научной коллекции и многое другое. 
                        <br />
                        Сегодня музей перестраивается и приспосабливается к существованию в изменившихся условиях: внедряет новые формы работы с посетителями, активно участвует в проектной деятельности. И, как многие муниципальные музеи, находится в поиске своей индивидуальности.
                    </p>
                    <img src={img_attractions_muzey2} alt="" />
                </div>
                <p></p>

                <h2>2. Вечный огонь</h2>
                <div className="d-flex">
                    <img src={img_attractions_vechnyiogon} alt="" />
                    <p>Расположен он в так называемом "старом городе", т.е в историческом центре города на берегу реки.
                        <br />
                        Впервые Вечный огонь загорелся в Ухте 9 мая 1980 года, в день, когда страна отмечала 35-летие Победы в Великой Отечественной войне. Зажег пламя защитник Сталинграда, участник парада Победы 45-го года на Красной площади Николай Заложных. 
                        Строительство памятника началось в 1978 году, окончательно он был достроен в 1984.
                        <br />
                        Мемориал «Вечный огонь» представляет собой 5 острых лучей, которые устремлены в небо на 15 метров. Внутри этой композиции выложена пятиконечная звезда, обрамленная лавровым венком. В центре звезды выложен постамент из гранита, где горит Вечный огонь. 
                        Также здесь можно увидеть изображения 5 орденов Великой Отечественной войны разной степени.
                    </p>
                </div>

                <h2>3. Детский парк имени Павлика Морозова</h2>
                <div className="d-flex">
                    <img src={img_attractions_detskiypark} alt="" />
                    <p>
                        9 апреля 1953 г. городскими властями принято официальное решение оборудовать и открыть в южной части парка Культуры и отдыха им. М. Горького детский парк и присвоить ему имя Павлика Морозова.
                        <br />
                        Первый директор детского парка Г. А. Карчевский был одержим идеей построить настоящее государство для детей. Поэтому многое делалось руками самих детей.
                        <br />
                        Помощь в обустройстве Детского парка оказывали 70 предприятий и учреждений. В 1970-е проезд в ухтинских автобусах стоил шесть копеек и был на одну копейку больше, чем в других городах Коми - разница шла в бюджет Дворца пионеров.
                    </p>
                </div>
                <div className="d-flex">
                    <p>
                        В обновленном парке отремонтированы пешеходные дорожки и проложены велодорожки, установлены детский комплекс, карусель, качели, концертная и спортивная площадки, канатный аттракцион, скейт-парк и детский автодром.
                    </p>
                    <img src={img_attractions_detskiypark2} alt="" />
                    
                </div>
                <h2>4. Храм святителя Стефана Пермского</h2>
                <div className="d-flex">
                <img src={img_attractions_hram} alt="" />
                    <p>
                        Его жизнь тесно переплетается с существованием ухтынского прихода, которому так же пришлось заново проповедовать веру в малозаселенных землях коми.
                        <br />
                        Это был первый храм в Ухте, и хоть приход многократно переносился, и первое здание храма было закрыто, он изначально был освящен в честь епископа Стефана Пермского, епископа и проповедника христианства в землях коми, который был проповедником и создателем Пермской епархии.
                        <br />
                        
                    </p>
                </div>

            </section>
        </main>
    )
}

export default Attractions;