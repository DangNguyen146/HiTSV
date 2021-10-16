function taskService() {
  this.getListApi = function () {
    return axios({
      url: "https://sheet.best/api/sheets/5540ef73-f8fc-448d-8e49-26847887dbd4",
      method: "GET",
    });
  };
}
var TaskList = new taskService();

TaskList.getListApi()
  .then(function (result) {
    // console.log(result.data[0]);
    console.log("da chay cai nay");
    document.getElementById("sinhvien").innerHTML = result.data[0].sinhvien;
    document.getElementById("todoi").innerHTML = result.data[0].todoi;
    document.getElementById("canhan").innerHTML = result.data[0].canhan;
  })
  .catch(function (erro) {
    console.log(erro);
  });
