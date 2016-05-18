$(document).ready(function(){    
  $.ajax({
          type: 'GET',
          dataType: 'json',          
          url: "http://localhost:8080/RestDiscographyEcommerce/api/admin/album/list",
          beforeSend: function (xhr) {
              xhr.setRequestHeader('Authorization',
                      this.makeBaseAuth("admin", "password"));
          },
          success: function (data, textStatus, jqXHR) {
              $('#imgprova').attr('src',data[1].imagebase64);
              console.log(data);
          },
          error: function (jqXHR, textStatus, errorThrown) {
              alert("Error " + textStatus + ", message:" + errorThrown);
          },
          complete: function () {

          },
          makeBaseAuth: function (user, pswd) {
              var token = user + ':' + pswd;
              var hash = "";
              if (btoa) {
                  hash = btoa(token);
              }
              return "Basic " + hash;
          }
     });    
});