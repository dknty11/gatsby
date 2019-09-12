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
					<form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
						<input type="hidden" name="bot-field" />
						<p>
							<label>
								Your Name: <input type="text" name="name" />
							</label>
						</p>
						<p>
							<label>
								Your Email: <input type="email" name="email" />
							</label>
						</p>
						<p>
							<label>
								Your Role:{' '}
								<select name="role[]" multiple>
									<option value="leader">Leader</option>
									<option value="follower">Follower</option>
								</select>
							</label>
						</p>
						<p>
							<label>
								Message: <textarea name="message" />
							</label>
						</p>
						<p>
							<button type="submit">Send</button>
						</p>
					</form>
				</div>
			</div>
		</div>
	</Layout>
);

export default ContactPage;
