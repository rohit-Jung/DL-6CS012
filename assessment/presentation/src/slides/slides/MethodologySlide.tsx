import type { SlideProps } from "../engine"
import { StepSwitch } from "../ui"

export function MethodologySlide({ currentStep, onSlideMount }: SlideProps) {
	onSlideMount?.(2)

	return (
		<main className="h-full">
			<section className="grid h-full" style={{ alignContent: "start" }}>
				<div className="col-span-12">
					<p className="kicker">Methodology</p>
				</div>
				<div className="col-span-12 sm:col-span-8">
					<h2 className="title">Training pipeline + model comparison.</h2>
					<p className="lede" style={{ marginTop: 12 }}>
						Audit first. Standardize inputs. Compare three model families with per-class metrics.
					</p>
				</div>
				<div className="col-span-12">
					<div className="rule" />
				</div>

				<div className="col-span-12 sm:col-span-8">
					<StepSwitch step={currentStep}>
						{
							[
								<div key="pipe" className="panel pad">
									<div className="micro">Pipeline</div>
									<div className="grid" style={{ marginTop: 12, gap: 12 }}>
										<div className="col-span-12 sm:col-span-6">
											<div className="micro">Preprocess</div>
											<ul style={{ marginTop: 10, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7, fontSize: 14 }}>
												<li>Remove corrupted files (log removals).</li>
												<li>Normalize labels: DIrection → Direction.</li>
												<li>Resize to 48x48; normalize pixel values.</li>
											</ul>
										</div>
										<div className="col-span-12 sm:col-span-6">
											<div className="micro">Augment</div>
											<ul style={{ marginTop: 10, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7, fontSize: 14 }}>
												<li>Rotation/translation/zoom/shear.</li>
												<li>Brightness/contrast for uneven lighting.</li>
												<li>Balanced sampling for minority classes.</li>
											</ul>
										</div>
									</div>
								</div>,
								<div key="models" className="panel pad">
									<div className="micro">Models to compare</div>
									<div className="grid" style={{ marginTop: 12, gap: 12 }}>
										{[
											[
												"Baseline CNN",
												"3x3 conv stacks + max pool + dense + 5-class softmax.",
											],
											[
												"Regularized CNN",
												"Batch norm + dropout (0.3–0.5) to stabilize and reduce overfit.",
											],
											[
												"Transfer learning",
												"Fine-tune MobileNetV2 / ResNet to test pretrained features vs from-scratch.",
											],
										].map(([h, d]) => (
											<div key={h} className="col-span-12 sm:col-span-4">
												<div className="micro" style={{ color: "var(--ink)" }}>
													{h}
												</div>
												<div style={{ marginTop: 10, color: "var(--muted)", lineHeight: 1.7, fontSize: 14 }}>
													{d}
												</div>
											</div>
										))}
									</div>
								</div>,
							] as any
						}
					</StepSwitch>
				</div>

				<div className="col-span-12 sm:col-span-4">
					<div className="panel pad">
						<div className="micro">Evaluation</div>
						<ul style={{ marginTop: 12, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7, fontSize: 14 }}>
							<li>Per-class precision/recall + confusion matrix.</li>
							<li>Prioritize minority recall (Crossings/Cautions).</li>
							<li>Track failure modes under low light and small scale.</li>
						</ul>
					</div>
				</div>
			</section>
		</main>
	)
}
