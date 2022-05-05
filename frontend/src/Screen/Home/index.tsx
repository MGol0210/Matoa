import React from "react"
import { DefaultLayout } from "../../Components/Layout/Default";

import Banner from './Banner';
import Discover from './Discover';
import Deals from './Deals';
import Recent from './Recent';
import Series from './Series';
import Testimonials from './Testimonials';
import Socials from './Socials';


interface Props {}

const Home = (props: Props) => {
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