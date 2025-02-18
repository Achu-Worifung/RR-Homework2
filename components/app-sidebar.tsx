import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter
  } from "@/components/ui/sidebar"
  import { Home, Search, Settings,History , School} from "lucide-react"

  // Menu items.
const items = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Explore",
      url: "/explore",
      icon: School,
    },
    {
      title: "history",
      url: "/history",
      icon: History,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ]
  export function AppSidebar() {

    
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
  