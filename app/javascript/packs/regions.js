$("#province").hide()
$("#comune").hide()
$.get('https://apis.digital.gob.cl/dpa/regiones').then((data)=>{
    var regions = data;
    $("#query_region_name option").remove();
    regions.forEach((region) => {
      $("#query_region_name").append(
        `<option value="${region['codigo']}">${region["nombre"]}</option>`
      );
    });
})

$("#query_region_name").change(function () {
    $("#comune").hide()
})
