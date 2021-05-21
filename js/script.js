function getSelectValue()
{
    var selectedValue = document.getElementById("list").value;
    console.log(selectedValue)
    if (selectedValue=="en") {
        document.getElementsByClassName("input").oninput = 'encode()'
    } else {
        document.getElementsByClassName("input").oninput = 'encode()'
    }
}
function update(){
    var selectedValue = document.getElementById("list").value;
    if (selectedValue=="en") {
        encode(document.getElementById("input").value)
    } else {
        decode(document.getElementById("input").value)
    }
}
function decode(a1){
    var p = a1
   var s = ""
		var p = p.replace(/\//g,' ')
		var p = p.split(" ").slice(0);
		var p = p.slice(0);

		var a = ['1','245','16','13','12','124','2356','14','136','123','1234','134','23','234','15','135','125','1245','145','1246','236','1235','12345','1345','235','2345','156','1346','1356','2346','1256','12456','1456','=34','=3','=35','=346','=345','=36','=123','=56','=3456','=236','=145','=136','=245','2456-234','2456-1','2456-13','2456-12','2456-124','2456-14','2456-123','2456-1234','2456-134','2456-23','=256','=456','/'];
		var b = ['a','ă','â','b','c','d','đ','e','ê','f','g','h','i','j','k','l','m','n','o','ô','ơ','p','q','r','s','t','u','ư','v','w','x','y','z',':',',',';','.','!','?','+','-','=','<','>','(',')','0','1','2','3','4','5','6','7','8','9','"','"',' '];
		var c = ['A','Ă','Â','B','C','D','Đ','E','Ê','F','G','H','I','J','K','L','M','N','O','Ô','Ơ','P','Q','R','S','T','U','Ư','V','W','X','Y','Z',':',',',';','.','!','?','+','-','=','<','>','(',')','0','1','2','3','4','5','6','7','8','9','"','"',' '];

		for (i=0;i<p.length;i++){
			p[i] = p[i].replace(/\./g,' ')
			p[i] = p[i].split(" ").slice(0);
			p[i] = p[i].slice(0);
		}
		function kiemtra(cnt){
		for (i3=0;i3<a.length;i3++){
				if(cnt==a[i3]) {
					s=s+b[i3];
				}
			}
		}

		for (i1=0;i1<p.length;i1++){
			for (i2=0;i2<p[i1].length;i2++){
				kiemtra(p[i1][i2])
			}
			s=s+" "
		}
    s=s.slice(0,s.length-1)
    document.getElementById("output").innerHTML = s;
}
function encode(a2){
    var p = a2
    var s = ""
    var a = ['1','245','16','13','12','124','2356','14','136','123','1234','134','23','234','15','135','125','1245','145','1246','236','1235','12345','1345','235','2345','156','1346','1356','2346','1256','12456','1456','=34','=3','=35','=346','=345','=36','=123','=56','=3456','=236','=145','=136','=245','2456-234','2456-1','2456-13','2456-12','2456-124','2456-14','2456-123','2456-1234','2456-134','2456-23','=256','=456','/'];
    var b = ['a','ă','â','b','c','d','đ','e','ê','f','g','h','i','j','k','l','m','n','o','ô','ơ','p','q','r','s','t','u','ư','v','w','x','y','z',':',',',';','.','!','?','+','-','=','<','>','(',')','0','1','2','3','4','5','6','7','8','9','"','"',' '];
    var c = ['A','Ă','Â','B','C','D','Đ','E','Ê','F','G','H','I','J','K','L','M','N','O','Ô','Ơ','P','Q','R','S','T','U','Ư','V','W','X','Y','Z',':',',',';','.','!','?','+','-','=','<','>','(',')','0','1','2','3','4','5','6','7','8','9','"','"',' '];

    for (i=0;i<p.length;i++){
         for (i2=0;i2<b.length;i2++){
                   if(p[i] == b[i2]) {
                       s=s+a[i2];
                       if(p[i] !=" " && p[i+1] !=" ") s=s+"."
                   } 
             }
    }

    s=s.slice(0,s.length-1)
    document.getElementById("output").innerHTML = s;
}
function myFunction() {
    var copyText = document.getElementById("output");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied"
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}