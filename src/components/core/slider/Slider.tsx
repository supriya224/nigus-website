/* eslint-disable import/no-duplicates */
import img1 from 'http://www.nigussystems.com/images/slider1.png';
import img2 from 'http://www.nigussystems.com/images/slider1.png';
import img3 from 'http://www.nigussystems.com/images/slider1.png';
import img4 from 'http://www.nigussystems.com/images/slider2.png';
import img5 from 'http://www.nigussystems.com/images/slider2.png';
import img6 from 'http://www.nigussystems.com/images/slider2.png';
import ImageSlider from './ImageSlider';

const Image = [img1, img2, img3, img4, img5, img6];

export default function Slider() {
  return <ImageSlider imageUrls={Image} />;
}
