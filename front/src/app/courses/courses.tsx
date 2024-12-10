

import { AvatarFallback, Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, PanelsTopLeft, Star, StarHalf } from 'lucide-react';
import React from 'react';

export const Courses = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center gap-8 md:gap-0 md:justify-between ">
      {[1, 2, 3].map((item) => (
        <Card key={item} className="bg-white w-[400px]">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar>
                <AvatarImage
                  src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME="
                  width={70}
                  className="object-fill rounded-full"
                  height={70}
                  alt="Instructor"
                />
                <AvatarFallback>MG</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">Martin Goutry</h3>
                <p className="text-sm text-gray-600">Instructor</p>
              </div>
            </div>
            <h4 className="text-xl text-lightblue font-semibold mb-4">
              Lorem ipsum dolor sit amet sit amet sit
            </h4>
            <p className="text-gray-900 mb-4 text-sm">
              Lorem ipsum dolor sit amet sit amet lorem ipsum dolor sit amet sit amet
            </p>
            <div className="flex justify-between my-8">
              <div>
                <div className="flex space-x-2">
                  <Clock fill="#015AFF" color="white" />
                  <span className="text-sm font-semibold">time/duration</span>
                </div>
                <div className="flex space-x-2">
                  <PanelsTopLeft fill="#015AFF" color="white" />
                  <span className="text-sm font-semibold">live / recorded</span>
                </div>
              </div>
              <div>
                <div className="flex space-x-2">
                  <PanelsTopLeft fill="#015AFF" color="white" />
                  <span className="text-sm font-semibold">live / recorded</span>
                </div>
                <div className="flex space-x-2">
                  <Clock fill="#015AFF" color="white" />
                  <span className="text-sm font-semibold">time/duration</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Star fill="#DFB300" />
                <Star fill="#DFB300" />
                <Star fill="#DFB300" />
                <Star fill="#DFB300" />
                <StarHalf fill="#DFB300" />
                <span className="ml-1">4.5</span>
              </div>
              <div className="text-sm font-semibold text-lightblue border border-lightblue py-1 px-4">
                App Dev
              </div>
            </div>
            <Button variant="default" className="w-full py-6 text-lg font-semibold text-white">
              Start Learning
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
