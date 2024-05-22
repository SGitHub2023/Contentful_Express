function ContactInfo({ contactInfo }) {
  const { age, phone, eMail, address, city, zipCode, residence } =
    contactInfo.fields;

  return (
    <table className='contact-info-table font-bold'>
      <tbody>
        <tr>
          <td>Age:</td>
          <td>{age}</td>
        </tr>
        <tr>
          <td>Residence:</td>
          <td>{residence}</td>
        </tr>
        <tr>
          <td>Address:</td>
          <td>
            {address}, {zipCode} {city}
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>{eMail}</td>
        </tr>
        <tr>
          <td>Phone:</td>
          <td>{phone}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ContactInfo;
