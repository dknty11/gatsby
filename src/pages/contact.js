import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from '../components/contact-css-modules.module.css';

const ContactPage = () => (
	<Layout>
		<div className={styles.ContactContainer}>
			<SEO title="Contact" />
			<div className={styles.ContactContent}>
				<h1>Visit our fan page</h1>
				{/* <FacebookProvider appId={`${process.env.APP_ID}`}>
					<Page href="https://www.facebook.com/StreetBeerMD" tabs="timeline" />
				</FacebookProvider> */}
				<div id="fb-root" />
				<iframe
					src={
						'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FStreetBeerMD&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=392286994820189'
					}
					width="340"
					height="500"
					style={{ border: 'none', overflow: 'hidden', margin: 'auto' }}
					scrolling="no"
					frameBorder="0"
					allow="encrypted-media"
				/>
				<h2>Tell us what you think</h2>
				<div className={styles.FeedbackForm}>
					<form method="post" action="#" data-netlify="true" name="feedback">
						<input type="hidden" name="form-name" value="feedback" />
						<p>
							<label>Your Name:</label>
							<input type="text" name="name" id="name" required />
						</p>
						<p>
							<label>Your Email:</label>
							<input type="email" name="email" id="name" required />
						</p>
						<p>
							<label>Message:</label>
							<textarea name="message" id="message" rows="4" required />
						</p>
						<p>
							<input id="button" type="submit" value="Submit Your Feedback" />
						</p>
					</form>
				</div>
			</div>
		</div>
		{/* <script
			async
			defer
			crossorigin="anonymous"
			src={
				'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v4.0&appId=' +
				`${process.env.APP_ID}` +
				'&autoLogAppEvents=1'
			}
		/> */}
	</Layout>
);

export default ContactPage;
