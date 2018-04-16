$("#clickbtn").click(function() {
  text = $('#genedata').val();
  jsn = JSON.parse(text);
  total_sz = jsn.phage[1].size;
  $("#map").css("width", total_sz + "px")
  $("#name").html(jsn.phage[1].organism)
  $("#size").html(total_sz + "bp")

  lengthe = Object.keys(jsn.genes).length + 1;
  for (i = 2; i <= lengthe; i++) {
    var obj = document.createElement('div');
    var id = jsn.genes[i].locus_tag;
    var prod = jsn.genes[i].product;
    var size = jsn.genes[i].location_end - jsn.genes[i].location_start + "px";
    var offset = jsn.genes[i].location_start + "px";
    obj.id = id;

    $("#map").append(obj);
    $("#" + id).addClass("gene")
    $("#" + id).css("width", size)
    $("#" + id).html("<p>" + id + "</p>" + "<br>" + "<p>" + prod + "</p>" + "<p>" + jsn.genes[i].location_start + "-" + jsn.genes[i].location_end + "</p>")
    $("#" + id).css("left", offset)
  }
});
