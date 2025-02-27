import { Client } from "@petfinder/petfinder-js";
import './AdoptionSection.css';
import { useEffect, useState } from "react";
import AdoptionCard from "../AdoptionCard";

/* const client = new Client({
  apiKey: "AV1FVzdrEyl86i7G3SiXZXEIIqSYjYhbOMFNEqi2xK3D7SGfkM",
  secret: "d2QuDuCW7NlQLYC7cIr26hUkK8kvzU2O1fb2zMox"
}); */

export default function AdoptionSection() {
  const [adoptablePets, setAdoptablePets] = useState(
    [
      {
        "id": 75331709,
        "organization_id": "ON723",
        "url": "https://www.petfinder.com/dog/tate-75331709/on/london/baladi-and-sled-dog-rescue-of-ontario-on723/?referrer_id=668c1118-c7da-4848-a7b6-b12a9bfef6f7&utm_source=api&utm_medium=partnership&utm_content=668c1118-c7da-4848-a7b6-b12a9bfef6f7",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
          "primary": "Mastiff",
          "secondary": null,
          "mixed": true,
          "unknown": false
        },
        "colors": {
          "primary": "Brindle",
          "secondary": "Black",
          "tertiary": null
        },
        "age": "Young",
        "gender": "Male",
        "size": "Large",
        "coat": "Short",
        "attributes": {
          "spayed_neutered": true,
          "house_trained": true,
          "declawed": null,
          "special_needs": false,
          "shots_current": true
        },
        "environment": {
          "children": null,
          "dogs": true,
          "cats": null
        },
        "tags": [
          "Funny",
          "Gentle",
          "Loves",
          "Loyal",
          "Playful",
          "Friendly"
        ],
        "name": "Tate",
        "description": "Tate Available for Adoption \nFostered in London, Ontario\nBorn December 9th 2024\nAdoption fee $700\n\nHi there, I'm Tate –...",
        "organization_animal_id": null,
        "photos": [
          {
            "small": "https://dbw3zep4prcju.cloudfront.net/animal/c0e4fcfc-c2c0-43b4-9a14-bd899af1e4dc/image/c9dd29a7-ee92-4235-b78a-85d7607827f8.jpg?versionId=mH0fZ4IHV6o9ImptKmMoqOs9n0xGt2Vv&bust=1740609802&width=100",
            "medium": "https://dbw3zep4prcju.cloudfront.net/animal/c0e4fcfc-c2c0-43b4-9a14-bd899af1e4dc/image/c9dd29a7-ee92-4235-b78a-85d7607827f8.jpg?versionId=mH0fZ4IHV6o9ImptKmMoqOs9n0xGt2Vv&bust=1740609802&width=300",
            "large": "https://dbw3zep4prcju.cloudfront.net/animal/c0e4fcfc-c2c0-43b4-9a14-bd899af1e4dc/image/c9dd29a7-ee92-4235-b78a-85d7607827f8.jpg?versionId=mH0fZ4IHV6o9ImptKmMoqOs9n0xGt2Vv&bust=1740609802&width=600",
            "full": "https://dbw3zep4prcju.cloudfront.net/animal/c0e4fcfc-c2c0-43b4-9a14-bd899af1e4dc/image/c9dd29a7-ee92-4235-b78a-85d7607827f8.jpg?versionId=mH0fZ4IHV6o9ImptKmMoqOs9n0xGt2Vv&bust=1740609802"
          },
          {
            "small": "https://dbw3zep4prcju.cloudfront.net/animal/c0e4fcfc-c2c0-43b4-9a14-bd899af1e4dc/image/87107406-a94e-4451-9961-54d0230e7802.jpg?versionId=MLSJN2kSPyvZxTTuOOURCW5Rah_rTZ17&bust=1740609802&width=100",
            "medium": "https://dbw3zep4prcju.cloudfront.net/animal/c0e4fcfc-c2c0-43b4-9a14-bd899af1e4dc/image/87107406-a94e-4451-9961-54d0230e7802.jpg?versionId=MLSJN2kSPyvZxTTuOOURCW5Rah_rTZ17&bust=1740609802&width=300",
            "large": "https://dbw3zep4prcju.cloudfront.net/animal/c0e4fcfc-c2c0-43b4-9a14-bd899af1e4dc/image/87107406-a94e-4451-9961-54d0230e7802.jpg?versionId=MLSJN2kSPyvZxTTuOOURCW5Rah_rTZ17&bust=1740609802&width=600",
            "full": "https://dbw3zep4prcju.cloudfront.net/animal/c0e4fcfc-c2c0-43b4-9a14-bd899af1e4dc/image/87107406-a94e-4451-9961-54d0230e7802.jpg?versionId=MLSJN2kSPyvZxTTuOOURCW5Rah_rTZ17&bust=1740609802"
          },
          {
            "small": "https://dbw3zep4prcju.cloudfront.net/animal/c0e4fcfc-c2c0-43b4-9a14-bd899af1e4dc/image/cfc264f9-6465-4936-97e2-b47cd40ea659.jpg?versionId=ITxSn_tb.85m5L9ySoxZPbt_jtB0JmSv&bust=1740609803&width=100",
            "medium": "https://dbw3zep4prcju.cloudfront.net/animal/c0e4fcfc-c2c0-43b4-9a14-bd899af1e4dc/image/cfc264f9-6465-4936-97e2-b47cd40ea659.jpg?versionId=ITxSn_tb.85m5L9ySoxZPbt_jtB0JmSv&bust=1740609803&width=300",
            "large": "https://dbw3zep4prcju.cloudfront.net/animal/c0e4fcfc-c2c0-43b4-9a14-bd899af1e4dc/image/cfc264f9-6465-4936-97e2-b47cd40ea659.jpg?versionId=ITxSn_tb.85m5L9ySoxZPbt_jtB0JmSv&bust=1740609803&width=600",
            "full": "https://dbw3zep4prcju.cloudfront.net/animal/c0e4fcfc-c2c0-43b4-9a14-bd899af1e4dc/image/cfc264f9-6465-4936-97e2-b47cd40ea659.jpg?versionId=ITxSn_tb.85m5L9ySoxZPbt_jtB0JmSv&bust=1740609803"
          }
        ],
        "primary_photo_cropped": {
          "small": "https://dbw3zep4prcju.cloudfront.net/animal/c0e4fcfc-c2c0-43b4-9a14-bd899af1e4dc/image/c9dd29a7-ee92-4235-b78a-85d7607827f8.jpg?versionId=mH0fZ4IHV6o9ImptKmMoqOs9n0xGt2Vv&bust=1740609802&width=300",
          "medium": "https://dbw3zep4prcju.cloudfront.net/animal/c0e4fcfc-c2c0-43b4-9a14-bd899af1e4dc/image/c9dd29a7-ee92-4235-b78a-85d7607827f8.jpg?versionId=mH0fZ4IHV6o9ImptKmMoqOs9n0xGt2Vv&bust=1740609802&width=450",
          "large": "https://dbw3zep4prcju.cloudfront.net/animal/c0e4fcfc-c2c0-43b4-9a14-bd899af1e4dc/image/c9dd29a7-ee92-4235-b78a-85d7607827f8.jpg?versionId=mH0fZ4IHV6o9ImptKmMoqOs9n0xGt2Vv&bust=1740609802&width=600",
          "full": "https://dbw3zep4prcju.cloudfront.net/animal/c0e4fcfc-c2c0-43b4-9a14-bd899af1e4dc/image/c9dd29a7-ee92-4235-b78a-85d7607827f8.jpg?versionId=mH0fZ4IHV6o9ImptKmMoqOs9n0xGt2Vv&bust=1740609802"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2025-02-26T22:45:27+0000",
        "published_at": "2025-02-26T22:45:26+0000",
        "distance": 2.7065,
        "contact": {
          "email": "baladidogrescueofontario@gmail.com",
          "phone": null,
          "address": {
            "address1": null,
            "address2": null,
            "city": "London",
            "state": "ON",
            "postcode": "N5V 2E3",
            "country": "CA"
          }
        },
        "_links": {
          "self": {
            "href": "/v2/animals/75331709"
          },
          "type": {
            "href": "/v2/types/dog"
          },
          "organization": {
            "href": "/v2/organizations/on723"
          }
        }
      },
      {
        "id": 75331649,
        "organization_id": "ON723",
        "url": "https://www.petfinder.com/dog/rip-75331649/on/london/baladi-and-sled-dog-rescue-of-ontario-on723/?referrer_id=668c1118-c7da-4848-a7b6-b12a9bfef6f7&utm_source=api&utm_medium=partnership&utm_content=668c1118-c7da-4848-a7b6-b12a9bfef6f7",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
          "primary": "Mastiff",
          "secondary": null,
          "mixed": true,
          "unknown": false
        },
        "colors": {
          "primary": "Brindle",
          "secondary": "Black",
          "tertiary": null
        },
        "age": "Young",
        "gender": "Male",
        "size": "Large",
        "coat": "Short",
        "attributes": {
          "spayed_neutered": true,
          "house_trained": true,
          "declawed": null,
          "special_needs": false,
          "shots_current": true
        },
        "environment": {
          "children": true,
          "dogs": true,
          "cats": null
        },
        "tags": [
          "Gentle",
          "Quiet",
          "Independent",
          "Loyal",
          "Playful",
          "Friendly",
          "Curious"
        ],
        "name": "Rip",
        "description": "Rip\nAvailable for Adoption \nBorn December 9th 2024\nFostered in London, Ontario\nAdoption fee $700\n\nHey everyone! I’m Rip –...",
        "organization_animal_id": null,
        "photos": [
          {
            "small": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/6de1f861-3f0d-4fb3-a8b0-bc5c28c43892.jpg?versionId=aG.hVdF_ffQOZlfrSaRxPJYsU0CFCjwD&bust=1740609589&width=100",
            "medium": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/6de1f861-3f0d-4fb3-a8b0-bc5c28c43892.jpg?versionId=aG.hVdF_ffQOZlfrSaRxPJYsU0CFCjwD&bust=1740609589&width=300",
            "large": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/6de1f861-3f0d-4fb3-a8b0-bc5c28c43892.jpg?versionId=aG.hVdF_ffQOZlfrSaRxPJYsU0CFCjwD&bust=1740609589&width=600",
            "full": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/6de1f861-3f0d-4fb3-a8b0-bc5c28c43892.jpg?versionId=aG.hVdF_ffQOZlfrSaRxPJYsU0CFCjwD&bust=1740609589"
          },
          {
            "small": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/fd1d5738-c809-4715-b8bc-ae283def3fdd.jpg?versionId=N8UdG.6gGLkF0dDtKi9lBxtiT_8ZjRzQ&bust=1740609597&width=100",
            "medium": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/fd1d5738-c809-4715-b8bc-ae283def3fdd.jpg?versionId=N8UdG.6gGLkF0dDtKi9lBxtiT_8ZjRzQ&bust=1740609597&width=300",
            "large": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/fd1d5738-c809-4715-b8bc-ae283def3fdd.jpg?versionId=N8UdG.6gGLkF0dDtKi9lBxtiT_8ZjRzQ&bust=1740609597&width=600",
            "full": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/fd1d5738-c809-4715-b8bc-ae283def3fdd.jpg?versionId=N8UdG.6gGLkF0dDtKi9lBxtiT_8ZjRzQ&bust=1740609597"
          },
          {
            "small": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/d30a7eb4-b89b-497d-84b4-648ef1f1a705.jpg?versionId=wpVpJ1eekTJJVt9B2f_ITYrdTJVFlkmq&bust=1740609598&width=100",
            "medium": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/d30a7eb4-b89b-497d-84b4-648ef1f1a705.jpg?versionId=wpVpJ1eekTJJVt9B2f_ITYrdTJVFlkmq&bust=1740609598&width=300",
            "large": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/d30a7eb4-b89b-497d-84b4-648ef1f1a705.jpg?versionId=wpVpJ1eekTJJVt9B2f_ITYrdTJVFlkmq&bust=1740609598&width=600",
            "full": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/d30a7eb4-b89b-497d-84b4-648ef1f1a705.jpg?versionId=wpVpJ1eekTJJVt9B2f_ITYrdTJVFlkmq&bust=1740609598"
          },
          {
            "small": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/1f728a04-0618-4324-b520-c1a8bc24c1de.jpg?versionId=6lc13oPOHJvufiMHC.ZqvJ7WdP5rHbSv&bust=1740609598&width=100",
            "medium": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/1f728a04-0618-4324-b520-c1a8bc24c1de.jpg?versionId=6lc13oPOHJvufiMHC.ZqvJ7WdP5rHbSv&bust=1740609598&width=300",
            "large": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/1f728a04-0618-4324-b520-c1a8bc24c1de.jpg?versionId=6lc13oPOHJvufiMHC.ZqvJ7WdP5rHbSv&bust=1740609598&width=600",
            "full": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/1f728a04-0618-4324-b520-c1a8bc24c1de.jpg?versionId=6lc13oPOHJvufiMHC.ZqvJ7WdP5rHbSv&bust=1740609598"
          }
        ],
        "primary_photo_cropped": {
          "small": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/6de1f861-3f0d-4fb3-a8b0-bc5c28c43892.jpg?versionId=aG.hVdF_ffQOZlfrSaRxPJYsU0CFCjwD&bust=1740609589&width=300",
          "medium": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/6de1f861-3f0d-4fb3-a8b0-bc5c28c43892.jpg?versionId=aG.hVdF_ffQOZlfrSaRxPJYsU0CFCjwD&bust=1740609589&width=450",
          "large": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/6de1f861-3f0d-4fb3-a8b0-bc5c28c43892.jpg?versionId=aG.hVdF_ffQOZlfrSaRxPJYsU0CFCjwD&bust=1740609589&width=600",
          "full": "https://dbw3zep4prcju.cloudfront.net/animal/cb675cc9-ab18-4a43-a0ae-961c125cf35a/image/6de1f861-3f0d-4fb3-a8b0-bc5c28c43892.jpg?versionId=aG.hVdF_ffQOZlfrSaRxPJYsU0CFCjwD&bust=1740609589"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2025-02-26T22:42:41+0000",
        "published_at": "2025-02-26T22:42:40+0000",
        "distance": 2.7065,
        "contact": {
          "email": "baladidogrescueofontario@gmail.com",
          "phone": null,
          "address": {
            "address1": null,
            "address2": null,
            "city": "London",
            "state": "ON",
            "postcode": "N5V 2E3",
            "country": "CA"
          }
        },
        "_links": {
          "self": {
            "href": "/v2/animals/75331649"
          },
          "type": {
            "href": "/v2/types/dog"
          },
          "organization": {
            "href": "/v2/organizations/on723"
          }
        }
      },
      {
        "id": 75331690,
        "organization_id": "MI906",
        "url": "https://www.petfinder.com/cat/marco-75331690/mi/rochester-hills/michigan-humane-premier-pet-supply-rochester-hills-mi906/?referrer_id=668c1118-c7da-4848-a7b6-b12a9bfef6f7&utm_source=api&utm_medium=partnership&utm_content=668c1118-c7da-4848-a7b6-b12a9bfef6f7",
        "type": "Cat",
        "species": "Cat",
        "breeds": {
          "primary": "Domestic Short Hair",
          "secondary": null,
          "mixed": false,
          "unknown": false
        },
        "colors": {
          "primary": null,
          "secondary": null,
          "tertiary": null
        },
        "age": "Young",
        "gender": "Male",
        "size": "Medium",
        "coat": null,
        "attributes": {
          "spayed_neutered": true,
          "house_trained": true,
          "declawed": false,
          "special_needs": false,
          "shots_current": false
        },
        "environment": {
          "children": null,
          "dogs": null,
          "cats": null
        },
        "tags": [],
        "name": "Marco",
        "description": "Meet Marco, a young feline full of charm and charisma. His sweetness is undeniable, always ready to share a purr...",
        "organization_animal_id": "57877495",
        "photos": [
          {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75331690/1/?bust=1740609727&width=100",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75331690/1/?bust=1740609727&width=300",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75331690/1/?bust=1740609727&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75331690/1/?bust=1740609727"
          },
          {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75331690/2/?bust=1740609727&width=100",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75331690/2/?bust=1740609727&width=300",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75331690/2/?bust=1740609727&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75331690/2/?bust=1740609727"
          },
          {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75331690/3/?bust=1740609730&width=100",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75331690/3/?bust=1740609730&width=300",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75331690/3/?bust=1740609730&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75331690/3/?bust=1740609730"
          }
        ],
        "primary_photo_cropped": {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75331690/1/?bust=1740609727&width=300",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75331690/1/?bust=1740609727&width=450",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75331690/1/?bust=1740609727&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75331690/1/?bust=1740609727"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2025-02-26T22:40:36+0000",
        "published_at": "2025-02-26T22:40:34+0000",
        "distance": 99.2548,
        "contact": {
          "email": null,
          "phone": "(866) 648-6263",
          "address": {
            "address1": null,
            "address2": null,
            "city": "Rochester Hills",
            "state": "MI",
            "postcode": "48307",
            "country": "US"
          }
        },
        "_links": {
          "self": {
            "href": "/v2/animals/75331690"
          },
          "type": {
            "href": "/v2/types/cat"
          },
          "organization": {
            "href": "/v2/organizations/mi906"
          }
        }
      }
    ]
  );
  const [adoptionCards, setAdoptionCards] = useState([]);
  /* client.animal.search({
    location: 'London, ON',
    limit: 3,
    distance: 25,
  }).then((response) => {
    let tempAdoptablePets = [];
    response.data.animals.forEach(animal => {
      tempAdoptablePets.push(animal)
    });
    console.log(tempAdoptablePets)
    setAdoptablePets(tempAdoptablePets);
  }); */
  useEffect(() => {
    let tempAdoptionCards = [];
    adoptablePets.forEach((animal) => {
      tempAdoptionCards.push(<AdoptionCard animal={animal} />)
    })
    setAdoptionCards(tempAdoptionCards)
  }, [adoptablePets])
  return (
    <section className="adoptionSection">
      <h2>Helping Pets Find Their Forever Home</h2>
      <p className="blurb">
        At Lostails, we work with shelters to help pets find loving homes. While reuniting lost pets with their families, we also introduce adorable adoptable animals—you might just find a new best friend! Together, we’re creating new beginnings, one wag, purr, and happy reunion at a time!
      </p>
      <div className="exampleCards">
        {adoptionCards}
      </div>
    </section>
  );
}
