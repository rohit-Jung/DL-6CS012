import type { SlideProps } from "../engine";
import { StepSwitch } from "../ui";

export function ProblemStatementSlide({
	currentStep,
	onSlideMount,
}: SlideProps) {
	onSlideMount?.(2);

	return (
		<main className="h-full">
			<section className="grid h-full" style={{ alignContent: "start" }}>
				<div className="col-span-12">
					<p className="kicker">Problem statement</p>
				</div>
				<div className="col-span-12 sm:col-span-8">
					<h2 className="title">
						Safety-critical perception for autonomous vehicle navigation.
					</h2>
					<p className="lede" style={{ marginTop: 12 }}>
						Missed or wrong sign recognition can translate into incorrect
						driving decisions.
					</p>
				</div>
				<div className="col-span-12 sm:col-span-4">
					<div
						className="panel pad"
						style={{
							borderColor: "color-mix(in oklab, var(--rule) 80%, transparent)",
						}}
					>
						<div className="micro">Operating conditions</div>
						<div
							style={{
								marginTop: 10,
								color: "var(--muted)",
								lineHeight: 1.7,
								fontSize: 14,
							}}
						>
							Small crops · motion blur · occlusion · low light
						</div>
					</div>
				</div>
				<div className="col-span-12">
					<div className="rule" />
				</div>

				<div className="col-span-12 sm:col-span-8">
					<StepSwitch step={currentStep} className="panel pad">
						{[
							<div key="s0">
								<div className="micro">Why it matters for autonomy</div>
								<p
									style={{
										marginTop: 12,
										marginBottom: 10,
										color: "var(--muted)",
										lineHeight: 1.7,
										fontSize: 14,
										maxWidth: "70ch",
									}}
								>
									Traffic signs act like high-priority constraints (speed,
									right-of-way, access). A model can look good on top-1 accuracy
									while still failing rare-but-critical categories.
								</p>
								<div className="micro" style={{ marginTop: 14 }}>
									Observed constraints
								</div>
								<ul
									style={{
										marginTop: 12,
										paddingLeft: 18,
										color: "var(--muted)",
										lineHeight: 1.7,
										fontSize: 14,
									}}
								>
									<li>
										Class imbalance: SpeedLimit dominates; minority recall at
										risk.
									</li>
									<li>Low resolution: mean size ~48.5 x 48.6 px.</li>
									<li>Low light: sampled means R=77.49, G=71.40, B=75.90.</li>
									<li>Integrity: 35 unreadable images must be removed.</li>
								</ul>
							</div>,
							<div key="s1">
								<div className="micro">Goal</div>
								<p
									style={{
										marginTop: 12,
										marginBottom: 0,
										color: "var(--muted)",
										lineHeight: 1.7,
										fontSize: 14,
										maxWidth: "70ch",
									}}
								>
									Build a classifier that is stable, accurate, and fair across
									all five classes despite imbalance, low image quality,
									inconsistent labels, and corrupted files, so it can be trusted
									as a perception input for navigation.
								</p>
							</div>,
						]}
					</StepSwitch>
				</div>

				<div className="col-span-12 sm:col-span-4">
					<div className="panel pad">
						<div className="micro">Metric stance</div>
						<div
							style={{
								marginTop: 12,
								color: "var(--muted)",
								lineHeight: 1.7,
								fontSize: 14,
							}}
						>
							Report per-class precision/recall. Treat minority recall as a
							first-class KPI for safety-critical categories.
						</div>
						<div className="rule" style={{ marginTop: 14, marginBottom: 14 }} />
						<div className="micro">Operational framing</div>
						<div
							style={{
								marginTop: 10,
								color: "var(--muted)",
								lineHeight: 1.7,
								fontSize: 14,
							}}
						>
							Prefer stable behavior under low light and small scale, not just
							average-case performance.
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
