import 'react-multi-carousel/lib/styles.css';
import white from "../assets/images/whiteBottle.jpg";
import bronze from "../assets/images/bronzeBottle.jpg";
import multi from "../assets/images/coloredBottle.jpg";
import amphoare1 from "../assets/images/amphorae1.jpg";
import amphoare2 from "../assets/images/amphorae2.jpg";
import amphoare3 from "../assets/images/amphorae3.jpg";
import amphoare4 from "../assets/images/amphorae4.jpg";


const items = [
  { name: "WHITE ON WHITE", description: "Parfum 50ml", img: white},
  { name: "ARIDAL", description: "Parfum 50ml", img: bronze },
  { name: "COEXISTENCE", description: "Eau de Parfum 50ml", img: multi },
  { name: "AMPHORAE 16", description: "Attar Oil 6ml",img: amphoare1 },
  { name: "AMPHORAE 17", description: "Attar Oil 6ml",img: amphoare2 },
  { name: "AMPHORAE 18", description: "Attar Oil 6ml",img: amphoare3 },
  { name: "AMPHORAE 16", description: "Attar Oil 6ml",img: amphoare4 },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export {responsive,items}