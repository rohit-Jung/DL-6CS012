import type { SlideProps } from "../engine"
import { Flip } from "../engine"
import { StepSwitch } from "../ui"

export function DatasetSlide({ currentStep, onSlideMount }: SlideProps) {
	onSlideMount?.(3)

	return (
		<main className="h-full">
			<section className="grid h-full" style={{ alignContent: "start" }}>
				<div className="col-span-12">
					<p className="kicker">Dataset</p>
				</div>
				<div className="col-span-12 sm:col-span-8">
					<h2 className="title">Traffic_Sign_-2 (train split)</h2>
					<p className="lede" style={{ marginTop: 12 }}>
						16,100 images · 5 classes · remove corrupted files · normalize labels
					</p>
				</div>
				<div className="col-span-12">
					<div className="rule" />
				</div>

				<div className="col-span-12 sm:col-span-8">
					<StepSwitch step={currentStep}>
						{
							[
								<div key="s0" className="panel pad">
									<div className="micro">Classes</div>
									<div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 10, color: "var(--muted)", fontSize: 14 }}>
										<span>SpeedLimit</span>
										<span>Direction</span>
										<span>No Entry</span>
										<span>Crossings</span>
										<span>Cautions</span>
									</div>
									<div style={{ marginTop: 10, color: "var(--muted)", fontSize: 13, lineHeight: 1.65 }}>
										Label note: one folder appears as <code>DIrection</code> and will be normalized to <code>Direction</code>.
									</div>
								</div>,
								<div key="s1">
									<Flip id="dist">
										<img
											src="/slides/class_distribution.png"
											alt="Training set distribution per category"
											className="img img--mono"
											style={{ width: "100%", height: "auto" }}
										/>
									</Flip>
									<div className="micro" style={{ marginTop: 10 }}>
										Largest-to-smallest ratio ~4:1
									</div>
								</div>,
								<div key="s2">
									<Flip id="samples">
										<img
											src="/slides/samples.png"
											alt="Sample tiles from each traffic sign category"
											className="img img--mono"
											style={{ width: "100%", height: "auto" }}
										/>
									</Flip>
									<div className="micro" style={{ marginTop: 10 }}>
										Lighting · clutter · scale variance
									</div>
								</div>,
							] as any
						}
					</StepSwitch>
				</div>

				<div className="col-span-12 sm:col-span-4">
					<div className="panel pad">
						<div className="micro">Integrity</div>
						<div style={{ marginTop: 12, color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>
							Detected 35 corrupted/unreadable images across categories. Remove before training.
						</div>
						<div className="rule" style={{ marginTop: 14, marginBottom: 14 }} />
						<div className="micro">Imbalance action</div>
						<div style={{ marginTop: 10, color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>
							Class-weighted loss · balanced sampling · targeted augmentation.
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
