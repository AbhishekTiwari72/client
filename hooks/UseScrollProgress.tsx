import { useEffect, useState } from 'react';

const UseScrollProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                const progress = (currentProgress / scrollHeight) * 100;
                setCompletion(Number(progress.toFixed(2)));
            }
        };

        window.addEventListener('scroll', updateScrollCompletion);
        return () => window.removeEventListener('scroll', updateScrollCompletion);
    }, []);

    return completion;
};

export default UseScrollProgress;
