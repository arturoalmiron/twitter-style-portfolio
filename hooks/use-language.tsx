"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Profile
    following: "Following",
    followers: "Followers",
    posts: "Posts",
    hourlyRate: "Hourly Rate",
    about: "About",
    aboutDescription:
      "I am a QA Engineer with experience in Agile environments, specializing in both manual testing and developing automated scripts to ensure high-quality, reliable software releases.",
    location: "Asuncion, Paraguay",
    translatePost: "Translate post",

    // Tabs
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    reviews: "Reviews",
    manage: "Manage",

    // Experience
    myExperiences: "My experiences 🧑‍💻",
    bookMentoring: "Book Mentoring",

    // Skills
    mySkills: "My skills 🧠",

    // Reviews
    clientReviews: "Client Reviews",
    weeksAgo: "weeks ago",
    monthAgo: "month ago",
    monthsAgo: "months ago",

    // Admin
    portfolioAdmin: "Portfolio Admin",
    backToPortfolio: "Back to Portfolio",
    manageExperience: "Manage Experience",
    manageSkills: "Manage Skills",
    manageReviews: "Manage Reviews",

    // Projects
    myProjects: "My projects 💼",
  },
  es: {
    // Profile
    following: "Siguiendo",
    followers: "Seguidores",
    posts: "Publicaciones",
    hourlyRate: "Tarifa por Hora",
    about: "Acerca de",
    aboutDescription:
      "Soy un Ingeniero de QA con experiencia en entornos ágiles, especializado en pruebas manuales y en el desarrollo de scripts automatizados para garantizar entregas de software de alta calidad y confiables.",
    location: "Asunción, Paraguay",
    translatePost: "Traducir publicación",

    // Tabs
    experience: "Experiencia",
    skills: "Habilidades",
    projects: "Proyectos",
    reviews: "Reseñas",
    manage: "Gestionar",

    // Experience
    myExperiences: "Mis experiencias 🧑‍💻",
    bookMentoring: "Reservar Mentoría",

    // Skills
    mySkills: "Mis habilidades 🧠",

    // Reviews
    clientReviews: "Reseñas de Clientes",
    weeksAgo: "semanas atrás",
    monthAgo: "mes atrás",
    monthsAgo: "meses atrás",

    // Admin
    portfolioAdmin: "Administrador de Portafolio",
    backToPortfolio: "Volver al Portafolio",
    manageExperience: "Gestionar Experiencia",
    manageSkills: "Gestionar Habilidades",
    manageReviews: "Gestionar Reseñas",

    // Projects
    myProjects: "Mis proyectos 💼",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"))
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}