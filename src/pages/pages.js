import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from '../components/pages-css-modules.module.css';

const Pages = () => (
	<Layout>
		<div className={styles.PagesContainer}>
			<SEO title="Pages" />
			<div className={styles.PagesContent}>
				<h1>Pages</h1>
				<img
					className={styles.image}
					src="https://amthuchathanh.com/wp-content/uploads/2010/11/muc-kho.jpg"
					alt=""
				/>
				<img
					className={styles.image}
					src="https://dacsanngon3mien.net/wp-content/uploads/2017/11/muc-kho-da-nang-1.jpg"
					alt=""
				/>
				<img
					className={styles.image}
					src="https://muckho.vn/wp-content/uploads/2015/07/muc-kho-tam-gia-vi-cay-cay.jpg"
					alt=""
				/>
				<img
					className={styles.image}
					src="https://amthuchathanh.com/wp-content/uploads/2010/11/muc-kho.jpg"
					alt=""
				/>
				<img
					className={styles.image}
					src="https://tse2.mm.bing.net/th?id=OIP.HkAXD6sq0ZJlREqExoSM9AHaE7&pid=Api"
					alt=""
				/>
				<img
					className={styles.image}
					src="https://tse2.mm.bing.net/th?id=OIP.t7a5wgoUoy3imiuoRK8ruwHaFj&pid=Api"
					alt=""
				/>
				<img
					className={styles.image}
					src="https://amthuchathanh.com/wp-content/uploads/2010/11/muc-kho.jpg"
					alt=""
				/>
				<img
					className={styles.image}
					src="https://muckho.vn/wp-content/uploads/2015/07/muc-kho-tam-gia-vi-cay-cay.jpg"
					alt=""
				/>
			</div>
		</div>
	</Layout>
);

export default Pages;
