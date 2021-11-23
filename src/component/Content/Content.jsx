import React from 'react'
import classes from './Content.module.css'
import Slider from "react-slick";

const Content = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return(
		<div className={classes.content}>
				<Slider className={classes.slider} {...settings} autofocus>
					<div className={classes.content__1}>
						<p>
							{`Rick and Morty is an American adult animated science fiction sitcom
							created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime 
							programming block, Adult Swim. The series follows the misadventures of cynical 
							mad scientist Rick Sanchez and his good-hearted, but fretful grandson Morty Smith, 
							who split their time between domestic life and interdimensional adventures.`}
						</p>
						<p>
							{`Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and
							Sarah Chalke voicing the rest of Rick and Morty's family. The series originated
							from an animated short parody film of Back to the Future, created by Roiland for
							Channel 101, a short film festival co-founded by Harmon. The series has been acclaimed
							by critics for its originality, creativity and humor.`}
						</p>
					</div>
					<div className={classes.content__2}>
						<p>
							{`The show revolves around the adventures of the members of the Smith household, which
							consists of parents Jerry and Beth, their children Summer and Morty, and Beth's father,
							Rick Sanchez, who lives with them as a guest. According to Justin Roiland, the family 
							lives outside of Seattle, Washington. The adventures of Rick and Morty, however, take
							place across an infinite number of realities, with the characters travelling to other
							planets and dimensions through portals and Rick's flying car.`}
						</p>
						<p>
							{`The current fifth season premiered on June 20, 2021, and consists of ten episodes.
							A sixth season was confirmed as part of a long-term deal in May 2018 that ordered 70
							new episodes over an unspecified number of seasons.`}
						</p>
					</div>
					<div className={classes.content__3}>
						<p>
							{`Rick is an eccentric and alcoholic mad scientist, who eschews many ordinary conventions
							such as school, marriage, love, and family. He frequently goes on adventures with his
							14-year-old grandson, Morty, a kind-hearted but easily distressed boy, whose naïve but
							grounded moral compass plays counterpoint to Rick's Machiavellian ego. Morty's
							17-year-old sister, Summer, is a more conventional teenager who worries about improving
							her status among her peers and sometimes follows Rick and Morty on their adventures.`}
						</p>
						<p>
							{`The kids' mother, Beth, is a generally level-headed person and assertive force in the
							household, though self-conscious about her professional role as a horse surgeon.
							She is dissatisfied with her marriage to Jerry, a simple-minded and insecure person,
							who disapproves of Rick's influence over his family.`}
						</p>
					</div>
				</Slider>
		</div >
	);

}

export default Content