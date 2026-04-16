import type { SlideProps } from "../engine";
import { Flip } from "../engine";

export function TitleSlide({ onSlideMount }: SlideProps) {
	onSlideMount?.(1);

	return (
		<main className="h-full">
			<section className="grid h-full" style={{ alignContent: "start" }}>
				<div className="col-span-12">
					<p className="kicker">Project Proposal</p>
				</div>

				<div className="col-span-12">
					<Flip id="title">
						<h1 className="display">
							Traffic Sign
							<br />
							Classification
						</h1>
					</Flip>
				</div>

				<div className="col-span-12 sm:col-span-7">
					<p className="lede">
						Low-resolution road imagery. Five classes. CNN baseline +
						regularization + transfer learning.
					</p>
				</div>
				<div className="col-span-12 sm:col-span-5">
					<div
						className="panel pad"
						style={{
							borderColor: "color-mix(in oklab, var(--rule) 80%, transparent)",
						}}
					>
						<div className="micro">Application context</div>
						<div
							style={{
								marginTop: 10,
								color: "var(--muted)",
								lineHeight: 1.7,
								fontSize: 14,
							}}
						>
							Autonomous vehicle navigation: traffic signs as high-priority
							constraints.
						</div>
					</div>
				</div>

				<div className="col-span-12">
					<div className="rule" />
				</div>

				<div className="col-span-12 sm:col-span-4">
					<div className="micro">GROUP</div>
					<div className="title" style={{ fontSize: 22, lineHeight: 1.1 }}>
						G
					</div>
				</div>

				<div className="col-span-12 sm:col-span-8">
					<div
						className="grid"
						style={{ gridTemplateColumns: "repeat(12, minmax(0, 1fr))" }}
					>
						<div className="col-span-12 sm:col-span-6">
							<div className="micro">MEMBERS</div>
							<div
								style={{
									marginTop: 8,
									fontSize: 18,
									lineHeight: 1.3,
									letterSpacing: -0.01,
									color: "var(--ink)",
									fontWeight: 650,
								}}
							>
								Nikisha
								<span style={{ color: "var(--rule)", padding: "0 10px" }}>
									/
								</span>
								Rohit
								<span style={{ color: "var(--rule)", padding: "0 10px" }}>
									/
								</span>
								Dehan
								<span style={{ color: "var(--rule)", padding: "0 10px" }}>
									/
								</span>
								Swoyam
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
