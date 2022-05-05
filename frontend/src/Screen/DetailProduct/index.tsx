import React from "react"
import { DefaultLayout } from "../../Components/Layout/Default";

import NavTabs from './NavTabs';
import Slides from './Slides';
import Details from './Details';
import RelateProducts from './RelateProducts';



interface Props {}

const DetailProduct = (props: Props) => {
	return <DefaultLayout>
    <NavTabs />
		<Slides />
		<Details />
		<RelateProducts />
	</DefaultLayout>
}

export default DetailProduct;