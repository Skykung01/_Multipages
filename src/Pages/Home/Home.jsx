import './Home.css';

import Card from 'react-bootstrap/Card'; function Home() {
   return (
      <div className='Home-container'>
         <div>
            <Card style={{ width: '18rem' }} className='card-home'>
               <Card.Img variant="top" src="./public/me.jpg" />
               <Card.Body>
                  <Card.Title className='card-title'>Pongsatorn Kerdsaeng</Card.Title>
                  <Card.Text className='card-text'>
                     <b className='card-text'>ชื่อ พงศธร เกิดแสง </b>
                     <br /> ชื่อเล่นกาย
                     <br /> มหาวิทยาลัยศรีปทุม
                  </Card.Text>
               </Card.Body>
            </Card>
         </div>
         <div>
            <Card body>
               <div className='card-me'>
                        ชื่อ : พงศธร เกิดแสง
               <br /> ชื่อ : เล่นกาย
               <br /> ศึกษาอยู่ : มหาวิทยาลัยศรีปทุม
               <br /> สาขาวิชา : วิทยาการคอมพิวเตอร์
               <br /> วันเดือนปีเกิด : วันที่ 23 สิงหาคม 2547
               <br /> อายุ : 20 ปี
               </div>
            </Card>;
         </div>
      </div>
   );
}

export default Home;