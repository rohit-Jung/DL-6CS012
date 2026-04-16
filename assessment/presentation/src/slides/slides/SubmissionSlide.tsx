import type { SlideProps } from "../engine";
import { Flip } from "../engine";

export function SubmissionSlide({ onSlideMount }: SlideProps) {
	onSlideMount?.(1);

	return (
		<main className="h-full">
			<section className="grid h-full" style={{ alignContent: "start" }}>
				<div className="col-span-12">
					<p className="kicker">Close</p>
				</div>
				<div className="col-span-12">
					<Flip id="thanks">
						<h2 className="title">Thank you.</h2>
					</Flip>
					<p className="lede" style={{ marginTop: 12 }}>
						Questions and feedback welcome.
					</p>
				</div>
				<div className="col-span-12">
					<div className="rule" />
				</div>
				<div className="col-span-12 sm:col-span-8">
					<div className="panel pad">
						<div className="micro">Group members</div>
						<div
							style={{
								marginTop: 12,
								display: "grid",
								gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
								gap: 12,
							}}
						>
							{["Nikisha", "Rohit", "Dehan", "Swoyam"].map((name) => (
								<div
									key={name}
									className="panel pad"
									style={{ borderColor: "var(--rule)" }}
								>
									<div className="micro" style={{ color: "var(--ink)" }}>
										{name}
									</div>
									<div
										style={{
											marginTop: 8,
											color: "var(--muted)",
											fontSize: 13,
											lineHeight: 1.6,
										}}
									>
										Group G
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="col-span-12 sm:col-span-4">
					<div className="panel pad" style={{ borderColor: "var(--accent)" }}>
						<div className="micro" style={{ color: "var(--ink)" }}>
							Project
						</div>
						<div
							style={{
								marginTop: 10,
								color: "var(--muted)",
								lineHeight: 1.7,
								fontSize: 14,
							}}
						>
							Traffic sign classification for autonomous navigation.
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
