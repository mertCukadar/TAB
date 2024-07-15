'use client'
import React, { useEffect, useState, useRef } from 'react';

interface ResponseData {
    html: string;
}

const Page: React.FC = () => {
    const [response, setResponse] = useState<ResponseData>({ html: '' });
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/blog/3')
            .then(res => res.json())
            .then((data: ResponseData) => setResponse(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        if (iframeRef.current) {
            const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
            if (doc) {
                doc.open();
                doc.write(response.html);
                doc.close();
            }
        }
    }, [response]);

    return (
        <div className='flex flex-col justify-center items-center bg-white text-black w-full py-12 h-screen'>
            <iframe
                ref={iframeRef}
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Content"
            />
        </div>
    );
}

export default Page;
