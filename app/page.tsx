import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800">
      <main className="flex-1 pt-16">

        {/* Section 1 - Hero */}
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48 bg-gradient-to-br from-blue-900/50 to-slate-900/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  KAZI TANI
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Mustapha Chihab Eddinne
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mt-6">
                  Front-End Developer passionate about crafting intuitive digital experiences.
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="#contact">
                  <Button className="bg-transparent backdrop-blur-sm border border-blue-400/30 hover:bg-blue-400/10 rounded-full px-8 py-6 text-lg text-blue-300 hover:text-blue-200 transition-all">
                    Contact Me
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - About */}
        <section id="about" className="w-full py-24 lg:py-32 bg-gradient-to-br from-blue-900/50 to-slate-900/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="space-y-4 text-slate-300 text-lg">
                  <p>
                    🚀 Computer Science student passionate about Front-End Development and AI. Specializing in dynamic web apps with modern tech stack. Continuous learner and collaborative team player ready to create amazing things!
                  </p>
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-slate-100 mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {['HTML' ,'CSS' ,'JavaScript' ,'React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Git', 'UI/UX', 'Projects Managment'].map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-zinc-800/50 backdrop-blur-sm border border-slate-600/30 text-slate-300 hover:bg-slate-700/50"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <Card className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/30">
                  <CardHeader>
                    <CardTitle className="text-slate-100">Education</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-blue-300 font-medium">2 eme annee licence </div>
                    <div className="text-slate-400 text-sm">Université Abou Bakr Belkaid Tlemcen</div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/30">
                  <CardHeader>
                    <CardTitle className="text-slate-100">Experience</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-blue-300 font-medium">Front-End Developer</div>
                      
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Projects */}
        <section id="projects" className="w-full py-24 lg:py-32 bg-gradient-to-br from-blue-900/50 to-slate-900/50">
          <div className="container px-4 md:px-6">
            <div className="space-y-12">
              <div className="text-center space-y-6">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                  Some of the digital products I&apos;ve built recently
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((project) => (
                  <Card
                    key={project}
                    className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-700/30 hover:border-blue-400/30 transition-all group hover:scale-[1.02]"
                  >
                    <CardHeader>
                      <CardTitle className="text-slate-100">Project {project}</CardTitle>
                      <CardDescription className="text-slate-400">
                        Project description and details
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-slate-900/50 rounded-lg" />
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button
                        variant="ghost"
                        className="text-blue-300 hover:bg-blue-400/10"
                      >
                        View Project →
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Contact */}
        <section id="contact" className="w-full py-24 lg:py-32 bg-gradient-to-br from-blue-900/50 to-slate-900/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-12">
              <div className="space-y-6 max-w-2xl">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Let&apos;s Connect
                </h2>
                <p className="text-slate-400 text-lg">
                  Have a project in mind? Want to collaborate?
                  Or just want to say hi? I&apos;d love to hear from you!
                </p>
              </div>

              <div className="flex gap-6">
                <Link
                  href=""
                  className="p-4 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30 hover:border-blue-400/30 hover:bg-blue-400/10 transition-all hover:scale-110"
                >
                  <Github className="h-6 w-6 text-slate-300" />
                </Link>
                <Link
                  href="#"
                  className="p-4 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30 hover:border-blue-400/30 hover:bg-blue-400/10 transition-all hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 text-slate-300" />
                </Link>
                <Link
                  href="#"
                  className="p-4 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30 hover:border-blue-400/30 hover:bg-blue-400/10 transition-all hover:scale-110"
                >
                  <Mail className="h-6 w-6 text-slate-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-zinc-800 bg-zinc-900">
        <div className="container px-4 md:px-6 text-center text-slate-400">
          <p>© 2025 Kazi Tani Mustapha Chihab Eddinne . All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
