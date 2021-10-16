function taskService() {
  this.getListApi = function () {
    return axios({
      url: "https://script.googleusercontent.com/macros/echo?user_content_key=nt-WvQIXB_zHdsOwr6lucDveIo589DNAiW4_igvYD4levuiMLwSoqHGxx1PXcwWOr7LMfdNq7x_gPo7qXIinsVWJ5KffW8eQm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBQk5qSkN5NYgjTd0_gigP4qIc9hOEwG3Ils6Dhd95p7epL6DaCYGrmq6H-3R11rkyvKCVRyJf8RBOOXz6qNAUb8tGRSuxEpuNz9Jw9Md8uu&lib=MQTObe-KHr7UJqH3hMzG3XSm4-IgYx82c",
      method: "GET",
    });
  };
}
var TaskList = new taskService();

TaskList.getListApi()
  .then(function (result) {
    if (result.data) {
      document.getElementById("sinhvien").innerHTML = result.data.sinhvien;
      document.getElementById("todoi").innerHTML = result.data.todoi;
      document.getElementById("canhan").innerHTML = result.data.canhan;
      window.localStorage.setItem("saveapi", JSON.stringify(result.data));
    }
  })
  .catch(function (erro) {
    console.log(erro);
  });
