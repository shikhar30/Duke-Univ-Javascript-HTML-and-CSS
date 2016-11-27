function pixelnearby(image,a,b,g)
{
    var dx=Math.random()*g;
    var dy=Math.random()*g;
    
    return image.getPixel(dx,dy);
}
var image=new SimpleImage("smalllion.jpg");
var output=new SimpleImage(image.getWidth(),image.getHeight());
for(var pixel of image.values())
{
    var x=pixel.getX();
    var y=pixel.getY();
    if(Math.random()>0.8)
    {
        var out=pixelnearby(image,x,y,10);
    if(y<5||y>image.getHeight-5)
    {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
    output.setPixel(x,y,out);
        
    }
    else{
        if(x<5||x>image.getWidth-5)
        {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
        }
        output.setPixel(x,y,pixel);
    }
}
print(output);