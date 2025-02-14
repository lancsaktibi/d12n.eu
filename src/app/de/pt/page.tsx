import { getAllPtPostsDe } from "../../../sanity/lib/sanityFetch";
import { PortableText } from '@portabletext/react';
import Card from "../../../components/Card";
import React from "react";

const Page = async () => {
    const [posts = []] = await Promise.all([
        getAllPtPostsDe()
    ])

    return (
        <div className="flex justify-center">
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">                  
                    <div className="mx-auto mt-10 grid max-w-2xl gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) =>
                            <React.Fragment key={post._id}>
                                <Card key={post._id} post={post} />
                            </React.Fragment>  
                        )}             
                    </div>    
                </div>
            </div>
        </div>
    );
};

export default Page;