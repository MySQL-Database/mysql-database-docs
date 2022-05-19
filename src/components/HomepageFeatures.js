import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

export default function HomepageFeatures() {
  return (
	<section className="">
		<br /><br /><br />
		<center>
			<img src="/img/favicon.png" className={styles.logo} />
			<br /><br />
			<img src="https://nodei.co/npm/mysql-database.png" />
			<br />
			<img src="https://img.shields.io/npm/v/mysql-database.svg?maxAge=3600" />
			&nbsp;
			<img src="https://img.shields.io/npm/dt/mysql-database.svg?maxAge=3600" />
		</center>
		<br /><br />
	</section>
  );
}
