'use client'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    // SidebarHeader,
    // SidebarFooter
  } from "@/components/ui/sidebar"
  import { Home, Search, Settings,History , School} from "lucide-react"
  import { useParams } from "next/navigation";

  
  export function AppSidebar() {
    const params = useParams();
  const id = params?.id;
// Menu items.
const items = [
  {
    title: "Home",
    url: `/dashboard/${id}`,
    icon: Home,
  },
  {
    title: "Explore",
    url:  `/dashboard/${id}/explore`,
    icon: School,
  },
  {
    title: "history",
    url: `/dashboard/${id}/history`,
    icon: History,
  },
  {
    title: "Search",
    url:`/dashboard/${id}/search`,
    icon: Search,
  },
  {
    title: "Settings",
    url: `/dashboard/${id}/settings`,
    icon: Settings,
  },
]
    
    return (
      <Sidebar>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>My Application</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map((item, index) => (
                            <SidebarMenuItem key={index} >
                                <SidebarMenuButton asChild>
                                    <a href={item.url}>
                                        <item.icon/>
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }
  