import { Pet } from "@/types/types";
import { PublicationCard } from "./PublicationCard";
import { ModalAddPublication } from "./ModalAddPublication";

interface Props {
  pets: Pet[];
}

function PublicationsSection({ pets }: Props) {
  return (
    <div className="flex flex-col gap-2" >
      <ModalAddPublication />
      <div className="flex flex-col gap-20 w-full">
        {pets.map((pet) => (
          <PublicationCard key={`pet_card_${pet.id}`} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export { PublicationsSection };
