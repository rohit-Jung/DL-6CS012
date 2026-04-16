import type { SlideProps } from "../engine";

export function ResearchQuestionSlide({ onSlideMount }: SlideProps) {
	onSlideMount?.(1);

	return (
		<main className="h-full">
			<section className="grid h-full" style={{ alignContent: "start" }}>
				<div className="col-span-12">
					<p className="kicker">Research question</p>
				</div>
				<div className="col-span-12">
					<h2 className="title">
						How effectively can a CNN classify five traffic sign categories from
						low-resolution road images?
					</h2>
				</div>
				<div className="col-span-12 sm:col-span-8">
					<p className="lede">
						Which training choices most improve robustness under class
						imbalance, corrupted files, and uneven lighting?
					</p>
				</div>
				<div className="col-span-12 sm:col-span-4">
					<div className="panel pad">
						<div className="micro">Navigation tie-in</div>
						<div
							style={{
								marginTop: 10,
								fontSize: 14,
								lineHeight: 1.6,
								color: "var(--muted)",
							}}
						>
							Focus on minority recall to reduce risky decision points.
						</div>
					</div>
				</div>
				<div className="col-span-12">
					<div className="rule" />
				</div>
				<div className="col-span-12 sm:col-span-5">
					<div className="panel pad">
						<div className="micro">Scope</div>
						<div
							style={{
								marginTop: 10,
								fontSize: 14,
								lineHeight: 1.6,
								color: "var(--muted)",
							}}
						>
							5 classes · low-res inputs · CNN family · robustness emphasis
						</div>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-7">
					<div className="panel pad">
						<div className="micro">Signals</div>
						<div
							style={{
								marginTop: 10,
								fontSize: 14,
								lineHeight: 1.6,
								color: "var(--muted)",
							}}
						>
							Per-class recall · corruption removal · brightness-aware
							augmentation
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
