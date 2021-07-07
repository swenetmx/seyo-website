import React from "react"
import classes from "stylesheets/distributors.module.less"
import "stylesheets/main.module.less"
import banner from "images/distributors/banner.jpg"
import otzun from "images/distributors/otzun.png"
import remotka from "images/distributors/remotka.png"
import smart from "images/distributors/smart.png"
import factoria from "images/distributors/factoria.png"
import herrajes from "images/distributors/herrajes.jpg"
import cancun from "images/distributors/cancun.jpg"
import dysmx from "images/distributors/dysmx.png"
import wit from "images/distributors/wit.png"
import turrme from "images/distributors/turrme.png"
import cymisa from "images/distributors/cymisa.png"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import ContactForm from "components/ContactForm/ContactForm"

const Distributor = ({ location, content, img, name, website }) => (
  <div>
    <div>
      <p>{location}</p>
      <img src={img} alt="" />
    </div>
    <div>
      <h4>{name}</h4>
      <div>{content}</div>
      {website ? (
        <p>
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </p>
      ) : null}
    </div>
  </div>
)

export default () => (
  <Layout
    title="Seyo | Distribuidores"
    description="Únete a nuestra red de distribuidores o encuentra el más cercano a ti."
    canonical="/distribuidores/"
  >
    <div className={classes.container}>
      <PreHeader type="h2" />
      <h1>DISTRIBUIDORES</h1>
      <div className={classes.banner}>
        <img src={banner} alt="Banner" />
      </div>
      <h2 className={classes.intro}>Encuentra el más cercano</h2>
      <div className={classes.distributors}>
        <Distributor
          location="CDMX"
          name="Herrajes Bralles"
          content={
            <p>
              <b>Dirección:</b> Casas Grandes No. 5 Loc. C Col: Narvarte, C.P.
              03020 Del. Benito Juárez. Entre diagonal de san Antonio esquina
              con Obrero Mundial
              <br />
              <b>Horario:</b> Lunes a Viernes de 9:00 hrs a 18:30 hrs y
              Sábados de 9:00 hrs a 15: 00hrs <br />
              <b>Tel:</b> (0155) 5530.4563 | (0155) 5530.4900
            </p>
          }
          website="https://www.herrajesbralle.com.mx/"
          img={herrajes}
        />
        <Distributor
          location="CDMX"
          name="OTZUN CDMX"
          website="https://www.otzun.com"
          content={
            <p>
              <b>Contacto:</b> Nancy Villalpando <br />
              <b>Tel:</b> 56 1112 4343 <br />
              <b>Dirección:</b> Calle 5 #45, San Pedro de los Pinos, 03800
              Ciudad de México, CDMX <br />
              <b>Correo Electrónico:</b> ventas@otzun.com <br />
              <b>Horario de Atención:</b> Lunes a Viernes 9:00AM - 6:00PM
            </p>
          }
          website="http://www.otzun.com/ "
          img={otzun}
        />
        <Distributor
          location="CDMX"
          name="DYSMX Domótica y Seguridad"
          website="https://www.dysmx.com"
          content={
            <p>
              <b>Contacto:</b>  Mauricio Paulin <br />
              <b> Dirección: </b> Rio Misisipi 49, int 1401 Cuauhtémoc,
              Cuauhtémoc CDMX 06500
              <br />
              <b>Teléfono:</b> 5576424003 <br />
              <b> Horario de Atención:</b> Lunes a Viernes  9:00 am a 19:00 pm y
              Sábado de 9:00 am a 2:00 pm
              <br />
            </p>
          }
          img={dysmx}
        />
        <Distributor
          location="EDO. MEX."
          name="Remottika"
          website="https://www.remottika.com"
          content={
            <p>
              <b>Persona de contacto:</b> Efraín Ponce <br />
              <b>Tel:</b> +52 55 3232 4191 <br />
              <b>Dirección:</b> Av. Lomas Verdes 961-11, Col. 5ª. Sección de
              Lomas Verdes, Naucalpan, Edo. de México. C.P. 53126 <br />
              <b>Correo Electrónico:</b> ventas@remottika.com
              <br />
              <b>Horario de Atención:</b> Lunes a Viernes 9:00 hrs – 18:00 hrs{" "}
              <br />
            </p>
          }
          img={remotka}
        />
        <Distributor
          location="PUEBLA"
          name="Smart Living"
          content={
            <p>
              <b>Persona de contacto:</b> Nadia Díaz <br />
              <b>Teléfono de contacto:</b> 2214089174 <br />
              <b>Dirección:</b> Centro comercial Pabellón del Ángel, Local 6.
              Atlixcáyotl 3106, Reserva Territorial Atlixcáyotl, Corredor
              Comercial Desarrollo Atlixcayotl, 72810 <br />
              <b>Horario de atención:</b> Lunes a Viernes de 9:00 hrs a 17:00
              hrs <br />
            </p>
          }
          img={smart}
        />
        <Distributor
          location="PUEBLA"
          name="BETA FACTORÍA"
          content={
            <p>
              <b>Dirección:</b> Lago de Chapala pte #703, Colonia Manantiales,
              Momoxpan. 72757 Puebla de Zaragoza, México <br />
              <b> Teléfono:</b> 222 379 7262 <br />
              <b>Horario de atención: </b>Lunes a Viernes de 9:00 hrs a 18:00
              hrs <br />
            </p>
          }
          img={factoria}
        />
        <Distributor
          location="CANCÚN"
          name="SEGURIDAD Y REDES CANCUN"
          website="https://www.seguridadyredescancun.com"
          content={
            <p>
              <b>Persona de contacto: </b>Arturo Villagrán <br />
              <b>
                Correo de contacto:
              </b> avillagran@seguridadyredescancun.com <br />
              <b>Horario de atención:</b> Lunes a Viernes 9:00 a 18:00
              <br />
              <b>Teléfono de contacto:</b> 9982433591 <br />
            </p>
          }
          img={cancun}
        />
        <Distributor
          location="CANCÚN"
          name="OTZUN CANCÚN"
          website="https://www.otzun.com"
          content={
            <p>
              <b>Contacto:</b> Arturo Gleason <br />
              <b>Teléfono de contacto: </b>998 153 5094 <br />
              <b>Dirección: </b>Calle Cedro #8 Colonia Álamos, Cancún Quintana
              Roo. <br />
              <b>Correo Electrónico:</b> ventas@otzun.com <br />
              <b>Horario de Atención:</b> Lunes a Viernes 9:00AM - 6:00PM
              <br />
            </p>
          }
          img={otzun}
        />
        <Distributor
          location="GUADALAJARA"
          name="WITT SMART SYSTEMS"
          website="https://www.witt.mx"
          content={
            <p>
              <b>Persona de contacto:</b> Arq. Liliana Sánchez <br />
              <b>Correo de contacto:</b>  contacto@witt.mx <br />
              <b>Horario de atención:</b> LUNES A VIERNES 9 A 6:00 PM <br />
              <b>Teléfono de contacto: </b>333658569 O 3336140043 <br />
            </p>
          }
          img={wit}
        />
        <Distributor
          location="CHIHUAHUA"
          name="OTZUN CHIHUAHUA"
          website="https://www.otzun.com"
          content={
            <p>
              <b>Contacto:</b> Fernando Maeda  <br />
              <b> Dirección: </b>Berlín #1410. Col. Mirador. 31205. Chihuahua,
              Chih. <br />
              <b>Teléfono:</b> 6142472162 <br />
              <b>Correo Electrónico: </b>ventas@otzun.com <br />
              <b> Horario de Atención:</b> Lunes a Viernes 9:00AM - 6:00PM{" "}
              <br />
            </p>
          }
          img={otzun}
        />
        <Distributor
          location="COAHUILA"
          name="TURRME"
          website="https://www.turrme.com/"
          content={
            <p>
              <b>Contacto:</b> Miguel Ángel Torres Gámez <br />
              <b>Dirección: </b>Nazario Ortiz Garza 296 colonia los pinos cuarto
              sector, Saltillo, Coahuila.
              <br />
              <b>Teléfono:</b> 8443815937 <br />
              <b>Horario de Atención:</b> Lunes a Viernes de 9:00am a 17:00 pm
              <br />
            </p>
          }
          img={turrme}
        />
        <Distributor
          location="EDO. DE MÉXICO"
          name="CYMISA (Chapas y Maderas Importadas S.A. de C.V.)"
          website="https://www.cymisa.com.mx/"
          content={
            <p>
              <b>Dirección: </b> Av. Independencia 1323 Ote. C.P.50070. Toluca,
              México.
              <br />
              <b>Teléfono:</b> 7222155168 <br />
              <b>Horario de Atención: </b> Lunes a Viernes de 8:30 a 18:00 hrs.
              <br />
            </p>
          }
          img={cymisa}
        />
      </div>
      <h2 className={classes.intro}>
        Integrate a la red de <b>distribuidores SEYO</b>
      </h2>
      <ContactForm />
    </div>
  </Layout>
)
