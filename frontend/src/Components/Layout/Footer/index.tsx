import React from "react";
import { FooterWrapper } from './styles';
import FooterTop from './FooterTop';
import FooterBot from './FooterBot';

interface Props {}

const Footer: React.FC = (props: Props) => {
	return (
		<FooterWrapper>
			<FooterTop />
			<FooterBot />
		</FooterWrapper>
	)
}

export default Footer;
