import { useState } from 'react';
import styles from './DonationForm.module.css';
import Button from '@/UI/Button';
import CustomInput from '@/UI/CustomInput';
import useForm from '@/hooks/useForm';

export default function DonationForm() {
  const { formData, formError, handleChange, handleBlur, clearForm } = useForm({
    defaultFormData: {
      email: '',
      name: '',
      selectedAmount: '',
      customAmount: '',
    },
    defaultFormError: {
      email: '',
      name: '',
      selectedAmount: '',
      customAmount: '',
    },
  });

  const [error, setError] = useState('');

  const donationAmounts = [10, 20, 40, 80];

  const handleAmountChange = (e) => {
    handleChange(e);
    handleChange({ target: { name: 'customAmount', value: '' } });
  };

  const handleCustomAmountChange = (e) => {
    handleChange(e);
    handleChange({ target: { name: 'selectedAmount', value: '' } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If no amount is selected or entered, display an error
    if (!formData.selectedAmount && !formData.customAmount) {
      setError('Please select or enter a donation amount.');
      return;
    }

    // Proceed with the donation process
    setError('');
    console.log('Donation Data:', formData);
    // alert(
    //   `You have donated $${formData.selectedAmount || formData.customAmount}`,
    // );
    clearForm();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <CustomInput
        label={'Name'}
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={formError.name}
        required
      />
      <CustomInput
        label={'Email address'}
        type="email"
        name="email"
        id="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={formError.email}
        required
      />

      <h3>Select an Amount:</h3>
      <div className={styles.amountContainer}>
        <div className={styles.amountOptions}>
          {donationAmounts.map((amount) => (
            <div key={amount} className={styles.radioOption}>
              <input
                type="radio"
                id={`donation${amount}`}
                name="selectedAmount"
                value={amount}
                checked={formData.selectedAmount === String(amount)}
                onChange={handleAmountChange}
              />
              <label htmlFor={`donation${amount}`}>${amount}</label>
            </div>
          ))}
        </div>

        <CustomInput
          type="text"
          name="customAmount"
          id="customAmount"
          placeholder="Custom Amount $"
          value={formData.customAmount}
          onChange={handleCustomAmountChange}
          error={formError.customAmount}
        />
      </div>

      {/* Error message */}
      {error && <p className={styles.errorMessage}>{error}</p>}

      <Button className={styles.formSubmit} type="submit">
        Donate
      </Button>
    </form>
  );
}
