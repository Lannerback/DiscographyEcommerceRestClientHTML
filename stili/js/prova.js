$(document).ready(function(){    
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'http://admin:password@localhost:8080/RestDiscographyEcommerce/api/admin/album/list',
    success: function (data, textStatus, jqXHR){                             
        $('#imgprova').attr('src',data[1].imagebase64);
    },
    error: function (jqXHR, textStatus, errorThrown) {
        alert("Error " + textStatus + ", message:" + errorThrown);
    },
    complete: function () {
    }
  });
});