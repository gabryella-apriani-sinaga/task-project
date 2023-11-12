function FilterDenom(data) {
  const billdetails = data.data.response.billdetails;
  const filteredDenom = [];

  billdetails.forEach((item) => {
    const denomValue = parseInt(item.body[0].split("DENOM    : ")[1]);

    if (denomValue >= 100000) {
      filteredDenom.push(denomValue);
    }
  });

  const resultWithIndex = filteredDenom.reduce((acc, denom) => {
    const index = acc.length;
    acc[index] = denom;
    return acc;
  }, []);

  return resultWithIndex;
}

function AllFilterDenom(data) {
  const billdetails = data.data.response.billdetails;
  const filteredDenom = [];

  billdetails.forEach((item) => {
    const denomValue = parseInt(item.body[0].split("DENOM    : ")[1]);

    filteredDenom.push(denomValue);
  });

  const resultWithIndex = filteredDenom.reduce((acc, denom) => {
    const index = acc.length;
    acc[index] = denom;
    return acc;
  }, []);

  return resultWithIndex;
}

function FilterPage() {
  const data =
    // Objek data yang diberikan
    // (Sisipkan objek data di sini)
    {
      status: 1,
      message: "Sukses",
      data: {
        system_message: "SUCCESS",
        response: {
          additionaldata: [],
          billdetails: [
            {
              adminfee: "0.0",
              billid: "8",
              currency: "360",
              title: "TELKOMSEL 50rb - 50.149",
              totalamount: "50149.00",
              description: null,
              body: ["DENOM    : 50000"],
            },

            {
              adminfee: "0.0",
              billid: "9",
              currency: "360",
              title: "TELKOMSEL 75rb - 74.050",
              totalamount: "74050.00",
              description: null,
              body: ["DENOM    : 75000"],
            },
            {
              adminfee: "0.0",
              billid: "10",
              currency: "360",
              title: "TELKOMSEL 100rb - 98.264",
              totalamount: "98264.00",
              description: null,
              body: ["DENOM    : 100000"],
            },
            {
              adminfee: "0.0",
              billid: "11",
              currency: "360",
              title: "TELKOMSEL 150rb - 146.600",
              totalamount: "146600.00",
              description: null,
              body: ["DENOM    : 150000"],
            },
            {
              adminfee: "0.0",
              billid: "12",
              currency: "360",
              title: "TELKOMSEL 200rb - 194.900",
              totalamount: "194900.00",
              description: null,
              body: ["DENOM    : 200000"],
            },
          ],
          billername: "PULSA TSEL",
          inquiryid: "27190993",
          paymenttype: "CLOSE_PAYMENT",
          responsecode: "0000",
          responsemsg: "SUCCESS",
          subscribeid: "081311529594",
          subscribername: "",
        },
        trace: {
          sesion_id: "81215AEFADFB71OC1258F79ABA1!D710.node3",
          request_Date_time: "20190704185319",
          words: "779bFADFB71OC1258F7",
          biller_id: "99000002",
          account_number: "081311529594",
          systrace: "1564026334",
          inquiry_id: "27190993",
        },
      },
    };

  const filteredDenom = FilterDenom(data);
  const AllFilter = AllFilterDenom(data);

  return (
    <div className="text-center">
      <div className="bg-[#79AC78] p-5  gap-8 mb-3">
        <h3 className="text-white font-bold text-xl text-center">
          Filter Page
        </h3>
      </div>
      <h1>Hasil Sebelum Filter Denom</h1>
      <ul className="mb-6">
        {AllFilter.map((denom, index) => (
          <li key={index}>{denom}</li>
        ))}
      </ul>

      <h1>Hasil Filter Denom</h1>
      <ul>
        {filteredDenom.map((denom, index) => (
          <li key={index}>{denom}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterPage;
