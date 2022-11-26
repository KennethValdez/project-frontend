import React, { useState } from 'react'
import { NavItem, NavLink,Nav,TabContent, TabPane } from 'reactstrap'
import './component.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PrimerComponente() {
  const[activeTab,setActiveTab] = useState("1");
  const cambiarTab = (numeroTab) => {
    if (activeTab !== numeroTab){
      setActiveTab(numeroTab);
    }
  }


return (
    <div className="palana">
    <div className='tab'>
        <div className='contenedor'>    
            <Nav>
              <spam>AVISOS DESTACADOS</spam>
         <NavItem>
          <NavLink  className={(activeTab=="1" ? "activeTab baseTab" : "baseTab" ) } onClick={()=>cambiarTab("1")}>
          AUTOS USADOS
          </NavLink>
         </NavItem>
         <NavItem>
          <NavLink className={(activeTab=="2" ? "activeTab baseTab" : "baseTab" )} onClick={()=>cambiarTab("2")}>
       AUTOS NUEVOS
          </NavLink>
         </NavItem>
         <NavItem>
          <NavLink className={(activeTab=="3" ? "activeTab baseTab" : "baseTab" )} onClick={()=>cambiarTab("3")}>
           MOTOS
          </NavLink>
         </NavItem>
         <NavItem>
          <NavLink className={(activeTab=="4" ? "activeTab baseTab" : "baseTab" )} onClick={()=>cambiarTab("4")}>
           BUSES Y CAMIONES 
          </NavLink>
         </NavItem>

      </Nav>

      <TabContent activeTab={activeTab}>
         <TabPane tabId="1">
           <div className='container'>
           <br />
             <br />

             <img src='https://www.kia.com/content/dam/kwcms/gt/en/images/discover-kia/voice-search/parts-80-1.jpg'
              width={320} height={280}
              />
               <img src='http://farm3.static.flickr.com/2650/3868949370_4b06b52168.jpg'
              width={320} height={280}
              />
               <img src='https://www.elcarrocolombiano.com/wp-content/uploads/2021/01/20210124-LOS-10-CARROS-MAS-VENDIDOS-DEL-MUNDO-EN-2020-01.jpg'
              width={320} height={280}
              />
               <img src='http://www.eltiempo.com/files/article_multimedia/uploads/2017/03/30/58dd0901aab26.jpeg'
              width={320} height={280}
              />
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhJUwjsfFpGFQArCEYNDgMeKifAfKJAxTwg&usqp=CAU'
              width={320} height={280}
              />
               <img src='https://www.elcarrocolombiano.com/wp-content/uploads/2022/02/20220211-MARCAS-CARROS-MAS-CONFIABLES-2022-PORTADA.jpg'
              width={320} height={280}
              />
               <img src='https://i.ytimg.com/vi/zRlEDI01RFU/maxresdefault.jpg'
              width={320} height={280}
              />
               <img src='https://elcomercio.pe/resizer/pRd-CJohT3KidXA2LJ4PPDMQp7M=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XBMSGOM3GBG33K2Q4SAC2YVIVY.jpg'
              width={320} height={280}
              />
               <img src='https://i0.wp.com/pysnnoticias.com/wp-content/uploads/2021/07/coches-mas-bonitos-del-mundo.jpg?resize=560%2C479&ssl=1'
              width={320} height={280}
              />
           </div>

         </TabPane>

         <TabPane tabId="2">
           <div className='container'>
             <br />
             <br />

             <img src='https://i.ytimg.com/vi/zRlEDI01RFU/maxresdefault.jpg'
              width={320} height={280}
              />
               <img src='http://www.eltiempo.com/files/article_multimedia/uploads/2017/03/30/58dd0901aab26.jpeg'
              width={320} height={280}
              />
               <img src='http://farm3.static.flickr.com/2650/3868949370_4b06b52168.jpg'
              width={320} height={280}
              />
               <img src='https://i.ytimg.com/vi/zRlEDI01RFU/maxresdefault.jpg'
              width={320} height={280}
              />
               <img src='http://farm3.static.flickr.com/2650/3868949370_4b06b52168.jpg'
              width={320} height={280}
              />
               <img src='https://i.ytimg.com/vi/zRlEDI01RFU/maxresdefault.jpg'
              width={320} height={280}
              />
               <img src='http://farm3.static.flickr.com/2650/3868949370_4b06b52168.jpg'
              width={320} height={280}
              />
               <img src='https://i.ytimg.com/vi/zRlEDI01RFU/maxresdefault.jpg'
              width={320} height={280}
              />
               <img src='http://farm3.static.flickr.com/2650/3868949370_4b06b52168.jpg'
              width={320} height={280}
              />
           </div>

         </TabPane>


         <TabPane tabId="3">
           <div className='container'>
           <br />
             <br />

             <img src='https://i.ytimg.com/vi/zRlEDI01RFU/maxresdefault.jpg'
              width={320} height={280}
              />
               <img src='https://as01.epimg.net/meristation/imagenes/2021/07/01/noticias/1625147811_552189_1625147851_noticia_normal.jpg'
              width={320} height={280}
              />
               <img src='https://i.ytimg.com/vi/zRlEDI01RFU/maxresdefault.jpg'
              width={320} height={280}
              />
               <img src='https://as01.epimg.net/meristation/imagenes/2021/07/01/noticias/1625147811_552189_1625147851_noticia_normal.jpg'
              width={320} height={280}
              />
               <img src='https://i.ytimg.com/vi/zRlEDI01RFU/maxresdefault.jpg'
              width={320} height={280}
              />
               <img src='https://as01.epimg.net/meristation/imagenes/2021/07/01/noticias/1625147811_552189_1625147851_noticia_normal.jpg'
              width={320} height={280}
              />
               <img src='https://i.ytimg.com/vi/zRlEDI01RFU/maxresdefault.jpg'
              width={320} height={280}
              />
               <img src='https://as01.epimg.net/meristation/imagenes/2021/07/01/noticias/1625147811_552189_1625147851_noticia_normal.jpg'
              width={320} height={280}
              />
               <img src='https://i.ytimg.com/vi/zRlEDI01RFU/maxresdefault.jpg'
              width={320} height={280}
              />
           </div>

         </TabPane>

         <TabPane tabId="4">
           <div className='container'>
           <br />
             <br />

             <img src='https://as01.epimg.net/meristation/imagenes/2021/07/01/noticias/1625147811_552189_1625147851_noticia_normal.jpg'
              width={320} height={280}
              />
               <img src='https://i.ytimg.com/vi/zRlEDI01RFU/maxresdefault.jpg'
              width={320} height={280}
              />
               <img src='https://as01.epimg.net/meristation/imagenes/2021/07/01/noticias/1625147811_552189_1625147851_noticia_normal.jpg'
              width={320} height={280}
              />
               <img src='https://i.ytimg.com/vi/zRlEDI01RFU/maxresdefault.jpg'
              width={320} height={280}
              />
               <img src='https://as01.epimg.net/meristation/imagenes/2021/07/01/noticias/1625147811_552189_1625147851_noticia_normal.jpg'
              width={320} height={280}
              />
               <img src='https://i.ytimg.com/vi/zRlEDI01RFU/maxresdefault.jpg'
              width={320} height={280}
              />
              <img src='https://as01.epimg.net/meristation/imagenes/2021/07/01/noticias/1625147811_552189_1625147851_noticia_normal.jpg'
              width={320} height={280}
              />
              <img src='https://i.ytimg.com/vi/zRlEDI01RFU/maxresdefault.jpg'
              width={320} height={280}
              />
                <img src='https://as01.epimg.net/meristation/imagenes/2021/07/01/noticias/1625147811_552189_1625147851_noticia_normal.jpg'
              width={320} height={280}
              />
            </div>
            </TabPane>
        </TabContent>
          </div>
    </div>
    </div>
  )
}

export default PrimerComponente