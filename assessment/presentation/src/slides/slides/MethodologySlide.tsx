import { useEffect } from "react";
import type { SlideProps } from "../engine";
import { StepSwitch } from "../ui";

export function MethodologySlide({ currentStep, onSlideMount }: SlideProps) {
	useEffect(() => {
		onSlideMount?.(4);
	}, [onSlideMount]);

	return (
		<main className="slide">
			<section className="slide__grid">
				<div className="col-span-12">
					<p className="kicker">Dataset problems</p>
				</div>

				<div className="col-span-12 lg:col-span-8">
					<h2 className="title">
						Clean the data, then augment for robustness.
					</h2>
					<p className="lede mt-6 max-w-3xl">
						We fix integrity and normalization issues first, then use
						training-time augmentation to simulate real road variation.
					</p>
				</div>

				<div className="col-span-12 self-end">
					<div className="rule" />
				</div>

				<div className="col-span-12">
					<StepSwitch step={currentStep} className="grid grid-cols-12 gap-8">
						{[
							<div key="corrupt" className="col-span-12 flex justify-center">
								<div className="w-full max-w-6xl">
									<img
										src="/slides/corrupt.png"
										alt="Corrupted files found during audit"
										className="figure mx-auto max-h-[70dvh] w-auto max-w-full object-contain"
									/>
									<p className="caption mt-3 text-center">
										35 corrupted files found during audit
									</p>
								</div>
							</div>,
							<div
								key="rgb"
								className="col-span-12 lg:col-span-8 lg:col-start-3"
							>
								<div className="panel panel--box text-center">
									<div className="mt-8 grid gap-6 md:grid-cols-3">
										{[
											["R", "77"],
											["G", "71"],
											["B", "75"],
										].map(([channel, value]) => (
											<div
												key={channel}
												className="stat mx-auto w-full max-w-[12rem]"
											>
												<p className="stat__value break-keep text-center">
													{value}
												</p>
												<p className="stat__label mt-3 text-center">
													{channel}
												</p>
											</div>
										))}
									</div>
									<div className="rule my-6" />
									<p className="mx-auto max-w-2xl text-[18px] leading-[1.6] text-[var(--muted)]">
										The profile is dark overall, so normalization and
										brightness-aware augmentation are justified.
									</p>
								</div>
							</div>,
							<div
								key="imbalance"
								className="col-span-12 lg:col-span-8 lg:col-start-3"
							>
								<div className="panel panel--box">
									<div className="micro">Class imbalance</div>
									<div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,12rem)_1fr] md:items-start">
										<div className="stat">
											<p className="stat__value">4:1</p>
										</div>
										<div className="space-y-4 text-[18px] leading-[1.6] text-[var(--muted)]">
											<div className="border-t border-[var(--rule)] pt-4">
												SpeedLimit is far ahead of Cautions.
											</div>
											<div className="border-t border-[var(--rule)] pt-4">
												Minority recall will be the fragile point.
											</div>
										</div>
									</div>
								</div>
							</div>,
							<div
								key="augment"
								className="col-span-12 lg:col-span-10 lg:col-start-2"
							>
								<div className="panel panel--box">
									<div className="micro">Augmentation plan (train only)</div>
									<div className="mt-6 grid gap-4 md:grid-cols-2">
										{[
											["RandomFlip", "horizontal, p = 0.5"],
											["RandomRotation", "+/- 15 deg (factor = 0.04)"],
											[
												"RandomTranslation",
												"+/- 10% (height_factor = 0.10, width_factor = 0.10)",
											],
											[
												"RandomZoom",
												"0.9-1.1 (height/width factor = (-0.10, 0.10))",
											],
											["RandomContrast", "+/- 20% (factor = 0.20)"],
											["RandomBrightness", "+/- 15% (factor = 0.15)"],
											[
												"Cutout / RandomErasing",
												"p = 0.5, 1 patch, area = 8-20%, aspect = 0.3-3.3, fill = 0",
											],
										].map(([name, params]) => (
											<div
												key={name}
												className="rounded-xl border border-[var(--rule)] bg-[rgba(255,255,255,0.02)] p-4"
											>
												<div className="text-sm font-medium text-[var(--ink)]">
													{name}
												</div>
												<div className="mt-2 text-[16px] leading-[1.55] text-[var(--muted)]">
													{params}
												</div>
											</div>
										))}
									</div>
									<div className="rule my-6" />
									<div className="space-y-2 text-[18px] leading-[1.6] text-[var(--muted)]">
											<p>
												Applied sequentially per image (Flip -> Rotate -> Translate
												-> Zoom -> Contrast/Brightness -> Cutout).
											</p>
										<p>
											Validation and test use deterministic resize +
											normalization only.
										</p>
									</div>
								</div>
							</div>,
						]}
					</StepSwitch>
				</div>
			</section>
		</main>
	);
}
