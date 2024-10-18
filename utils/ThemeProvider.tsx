"use client"

import { theme } from "@/common/theme";
import { ThemeProvider } from "styled-components";


export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
} 