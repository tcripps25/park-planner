import { ref } from 'vue'
import { HomeIcon, CalendarIcon } from '@heroicons/vue/16/solid'

export const menuItems = ref([
  { label: 'Home', to: 'home', icon: HomeIcon },
  {
    label: 'Plans',
    to: 'plans',
    section: true,
    children: [
      { label: 'Plan 1', to: 'plans/1', icon: CalendarIcon },
      { label: 'Plan 2', to: 'plans/2', icon: CalendarIcon },
    ],
  },
])
