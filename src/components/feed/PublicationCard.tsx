import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { AvatarUser } from "../AvatarUser";
import { Pet } from "@/types/types";
import { BASE_URL_API } from "@/config";
import RatingPetStars from "./RatingPetStars";
import { Badge } from "../ui/badge";

interface Props {
  pet: Pet;
}

function PublicationCard({ pet }: Props) {
  const { images } = pet;

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-3">
          <AvatarUser />

          <p className="font-bold">{pet.user ? pet.user.name : ""}</p>
        </div>
      </CardHeader>
      <div className=" w-11/12 mx-auto flex justify-between items-end">
        <div className="flex capitalize flex-col">
          <strong className="md:text-2xl">{pet.name}</strong>
          <div className="flex gap-2 items-center" >
            <Badge>{pet.breed}</Badge>
            <Badge variant="secondary" >{pet.type}</Badge>
          </div>
        </div>

        <RatingPetStars rating={pet.rating} />
      </div>
      <CardContent className="w-full">
        <Carousel>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center ">
                      <img
                        className="w-full h-auto rounded-lg "
                        src={image.url.replace(
                          "http://localhost:3000",
                          BASE_URL_API
                        )}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="relative bottom-7 w-[90px] md:w-[300px] mx-auto">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </CardContent>
    </Card>
  );
}

export { PublicationCard };
