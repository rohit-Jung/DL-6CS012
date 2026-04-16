import {
	type HTMLAttributes,
	type ReactNode,
	ViewTransition,
	addTransitionType,
	useCallback,
	useEffect,
	useState,
	startTransition,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type SlideComponent = (props: SlideProps) => ReactNode;

export type SlideProps = {
	currentStep: number;
	onSlideMount?: (totalSteps: number) => void;
};

function isTypingTarget(target: EventTarget | null) {
	if (!target || !(target instanceof HTMLElement)) return false;
	const tag = target.tagName;
	return tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable;
}

export function Slides({ slides }: { slides: SlideComponent[] }) {
	const [current, setCurrent] = useState(0);
	const [currentStep, setCurrentStep] = useState(0);
	const [busy, setBusy] = useState(false);
	const [currentSlideTotalSteps, setCurrentSlideTotalSteps] = useState(1);
	const reducedMotion = useReducedMotion();

	const ActiveSlide = slides[current] ?? slides[0];

	const onSlideMount = useCallback((totalSteps = 1) => {
		setCurrentSlideTotalSteps(totalSteps);
	}, []);

	const move = useCallback(
		(direction: -1 | 1) => {
			if (!slides.length || busy) return;
			const transitionType =
				direction === 1 ? "navigation-forward" : "navigation-back";

			const clamp = (index: number) => {
				if (!slides.length) return 0;
				return Math.min(Math.max(index, 0), slides.length - 1);
			};

			if (direction === 1) {
				if (currentStep < currentSlideTotalSteps - 1) {
					startTransition(() => {
						addTransitionType(transitionType);
						setCurrentStep((s) => s + 1);
					});
					return;
				}

				const nextIndex = clamp(current + 1);
				if (nextIndex !== current) {
					startTransition(() => {
						addTransitionType(transitionType);
						setCurrent(nextIndex);
						setCurrentStep(0);
						setCurrentSlideTotalSteps(1);
					});
				}
				return;
			}

			if (currentStep > 0) {
				startTransition(() => {
					addTransitionType(transitionType);
					setCurrentStep((s) => s - 1);
				});
				return;
			}

			const prevIndex = clamp(current - 1);
			if (prevIndex !== current) {
				startTransition(() => {
					addTransitionType(transitionType);
					setCurrent(prevIndex);
					setCurrentStep(0);
					setCurrentSlideTotalSteps(1);
				});
			}
		},
		[busy, current, currentSlideTotalSteps, currentStep, slides.length],
	);

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (isTypingTarget(event.target)) return;

			if (
				event.key === "ArrowRight" ||
				event.key === " " ||
				event.key === "PageDown"
			) {
				event.preventDefault();
				move(1);
			}

			if (event.key === "ArrowLeft" || event.key === "PageUp") {
				event.preventDefault();
				move(-1);
			}
		}

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [move]);

	return (
		<section className="deck h-full">
			<ViewTransition
				default={{
					"navigation-forward": "vt-forward",
					"navigation-back": "vt-back",
					default: "vt-fade",
				}}
				onUpdate={() => {
					setBusy(true);
					return () => setBusy(false);
				}}
				onShare={() => {
					setBusy(true);
					return () => setBusy(false);
				}}
			>
				<div className="deck__frame">
					<div className="deck__meta" aria-hidden="true">
						<div className="deck__metaLabel">DECK</div>
						<div className="deck__metaRule" />
						<div className="deck__metaValue">
							<span className="deck__metaMono">
								{String(current + 1).padStart(2, "0")}
							</span>
							<span className="deck__metaMono">/</span>
							<span className="deck__metaMono">
								{String(slides.length).padStart(2, "0")}
							</span>
						</div>
						<div className="deck__metaRule" />
						<div className="deck__metaValue">
							<span className="deck__metaMono">STEP</span>
							<span className="deck__metaMono">
								{String(currentStep + 1).padStart(2, "0")}
							</span>
							<span className="deck__metaMono">/</span>
							<span className="deck__metaMono">
								{String(currentSlideTotalSteps).padStart(2, "0")}
							</span>
						</div>
					</div>

					<div className="deck__stage">
						<div className="deck__canvas">
							<DeckOrnaments />
							<AnimatePresence mode="wait" initial={false}>
								<motion.div
									key={current}
									className="deck__slide"
									initial={reducedMotion ? false : { opacity: 0, y: 8 }}
									animate={
										reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
									}
									exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
									transition={
										reducedMotion
											? { duration: 0 }
											: { duration: 0.18, ease: [0.22, 1, 0.36, 1] }
									}
								>
									{ActiveSlide ? (
										<ActiveSlide
											currentStep={currentStep}
											onSlideMount={onSlideMount}
										/>
									) : null}
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>
			</ViewTransition>
		</section>
	);
}

function DeckOrnaments() {
	const reduced = useReducedMotion();

	return (
		<div className="deck__ornaments" aria-hidden="true">
			<motion.svg
				className="deck__ornament deck__ornament--ring"
				viewBox="0 0 100 100"
				fill="none"
				animate={
					reduced
						? undefined
						: {
								x: [0, -8, 0],
								y: [0, 6, 0],
								rotate: [0, 8, 0],
							}
				}
				transition={
					reduced
						? undefined
						: {
								duration: 12,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
							}
				}
			>
				<circle cx="50" cy="50" r="32" stroke="var(--rule)" strokeWidth="1" />
				<circle
					cx="50"
					cy="50"
					r="18"
					stroke="var(--accent)"
					strokeWidth="1"
					opacity="0.55"
				/>
			</motion.svg>

			<motion.svg
				className="deck__ornament deck__ornament--kite"
				viewBox="0 0 120 120"
				fill="none"
				animate={reduced ? undefined : { y: [0, -7, 0], rotate: [0, -4, 0] }}
				transition={
					reduced
						? undefined
						: {
								duration: 10,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
							}
				}
			>
				<path
					d="M60 18 L96 58 L60 102 L24 58 Z"
					stroke="var(--rule)"
					strokeWidth="1"
				/>
				<path
					d="M60 18 L60 102"
					stroke="var(--accent)"
					strokeWidth="1"
					opacity="0.55"
				/>
			</motion.svg>

			<motion.svg
				className="deck__ornament deck__ornament--ticks"
				viewBox="0 0 180 60"
				fill="none"
				animate={reduced ? undefined : { x: [0, 10, 0] }}
				transition={
					reduced
						? undefined
						: {
								duration: 14,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
							}
				}
			>
				{Array.from({ length: 10 }).map((_, i) => {
					const x = 10 + i * 16;
					const h = i % 3 === 0 ? 18 : 10;
					return (
						<path
							key={String(i)}
							d={`M${x} ${50} V${50 - h}`}
							stroke="var(--rule)"
							strokeWidth="1"
							opacity={i % 3 === 0 ? 0.5 : 0.28}
						/>
					);
				})}
			</motion.svg>
		</div>
	);
}

export function Step({ children }: { children?: ReactNode }) {
	return children;
}

export function Flip({
	id,
	as: Tag = "div",
	className,
	children,
	...rest
}: {
	id: string;
	as?: keyof JSX.IntrinsicElements;
	className?: string;
	children?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "style">) {
	return (
		<ViewTransition name={`deck:${id}`}>
			<Tag
				// biome-ignore lint/suspicious/noExplicitAny: dynamic tag
				{...(rest as any)}
				className={["flip-root", className].filter(Boolean).join(" ")}
				data-flip={id}
			>
				{children}
			</Tag>
		</ViewTransition>
	);
}
