import React from "react"
import { DefaultLayout } from "../../Components/Layout/Default";

import Banner from './Banner';
import Discover from './Discover';
import Deals from './Deals';
import Recent from './Recent';
import Series from './Series';
import Testimonials from './Testimonials';
import Socials from './Socials';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";


interface Props {}

const Home = (props: Props) => {
      const auth = useSelector((state: RootState) => state.auth);

      console.log('rs', auth);
	return <DefaultLayout>
      <Banner />
      <Discover />
      <Deals />
      <Recent />
      <Series />
      <Testimonials />
      <Socials />
	</DefaultLayout>
}

export default Home;