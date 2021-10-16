function taskService() {
  this.getListApi = function () {
    return axios({
      url: "https://script.googleusercontent.com/macros/echo?user_content_key=GVg2m3JWfUZ_8nQ1OKg6m5osnAsLgxhibTRGLSpBA9W3DsB161W0-L4R3mrdjV5bQuMOEPg0K1q02iSKbm_X_1mT43xEK6J7m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBQk5qSkN5NYgjTd0_gigP4qIc9hOEwG3Ils6Dhd95p7epL6DaCYGrmq6H-3R11rkyvKCVRyJf8RBOOXz6qNAUb8tGRSuxEpuNz9Jw9Md8uu&lib=MQTObe-KHr7UJqH3hMzG3XSm4-IgYx82c",
      method: "GET",
    });
  };
}
var TaskList = new taskService();

TaskList.getListApi()
  .then(function (result) {
    console.log(result.data);
    console.log("da chay cai nay");
    document.getElementById("sinhvien").innerHTML = result.data.sinhvien;
    document.getElementById("todoi").innerHTML = result.data.todoi;
    document.getElementById("canhan").innerHTML = result.data.canhan;
  })
  .catch(function (erro) {
    console.log(erro);
  });
