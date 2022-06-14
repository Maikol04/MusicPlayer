import { createRouter, createWebHistory } from "vue-router"
import Search from "@/components/view/Pm-Search.vue"
import About from "@/components/view/Pm-Nosotros.vue"
import TrackDetail from "@/components/view/Pm-TrackDetail.vue"

const routes = [
	{
		path: "/",
		name: "Search",
		component: Search,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{	
		path: "/track/:id",
		component: TrackDetail,
		name : "Track"

	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
