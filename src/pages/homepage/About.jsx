import React from 'react';
import '../CSS/About.css';
import image1 from '../../Components/Assets/banner.png';
import image2 from '../../Components/Assets/Earring.png';
import image3 from '../../Components/Assets/Model.png';
import image4 from '../../Components/Assets/gold necklace.png';
import image5 from '../../Components/Assets/Silver Bangles.png';
import image6 from '../../Components/Assets/Silver ring.png';

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="container">
      <section className="mission mb-5">
        <h2 className="text-center mb-4">About The GemChase</h2>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <img src={image3} alt="Model wearing jewelry" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <p>
              GemChase is an innovative online jewelry retailer celebrated for its exquisite and diverse collection of fine jewelry. Catering to a discerning clientele with a taste for luxury and sophistication, GemChase offers an extensive array of meticulously crafted rings, necklaces, earrings, and bangles. Each item in their collection is designed with an unwavering commitment to quality, featuring premium gold and precious silver that highlight the brand's dedication to excellence.
              GemChase prides itself on delivering jewelry that is not only beautiful but also timeless, ensuring that every piece meets the highest standards of design and craftsmanship. Their collection includes both classic and contemporary styles, appealing to a wide range of aesthetic preferences. Whether you're searching for a statement piece for a special occasion or an elegant accessory for everyday wear, GemChase has something to suit every need.
              In addition to their stunning designs, GemChase offers an exceptional shopping experience, with user-friendly online navigation, detailed product descriptions, and excellent customer service. Their commitment to customer satisfaction is evident in every aspect of their business, from the quality of their products to the personalized attention they provide to each client. GemChase is truly a go-to destination for jewelry enthusiasts seeking timeless beauty, exceptional value, and an unparalleled selection of fine jewelry.
            </p>
          </div>
        </div>
        <h3 className="text-center mt-5">Our Mission</h3>
        <p className="text-justify">
          As firm believers in the enduring appeal of timeless design, we are dedicated to providing our customers with the finest gold and silver jewelry available. Our commitment to timeless design means that each piece in our collection is crafted to transcend fleeting trends, offering a blend of classic elegance and modern sophistication that will remain stylish for years to come.
          We meticulously select the highest quality gold and silver for our jewelry, ensuring that every item not only looks stunning but also stands the test of time. Our artisans employ traditional techniques alongside innovative methods to create pieces that are both beautiful and durable. From intricately designed rings and necklaces to elegant earrings and bangles, our collection reflects our dedication to excellence and our passion for creating jewelry that makes a lasting impression.
          Our customers can expect nothing but the best, as we focus on delivering exceptional craftsmanship, exquisite detailing, and unparalleled quality in every piece we offer. Whether it's for a special occasion or everyday wear, our timeless designs provide a sense of sophistication and luxury that enhances any wardrobe. At the heart of our brand is the belief that true elegance is timeless, and we strive to embody this philosophy in everything we do, ensuring that our customers receive jewelry that they will cherish for a lifetime.
        </p>
        <div className="row mission-images mt-4">
          <div className="col-md-6 mb-3">
            <img src={image1} alt="Model" className="img-fluid rounded" />
          </div>
          <div className="col-md-6 mb-3">
            <img src={image2} alt="Pearls" className="img-fluid rounded" />
          </div>
        </div>
      </section>
      <section className="story mb-5">
        <h3 className="text-center mb-4">Our Story</h3>
        <p>
          GemChase's journey began in 1965 with a vision to craft timeless jewelry. From the beginning, we focused on blending unparalleled quality with elegant design, creating pieces that stand the test of time. Over the decades, we have maintained our dedication to excellence, ensuring that every ring, necklace, earring, and bangle reflects our commitment to quality and elegance.
          Known for our stunning designs, GemChase seamlessly blends traditional craftsmanship with contemporary flair. Our innovative approach keeps our collection fresh and modern, while our exceptional customer service provides personalized attention, making the shopping experience truly special.
          At GemChase, we offer a unique, modern approach to buying jewelry, honoring our rich heritage while looking toward the future. Our legacy of quality, elegance, and exceptional service makes us a beloved name in fine jewelry.
        </p>
      </section>
      <section className="collection">
        <h3 className="text-center mb-4">See Our Collection</h3>
        <div className="row">
          <div className="col-md-3 text-center mb-3">
            <img src={image2} alt="Earring" className="img-fluid rounded" />
            <p>Earring</p>
          </div>
          <div className="col-md-3 text-center mb-3">
            <img src={image4} alt="Gold Necklace" className="img-fluid rounded" />
            <p>Gold Necklace</p>
          </div>
          <div className="col-md-3 text-center mb-3">
            <img src={image5} alt="Silver Bangle" className="img-fluid rounded" />
            <p>Silver Bangle</p>
          </div>
          <div className="col-md-3 text-center mb-3">
            <img src={image6} alt="Silver Ring" className="img-fluid rounded" />
            <p>Silver Ring</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <Link to="/jewelry" className="btn btn-primary">View All Jewelry</Link>
        </div>
      </section>
    </main>
  );
};

export default About;
