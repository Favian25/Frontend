function calculateShipping() {
    var berat = parseFloat($('#berat').val());
    var kotaAsal = $('#kotaAsal').val();
    var kotaTujuan = $('#kotaTujuan').val();
    var biayaBerat = 0;
    var biayaJarak = 0;

    // Menghitung biaya berat
    if (berat <= 1) {
        biayaBerat = 1500;
    } else if (berat <= 5) {
        biayaBerat = 2500;
    } else if (berat <= 10) {
        biayaBerat = 3500;
    } else {
        biayaBerat = 4500;
    }

    // Menghitung biaya jarak
    var biayaJarakMatrix = {
        'Banyuwangi': {
            'Banyuwangi': 5000,
            'Jember': 7500,
            'Probolinggo': 10000,
            'Surabaya': 15000
        },
        'Jember': {
            'Banyuwangi': 7500,
            'Jember': 5000,
            'Probolinggo': 8500,
            'Surabaya': 12500
        },
        'Probolinggo': {
            'Banyuwangi': 10000,
            'Jember': 8500,
            'Probolinggo': 5000,
            'Surabaya': 6500
        },
        'Surabaya': {
            'Banyuwangi': 15000,
            'Jember': 12500,
            'Probolinggo': 6500,
            'Surabaya': 5000
        }
    };

    biayaJarak = biayaJarakMatrix[kotaAsal][kotaTujuan];

    // Menghitung total biaya
    var totalBiaya = biayaBerat + biayaJarak;
    $('#totalBiaya').val('Rp. ' + totalBiaya);
}