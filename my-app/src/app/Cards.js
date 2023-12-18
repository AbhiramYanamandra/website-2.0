import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Chip } from "@nextui-org/react";

const cardData = [
  {
    title: "Folder Sorter",
    body: "Sorts files from the download folder into other folders based on name",
    tags: ["Python", "Selenium"],
  },
  {
    title: "Automated Video Downloader",
    body: "given a playlist on youtube, automatically downloads all the videos in playlist",
    tags: ["Python", "Selenium"],
  },

];

export default function Cards() {
  return (
    <div>
      {cardData.map((data, index) => (
        <Card key={index} shadow="lg" className="max-w-[400px] m-4">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-base">{data.title}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-sm">{data.body}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            {data.tags.map((tag, tagIndex) => (
              <Chip key={tagIndex} variant="shadow" className="mr-2">
                {tag}
              </Chip>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
