import React from 'react';
import Navbar from '../components/Navbar';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <Container>
        <div style={{ height: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className='text-center'>
          <h1 className=''>About Us</h1>
          <p style={{textAlign:"justify"}}>
          Welcome to GOFOOD, where delicious food meets convenience! We are your one-stop destination for ordering scrumptious meals from a variety of cuisines, right from the comfort of your home or office.

At GOFOOD, we understand the hustle and bustle of everyday life. Whether you're a busy professional, a parent juggling multiple responsibilities, or simply someone who loves good food without the hassle of cooking, we've got you covered. Our mission is to make your dining experience hassle-free, enjoyable, and, most importantly, delicious.

What sets us apart is our commitment to quality and convenience. We've partnered with a diverse range of restaurants, cafes, and eateries to bring you an extensive menu selection that caters to every taste bud. From hearty comfort foods to exotic delicacies, we have something for everyone.

Our user-friendly platform allows you to browse through menus, customize your orders, and securely pay online with just a few clicks.</p><p style={{textAlign:"justify"}}> Whether you're craving pizza, sushi, burgers, or vegan delights, you can find it all on GOFOOD.

But we're more than just a food delivery service. We're passionate about supporting local businesses and fostering a sense of community. That's why we work closely with our restaurant partners to ensure fair treatment and promote sustainability practices wherever possible.

Your satisfaction is our top priority. Our dedicated customer support team is here to assist you every step of the way, ensuring that your orders are delivered promptly and accurately. Because we believe that good food should be enjoyed stress-free.

Thank you for choosing GOFOOD for your culinary adventures. Whether you're treating yourself to a solo feast or hosting a gathering with friends and family, we're here to make it memorable. Sit back, relax, and let the deliciousness come to you.

Bon appétit!

GOFOOD Team </p>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
}
