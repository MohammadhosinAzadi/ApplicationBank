import validator from 'validator';

export function validatePhone(phone: string): string | true {
    phone = phone.trim();
    if (!phone.startsWith('09')) {
        return "Phone number must start with 09.";
    }
    if (!validator.isLength(phone, { min: 11, max: 11 })) {
        return 'The phone number must be exactly 11 digits long';
    }
    if (!/^\d+$/.test(phone)) {
        return 'Phone number must contain only digits (0-9).';
    }
    return true;
}
