import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { siteConfig } from "@/config/site"

export default async function AboutPage() {
    return <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="flex-1 space-x-4">
                <h1 className="inline-block font-black text-4xl lg:text-5xl">
                    About Me
                </h1>
            </div>
        </div>
        <hr className="my-8"/>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="min-w-48 max-w-48 flex flex-col gap-2">
                <Avatar className="h-48 w-48">
                    {/* avatar.png can be your photo but keep under public directory */}
                    <AvatarImage src="/avatar.png" alt={siteConfig.author} />
                    <AvatarFallback>MP</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold text-center break-words">
                    {siteConfig.author}
                </h2>
                <p className="text-muted-foreground text-center break-words">AI/ML Engineer</p>
                <p className="text-muted-foreground text-center break-words">Senior Python Developer</p>
                <p className="text-muted-foreground text-center break-words">Python Full Stack Developer</p>
            </div>
            <p className="text-muted-foreground text-lg py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        </div>
    </div>
}