import './CardInfo.css';

const Card = ({ usuario, nombre, puesto, img }) => (
  <div className="Card" >
    <div className="img-container">
      <img className="img" src={img}></img>
    </div>

    <div className="info-container">
      <p>#{usuario}</p>  
      <div className="separator"/>
      <p className="name">{nombre}</p>  
      <div className="job-position">
        <p>{puesto}</p>
      </div>   
    </div>
  </div>
 );

function CardInfo() {
  return (
    <div id="cardinfo">
      <p className="card-title">Bugabit</p>
      
      <div className="Card-info">      
        <Card usuario="scg" nombre="Samuel Chamizo González" puesto="Software Developer" img="https://media.licdn.com/dms/image/C4E03AQEjNViMc-Wonw/profile-displayphoto-shrink_800_800/0/1654013682848?e=2147483647&v=beta&t=TjlV9GPiTNDBJ3W1V2vFA_dSIht2H0_avtIiJPisOZs"/>  
        <Card usuario="dgo" nombre="Diego García" puesto="Software Developer" img="https://media.licdn.com/dms/image/C4E03AQHSD6YMb0Kr5g/profile-displayphoto-shrink_400_400/0/1660410443108?e=1677110400&v=beta&t=caQrNxgdTwQR9u7eraJe7WIj3VYD4VnMNCXvUgNPL5w"/>
        <Card usuario="frm" nombre="Francisco Rodriguez Morillo" puesto="Software Developer" img="https://media.licdn.com/dms/image/D4D03AQGaArMvrcZokQ/profile-displayphoto-shrink_400_400/0/1670836931870?e=1677110400&v=beta&t=AU_C2hct9I97XQYf6UjbLNA_MUj9u5jhQk9hd8ONAlk"/>
        <Card usuario="cg" nombre="Cristina Guzmán" puesto="Software Developer" img="https://media.licdn.com/dms/image/C4E03AQHeRrMPvx1ZkQ/profile-displayphoto-shrink_400_400/0/1654603141726?e=1677110400&v=beta&t=kCqVUI6pv8OSLOZf5WQCKLvG_agngibKn_5EtIsCY2I"/>
        <Card usuario="cv" nombre="Carlos Villarreal" puesto="Software Developer" img="https://media.licdn.com/dms/image/C5603AQHcLVG_3IZc9w/profile-displayphoto-shrink_100_100/0/1603022959457?e=1677110400&v=beta&t=soeXhObmnR6p6feahuDVkynG8eH9AFQnbVUzriD5pIM"/>
        <Card usuario="obg" nombre="Óscar Bermudez Garrido" puesto="Software Developer" img="https://media.licdn.com/dms/image/C4E03AQEfquRm-7Tw3g/profile-displayphoto-shrink_100_100/0/1656590588070?e=1677110400&v=beta&t=Otwv5f_UevIEevDcKAGBeHzFEScYVGerhASo5wHoD1c"/>  
        <Card usuario="jsr" nombre="Javier Salado Ramos" puesto="Software Developer" img="https://media.licdn.com/dms/image/C4D03AQF4WG1uwgUNfQ/profile-displayphoto-shrink_100_100/0/1630495225250?e=1677110400&v=beta&t=-EouZeUTO7o4LArQ5K-F6girPWndjgflr5V-7IaS1lM"/>
        <Card usuario="vm" nombre="Victor Monteseirin" puesto="Software Developer" img="https://media.licdn.com/dms/image/C4D03AQHr_nuR9PnILw/profile-displayphoto-shrink_100_100/0/1663264909612?e=1677110400&v=beta&t=HWaV-rSPl8_esMgeQZcikAj-g_MaI1zQs4K-RpmLhWg"/>
        <Card usuario="rma" nombre="Raúl Martínez Álvarez" puesto="Software Developer" img="https://media.licdn.com/dms/image/D5603AQG-i1Fa1Vq2kQ/profile-displayphoto-shrink_100_100/0/1633612105553?e=1677110400&v=beta&t=q4wTx1-pSdmUNJPD2281_-WfBGO1lvqzctTt2GzOShI"/>
      </div>
    </div>
    
    
  );
}

export default CardInfo;
