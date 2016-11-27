// steganography


function newpv(va,vb){
    var answer=va+vb;
    if (va+vb>255) print("error:RGB value cannot be greater than 255"); 
    return answer;
}


function pixchange(pixval,bit){
    var x = Math.floor(pixval/bit) * bit;
    return x;
}
function bitToUse(bit){
    result = Math.pow(2,bit);
    return result;
}

function chop2hide(image,pix){
    bit=bitToUse(pix);
    for(var px of image.values()){
        px.setRed(pixchange(px.getRed(),bit));
        px.setGreen(pixchange(px.getGreen(),bit));
        px.setBlue(pixchange(px.getBlue(),bit));
    }
    return image;
}

  function combine(a,b){
    var n = new SimpleImage (a.getWidth(),a.getHeight());
    for (var pa of a.values()){
        var x = pa.getX();
        var y = pa.getY();
        var pb = b.getPixel (x,y);
        var np = n.getPixel (x,y);
        np.setRed(newpv(pa.getRed(),pb.getRed()));
        np.setGreen(newpv(pa.getGreen(),pb.getGreen()));
        np.setBlue(newpv(pa.getBlue(),pb.getBlue()));
    }
    return n;
}



function shift(im,bit){
    bit=bitToUse(bit);
  var nim = new SimpleImage(im.getWidth(), 
                            im.getHeight());
  for(var px of im.values()){
    var x = px.getX();
    var y = px.getY();
    var npx = nim.getPixel(x,y);
    npx.setRed(Math.floor(px.getRed()/bit));
    npx.setGreen(Math.floor(px.getGreen()/bit));
    npx.setBlue(Math.floor(px.getBlue()/bit));
  }
  return nim;
}
var start = new SimpleImage("smalllion.jpg");
var hide = new SimpleImage("usain.jpg");


bitToHide=6;
start = chop2hide(start,bitToHide);
hide = shift(hide,bitToHide);
var combi=new SimpleImage(start.getWidth(),hide.getHeight());
combi=combine(start,hide);
print(combi);
//print(start);
//print(hide);
//print(hide);
