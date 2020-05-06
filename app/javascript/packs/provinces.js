$("#query_region_name").change(function () {
    $("#province").show()
    var region_id = $("#query_region_name").val()
    $.get(`https://apis.digital.gob.cl/dpa/regiones/${region_id}/provincias`).then((data)=>{
    var provinces = data;
    $("#query_privince_name option").remove();
    provinces.forEach((province) => {
      $("#query_privince_name").append(
        `<option value="${province['codigo']}">${province["nombre"]}</option>`
      );
    });
})
  });