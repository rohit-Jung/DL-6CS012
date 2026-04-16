import type { SlideProps } from "../engine"
import { Flip } from "../engine"
import { StepSwitch } from "../ui"

export function EDASlide({ currentStep, onSlideMount }: SlideProps) {
	onSlideMount?.(2)

	return (
		<main className="h-full">
			<section className="grid h-full" style={{ alignContent: "start" }}>
				<div className="col-span-12">
					<p className="kicker">EDA highlights</p>
				</div>
				<div className="col-span-12 sm:col-span-8">
					<h2 className="title">Input constraints drive modeling choices.</h2>
					<p className="lede" style={{ marginTop: 12 }}>
						Treat geometry and lighting as first-order factors.
					</p>
				</div>
				<div className="col-span-12">
					<div className="rule" />
				</div>

				<div className="col-span-12 sm:col-span-8">
					<StepSwitch step={currentStep}>
						{
							[
								<div key="geom">
									<Flip id="geom">
										<img
											src="/slides/geometry.png"
											alt="Width/height/aspect ratio distributions"
											className="img img--mono"
											style={{ width: "100%", height: "auto" }}
										/>
									</Flip>
									<div className="micro" style={{ marginTop: 10 }}>
										Almost square · resize to 48x48
									</div>
								</div>,
								<div key="rgb">
									<Flip id="rgb">
										<img
											src="/slides/rgb_distribution.png"
											alt="Average RGB intensity distributions"
											className="img img--mono"
											style={{ width: "100%", height: "auto" }}
										/>
									</Flip>
									<div className="micro" style={{ marginTop: 10 }}>
										Dark profile · normalize + brightness augmentation
									</div>
								</div>,
							] as any
						}
					</StepSwitch>
				</div>

				<div className="col-span-12 sm:col-span-4">
					<div className="panel pad">
						<div className="micro">Implication</div>
						<ul style={{ marginTop: 12, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7, fontSize: 14 }}>
							<li>Compact model to avoid overfitting on low-detail inputs.</li>
							<li>Standardize geometry to reduce variance.</li>
							<li>Evaluate robustness, not just top-1 accuracy.</li>
						</ul>
						<div className="rule" style={{ marginTop: 14, marginBottom: 14 }} />
						<div className="micro">Augment</div>
						<div style={{ marginTop: 10, color: "var(--muted)", lineHeight: 1.7, fontSize: 14 }}>
							Rotation · translation · zoom · brightness/contrast
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
