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
				<h1>Contact</h1>
				<div style={{ height: 'auto', marginBottom: '10px' }}>
					<FacebookProvider appId={`${process.env.APP_ID}`}>
						<Page href="https://www.facebook.com/StreetBeerMD" tabs="timeline" />
					</FacebookProvider>
				</div>
				<div>
					<form method="post" action="#" data-netlify="true" name="feedback">
						<input type="hidden" name="form-name" value="feedback" />
						<input type="text" name="name" id="name" required />
						<input type="text" name="email" id="email" required />
						<textarea name="message" id="message" rows="4" required />
						<input type="submit" value="Send Message" />
					</form>
				</div>
			</div>
		</div>
	</Layout>
);

export default ContactPage;
