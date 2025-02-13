import { getStartDe, getAllPtPostsDe } from "../sanity/lib/sanityFetch";
import { PortableText } from '@portabletext/react'

const Page = async () => {
    const [start, posts = []] = await Promise.all([
        getStartDe(),
        getAllPtPostsDe()
    ])
    
    return (
        <div className="flex justify-center">
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {start.title}
                        </h2>
                        <div className="mt-2 text-lg leading-8 text-gray-600">
                            <PortableText value={start.body} />
                        </div>
                        <div className="mt-2 text-lg leading-8 text-gray-600">
                            <a href="/de/pt">Politische Theorie</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;