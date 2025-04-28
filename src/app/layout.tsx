import type { Metadata } from "next";
import "./globals.css";
import NavigationComponent from "@/aymericdev/app/components/navigation.component";
import {ReactNode} from "react";
import FooterComponent from "@/aymericdev/app/components/footer.component";

export const metadata: Metadata = {
  title: "Aymericdev' | Développeur web et mobile passionné",
  description: "Aymericdev' – Développeur web et mobile freelance passionné. Création de sites modernes, d'applications performantes et de solutions digitales sur mesure pour entreprises et startups.",
  keywords: [
    "développeur web freelance",
    "développeur mobile freelance",
    "création site vitrine",
    "développement application mobile",
    "développeur Next.js freelance",
    "freelance Flutter",
    "création site sur mesure",
    "freelance développeur Paris",
    "développeur freelance applications",
    "Aymericdev",
    "web",
    "internet",
    "développement",
    "html",
    "css",
    "js",
    "javascript",
    "php",
    "nodejs",
    "node.js",
    "react",
    "reactjs",
    "vue",
    "vuejs",
    "angular",
    "angularjs",
    "flutter",
    "dart",
    "base de données",
    "mysql",
    "postgresql",
    "mongo",
    "mongodb",
    "sql",
    "mongoDB",
    "seo",
    "google",
    "freelance",
    "ios",
    "android",
    "mobile",
    "freelance web",
    "freelance mobile",
    "freelance développeur",
    "freelance développeur web",
    "freelance développeur mobile",
    "freelance développeur flutter",
    "freelance développeur Dart",
    "freelance développeur Angular",
    "freelance développeur React",
    "freelance développeur Vue",
    "freelance développeur Node.js",
    "freelance développeur PHP",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div className="adev-body-block">
          <NavigationComponent />

          {children}

          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
