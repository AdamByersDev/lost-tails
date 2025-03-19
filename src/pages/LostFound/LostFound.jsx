import PetList from '@/Components/PetsList';
import PetDetailsSection from '@/Components/PetDetailsSection';
import { useParams } from 'react-router';

export default function LostFound() {
  const { id } = useParams();

  return <main>{!id ? <PetList /> : <PetDetailsSection />}</main>;
}
