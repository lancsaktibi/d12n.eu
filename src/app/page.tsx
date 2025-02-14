import { getStartDe } from "../sanity/lib/sanityFetch";
import { PortableText } from '@portabletext/react'

const Page = async () => {
    const [start] = await Promise.all([
        getStartDe()
    ])
    
    return (
        <div className="flex justify-center">
            <div className="bg-white py-24 px-6">
                <h2 className="text-3xl font-bold">
                    {start.title}
                </h2>
                <div className="mt-2 text-lg">
                    <PortableText value={start.body} />
                </div>
                <div className="mt-2 text-lg">
                    <a href="/de/pt">Politische Theorie</a>
                </div>
            </div>
        </div>
    );
};

export default Page;