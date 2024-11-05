import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { YoutubeLogo } from '@phosphor-icons/react';

interface Video {
    link: string;
}

interface VideosComponentProps {
    videos: Video[];
}

const VideosComponent: React.FC<VideosComponentProps> = ({ videos }) => {
    const [loadedImages, setLoadedImages] = useState<boolean[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    useEffect(() => {
        setLoadedImages(Array(videos.length).fill(false));
    }, [videos]);

    const handleImageLoad = (index: number) => {
        setLoadedImages((prevLoadedImages) => {
            const updatedLoadedImages = [...prevLoadedImages];
            updatedLoadedImages[index] = true;
            return updatedLoadedImages;
        });
    };

    const handleVideoSelect = (link: string) => {
        setSelectedVideo(link);
    };

    const VideosSkeleton = () => (
        <div className="w-full p-1 ">
            <div className="w-full overflow-hidden aspect-video mt-5">
                <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
        </div>
    );

    return (
        <div className='w-full'>
            <div className="w-full text-center mt-4">
                <h2 className="text-xl font-semibold">Video results</h2>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-4 w-full px-2 flex items-center justify-center">

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    orientation="vertical"
                    className="w-full max-w-xs"
                >
                    <CarouselContent className=" h-[175px] mx-auto">
                        {videos.length === 0 ? (
                            <VideosSkeleton />
                        ) : (
                            videos.map((video, index) => {
                                const videoId = getYouTubeVideoId(video.link);
                                const imageUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

                                return (
                                    <CarouselItem key={index} className="py-5 md:basis-1/2 ">
                                        <div className="p-1">
                                            <Card>
                                                <CardContent className="flex items-center justify-center p-0 h-[150px] relative">
                                                    {selectedVideo === video.link ? (
                                                        <iframe
                                                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                                            title={`YouTube Video ${index}`}
                                                            allowFullScreen
                                                            className="w-full h-full rounded-lg"
                                                            allow="autoplay"
                                                        ></iframe>
                                                    ) : (
                                                        <div
                                                            className="relative rounded-lg w-full overflow-hidden aspect-video transition-all duration-200 cursor-pointer"
                                                            onClick={() => handleVideoSelect(video.link)}
                                                        >
                                                            <YoutubeLogo
                                                                weight="fill"
                                                                size={40}
                                                                className="absolute bottom-2 left-2 text-red-600 bg-white rounded-full p-1 opacity-80"
                                                            />
                                                            <img
                                                                src={imageUrl}
                                                                alt={`Video ${index}`}
                                                                className={`clip-yt-img w-full h-auto rounded-lg transition-all duration-200 ${loadedImages[index] ? 'block' : 'hidden'}`}
                                                                onLoad={() => handleImageLoad(index)}
                                                            />
                                                        </div>
                                                    )}
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                );
                            })
                        )}
                    </CarouselContent>
                    <div className="hidden lg:flex justify-center mt-2">
                        <CarouselPrevious className="top-[90px] left-[310px] " />
                        <CarouselNext className="bottom-[5px] left-[310px] w-8 h-8" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

const getYouTubeVideoId = (url: string) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : '';
};

export default VideosComponent;
