async function getCep(valor) {
  var cep = valor.replace(/\D/g, "");

  if (cep != "") {
    var validaCep = /^[0-9]{8}$/;
    if (validaCep.test(cep)) {
      try {
        const axiosConfig = {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          responseType: "json",
          crossDomain: true,
        };

        const { data } = await axios.get(
          `https://ws.apicep.com/cep/${cep}.json`,
          null,
          axiosConfig
        );

        if (data.status !== 404 && data.status !== 500) {
          setAddressSearchValues(data);
        } else {
          alert("Falha ao encontrar o endereço");
          clearForm();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}

function setAddressSearchValues(values) {
  document.getElementById("city").value = values.city;
  document.getElementById("street").value = values.address;
  document.getElementById("neighborhood").value = values.district;
  document.getElementById("state").value = values.state;
}

function clearForm() {
  document.getElementById("cep").value = "";
  document.getElementById("city").value = "";
  document.getElementById("street").value = "";
  document.getElementById("neighborhood").value = "";
  document.getElementById("state").value = "";
}
