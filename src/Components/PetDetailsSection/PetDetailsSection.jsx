import { Link } from 'react-router';
import Container from '@/UI/Container';
import styles from './PetDetailsSection.module.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import PetNotFoundAnimation from '@/assets/lottie/petnotfound-animation.json';
import useReport from '@/hooks/useReport';
import PetMap from '../PetMap/PetMap';
import { useState } from 'react';
import { Input, Modal } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import Button from '@/UI/Button';

export default function PetDetailsSection() {
  const { report } = useReport();
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  if (!report) {
    return (
      <Container className={styles.notFoundContainer}>
        <h2>Sorry, Pet not found.</h2>
        <DotLottieReact
          data={PetNotFoundAnimation}
          loop
          autoplay
          className={styles.PetNotFoundAnimation}
        />
      </Container>
    );
  }

  const {
    name,
    picture,
    status,
    date,
    email,
    breed,
    species,
    gender,
    color,
    size,
    lostLocation,
    foundLocation,
  } = report;

  const subject = encodeURIComponent(`Regarding your ${status} pet "${name}"`);
  const body = encodeURIComponent(`
    Hi there,\n
    I came across your ${status} pet report for "${name}" on Lost Tails. Date Report on ${date}\n
    Last known location: ${lostLocation || 'Not specified'}
    ${customMessage}\n
    Best Regards,\n
    ${senderName}
  `);

  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <div className={styles.container}>
      <Link to="/lost-found" className={styles.goBackBtn}>
        &larr; Go Back
      </Link>
      <Container className={styles.detailsContainer}>
        <div className={styles.header}>
          <div className={styles.imageWrapper}>
            <img src={picture} alt={name} className={styles.petImage} />
            <span className={`${styles.tag} ${styles[status]}`}>{status}</span>
          </div>
          {report.coordinates?.length === 2 && (
            <div className={styles.map}>
              <PetMap
                lat={report.coordinates[0]}
                lng={report.coordinates[1]}
                petName={report.name}
                onPopupClick={() => setIsMapOpen(true)}
              />
            </div>
          )}
        </div>
        <div className={styles.card}>
          <div className={styles.details}>
            <h2>{name || 'Unknown'}</h2>
            <p>
              <strong>Date Report:</strong>
              <br />
              {date || 'Unknown'}
            </p>
            <p>
              <strong>Email Contact:</strong>
              <br />
              {email ? (
                <button
                  onClick={() => setIsContactOpen(true)}
                  className={styles.emailBtn}
                >
                  Contact Owner
                </button>
              ) : (
                'Unknown'
              )}
            </p>
            <p>
              <strong>Breed:</strong>
              <br />
              {breed || 'Unknown'}
            </p>
            <p>
              <strong>Species:</strong>
              <br />
              {species}
            </p>
            <p>
              <strong>Gender:</strong>
              <br />
              {gender}
            </p>
            <p>
              <strong>Color:</strong>
              <br />
              {color}
            </p>
            <p>
              <strong>Size:</strong> <br />
              {size}
            </p>
            <p>
              <strong>Last Location:</strong>
              <br /> {lostLocation}
            </p>
            <p>
              <strong>Found Location:</strong>
              <br /> {foundLocation}
            </p>
            <Modal
              open={isContactOpen}
              onCancel={() => setIsContactOpen(false)}
              title={`Contact owner of "${name}"`}
              className={styles.contactModal}
              footer={() => (
                <div className={styles.modalFooter}>
                  <Button
                    onClick={() => setIsContactOpen(false)}
                    variant="outline"
                    className={styles.modalBtn}
                  >
                    Cancel
                  </Button>
                  <a href={mailtoLink}>
                    <Button className={styles.modalBtn}>
                      <MailOutlined /> Send Email
                    </Button>
                  </a>
                </div>
              )}
            >
              <div className={styles.emailForm}>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                />
                <Input.TextArea
                  placeholder="Write your message..."
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  rows="4"
                />
              </div>
            </Modal>
          </div>
        </div>
      </Container>
      {report?.coordinates?.length === 2 && (
        <Modal
          open={isMapOpen}
          onCancel={() => setIsMapOpen(false)}
          footer={null}
          centered
          width="80%"
          className={styles.antModal}
        >
          <PetMap
            lat={report.coordinates[0]}
            lng={report.coordinates[1]}
            petName={report.name}
          />
        </Modal>
      )}
    </div>
  );
}
