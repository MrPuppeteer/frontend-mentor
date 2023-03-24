import '../assets/bg-pattern-intro-mobile.svg';
import '../assets/bg-pattern-intro-desktop.svg';

const Hero = () => {
	return (
		<div className="hero">
			<h1 className="hero-title">A modern publishing platform</h1>
			<p className="hero-message">
				Grow your audience and build your online brand
			</p>
			<div className="self-stretch py-0 px-[0.7rem] flex gap-4 mt-12 self-unset">
				<button className="hero-button">Start for Free</button>
				<button className="hero-button hero-button-outlined">Learn more</button>
			</div>
		</div>
	);
};

export default Hero;
