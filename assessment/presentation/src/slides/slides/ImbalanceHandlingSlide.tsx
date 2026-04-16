import type { SlideProps } from "../engine"

export function ImbalanceHandlingSlide({ onSlideMount }: SlideProps) {
	onSlideMount?.(1)

	return (
		<main className="h-full">
			<section className="grid h-full" style={{ alignContent: "start" }}>
				<div className="col-span-12">
					<p className="kicker">Handling imbalance</p>
				</div>
				<div className="col-span-12 sm:col-span-8">
					<h2 className="title">Three complementary controls.</h2>
					<p className="lede" style={{ marginTop: 12 }}>
						No single trick. Use data, loss, and sampling together.
					</p>
				</div>
				<div className="col-span-12">
					<div className="rule" />
				</div>
				<div className="col-span-12 sm:col-span-4">
					<div className="panel pad">
						<div className="micro">1 · Data</div>
						<div style={{ marginTop: 12, color: "var(--muted)", lineHeight: 1.7, fontSize: 14 }}>
							Targeted augmentation for minority classes (Cautions, Crossings).
						</div>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-4">
					<div className="panel pad">
						<div className="micro">2 · Loss</div>
						<div style={{ marginTop: 12, color: "var(--muted)", lineHeight: 1.7, fontSize: 14 }}>
							Class-weighted cross-entropy to penalize minority errors more.
						</div>
					</div>
				</div>
				<div className="col-span-12 sm:col-span-4">
					<div className="panel pad">
						<div className="micro">3 · Sampling</div>
						<div style={{ marginTop: 12, color: "var(--muted)", lineHeight: 1.7, fontSize: 14 }}>
							Balanced mini-batches so SpeedLimit doesn't dominate.
						</div>
					</div>
				</div>
				<div className="col-span-12">
					<div className="panel pad" style={{ borderColor: "var(--accent)" }}>
						<div className="micro" style={{ color: "var(--ink)" }}>
							Expected outcome
						</div>
						<div style={{ marginTop: 10, color: "var(--muted)", lineHeight: 1.7, fontSize: 14 }}>
							Better minority recall than naive duplication alone.
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
