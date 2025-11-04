import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Theme = "light" | "dark" | "system"

const themeOptions: { value: Theme; label: string; icon: React.ReactNode }[] = [
  {
    value: "light",
    label: "Claro",
    icon: <Sun className="h-4 w-4 mr-2 text-amber-500" />,
  },
  {
    value: "dark",
    label: "Oscuro",
    icon: <Moon className="h-4 w-4 mr-2 text-indigo-400" />,
  },
  {
    value: "system",
    label: "Sistema",
    icon: <Monitor className="h-4 w-4 mr-2 text-muted-foreground" />,
  },
]

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-9 w-9 rounded-full hover:bg-accent/50"
          aria-label="Cambiar tema"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-40 p-2 bg-card border-border/50 backdrop-blur-sm"
      >
        {themeOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setTheme(option.value)}
            className={`flex items-center rounded-md px-3 py-2 text-sm cursor-pointer transition-colors ${
              theme === option.value 
                ? 'bg-accent/50 text-foreground' 
                : 'hover:bg-accent/30 text-muted-foreground hover:text-foreground'
            }`}
          >
            {option.icon}
            <span>{option.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
