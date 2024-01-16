import { Link } from '@remix-run/react'
import {
	EventsScroller,
	type EventSummary,
} from '#app/components/events-scroller'
import { SearchBar } from '#app/components/search-bar.tsx'
import { ScrollArea, ScrollBar } from '#app/components/ui/scroll-area'
import { Separator } from '#app/components/ui/separator'
import { cn } from '#app/utils/misc'
import calendarCheck from './logos/calendar-check.svg'
import church from './logos/church.svg'
import prayer from './logos/prayer.svg'

export const placesData: EventSummary[] = [
	{
		id: 1,
		title: 'Ornella Binni',
		cover:
			'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 2,
		title: 'Tom Byrom',
		cover:
			'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 3,
		title: 'Vladimir Malyavko',
		cover:
			'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 4,
		title: 'Ornella Binni',
		cover:
			'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 5,
		title: 'Tom Byrom',
		cover:
			'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 6,
		title: 'Vladimir Malyavko',
		cover:
			'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 7,
		title: 'Ornella Binni',
		cover:
			'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 8,
		title: 'Tom Byrom',
		cover:
			'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 9,
		title: 'Vladimir Malyavko',
		cover:
			'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 10,
		title: 'Vladimir Malyavko',
		cover:
			'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=150&q=80',
	},
]

export const eventsData: EventSummary[] = [
	{
		id: 1,
		title: 'Ornella Binni',
		cover:
			'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 2,
		title: 'Tom Byrom',
		cover:
			'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 3,
		title: 'Vladimir Malyavko',
		cover:
			'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 4,
		title: 'Ornella Binni',
		cover:
			'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 5,
		title: 'Tom Byrom',
		cover:
			'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 6,
		title: 'Vladimir Malyavko',
		cover:
			'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 7,
		title: 'Ornella Binni',
		cover:
			'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 8,
		title: 'Tom Byrom',
		cover:
			'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 9,
		title: 'Vladimir Malyavko',
		cover:
			'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 10,
		title: 'Ornella Binni',
		cover:
			'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 11,
		title: 'Tom Byrom',
		cover:
			'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=150&q=80',
	},
	{
		id: 12,
		title: 'Vladimir Malyavko',
		cover:
			'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=150&q=80',
	},
]

export const eventTypes: EventSummary[] = [
	{
		id: 1,
		title: 'Missa',
		cover: church,
	},
	{
		id: 2,
		title: 'Confissão',
		cover: prayer,
	},
	{
		id: 3,
		title: 'Evento',
		cover: calendarCheck,
	},
]

export function EventTypeScroller({ events }: { events: EventSummary[] }) {
	return (
		<ScrollArea className="whitespace-nowrap rounded-md">
			<div
				className={cn('flex justify-center md:mt-6', 'w-xl space-x-4', 'p-4', 'gap-4')}
			>
				{events.map((event, index) => (
					<figure key={event.title}>
						<div className="rounded-md border-1 shadow-md">
							<img
								alt={event.title}
								src={event.cover}
								className="aspect-[1/1] object-cover p-5 items-center justify-center"
								width={100}
								height={100}
							/>
						</div>
						<figcaption className="pt-2 text-xs text-muted-foreground text-center">
							<span className="font-poppins font-semibold text-foreground">
								{event.title}
							</span>
						</figcaption>
					</figure>
				))}
			</div>
			<ScrollBar className="md:hidden" orientation="horizontal" />
		</ScrollArea>
	)
}
export default function Index() {
	return (
		<main className="font-poppins container flex h-max flex-col">
			<div className="flex flex-col py-4">
				<SearchBar status="idle" />

				<h2
					data-heading
					className="font-inter text-md mt-6 items-start justify-start font-semibold tracking-tight md:hidden"
				>
					O que deseja encontrar?
				</h2>

				<EventTypeScroller events={eventTypes} />

				<Separator className="my-4" />
			</div>

			<div className="flex flex-col">
				<div className="flex flex-row justify-between">
					<h2 className="font-inter text-md items-start justify-start font-semibold tracking-tight">
						Perto de você
					</h2>
					<Link to="/users">
						<p className="font-inter text-sm font-semibold tracking-tight text-blue-500">
							Ver todos
						</p>
					</Link>
				</div>
				<EventsScroller events={placesData} />
				<Separator className="my-8" />
			</div>
			<div className="flex flex-col">
				<div className="flex flex-row justify-between">
					<h2 className="font-inter text-md items-start justify-start font-semibold tracking-tight">
						Eventos hoje
					</h2>
					<Link to="/users">
						<p className="font-inter my-auto text-sm font-semibold tracking-tight text-blue-500">
							Ver todos
						</p>
					</Link>
				</div>
				<EventsScroller events={eventsData} />
				{/* <Separator className="my-6" /> */}
			</div>
		</main>
	)
}
