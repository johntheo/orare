import { cn } from '#app/utils/misc'
import { ScrollArea, ScrollBar } from './ui/scroll-area'

export interface EventSummary {
	id: number
	title: string
	cover: string
}

export function EventsScroller({ events }: { events: EventSummary[] }) {
	return (
		<ScrollArea className="whitespace-nowrap rounded-md">
			<div className={cn('flex', 'w-max space-x-4', 'p-4')}>
				{events.map((event, index) => (
					<figure
						key={event.title}
						className={cn(
							'shrink-0',
							// 'animate-roll-reveal [animation-fill-mode:backwards]',
						)}
						style={{ animationDelay: `${index * 0.08}s` }}
					>
						<div className={cn('overflow-hidden rounded-md')}>
							<img
								alt={event.title}
								src={event.cover}
								className="aspect-[1/1] h-fit w-fit object-cover"
								width={150}
								height={150}
							/>
						</div>
						<figcaption className="pt-2 text-xs text-muted-foreground">
							<span className="font-poppins font-semibold text-foreground">
								{event.title}
							</span>
						</figcaption>
					</figure>
				))}
			</div>
			<ScrollBar orientation="horizontal" />
		</ScrollArea>
	)
}
