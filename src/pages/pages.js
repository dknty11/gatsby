import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from '../components/pages-css-modules.module.css';
import Litebox from '../components/ZoomImage/Litebox';

const Pages = () => (
	<Layout>
		<div className={styles.PagesContainer}>
			<SEO title="Pages" />
			<div className={styles.PagesContent}>
				<h1>Food</h1>
				<p>We also sell dried squid</p>
				<div className={styles.image}>
					<Litebox
						small="https://amthuchathanh.com/wp-content/uploads/2010/11/muc-kho.jpg"
						large="https://amthuchathanh.com/wp-content/uploads/2010/11/muc-kho.jpg"
					/>
					<span>dried squid special</span>
					<span>price: $10/Kg</span>
				</div>
				<div className={styles.image}>
					<Litebox
						small="https://dacsanngon3mien.net/wp-content/uploads/2017/11/muc-kho-da-nang-1.jpg"
						large="https://dacsanngon3mien.net/wp-content/uploads/2017/11/muc-kho-da-nang-1.jpg"
					/>
					<span>dried squid</span>
					<span>price: $10/Kg</span>
				</div>
				<div className={styles.image}>
					<Litebox
						small="https://img.21food.com/userimages/qingdaohanzhou/qingdaohanzhou$103110520.jpg"
						large="https://img.21food.com/userimages/qingdaohanzhou/qingdaohanzhou$103110520.jpg"
					/>
					<span>dried squid</span>
					<span>price: $10/Kg</span>
				</div>
				<div className={styles.image}>
					<Litebox
						small="https://amthuchathanh.com/wp-content/uploads/2010/11/muc-kho.jpg"
						large="https://amthuchathanh.com/wp-content/uploads/2010/11/muc-kho.jpg"
					/>
					<span>dried squid special</span>
					<span>price: $10/Kg</span>
				</div>
				<div className={styles.image}>
					<Litebox
						small="https://tse2.mm.bing.net/th?id=OIP.HkAXD6sq0ZJlREqExoSM9AHaE7&pid=Api"
						large="https://tse2.mm.bing.net/th?id=OIP.HkAXD6sq0ZJlREqExoSM9AHaE7&pid=Api"
					/>
					<span>dried squid</span>
					<span>price: $10/Kg</span>
				</div>
				<div className={styles.image}>
					<Litebox
						small="https://tse2.mm.bing.net/th?id=OIP.t7a5wgoUoy3imiuoRK8ruwHaFj&pid=Api"
						large="https://tse2.mm.bing.net/th?id=OIP.t7a5wgoUoy3imiuoRK8ruwHaFj&pid=Api"
					/>
					<span>dried squid special</span>
					<span>price: $10/Kg</span>
				</div>
				<div className={styles.image}>
					<Litebox
						small="https://amthuchathanh.com/wp-content/uploads/2010/11/muc-kho.jpg"
						large="https://amthuchathanh.com/wp-content/uploads/2010/11/muc-kho.jpg"
					/>
					<span>dried squid special</span>
					<span>price: $10/Kg</span>
				</div>
				<div className={styles.image}>
					<Litebox
						small="https://img.21food.com/userimages/qingdaohanzhou/qingdaohanzhou$103110520.jpg"
						large="https://img.21food.com/userimages/qingdaohanzhou/qingdaohanzhou$103110520.jpg"
					/>
					<span>dried squid special</span>
					<span>price: $10/Kg</span>
				</div>
			</div>
		</div>
	</Layout>
);

export default Pages;
