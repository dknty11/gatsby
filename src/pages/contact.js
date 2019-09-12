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
					<form action="https://formspree.io/email@domain.tld" method="POST">
						<input type="text" name="name" />
						<input type="email" name="_replyto" />
						<input type="submit" value="Send" />
						<input type="hidden" name="_next" value="http://localhost:8000/about" />
					</form>
				</div>
			</div>
		</div>
	</Layout>
);

export default ContactPage;
