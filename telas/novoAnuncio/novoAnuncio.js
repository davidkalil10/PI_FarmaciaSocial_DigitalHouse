/*  ==========================================
    SHOW UPLOADED IMAGE
* ========================================== */
function readURLFront(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#imageResultFront')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function readURLBack(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#imageResultBack')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// $(function() {
//     $('#upload').on('change', function() {
//         readURL(input);
//     });
// });

/*  ==========================================
    SHOW UPLOADED IMAGE NAME
* ========================================== */
var inputFront = document.getElementById('upload-front');
var infoAreaFront = document.getElementById('upload-front-label');

var inputBack = document.getElementById('upload-back');
var infoAreaBack = document.getElementById('upload-back-label');

inputFront.addEventListener('change', showFileNameFront);
inputBack.addEventListener('change', showFileNameBack);

function showFileNameFront(event) {
    var input = event.srcElement;
    var fileName = input.files[0].name;
    infoAreaFront.textContent = 'Nome do arquivo: ' + fileName;
}

function showFileNameBack(event) {
    var input = event.srcElement;
    var fileName = input.files[0].name;
    infoAreaBack.textContent = 'Nome do arquivo: ' + fileName;
}