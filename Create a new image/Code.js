function square(pixel,x,y)
{
    var dx=pixel.getX()-y;
    var dy=pixel.getY()-x;
    return(dy*dx);
}



var image=new SimpleImage(300,300)

for(var pix of image.values())
{
    
if(square(pix,100,100)<50)
{
    pix.setRed(255-4*square(pix,100,100));
    
}
else if(square(pix,100,100)>150)
{
    pix.setGreen(255-7*square(pix,150,150));
    
}
else if(square(pix,100,100)<150)
{
    pix.setRed(255-9*square(pix,200,200));
    pix.setBlue(255);
}
if(Math.random()>0.96)
{
    pix.setRed(255);
    pix.setGreen(255);
}
pix.setBlue(pix.getY()-pix.getX())
}
print(image);