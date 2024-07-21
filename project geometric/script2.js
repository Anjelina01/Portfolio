function persegi() {
    document.getElementById('kelper').innerHTML=4*(s.value);

    document.getElementById('luasper').innerHTML=(lper.value)*(lper.value);
}
    
function persegipanjang() {
    document.getElementById('kelperpan').innerHTML=(2*p.value)+(2*l.value);

    document.getElementById('luasperpan').innerHTML=(pperpan.value)*(lperpan.value);
}

function segitiga() {
    document.getElementById('kelseg').innerHTML=parseFloat(s1.value)+parseFloat(s2.value)+parseFloat(s3.value);

    document.getElementById('luasseg').innerHTML=0.5*a.value*t.value;
}

function lingkaran() {
    document.getElementById('kelling').innerHTML=3.14*2*parseFloat(jari.value);

    document.getElementById('luasling').innerHTML=3.14*parseFloat(Math.pow(luas.value, 2));
}