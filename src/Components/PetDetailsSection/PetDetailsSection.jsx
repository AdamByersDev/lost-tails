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
import { useParams } from 'react-router';
import QRCode from 'qrcode';
import logo from '@/assets/images/icon.png';
import {
  Document,
  Page,
  pdf,
  StyleSheet,
  Text,
  Image,
  View,
} from '@react-pdf/renderer';

export default function PetDetailsSection() {
  const { report, loading } = useReport();
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const { id } = useParams();

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

  const printFlyer = async () => {
    const qrCode = QRCode.toDataURL(
      `https://adambyersdev.github.io/lost-tails/lost-found/${id}`,
    );

    console.log(status);

    const flyerStyles = StyleSheet.create({
      page: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Helvetica',
        position: 'absolute',
        padding: '1in',
      },
      title: {
        fontSize: 64,
        color: '#333',
        fontWeight: 700,
        paddingBottom: '.25in',
      },
      link: {
        flexDirection: 'row',
        height: '2in',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      linkText: {
        flex: 1,
        textAlign: 'center',
      },
      linkURL: {
        fontWeight: 700,
      },
      qr: {
        flexShrink: 0,
        aspectRatio: '1/1',
      },
      image: {
        height: '5in',
        width: '100%',
        objectFit: 'contain',
      },
      watermarkWrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        fontSize: 12,
        height: '0.25in',
      },
    });

    const Flyer = () => (
      <Document>
        <Page size="LETTER" style={flyerStyles.page}>
          <Text style={flyerStyles.title}>LOST PET</Text>
          <Image src={picture} style={flyerStyles.image} />
          <View style={flyerStyles.link}>
            <View style={flyerStyles.linkText}>
              <Text wrap={true}>
                {status?.toLowerCase() == 'lost'
                  ? `This is ${name || 'our pet'}, we cannot find ${gender?.toLowerCase() === 'male' ? 'him' : gender?.toLowerCase() === 'female' ? 'her' : 'them'} and we need your help. If you find ${name || 'this pet'}, please let me know by either scanning the QR code or by going to`
                  : `I found this pet${name && `, ${name},`} and am hoping to find ${gender?.toLowerCase() === 'male' ? 'his' : gender?.toLowerCase() === 'female' ? 'her' : 'their'} owner. If you know ${name || 'this pet'}'s owner, please let me know by either scanning the QR code or by going to`}
              </Text>
              <Text style={flyerStyles.linkURL} wrap={false}>
                github.com/AdamByersDev/lost-tails/
              </Text>
            </View>
            <Image src={qrCode} style={flyerStyles.qr} />
          </View>
          <View style={flyerStyles.watermarkWrapper}>
            <Image src={logo} />
            <Text>Flyer generated with Lostails</Text>
          </View>
        </Page>
      </Document>
    );

    const final = pdf(<Flyer />);

    final.toBlob().then((blob) => {
      window.open(URL.createObjectURL(blob), '_blank');
    });
  };

  return (
    <div className={styles.container}>
      <Link to="/lost-found" className={styles.goBackBtn}>
        &larr; Go Back
      </Link>
      {loading ? (
        <div className={styles.loadingAnimation}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <Container className={styles.detailsContainer}>
          <div className={styles.header}>
            <div className={styles.imageWrapper}>
              <img src={picture} alt={name} className={styles.petImage} />
              <span className={`${styles.tag} ${styles[status]}`}>
                {status}
              </span>
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
            {!(loading || status?.toLowerCase() == 'complete') && (
              <Button className={styles.flyerBtn} onClick={printFlyer}>
                Print Flyer
              </Button>
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
      )}
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
