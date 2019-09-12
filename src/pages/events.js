import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from '../components/events-css-modules.module.css';

const EventsPage = () => (
	<Layout>
		<div className={styles.EventsContainer}>
			<SEO title="Events" />
			<div className={styles.EventsContent}>
				<h1>Events</h1>
				<h3>UP COMMING EVENTS PARTYES</h3>
				<p>
					This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
					sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
					Duis sed odio sit amet nibh vulputate cursus a sit amet mauris
				</p>
				<img src="https://themelooper.com/html/jz/images/event-img.jpg" alt="" />
				<span>
					<p>May 28 2016 08 : 00 Pm To 03 : 00 Am</p>
					<p>
						See detail of this event <a href="/events">click here</a>
					</p>
				</span>
			</div>
		</div>
	</Layout>
);

export default EventsPage;
