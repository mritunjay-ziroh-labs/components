import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	const [showCard, setShowCard] = useState(false);

	return (
		<>
			<button
				onClick={() => {
					setShowCard(true);
				}}
			>
				CLICK HERE
			</button>

			{showCard && (
				<div
					className={styles.backdrop}
					onClick={() => {
						setShowCard(false);
					}}
				>
					<div
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						CARDS details go here
					</div>
				</div>
			)}
		</>
	);
}
