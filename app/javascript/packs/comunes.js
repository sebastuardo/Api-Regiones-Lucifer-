$("#query_privince_name").change(function () {
    $("#comune").show()

    var region_id = $("#query_region_name").val()
    var province_id = $("#query_privince_name").val()

    $.get(`https://apis.digital.gob.cl/dpa/regiones/${region_id}/provincias/${province_id}/comunas`).then((data)=>{
    var comunes = data;
    $("#query_comune_name option").remove();
    comunes.forEach((comune) => {
      $("#query_comune_name").append(
        `<option value="${comune['codigo']}">${comune["nombre"]}</option>`
      );
    });
})
  });