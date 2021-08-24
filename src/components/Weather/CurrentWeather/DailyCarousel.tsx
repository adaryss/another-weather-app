import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import { useMedia } from 'react-use';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CUSTOM_SLIDER_BREAKPOINT_UP = '801px';
const CUSTOM_SLIDER_BREAKPOINT_DOWN = '800px';

const StyledSlider = styled(Slider)`
	margin: 3.2rem auto;

	.slick-slide {
		margin-right: 1.6rem;

		&:last-child {
			margin-right: 0;
		}
	}

	// custom breakpoint for slider
	@media (min-width: ${CUSTOM_SLIDER_BREAKPOINT_UP}) {
		max-width: 68rem;
	}

	@media (max-width: ${CUSTOM_SLIDER_BREAKPOINT_DOWN}) {
		overflow: hidden;
		width: calc(100% + 3.2rem);
		position: relative;
		left: -1.6rem;
	}

`;

interface DailyCarouselProps {
	readonly children: ReactNode;
}

export const DailyCarousel: FC<DailyCarouselProps> = ({ children }) => {
	const showNavArrows = useMedia(`(min-width: ${CUSTOM_SLIDER_BREAKPOINT_UP})`);

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 4,
		variableWidth: true,
		arrows: showNavArrows,
	};

	return (
		<StyledSlider {...settings}>
			{children}
		</StyledSlider >
	);
}
