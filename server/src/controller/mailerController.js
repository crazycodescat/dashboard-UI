import nodeMailer from '../utils/nodeMailer.js';

const mailer = async (req, res) => {
  const { email, data, columns } = req.body;
  console.log('hello');
  // HTML content with inline CSS
  const htmlContent = `
   <h1 style="color: green;">Reports Details</h1>
   <table style="width: 100%; border-collapse: collapse;">
     <tr style="background-color: #f2f2f2;">
        ${columns
          .map((column, i) => {
            return `<th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">
              ${column.title}
            </th>`;
          })
          .join('')}
     </tr>
     ${data
       .map((rowData, rowIndex) => {
         return `<tr>
           ${columns
             .map((column, colIndex) => {
               return `<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">
               ${rowData[column.field]}
             </td>`;
             })
             .join('')}
         </tr>`;
       })
       .join('')}
   </table>
`;

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_ID,
    subject: `Reports Data`,
    html: htmlContent,
  };

  try {
    const response = await nodeMailer(mailOptions);
    console.log(response);
    res.send(response);
  } catch (error) {
    res.status(500).send('Error sending email. Please try again later.');
  }
};

export { mailer };
