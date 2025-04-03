import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getReport } from '@/services/firebase';
import { getAddressFromCoordinates } from '@/services/nominatim';

const useReport = () => {
  const [report, setReport] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const getReportWithLocation = async (id) => {
    const data = await getReport(id);

    if (!data) return;

    if (data?.lostLocation.length === 2) {
      const [lat, lng] = data.lostLocation;
      data.coordinates = [lat, lng];
      data.lostLocation = await getAddressFromCoordinates(lat, lng);
    } else {
      data.lostLocation = 'Unknown Location';
    }

    if (data?.foundLocation.length === 2) {
      const [lat, lng] = data.foundLocation;
      data.coordinates = [lat, lng];
      data.foundLocation = await getAddressFromCoordinates(lat, lng);
    } else {
      data.foundLocation = 'Unknown Location';
    }

    return data;
  };

  useEffect(() => {
    setLoading(true);
    getReportWithLocation(id).then((data) => {
      setReport(data);
      setLoading(false);
    });
  }, [id]);

  return {
    report,
    loading,
  };
};

export default useReport;
