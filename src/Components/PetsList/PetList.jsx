import { useState } from 'react';
import Pet from '@/Components/Pet';
import './PetList.css';
import { dummyReports } from './mockData';
import PetsFilter from '@/Components/PetsFilter';

export default function PetList() {
  const [list, setList] = useState(dummyReports);

  const resetData = () => setList(dummyReports);

  return (
    <section className="pets-list">
      <div className="container-responsive pets-list-container">
        <PetsFilter data={list} setter={setList} resetData={resetData} />
        <div className="pets-list-grid">
          {!!list.length &&
            list.map(({ id, picture, name, breed, gender, status }) => (
              <Pet
                key={id}
                picture={picture}
                name={name}
                breed={breed}
                gender={gender}
                status={status}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
